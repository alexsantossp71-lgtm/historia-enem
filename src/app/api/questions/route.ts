import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    
    const { data: questions } = await db
      .from('enem_questions')
      .select('id, year, topic, subtopic, question, options, difficulty, reference')
      .limit(limit);
    
    const { data: allQuestions } = await db
      .from('enem_questions')
      .select('topic, year');
    
    const topics = [...new Set((allQuestions || []).map((q: any) => q.topic))];
    const years = [...new Set((allQuestions || []).map((q: any) => q.year))].sort((a: any, b: any) => b - a);

    return NextResponse.json({
      questions: questions || [],
      meta: {
        total: (questions || []).length,
        topics,
        years
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
