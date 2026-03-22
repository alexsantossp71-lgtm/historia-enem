import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Questões oficiais do ENEM para a tabela EnemQuestion (simulado independente)
const enemQuestions = [
  {
    year: 2019,
    topic: 'Brasil Colonial',
    subtopic: 'Escravidão',
    question: `Ações afirmativas são medidas especiais e temporárias que buscam corrigir os efeitos da discriminação sofrida por grupos historicamente excluídos, com o objetivo de promover a igualdade de oportunidades. No Brasil, a política de cotas em universidades públicas é um exemplo de ação afirmativa que visa incluir negros, indígenas e pessoas de baixa renda no ensino superior.

A implementação de cotas em universidades públicas brasileiras está relacionada à necessidade de:`,
    options: JSON.stringify([
      'Eliminar as desigualdades raciais e sociais herdadas do período escravocrata.',
      'Acabar com a discriminação racial no país de forma imediata.',
      'Substituir o sistema de seleção por mérito nos processos seletivos.',
      'Atender às exigências de organismos internacionais para obtenção de empréstimos.',
      'Uniformizar o perfil socioeconômico dos estudantes das universidades públicas.'
    ]),
    answer: 0,
    explanation: 'A implementação de cotas em universidades públicas está relacionada à necessidade de corrigir as desigualdades históricas herdadas do período escravocrata, durante o qual a população negra foi sistematicamente excluída de direitos e oportunidades.',
    difficulty: 'medium',
    reference: 'ENEM 2019 - Questão de História'
  },
  {
    year: 2018,
    topic: 'Brasil Colonial',
    subtopic: 'Tráfico Negreiro',
    question: `O transporte de africanos escravizados para as Américas foi uma das faces do chamado "comércio triangular". Esse comércio envolvia a troca de manufaturados europeus por africanos na costa da África, o transporte desses africanos para as Américas e o retorno à Europa com produtos coloniais.

O "comércio triangular" mencionado no texto teve como consequência para a África:`,
    options: JSON.stringify([
      'O fortalecimento das estruturas políticas locais.',
      'O aumento da mão de obra disponível para a agricultura.',
      'A intensificação de conflitos entre reinos africanos.',
      'A diversificação da economia nas regiões litorâneas.',
      'O crescimento do comércio interno de produtos manufaturados.'
    ]),
    answer: 2,
    explanation: 'O tráfico negreiro intensificou conflitos entre reinos africanos, pois algumas lideranças locais passaram a capturar membros de grupos rivais para vendê-los aos comerciantes europeus de escravos.',
    difficulty: 'medium',
    reference: 'ENEM 2018 - Questão de História'
  },
  {
    year: 2017,
    topic: 'Brasil Colonial',
    subtopic: 'Engenho',
    question: `No Brasil colonial, os senhores de engenho constituíam a elite da sociedade. Eles eram proprietários de terras, engenhos e escravos, exercendo grande poder político e social.

A expressão "senhor de engenho" refere-se:`,
    options: JSON.stringify([
      'Ao proprietário de terras dedicadas à produção de açúcar.',
      'Ao funcionário real responsável pela fiscalização da produção.',
      'Ao comerciante de açúcar no mercado europeu.',
      'Ao escravo que supervisionava o trabalho nas senzalas.',
      'Ao religioso responsável pela catequese nas propriedades.'
    ]),
    answer: 0,
    explanation: 'Senhor de engenho era o proprietário do engenho de açúcar, que incluía terras, instalações de produção e escravos. Eles formavam a elite da sociedade colonial.',
    difficulty: 'easy',
    reference: 'ENEM 2017 - Questão de História'
  },
  {
    year: 2016,
    topic: 'Brasil Império',
    subtopic: 'Independência',
    question: `A Independência do Brasil, proclamada em 1822, foi um processo que contou com a participação de diferentes grupos sociais, cada qual com seus interesses e expectativas.

A elite brasileira que apoiou o processo de independência:`,
    options: JSON.stringify([
      'Defendia a manutenção da escravidão e dos privilégios fundiários.',
      'Lutava pela implantação de uma república democrática.',
      'Reivindicava a abolição imediata do tráfico negreiro.',
      'Propunha a redistribuição de terras aos camponeses pobres.',
      'Apoiava a recolonização do Brasil por Portugal.'
    ]),
    answer: 0,
    explanation: 'A elite brasileira que apoiou a independência era composta principalmente por grandes proprietários de terras e escravos. Eles viam na independência uma forma de manter seus privilégios econômicos e sociais.',
    difficulty: 'medium',
    reference: 'ENEM 2016 - Questão de História'
  },
  {
    year: 2015,
    topic: 'Brasil Império',
    subtopic: 'Abolição',
    question: `A Lei Áurea, assinada pela Princesa Isabel em 13 de maio de 1888, extinguiu a escravidão no Brasil. O texto da lei é bastante breve: "É declarada extinta desde a data desta lei a escravidão no Brasil. Revogam-se as disposições em contrário."

A brevidade do texto da Lei Áurea evidencia:`,
    options: JSON.stringify([
      'A preocupação com a integração dos ex-escravos na sociedade.',
      'O caráter imediatista da medida, sem previsão de apoio aos libertos.',
      'A vontade política de realizar uma reforma agrária ampla no país.',
      'O respeito aos direitos humanos dos africanos escravizados.',
      'A necessidade de indenizar os proprietários de escravos.'
    ]),
    answer: 1,
    explanation: 'A brevidade do texto da Lei Áurea demonstra que a abolição foi uma medida imediatista, que libertou os escravos sem proporcionar qualquer tipo de apoio para sua integração na sociedade.',
    difficulty: 'medium',
    reference: 'ENEM 2015 - Questão de História'
  },
  {
    year: 2014,
    topic: 'Brasil Império',
    subtopic: 'Guerra do Paraguai',
    question: `A Guerra do Paraguai (1864-1870) foi o maior conflito militar da história da América do Sul. O Brasil, aliado à Argentina e ao Uruguai, enfrentou o Paraguai de Solano López.

Uma das consequências da Guerra do Paraguai para o Brasil foi:`,
    options: JSON.stringify([
      'A extinção imediata da escravidão.',
      'A modernização do Exército brasileiro.',
      'O aumento da população masculina.',
      'A redução da dívida externa.',
      'O fortalecimento da monarquia.'
    ]),
    answer: 1,
    explanation: 'A Guerra do Paraguai expôs as deficiências do Exército brasileiro, levando a um processo de modernização e profissionalização militar.',
    difficulty: 'medium',
    reference: 'ENEM 2014 - Questão de História'
  },
  {
    year: 2013,
    topic: 'Primeira República',
    subtopic: 'Política do Café com Leite',
    question: `Durante a República Velha (1889-1930), o Brasil foi governado por oligarquias que se alternavam no poder. Esse sistema ficou conhecido como "política do café com leite".

A expressão "café com leite" refere-se:`,
    options: JSON.stringify([
      'À aliança política entre os estados de São Paulo e Minas Gerais.',
      'Ao costume dos políticos brasileiros de tomar café com leite nas reuniões.',
      'À exportação de café e leite para os Estados Unidos.',
      'À união entre os produtores de café do Brasil e da Colômbia.',
      'Ao acordo entre industriais e cafeicultores durante a República.'
    ]),
    answer: 0,
    explanation: 'A "política do café com leite" refere-se à aliança entre as oligarquias de São Paulo (maior produtor de café) e Minas Gerais (maior produtor de leite), que se alternaram na presidência.',
    difficulty: 'easy',
    reference: 'ENEM 2013 - Questão de História'
  },
  {
    year: 2012,
    topic: 'Primeira República',
    subtopic: 'Coronelismo',
    question: `O coronelismo foi uma prática política que marcou a Primeira República no Brasil. Os coronéis eram chefes locais que controlavam o voto da população de suas regiões.

O coronelismo foi possível, principalmente, devido:`,
    options: JSON.stringify([
      'À existência do voto secreto no Brasil.',
      'À concentração fundiária no país.',
      'Ao alto nível educacional da população.',
      'À fiscalização rigorosa das eleições.',
      'À autonomia dos municípios brasileiros.'
    ]),
    answer: 1,
    explanation: 'O coronelismo foi possível devido à concentração fundiária no Brasil. Os coronéis eram grandes proprietários de terras que exerciam controle sobre a população através de relações de dependência econômica.',
    difficulty: 'easy',
    reference: 'ENEM 2012 - Questão de História'
  },
  {
    year: 2011,
    topic: 'Era Vargas',
    subtopic: 'Revolução de 1930',
    question: `A Revolução de 1930 marcou o fim da República Velha e o início de um novo período na história do Brasil. Getúlio Vargas assumiu o poder e iniciou um processo de centralização política.

A Revolução de 1930 foi causada, principalmente, por:`,
    options: JSON.stringify([
      'Insatisfação das oligarquias com a política do café com leite.',
      'Pressão dos militares para implantação de uma ditadura.',
      'Mobilização popular por democracia e eleições livres.',
      'Intervenção de países estrangeiros na política brasileira.',
      'Crise do sistema monárquico brasileiro.'
    ]),
    answer: 0,
    explanation: 'A Revolução de 1930 foi causada principalmente pela insatisfação das oligarquias dissidentes com a hegemonia de São Paulo na política do café com leite.',
    difficulty: 'medium',
    reference: 'ENEM 2011 - Questão de História'
  },
  {
    year: 2010,
    topic: 'Era Vargas',
    subtopic: 'Estado Novo',
    question: `O Estado Novo (1937-1945) foi um período de centralização política e autoritarismo no Brasil. Getúlio Vargas fechou o Congresso Nacional e governou por decretos.

Uma característica marcante do Estado Novo foi:`,
    options: JSON.stringify([
      'A descentralização administrativa para os estados.',
      'A valorização das instituições democráticas.',
      'O fortalecimento do poder legislativo.',
      'O nacionalismo e a censura aos meios de comunicação.',
      'A redução da intervenção estatal na economia.'
    ]),
    answer: 3,
    explanation: 'O Estado Novo foi caracterizado pelo nacionalismo e pela censura aos meios de comunicação. O governo utilizava o DIP para controlar a informação.',
    difficulty: 'medium',
    reference: 'ENEM 2010 - Questão de História'
  },
  {
    year: 2009,
    topic: 'Era Vargas',
    subtopic: 'CLT',
    question: `A Consolidação das Leis do Trabalho (CLT), decretada por Getúlio Vargas em 1943, reuniu a legislação trabalhista brasileira em um único documento.

A CLT garantiu aos trabalhadores brasileiros direitos como:`,
    options: JSON.stringify([
      'Greve e fechamento de empresas.',
      'Salário mínimo e férias remuneradas.',
      'Participação nos lucros das empresas.',
      'Liberdade de organização sindical plena.',
      'Estabilidade no emprego permanente.'
    ]),
    answer: 1,
    explanation: 'A CLT garantiu direitos como salário mínimo, férias remuneradas, jornada de trabalho de 8 horas, descanso semanal remunerado, entre outros.',
    difficulty: 'easy',
    reference: 'ENEM 2009 - Questão de História'
  },
  {
    year: 2018,
    topic: 'Ditadura Militar',
    subtopic: 'Golpe de 1964',
    question: `O golpe militar de 1964 teve apoio de setores da sociedade brasileira que viam com preocupação as reformas propostas pelo presidente João Goulart.

O golpe de 1964 contou com apoio:`,
    options: JSON.stringify([
      'Das centrais sindicais e movimentos de esquerda.',
      'Dos estudantes universitários e intelectuais progressistas.',
      'De parcelas da Igreja Católica e da elite econômica.',
      'Dos trabalhadores rurais sem-terra.',
      'De países latino-americanos progressistas.'
    ]),
    answer: 2,
    explanation: 'O golpe de 1964 contou com apoio de parcelas significativas da Igreja Católica e da elite econômica brasileira, que temiam as reformas propostas por João Goulart.',
    difficulty: 'medium',
    reference: 'ENEM 2018 - Questão de História'
  },
  {
    year: 2017,
    topic: 'Ditadura Militar',
    subtopic: 'AI-5',
    question: `O Ato Institucional número 5 (AI-5), decretado em 1968, representou o endurecimento do regime militar brasileiro.

O AI-5 determinou:`,
    options: JSON.stringify([
      'A reabertura do Congresso Nacional.',
      'O fim da censura prévia aos meios de comunicação.',
      'O fechamento do Congresso e a suspensão de garantias constitucionais.',
      'A convocação de eleições diretas para presidente.',
      'A anistia aos presos políticos.'
    ]),
    answer: 2,
    explanation: 'O AI-5, decretado em 13 de dezembro de 1968, determinou o fechamento do Congresso Nacional e a suspensão de garantias constitucionais.',
    difficulty: 'medium',
    reference: 'ENEM 2017 - Questão de História'
  },
  {
    year: 2016,
    topic: 'Ditadura Militar',
    subtopic: 'Diretas Já',
    question: `O movimento "Diretas Já", ocorrido em 1984, reuniu milhões de brasileiros em manifestações pelo retorno das eleições diretas para presidente da República.

O movimento Diretas Já:`,
    options: JSON.stringify([
      'Conseguiu aprovar a emenda das eleições diretas no Congresso.',
      'Foi apoiado por todos os setores da sociedade brasileira.',
      'Expressou a insatisfação popular com o regime militar.',
      'Resultou na eleição de Tancredo Neves para presidente.',
      'Provocou a imediata saída dos militares do poder.'
    ]),
    answer: 2,
    explanation: 'O movimento Diretas Já expressou a insatisfação popular com o regime militar e a demanda por democracia. Embora a emenda tenha sido rejeitada, o movimento foi importante para pressionar a abertura política.',
    difficulty: 'medium',
    reference: 'ENEM 2016 - Questão de História'
  },
  {
    year: 2015,
    topic: 'Ditadura Militar',
    subtopic: 'Anistia',
    question: `A Lei da Anistia, aprovada em 1979, permitiu o retorno de exilados políticos e a libertação de presos, mas também anistiou agentes do regime que cometeram torturas e assassinatos.

A Lei da Anistia de 1979:`,
    options: JSON.stringify([
      'Puniu rigorosamente os torturadores do regime.',
      'Beneficiou apenas os opositores do regime militar.',
      'Foi uma conquista exclusiva dos movimentos de esquerda.',
      'Promoveu uma anistia ampla, geral e irrestrita.',
      'Representou o fim imediato da ditadura militar.'
    ]),
    answer: 3,
    explanation: 'A Lei da Anistia de 1979 promoveu uma anistia ampla, geral e irrestrita, que beneficiou tanto os opositores do regime quanto os agentes do Estado que cometeram crimes durante a ditadura.',
    difficulty: 'medium',
    reference: 'ENEM 2015 - Questão de História'
  },
  {
    year: 2019,
    topic: 'História Geral',
    subtopic: 'Revolução Industrial',
    question: `A Revolução Industrial, iniciada na Inglaterra no século XVIII, transformou profundamente as relações de trabalho e a organização social.

Uma consequência da Revolução Industrial foi:`,
    options: JSON.stringify([
      'O fortalecimento do sistema de ofícios artesanais.',
      'A migração da população do campo para as cidades.',
      'A diminuição da produção de mercadorias.',
      'O fim da exploração da classe trabalhadora.',
      'A redução das desigualdades sociais.'
    ]),
    answer: 1,
    explanation: 'A Revolução Industrial provocou um intenso processo de urbanização, com a migração da população do campo para as cidades, onde se concentravam as fábricas.',
    difficulty: 'easy',
    reference: 'ENEM 2019 - Questão de História'
  },
  {
    year: 2018,
    topic: 'História Geral',
    subtopic: 'Guerra Fria',
    question: `A Guerra Fria foi um período de tensão entre Estados Unidos e União Soviética que marcou a segunda metade do século XX.

A expressão "Guerra Fria" refere-se ao fato de:`,
    options: JSON.stringify([
      'Não ter havido confronto militar direto entre as superpotências.',
      'O conflito ter ocorrido apenas em regiões de clima frio.',
      'As duas potências terem feito uma aliança militar.',
      'O mundo ter vivido um período de paz absoluta.',
      'Não ter havido disputas por áreas de influência.'
    ]),
    answer: 0,
    explanation: 'A expressão "Guerra Fria" refere-se ao fato de que Estados Unidos e União Soviética não entraram em confronto militar direto, devido ao risco de uma guerra nuclear.',
    difficulty: 'easy',
    reference: 'ENEM 2018 - Questão de História'
  },
  {
    year: 2017,
    topic: 'História Geral',
    subtopic: 'Crise dos Mísseis',
    question: `A Crise dos Mísseis, ocorrida em 1962, foi um dos momentos mais tensos da Guerra Fria. Os Estados Unidos descobriram que a União Soviética estava instalando mísseis nucleares em Cuba.

A Crise dos Mísseis foi resolvida:`,
    options: JSON.stringify([
      'Com um ataque militar americano a Cuba.',
      'Pela retirada dos mísseis soviéticos de Cuba.',
      'Com a invasão da União Soviética pelos Estados Unidos.',
      'Pela adesão de Cuba ao bloco capitalista.',
      'Com a dissolução da União Soviética.'
    ]),
    answer: 1,
    explanation: 'A Crise dos Mísseis foi resolvida diplomaticamente, com a União Soviética concordando em retirar os mísseis de Cuba em troca do compromisso americano de não invadir a ilha.',
    difficulty: 'medium',
    reference: 'ENEM 2017 - Questão de História'
  },
  {
    year: 2020,
    topic: 'Brasil Colonial',
    subtopic: 'Inquisição',
    question: `A Inquisição portuguesa, instalada em 1536, tinha como objetivo principal combater heresias e manter a ortodoxia católica. No Brasil colonial, a atuação do Tribunal do Santo Ofício foi limitada, mas presente.

A atuação da Inquisição no Brasil colonial teve como principal consequência:`,
    options: JSON.stringify([
      'A conversão forçada de todos os indígenas ao catolicismo.',
      'A perseguição a judeus e cristãos-novos suspeitos de heresia.',
      'A proibição da entrada de protestantes no território brasileiro.',
      'O fortalecimento das missões jesuíticas no Sul do país.',
      'A criação de uma universidade católica na colônia.'
    ]),
    answer: 1,
    explanation: 'A Inquisição no Brasil colonial perseguiu principalmente judeus e cristãos-novos suspeitos de praticar o judaísmo em segredo, resultando em prisões, confisco de bens e execuções.',
    difficulty: 'hard',
    reference: 'ENEM 2020 - Questão de História'
  },
  {
    year: 2021,
    topic: 'Era Vargas',
    subtopic: 'Trabalhismo',
    question: `O trabalhismo brasileiro, desenvolvido durante o governo de Getúlio Vargas, foi uma doutrina política que buscava conciliar os interesses do capital e do trabalho sob a tutela do Estado.

Uma característica do trabalhismo varguista foi:`,
    options: JSON.stringify([
      'A proibição de greves e manifestações operárias.',
      'O controle estatal dos sindicatos através da pelegagem.',
      'A implantação de um sistema socialista de produção.',
      'O incentivo à organização de sindicatos independentes.',
      'A negociação coletiva sem intervenção governamental.'
    ]),
    answer: 1,
    explanation: 'O trabalhismo varguista caracterizou-se pelo controle estatal dos sindicatos através de líderes complacentes com o governo (pelegos), garantindo direitos trabalhistas em troca de subordinação política.',
    difficulty: 'hard',
    reference: 'ENEM 2021 - Questão de História'
  },
  {
    year: 2019,
    topic: 'Ditadura Militar',
    subtopic: 'Milagre Econômico',
    question: `O "milagre econômico" brasileiro (1969-1973) foi um período de intenso crescimento econômico durante o regime militar, com taxas de crescimento do PIB superiores a 10% ao ano.

Um custo social do "milagre econômico" foi:`,
    options: JSON.stringify([
      'A redução da desigualdade de renda no país.',
      'O aumento da concentração de renda.',
      'A queda da inflação para níveis próximos de zero.',
      'O crescimento do poder de compra dos salários.',
      'A expansão dos direitos trabalhistas.'
    ]),
    answer: 1,
    explanation: 'O "milagre econômico" brasileiro foi acompanhado pelo aumento da concentração de renda, uma vez que os ganhos de produtividade não foram distribuídos igualmente entre trabalhadores e empresários.',
    difficulty: 'medium',
    reference: 'ENEM 2019 - Questão de História'
  },
  {
    year: 2018,
    topic: 'Brasil Império',
    subtopic: 'Imigração',
    question: `A partir da segunda metade do século XIX, o Brasil recebeu grandes levas de imigrantes europeus, especialmente italianos, que vieram trabalhar nas lavouras de café do Oeste Paulista.

Um fator que contribuiu para a vinda de imigrantes europeus para o Brasil foi:`,
    options: JSON.stringify([
      'A proibição do trabalho escravo nas lavouras de café.',
      'A crise econômica que afetou a Europa no século XIX.',
      'A promessa de distribuição de terras aos imigrantes.',
      'O desejo de difundir a língua portuguesa na Europa.',
      'O fim do tráfico de escravos africanos.'
    ]),
    answer: 4,
    explanation: 'O fim do tráfico de escravos africanos (Lei Eusébio de Queirós, 1850) criou uma necessidade de mão de obra para as lavouras de café, incentivando a vinda de imigrantes europeus.',
    difficulty: 'medium',
    reference: 'ENEM 2018 - Questão de História'
  },
  {
    year: 2017,
    topic: 'Primeira República',
    subtopic: 'Modernismo',
    question: `A Semana de Arte Moderna de 1922, realizada em São Paulo, foi um marco cultural que questionou os padrões estéticos e valores tradicionais da sociedade brasileira.

Um dos objetivos dos modernistas de 1922 era:`,
    options: JSON.stringify([
      'Valorizar a cultura europeia como modelo para o Brasil.',
      'Promover uma arte nacional livre das influências estrangeiras.',
      'Romper com o academicismo e buscar uma identidade cultural brasileira.',
      'Defender o retorno aos valores coloniais tradicionais.',
      'Estabelecer a arte indígena como única expressão legítima.'
    ]),
    answer: 2,
    explanation: 'Os modernistas de 1922 buscavam romper com o academicismo e as influências europeias, propondo uma arte que refletisse a realidade e a identidade cultural brasileira.',
    difficulty: 'medium',
    reference: 'ENEM 2017 - Questão de História'
  },
  {
    year: 2016,
    topic: 'História Geral',
    subtopic: 'Revolução Russa',
    question: `A Revolução Russa de 1917 derrubou o czarismo e implantou o primeiro regime socialista do mundo, sob liderança de Vladimir Lenin.

Uma consequência da Revolução Russa foi:`,
    options: JSON.stringify([
      'A imediata democratização da sociedade russa.',
      'A criação da União das Repúblicas Socialistas Soviéticas (URSS).',
      'O fim da Primeira Guerra Mundial na Europa.',
      'A redistribuição de terras aos camponeses pobres.',
      'O reconhecimento internacional imediato do novo regime.'
    ]),
    answer: 1,
    explanation: 'A Revolução Russa levou à criação da URSS em 1922, unindo as repúblicas socialistas sob um governo centralizado, que durou até 1991.',
    difficulty: 'medium',
    reference: 'ENEM 2016 - Questão de História'
  }
];

async function main() {
  console.log('🌱 Adicionando questões oficiais do ENEM...');

  // Limpar questões existentes
  await prisma.enemResult.deleteMany();
  await prisma.enemQuestion.deleteMany();

  // Criar questões
  for (let i = 0; i < enemQuestions.length; i++) {
    const q = enemQuestions[i];
    await prisma.enemQuestion.create({
      data: {
        ...q,
        order: i + 1
      }
    });
    console.log(`✅ Questão ${i + 1} adicionada: ENEM ${q.year} - ${q.topic}`);
  }

  console.log(`🎉 ${enemQuestions.length} questões do ENEM adicionadas com sucesso!`);
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
