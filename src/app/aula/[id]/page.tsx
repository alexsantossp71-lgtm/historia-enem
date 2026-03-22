import { notFound } from 'next/navigation';
import { db } from '@/lib/db';
import LessonPageClient from '@/components/LessonPageClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function AulaPage({ params }: PageProps) {
  const { id } = await params;
  
  const lesson = await db.lesson.findUnique({
    where: { id },
    include: {
      module: true,
      progress: true,
      quiz: {
        include: {
          questions: true,
        },
      },
    },
  });

  if (!lesson) {
    notFound();
  }

  // Get all modules for navigation
  const modules = await db.module.findMany({
    orderBy: { order: 'asc' },
    include: {
      lessons: {
        orderBy: { order: 'asc' },
        select: { id: true, title: true, order: true },
      },
    },
  });

  // Find previous and next lessons
  let prevLesson: { id: string; title: string } | null = null;
  let nextLesson: { id: string; title: string } | null = null;
  
  for (let i = 0; i < modules.length; i++) {
    const currentModule = modules[i];
    for (let j = 0; j < currentModule.lessons.length; j++) {
      if (currentModule.lessons[j].id === id) {
        if (j > 0) {
          prevLesson = currentModule.lessons[j - 1];
        } else if (i > 0) {
          const prevModuleData = modules[i - 1];
          prevLesson = prevModuleData.lessons[prevModuleData.lessons.length - 1];
        }
        
        if (j < currentModule.lessons.length - 1) {
          nextLesson = currentModule.lessons[j + 1];
        } else if (i < modules.length - 1) {
          const nextModuleData = modules[i + 1];
          nextLesson = nextModuleData.lessons[0];
        }
        break;
      }
    }
  }

  const lessonData = {
    id: lesson.id,
    title: lesson.title,
    content: lesson.content,
    duration: lesson.duration,
    module: {
      id: lesson.module.id,
      title: lesson.module.title,
      description: lesson.module.description,
      icon: lesson.module.icon,
      color: lesson.module.color,
    },
    isCompleted: lesson.progress.some(p => p.completed),
    quiz: lesson.quiz ? {
      id: lesson.quiz.id,
      questionCount: lesson.quiz.questions.length,
    } : null,
  };

  return (
    <LessonPageClient
      lesson={lessonData}
      prevLesson={prevLesson}
      nextLesson={nextLesson}
    />
  );
}
