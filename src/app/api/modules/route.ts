import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Return empty array - modules are loaded from seed data
    // Progress is tracked client-side using localStorage
    return NextResponse.json([]);
  } catch (error) {
    console.error('Error fetching modules:', error);
    return NextResponse.json(
      { error: 'Erro ao carregar módulos' },
      { status: 500 }
    );
  }
}
