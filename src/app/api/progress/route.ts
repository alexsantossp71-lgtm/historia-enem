import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lessonId, completed } = body;

    if (!lessonId) {
      return NextResponse.json(
        { error: 'ID da aula é obrigatório' },
        { status: 400 }
      );
    }

    // Progress is saved client-side using localStorage
    // This endpoint just returns success
    return NextResponse.json({ 
      lessonId, 
      completed, 
      savedAt: new Date().toISOString() 
    });
  } catch (error) {
    console.error('Error updating progress:', error);
    return NextResponse.json(
      { error: 'Erro ao atualizar progresso' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lessonId = searchParams.get('lessonId');

    // Progress is loaded client-side using localStorage
    // This endpoint just returns a placeholder
    if (lessonId) {
      return NextResponse.json({ 
        lessonId, 
        completed: false 
      });
    }

    return NextResponse.json([]);
  } catch (error) {
    console.error('Error fetching progress:', error);
    return NextResponse.json(
      { error: 'Erro ao carregar progresso' },
      { status: 500 }
    );
  }
}
