import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

interface RouteParams {
  params: Promise<{ lessonId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { lessonId } = await params;
  
  try {
    const { data: flashcards } = await db
      .from('flashcards')
      .select('*')
      .eq('lessonId', lessonId)
      .order('order', { ascending: true });

    // If no flashcards exist, generate some from lesson content
    if (!flashcards || flashcards.length === 0) {
      const { data: lesson } = await db
        .from('lessons')
        .select('*, quiz:quizzes(*, questions(*))')
        .eq('id', lessonId)
        .single();

      if (lesson) {
        // Generate flashcards from quiz questions
        const generatedCards = [];
        if (lesson.quiz?.questions) {
          for (const q of lesson.quiz.questions.slice(0, 5)) {
            const options = JSON.parse(q.options);
            generatedCards.push({
              lessonId,
              front: q.question,
              back: `${options[q.answer]}\n\n${q.explanation || ''}`,
              order: generatedCards.length,
            });
          }
        }

        // Create flashcards in database
        if (generatedCards.length > 0) {
          await db.from('flashcards').insert(generatedCards);
          return NextResponse.json({ cards: generatedCards });
        }
      }
    }

    return NextResponse.json({ 
      cards: (flashcards || []).map((f: any) => ({ front: f.front, back: f.back }))
    });
  } catch (error) {
    console.error('Error fetching flashcards:', error);
    return NextResponse.json({ cards: [] }, { status: 500 });
  }
}
