import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const { data: lesson, error } = await db
      .from('lessons')
      .select(`
        *,
        module (*),
        progress (*),
        quiz:quizzes (
          *,
          questions (*)
        )
      `)
      .eq('id', id)
      .single();

    if (error || !lesson) {
      return NextResponse.json(
        { error: 'Aula não encontrada' },
        { status: 404 }
      );
    }

    // Buscar aulas anterior e próxima
    const { data: prevLesson } = await db
      .from('lessons')
      .select('id, title, order')
      .eq('moduleId', lesson.moduleId)
      .lt('order', lesson.order)
      .order('order', { ascending: false })
      .limit(1)
      .single();

    const { data: nextLesson } = await db
      .from('lessons')
      .select('id, title, order')
      .eq('moduleId', lesson.moduleId)
      .gt('order', lesson.order)
      .order('order', { ascending: true })
      .limit(1)
      .single();

    return NextResponse.json({
      ...lesson,
      prevLesson,
      nextLesson,
      isCompleted: lesson.progress?.some((p: any) => p.completed) || false
    });
  } catch (error) {
    console.error('Error fetching lesson:', error);
    return NextResponse.json(
      { error: 'Erro ao carregar aula' },
      { status: 500 }
    );
  }
}
