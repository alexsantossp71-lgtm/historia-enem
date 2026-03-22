import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const topic = searchParams.get('topic');
    const limit = parseInt(searchParams.get('limit') || '10');
    const random = searchParams.get('random') === 'true';

    // Build query
    let query = db.from('enem_questions').select('*');
    
    if (topic) {
      query = query.eq('topic', topic);
    }
    
    const { data: questions } = await query.limit(limit);
    
    // If random, shuffle in memory
    let finalQuestions = questions || [];
    if (random && finalQuestions.length > 0) {
      finalQuestions = finalQuestions.sort(() => Math.random() - 0.5).slice(0, limit);
    }

    // Get all topics
    const { data: allQuestions } = await db
      .from('enem_questions')
      .select('topic, year');
    
    const topics = [...new Set((allQuestions || []).map(q => q.topic))];
    const years = [...new Set((allQuestions || []).map(q => q.year))].sort((a: any, b: any) => b - a);

    // Parse options JSON and transform for client
    const parsedQuestions = finalQuestions.map((q: any) => ({
      id: q.id,
      year: q.year,
      topic: q.topic,
      question: q.question,
      options: typeof q.options === 'string' ? JSON.parse(q.options) : q.options,
      correctIndex: q.answer,
      explanation: q.explanation
    }));

    return NextResponse.json({
      questions: parsedQuestions,
      meta: {
        total: parsedQuestions.length,
        topics,
        years
      }
    });
  } catch (error: unknown) {
    console.error('ENEM quiz error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { answers } = body;

    if (!answers || Object.keys(answers).length === 0) {
      return NextResponse.json({ error: 'No answers provided' }, { status: 400 });
    }

    const questionIds = Object.keys(answers);
    
    // Fetch questions
    const { data: questions } = await db
      .from('enem_questions')
      .select('*')
      .in('id', questionIds);

    const results = (questions || []).map((question: any) => {
      const userAnswer = answers[question.id];
      const isCorrect = userAnswer === question.answer;

      return {
        questionId: question.id,
        question: question.question,
        year: question.year,
        topic: question.topic,
        userAnswer,
        correctAnswer: question.answer,
        isCorrect,
        explanation: question.explanation,
        options: typeof question.options === 'string' ? JSON.parse(question.options) : question.options
      };
    });

    const correctCount = results.filter(r => r.isCorrect).length;
    const totalQuestions = results.length;
    const score = Math.round((correctCount / totalQuestions) * 100);

    const topicsResults: Record<string, { correct: number; total: number }> = {};
    for (const result of results) {
      if (!topicsResults[result.topic]) {
        topicsResults[result.topic] = { correct: 0, total: 0 };
      }
      topicsResults[result.topic].total++;
      if (result.isCorrect) {
        topicsResults[result.topic].correct++;
      }
    }

    // Save result
    try {
      await db.from('enem_results').insert({
        totalQuestions,
        correctAnswers: correctCount,
        score,
        topicsResults: JSON.stringify(topicsResults)
      });
    } catch (e) {
      console.log('Could not save result, continuing...');
    }

    return NextResponse.json({
      results,
      correctCount,
      totalQuestions,
      score,
      passed: score >= 70,
      topicsResults
    });
  } catch (error: unknown) {
    console.error('Error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
