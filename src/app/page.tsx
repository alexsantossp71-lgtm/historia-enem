import { db } from '@/lib/db';
import CourseClient from '@/components/CourseClient';

export const dynamic = 'force-dynamic';

export default async function CoursePage() {
  // Fetch modules with lessons
  const modules = await db.module.findMany({
    orderBy: { order: 'asc' },
    include: {
      lessons: {
        orderBy: { order: 'asc' },
        include: {
          quiz: { include: { _count: { select: { questions: true } } } }
        }
      }
    }
  });

  // Fetch ENEM questions
  const enemQuestions = await db.enemQuestion.findMany({
    select: {
      id: true,
      year: true,
      topic: true,
      question: true,
      options: true,
      answer: true,
      explanation: true,
    }
  });

  // Calculate stats
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  // Progress is loaded from local storage on client side
  const completedLessons = 0;
  const overallProgress = 0;
  const totalDuration = modules.reduce((acc, m) => acc + m.lessons.reduce((a, l) => a + l.duration, 0), 0);
  const totalQuizzes = modules.reduce((acc, m) => acc + m.lessons.filter(l => l.quiz).length, 0);

  // Serialize data for client component
  const serializedModules = modules.map(m => ({
    ...m,
    lessons: m.lessons.map(l => ({
      ...l,
      progress: [], // Progress is loaded from local storage on client side
      quiz: l.quiz ? { id: l.quiz.id, _count: { questions: l.quiz._count?.questions || 0 } } : null
    }))
  }));

  const serializedEnemQuestions = enemQuestions.map(q => ({
    id: q.id,
    year: q.year,
    topic: q.topic,
    question: q.question,
    options: JSON.parse(q.options as string),
    correctIndex: q.answer,
    explanation: q.explanation
  }));

  return (
    <CourseClient
      modules={serializedModules}
      totalLessons={totalLessons}
      completedLessons={completedLessons}
      overallProgress={overallProgress}
      totalDuration={totalDuration}
      totalQuizzes={totalQuizzes}
      enemQuestions={serializedEnemQuestions}
    />
  );
}
