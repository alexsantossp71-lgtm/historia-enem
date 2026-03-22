import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

interface RouteParams {
  params: Promise<{ lessonId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { lessonId } = await params;
  
  try {
    const { data: story } = await db
      .from('stories')
      .select('*')
      .eq('lessonId', lessonId)
      .single();

    if (!story) {
      return NextResponse.json({ story: null });
    }

    return NextResponse.json({ 
      story: {
        title: story.title,
        witness: story.witness,
        atmosphere: story.atmosphere,
        content: story.content,
        reflection: story.reflection
      }
    });
  } catch (error) {
    console.error('Error fetching story:', error);
    return NextResponse.json({ story: null }, { status: 500 });
  }
}
