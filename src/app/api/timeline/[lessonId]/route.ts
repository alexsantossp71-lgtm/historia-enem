import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

interface RouteParams {
  params: Promise<{ lessonId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { lessonId } = await params;
  
  try {
    const { data: events } = await db
      .from('timeline_events')
      .select('*')
      .eq('lessonId', lessonId)
      .order('order', { ascending: true });

    // If no timeline events exist, try to generate from lesson content
    if (!events || events.length === 0) {
      const { data: lesson } = await db
        .from('lessons')
        .select('title, content')
        .eq('id', lessonId)
        .single();

      if (lesson) {
        // Generate some timeline events based on lesson title
        const generatedEvents = generateTimelineEvents(lesson.title, lesson.content || '');
        
        if (generatedEvents.length > 0) {
          await db.from('timeline_events').insert(
            generatedEvents.map((e, i) => ({
              lessonId,
              year: e.year,
              event: e.event,
              order: i,
            }))
          );
          return NextResponse.json({ events: generatedEvents.map((e, i) => ({ ...e, id: i + 1 })) });
        }
      }
    }

    return NextResponse.json({ 
      events: (events || []).map((e: any, index: number) => ({ 
        id: index + 1, 
        year: e.year, 
        event: e.event, 
        order: e.order 
      }))
    });
  } catch (error) {
    console.error('Error fetching timeline:', error);
    return NextResponse.json({ events: [] }, { status: 500 });
  }
}

function generateTimelineEvents(title: string, content: string): { year: string; event: string }[] {
  const lowerTitle = title.toLowerCase();
  
  // Timeline events based on lesson topic
  const timelines: Record<string, { year: string; event: string }[]> = {
    'pré-história': [
      { year: '2 milhões a.C.', event: 'Aparecimento dos primeiros hominídeos na África' },
      { year: '400.000 a.C.', event: 'Domínio do fogo pelo Homo erectus' },
      { year: '40.000 a.C.', event: 'Chegada do Homo sapiens à América' },
      { year: '10.000 a.C.', event: 'Início da Revolução Neolítica' },
      { year: '3.000 a.C.', event: 'Surgimento das primeiras civilizações' },
    ],
    'civilizações antigas': [
      { year: '3.000 a.C.', event: 'Unificação do Egito Antigo' },
      { year: '1.792 a.C.', event: 'Código de Hamurabi na Mesopotâmia' },
      { year: '776 a.C.', event: 'Primeiros Jogos Olímpicos na Grécia' },
      { year: '753 a.C.', event: 'Fundação de Roma' },
      { year: '476 d.C.', event: 'Queda do Império Romano do Ocidente' },
    ],
    'idade média': [
      { year: '476 d.C.', event: 'Queda de Roma - Início da Idade Média' },
      { year: '800 d.C.', event: 'Coroação de Carlos Magno' },
      { year: '1096 d.C.', event: 'Primeira Cruzada' },
      { year: '1348 d.C.', event: 'Peste Negra na Europa' },
      { year: '1453 d.C.', event: 'Queda de Constantinopla' },
    ],
    'idade moderna': [
      { year: '1453', event: 'Queda de Constantinopla' },
      { year: '1492', event: 'Chegada de Colombo à América' },
      { year: '1517', event: 'Lutero e a Reforma Protestante' },
      { year: '1789', event: 'Revolução Francesa' },
      { year: '1808', event: 'Chegada da Família Real ao Brasil' },
    ],
    'revolução': [
      { year: '1789', event: 'Queda da Bastilha - Revolução Francesa' },
      { year: '1791', event: 'Constituição Francesa' },
      { year: '1793', event: 'Execução de Luís XVI' },
      { year: '1799', event: 'Napoleão assume o poder' },
      { year: '1815', event: 'Congresso de Viena' },
    ],
    'brasil colonial': [
      { year: '1500', event: 'Chegada dos portugueses ao Brasil' },
      { year: '1530', event: 'Início da colonização sistemática' },
      { year: '1549', event: 'Criação do Governo-Geral' },
      { year: '1695', event: 'Descoberta do ouro em Minas Gerais' },
      { year: '1808', event: 'Chegada da Família Real Portuguesa' },
    ],
    'império': [
      { year: '1822', event: 'Independência do Brasil' },
      { year: '1824', event: 'Primeira Constituição Brasileira' },
      { year: '1831', event: 'Abdicação de D. Pedro I' },
      { year: '1850', event: 'Lei Eusébio de Queirós (fim do tráfico)' },
      { year: '1888', event: 'Abolição da Escravatura' },
      { year: '1889', event: 'Proclamação da República' },
    ],
    'república': [
      { year: '1889', event: 'Proclamação da República' },
      { year: '1891', event: 'Primeira Constituição Republicana' },
      { year: '1930', event: 'Revolução de 1930' },
      { year: '1937', event: 'Estado Novo' },
      { year: '1945', event: 'Fim do Estado Novo' },
    ],
    'era vargas': [
      { year: '1930', event: 'Revolução de 1930 - Vargas assume o poder' },
      { year: '1934', event: 'Constituição de 1934' },
      { year: '1937', event: 'Golpe do Estado Novo' },
      { year: '1942', event: 'Brasil na Segunda Guerra Mundial' },
      { year: '1945', event: 'Queda de Vargas' },
      { year: '1951', event: 'Retorno de Vargas pelo voto' },
    ],
    'ditadura': [
      { year: '1964', event: 'Golpe Militar' },
      { year: '1968', event: 'AI-5 - Endurecimento do regime' },
      { year: '1979', event: 'Lei da Anistia' },
      { year: '1984', event: 'Campanha das Diretas Já' },
      { year: '1985', event: 'Fim do regime militar' },
    ],
    'américa': [
      { year: '1492', event: 'Chegada de Colombo à América' },
      { year: '1519', event: 'Cortés inicia conquista do México' },
      { year: '1533', event: 'Queda do Império Inca' },
      { year: '1776', event: 'Independência dos EUA' },
      { year: '1822', event: 'Independência do Brasil' },
    ],
    'áfrica': [
      { year: '3000 a.C.', event: 'Surgimento do Egito Antigo' },
      { year: '700 d.C.', event: 'Expansão islâmica no norte da África' },
      { year: '1500', event: 'Início do tráfico transatlântico' },
      { year: '1884', event: 'Conferência de Berlim - Partilha da África' },
      { year: '1994', event: 'Fim do Apartheid na África do Sul' },
    ],
  };

  for (const [key, events] of Object.entries(timelines)) {
    if (lowerTitle.includes(key)) {
      return events;
    }
  }

  return [];
}
