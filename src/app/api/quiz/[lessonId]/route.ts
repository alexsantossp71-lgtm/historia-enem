import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  try {
    const { lessonId } = await params;
    
    const { data: quiz, error } = await db
      .from('quizzes')
      .select(`
        id,
        lessonId,
        questions (id, question, options, answer, explanation, order)
      `)
      .eq('lessonId', lessonId)
      .single();

    if (error || !quiz) {
      return NextResponse.json(
        { error: 'Quiz não encontrado' },
        { status: 404 }
      );
    }

    // Transform questions to include parsed options and correctIndex
    const questions = (quiz.questions || []).map((q: any) => ({
      id: q.id,
      question: q.question,
      options: JSON.parse(q.options),
      correctIndex: q.answer,
      explanation: q.explanation,
      order: q.order
    }));

    return NextResponse.json({ 
      id: quiz.id,
      lessonId: quiz.lessonId,
      questions 
    });
  } catch (error) {
    console.error('Error fetching quiz:', error);
    return NextResponse.json(
      { error: 'Erro ao carregar quiz' },
      { status: 500 }
    );
  }
}

// Verificar respostas
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ lessonId: string }> }
) {
  try {
    const { lessonId } = await params;
    const body = await request.json();
    const { answers } = body; // { questionId: answerIndex }

    const { data: quiz, error } = await db
      .from('quizzes')
      .select('*, questions(*)')
      .eq('lessonId', lessonId)
      .single();

    if (error || !quiz) {
      return NextResponse.json(
        { error: 'Quiz não encontrado' },
        { status: 404 }
      );
    }

    // Verificar cada resposta
    const results = (quiz.questions || []).map((question: any) => {
      const userAnswer = answers[question.id];
      const isCorrect = userAnswer === question.answer;
      
      return {
        questionId: question.id,
        question: question.question,
        userAnswer,
        correctAnswer: question.answer,
        isCorrect,
        explanation: question.explanation,
        options: JSON.parse(question.options)
      };
    });

    const correctCount = results.filter(r => r.isCorrect).length;
    const totalQuestions = results.length;
    const score = Math.round((correctCount / totalQuestions) * 100);

    return NextResponse.json({
      results,
      correctCount,
      totalQuestions,
      score,
      passed: score >= 70
    });
  } catch (error) {
    console.error('Error verifying quiz:', error);
    return NextResponse.json(
      { error: 'Erro ao verificar respostas' },
      { status: 500 }
    );
  }
}
