import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

interface RouteParams {
  params: Promise<{ lessonId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { lessonId } = await params;
  
  try {
    const { data: pairs } = await db
      .from('match_pairs')
      .select('*')
      .eq('lessonId', lessonId)
      .order('order', { ascending: true });

    // If no match pairs exist, generate from lesson content
    if (!pairs || pairs.length === 0) {
      const { data: lesson } = await db
        .from('lessons')
        .select('title, content')
        .eq('id', lessonId)
        .single();

      if (lesson) {
        const generatedPairs = generateMatchPairs(lesson.title, lesson.content || '');
        
        if (generatedPairs.length > 0) {
          await db.from('match_pairs').insert(
            generatedPairs.map((p, i) => ({
              lessonId,
              term: p.term,
              definition: p.definition,
              order: i,
            }))
          );
          return NextResponse.json({ pairs: generatedPairs.map((p, i) => ({ ...p, id: i + 1 })) });
        }
      }
    }

    return NextResponse.json({ 
      pairs: (pairs || []).map((p: any, index: number) => ({ 
        id: index + 1, 
        term: p.term, 
        definition: p.definition 
      }))
    });
  } catch (error) {
    console.error('Error fetching match pairs:', error);
    return NextResponse.json({ pairs: [] }, { status: 500 });
  }
}

function generateMatchPairs(title: string, content: string): { term: string; definition: string }[] {
  const lowerTitle = title.toLowerCase();
  
  // Match pairs based on lesson topic
  const allPairs: Record<string, { term: string; definition: string }[]> = {
    'pré-história': [
      { term: 'Paleolítico', definition: 'Idade da Pedra Lascada - caça e coleta' },
      { term: 'Neolítico', definition: 'Idade da Pedra Polida - agricultura' },
      { term: 'Homo sapiens', definition: 'Espécie humana moderna' },
      { term: 'Fogo', definition: 'Domínio que permitiu cozinhar e se aquecer' },
      { term: 'Nômade', definition: 'Povos que não têm fixação territorial' },
    ],
    'civilizações antigas': [
      { term: 'Faraó', definition: 'Rei do Egito Antigo, considerado divino' },
      { term: 'Pirâmides', definition: 'Túmulos dos faraós egípcios' },
      { term: 'Democracia', definition: 'Governo do povo - surgiu em Atenas' },
      { term: 'Senado', definition: 'Assembleia romana de patrícios' },
      { term: 'Código de Hamurabi', definition: 'Primeiro código de leias escrito' },
    ],
    'idade média': [
      { term: 'Feudalismo', definition: 'Sistema econômico baseado em feudos' },
      { term: 'Suserania', definition: 'Relação de poder entre senhor e vassalo' },
      { term: 'Cruzadas', definition: 'Expedições religiosas à Terra Santa' },
      { term: 'Peste Negra', definition: 'Epidemia que matou 1/3 da Europa' },
      { term: 'Gildas', definition: 'Associações de mercadores medievais' },
    ],
    'idade moderna': [
      { term: 'Absolutismo', definition: 'Poder ilimitado do rei' },
      { term: 'Mercantilismo', definition: 'Política econômica baseada em metais' },
      { term: 'Renascimento', definition: 'Movimento cultural do séc. XV-XVI' },
      { term: 'Reforma Protestante', definition: 'Movimento de Lutero contra a Igreja' },
      { term: 'Burguesia', definition: 'Classe social dos comerciantes' },
    ],
    'revolução': [
      { term: 'Bastilha', definition: 'Prisão tomada em 1789, símbolo revolucionário' },
      { term: 'Direitos do Homem', definition: 'Declaração de 1789 sobre liberdades' },
      { term: 'Guilhotina', definition: 'Instrumento de execução da Revolução' },
      { term: 'Robespierre', definition: 'Líder do Reino do Terror' },
      { term: 'Napoleão', definition: 'General que se tornou imperador' },
    ],
    'brasil colonial': [
      { term: 'Capitanias Hereditárias', definition: 'Sistema de divisão territorial do Brasil' },
      { term: 'Engenho', definition: 'Unidade produtora de açúcar' },
      { term: 'Pau-brasil', definition: 'Primeira riqueza explorada' },
      { term: 'Bandeirantes', definition: 'Exploradores do interior' },
      { term: 'Ciclo do Ouro', definition: 'Período de mineração em Minas Gerais' },
    ],
    'império': [
      { term: 'Independência', definition: 'Declarada por D. Pedro I em 1822' },
      { term: 'Constituição de 1824', definition: 'Primeira constituição brasileira' },
      { term: 'Lei Áurea', definition: 'Abolição da escravatura em 1888' },
      { term: 'Partido Liberal', definition: 'Defendia mais autonomia política' },
      { term: 'Guerra do Paraguai', definition: 'Conflito contra López (1864-1870)' },
    ],
    'república': [
      { term: 'República da Espada', definition: 'Primeiros governos militares' },
      { term: 'Coronelismo', definition: 'Poder político dos latifundiários' },
      { term: 'Voto de Cabresto', definition: 'Voto controlado pelos coronéis' },
      { term: 'Oligarquias', definition: 'Grupos que dominavam a política' },
      { term: 'Tenentismo', definition: 'Movimento de jovens oficiais' },
    ],
    'era vargas': [
      { term: 'Revolução de 1930', definition: 'Fim da República Velha' },
      { term: 'Estado Novo', definition: 'Ditadura de Vargas (1937-1945)' },
      { term: 'CLT', definition: 'Consolidação das Leis do Trabalho' },
      { term: 'Petróleo', definition: 'Setor que Vargas nacionalizou' },
      { term: 'Getúlio Vargas', definition: 'Presidente que governou 15 anos' },
    ],
    'ditadura': [
      { term: 'AI-5', definition: 'Ato que endureceu o regime em 1968' },
      { term: 'DOPS', definition: 'Departamento de repressão política' },
      { term: 'Milagre Econômico', definition: 'Crescimento entre 1969-1973' },
      { term: 'Diretas Já', definition: 'Movimento por eleições diretas' },
      { term: 'Lei da Anistia', definition: 'Lei de 1979 que permitiu retorno de exilados' },
    ],
    'américa': [
      { term: 'Maias', definition: 'Civilização da América Central' },
      { term: 'Astecas', definition: 'Império no México dominado por Cortés' },
      { term: 'Incas', definition: 'Império na região dos Andes' },
      { term: 'Colombo', definition: 'Chegou à América em 1492' },
      { term: 'Tratado de Tordesilhas', definition: 'Dividiu as Américas entre Portugal e Espanha' },
    ],
    'áfrica': [
      { term: 'Apacrid', definition: 'Sistema de segregação racial na África do Sul' },
      { term: 'Tráfico Negreiro', definition: 'Comércio forçado de africanos' },
      { term: 'Partilha da África', definition: 'Conferência de Berlim de 1884' },
      { term: 'Mansa Musa', definition: 'Rei rico do Império Mali' },
      { term: 'Zulu', definition: 'Povo guerreiro do sul da África' },
    ],
  };

  for (const [key, pairs] of Object.entries(allPairs)) {
    if (lowerTitle.includes(key)) {
      return pairs;
    }
  }

  return [];
}
