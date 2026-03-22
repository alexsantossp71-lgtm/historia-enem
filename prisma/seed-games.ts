import { db } from '../src/lib/db';

async function main() {
  console.log('🌱 Seeding quiz questions and games...');

  // Get all lessons
  const lessons = await db.lesson.findMany({
    include: { quiz: true },
  });

  for (const lesson of lessons) {
    // Check if quiz exists, if not create one
    let quiz = lesson.quiz;
    if (!quiz) {
      quiz = await db.quiz.create({
        data: { lessonId: lesson.id },
      });
    }

    // Check existing question count
    const existingQuestions = await db.quizQuestion.count({
      where: { quizId: quiz.id },
    });

    // Generate questions based on lesson title if less than 10
    if (existingQuestions < 10) {
      const questions = generateQuestionsForLesson(lesson.title, lesson.id);
      for (const q of questions) {
        await db.quizQuestion.create({
          data: {
            quizId: quiz.id,
            question: q.question,
            options: JSON.stringify(q.options),
            answer: q.answer,
            explanation: q.explanation,
          },
        });
      }
      console.log(`Added ${questions.length} questions for lesson: ${lesson.title}`);
    }
  }

  console.log('✅ Quiz seeding complete!');
}

function generateQuestionsForLesson(title: string, lessonId: string) {
  const lowerTitle = title.toLowerCase();
  
  const questionBank: Record<string, { question: string; options: string[]; answer: number; explanation: string }[]> = {
    'pré-história': [
      { question: 'Qual período é conhecido como Idade da Pedra Lascada?', options: ['Neolítico', 'Paleolítico', 'Idade dos Metais', 'Idade Média'], answer: 1, explanation: 'O Paleolítico é caracterizado pelo uso de pedra lascada, caça e coleta.' },
      { question: 'O que marcou a transição do Paleolítico para o Neolítico?', options: ['Descoberta do fogo', 'Invenção da roda', 'Surgimento da agricultura', 'Uso dos metais'], answer: 2, explanation: 'A Revolução Neolítica foi marcada pela sedentarização e agricultura.' },
      { question: 'Qual hominídeo foi o primeiro a controlar o fogo?', options: ['Homo sapiens', 'Homo erectus', 'Australopithecus', 'Homo neanderthalensis'], answer: 1, explanation: 'O Homo erectus foi o primeiro a dominar o fogo, há cerca de 400 mil anos.' },
      { question: 'As pinturas rupestres eram realizadas principalmente em qual período?', options: ['Idade Média', 'Paleolítico', 'Idade Moderna', 'Neolítico'], answer: 1, explanation: 'As pinturas rupestres são típicas do Paleolítico, como as de Lascaux.' },
      { question: 'O que significou a Revolução Neolítica para a humanidade?', options: ['Fim das guerras', 'Sedentarização e surgimento de vilas', 'Descoberta da América', 'Fim das doenças'], answer: 1, explanation: 'A agricultura permitiu fixação em territórios e formação de comunidades.' },
      { question: 'Os primeiros seres humanos chegaram à América aproximadamente quando?', options: ['500 anos atrás', '10.000 anos atrás', '40.000 anos atrás', '100.000 anos atrás'], answer: 2, explanation: 'Estima-se que o Homo sapiens chegou à América há cerca de 40.000 anos.' },
      { question: 'Qual era a principal atividade econômica dos povos nômades?', options: ['Agricultura', 'Caça e coleta', 'Comércio', 'Indústria'], answer: 1, explanation: 'Os nômades sobreviviam da caça de animais e coleta de frutos.' },
      { question: 'O desenvolvimento de ferramentas de pedra polida marca qual período?', options: ['Paleolítico', 'Neolítico', 'Idade do Bronze', 'Idade do Ferro'], answer: 1, explanation: 'A pedra polida é característica do período Neolítico.' },
      { question: 'A domesticação de animais ocorreu durante qual período?', options: ['Paleolítico', 'Neolítico', 'Idade Antiga', 'Idade Média'], answer: 1, explanation: 'No Neolítico, houve a domesticação de animais como ovelhas e bois.' },
      { question: 'Qual das alternativas NÃO é uma característica do Paleolítico?', options: ['Instrumentos de pedra lascada', 'Vida nômade', 'Prática da agricultura', 'Pinturas rupestres'], answer: 2, explanation: 'A agricultura surgiu apenas no Neolítico, não no Paleolítico.' },
    ],
    'civilizações antigas': [
      { question: 'Qual rio era fundamental para a civilização egípcia?', options: ['Tigre', 'Eufrates', 'Nilo', 'Jordão'], answer: 2, explanation: 'O Nilo era essencial para agricultura e transporte no Egito.' },
      { question: 'A democracia nasceu em qual cidade-estado grega?', options: ['Esparta', 'Atenas', 'Tebas', 'Corinto'], answer: 1, explanation: 'Atenas desenvolveu o primeiro sistema democrático do mundo.' },
      { question: 'O Código de Hamurabi foi criado em qual civilização?', options: ['Egípcia', 'Mesopotâmica', 'Grega', 'Romana'], answer: 1, explanation: 'Hamurabi foi rei da Babilônia, na Mesopotâmia.' },
      { question: 'Quem fundou a cidade de Roma segundo a lenda?', options: ['Rômulo e Remo', 'Júlio César', 'Augusto', 'Nero'], answer: 0, explanation: 'A lenda conta que Rômulo e Remo fundaram Roma em 753 a.C.' },
      { question: 'As pirâmides de Gizé foram construídas para que fim?', options: ['Templos religiosos', 'Túmulos dos faraós', 'Armazéns de grãos', 'Observatórios'], answer: 1, explanation: 'As pirâmides eram túmulos monumentais para os faraós egípcios.' },
      { question: 'Qual era a principal característica da sociedade espartana?', options: ['Democracia', 'Militarismo', 'Comércio marítimo', 'Arte e filosofia'], answer: 1, explanation: 'Esparta era uma sociedade altamente militarizada.' },
      { question: 'O que era o Pátio do Povo em Roma?', options: ['Um mercado', 'A assembléia dos cidadãos', 'Um templo', 'Um estádio'], answer: 1, explanation: 'O Comitia Centuriata era a assembleia onde cidadãos votavam.' },
      { question: 'A escrita cuneiforme foi desenvolvida por qual civilização?', options: ['Egípcia', 'Suméria', 'Grega', 'Chinesa'], answer: 1, explanation: 'Os sumérios desenvolveram a escrita cuneiforme na Mesopotâmia.' },
      { question: 'O Império Romano do Ocidente caiu em que ano?', options: ['476 d.C.', '1453 d.C.', '500 a.C.', '1000 d.C.'], answer: 0, explanation: 'O último imperador romano foi deposto em 476 d.C.' },
      { question: 'Os hieróglifos eram usados por qual civilização?', options: ['Grega', 'Romana', 'Egípcia', 'Persa'], answer: 2, explanation: 'Os hieróglifos eram a escrita pictórica do Egito Antigo.' },
    ],
    'idade média': [
      { question: 'O que foi o feudalismo?', options: ['Sistema democrático', 'Sistema econômico baseado em feudos', 'Sistema capitalista', 'Sistema socialista'], answer: 1, explanation: 'O feudalismo organizava a sociedade em torno de feudos.' },
      { question: 'As Cruzadas foram expedições com qual objetivo?', options: ['Conquistar terras na África', 'Retomar a Terra Santa dos muçulmanos', 'Explorar a América', 'Comerciar com a China'], answer: 1, explanation: 'As Cruzadas visavam retomar Jerusalém dos muçulmanos.' },
      { question: 'O que causou a Peste Negra na Europa?', options: ['Guerras', 'Bactéria Yersinia pestis', 'Fome', 'Vulcões'], answer: 1, explanation: 'A Peste Negra foi causada pela bactéria transmitida por pulgas.' },
      { question: 'Qual era o papel dos senhores feudais?', options: ['Trabalhar a terra', 'Administrar e proteger o feudo', 'Comercializar produtos', 'Comandar exércitos reais'], answer: 1, explanation: 'Os senhores feudais governavam seus feudos e protegiam os camponeses.' },
      { question: 'A Peste Negra matou aproximadamente que porcentagem da população europeia?', options: ['10%', '30%', '50%', '70%'], answer: 1, explanation: 'A Peste Negra matou cerca de 1/3 da população europeia.' },
      { question: 'O que eram as guildas medievais?', options: ['Ordens religiosas', 'Associações de artesãos', 'Exércitos feudais', 'Universidades'], answer: 1, explanation: 'As guildas eram associações que regulavam o comércio e artesanato.' },
      { question: 'Carlos Magno foi coroado imperador em qual ano?', options: ['476 d.C.', '800 d.C.', '1000 d.C.', '1500 d.C.'], answer: 1, explanation: 'Carlos Magno foi coroado Imperador Romano em 800 d.C.' },
      { question: 'O que significa "suserania" no contexto feudal?', options: ['Escravidão', 'Relação entre senhor e vassalo', 'Comércio livre', 'Imposto real'], answer: 1, explanation: 'A suserania era a relação de poder entre senhor e vassalo.' },
      { question: 'A Idade Média durou aproximadamente quanto tempo?', options: ['500 anos', '1000 anos', '1500 anos', '2000 anos'], answer: 1, explanation: 'A Idade Média durou de 476 a 1453, cerca de 1000 anos.' },
      { question: 'Constantinopla caiu para os turcos em que ano?', options: ['476', '800', '1453', '1492'], answer: 2, explanation: 'Constantinopla caiu em 1453, marcando o fim da Idade Média.' },
    ],
    'idade moderna': [
      { question: 'O que foi o Renascimento?', options: ['Movimento artístico e cultural', 'Revolução política', 'Guerra religiosa', 'Movimento operário'], answer: 0, explanation: 'O Renascimento foi um movimento cultural que valorizava a Antiguidade.' },
      { question: 'Quem iniciou a Reforma Protestante em 1517?', options: ['João Calvino', 'Martinho Lutero', 'Henrique VIII', 'Inácio de Loyola'], answer: 1, explanation: 'Lutero afixou suas 95 teses em Wittenberg em 1517.' },
      { question: 'O absolutismo caracteriza-se por:', options: ['Poder limitado do rei', 'Poder ilimitado do rei', 'Democracia', 'República'], answer: 1, explanation: 'O absolutismo concentrava todo o poder nas mãos do rei.' },
      { question: 'O mercantilismo era uma política que valorizava:', options: ['Livre comércio', 'Acúmulo de metais preciosos', 'Industrialização', 'Agricultura de subsistência'], answer: 1, explanation: 'O mercantilismo buscava acumular ouro e prata.' },
      { question: 'Maquiavel escreveu "O Príncipe" sobre qual tema?', options: ['Arte renascentista', 'Poder político', 'Religião', 'Ciência'], answer: 1, explanation: 'O Príncipe é um tratado sobre como manter o poder político.' },
      { question: 'A Inquisição foi criada para combater:', options: ['O capitalismo', 'Heréticos e bruxas', 'Os reis absolutos', 'Os cientistas'], answer: 1, explanation: 'A Inquisição perseguiu hereges e praticantes de magia.' },
      { question: 'A burguesia surgiu com o desenvolvimento de:', options: ['Feudalismo', 'Comércio e artesanato', 'Agricultura', 'Servidão'], answer: 1, explanation: 'A burguesia surgiu das atividades comerciais urbanas.' },
      { question: 'Qual país liderou as Grandes Navegações?', options: ['Espanha', 'Portugal', 'Inglaterra', 'França'], answer: 1, explanation: 'Portugal iniciou as navegações com a Escola de Sagres.' },
      { question: 'O humanismo renascentista valorizava:', options: ['A Igreja', 'O ser humano', 'O feudalismo', 'A guerra'], answer: 1, explanation: 'O humanismo colocava o homem no centro do universo.' },
      { question: 'A Contrarreforma foi uma resposta da Igreja à:', options: ['Reforma Protestante', 'Revolução Francesa', 'Revolução Industrial', 'Descobrimento da América'], answer: 0, explanation: 'A Contrarreforma foi a reação católica ao protestantismo.' },
    ],
    'revolução': [
      { question: 'A Revolução Francesa começou em que ano?', options: ['1776', '1789', '1799', '1815'], answer: 1, explanation: 'A Revolução Francesa começou com a Queda da Bastilha em 1789.' },
      { question: 'O que era a Bastilha?', options: ['Palácio real', 'Prisão', 'Universidade', 'Catedral'], answer: 1, explanation: 'A Bastilha era uma prisão símbolo do absolutismo.' },
      { question: 'Quem foi o líder do Reino do Terror na França?', options: ['Napoleão', 'Robespierre', 'Luís XVI', 'Voltaire'], answer: 1, explanation: 'Robespierre liderou o período mais violento da Revolução.' },
      { question: 'A Declaração dos Direitos do Homem foi proclamada em:', options: ['1776', '1789', '1793', '1804'], answer: 1, explanation: 'A Declaração foi proclamada em 1789 durante a Revolução.' },
      { question: 'Napoleão Bonaparte se tornou imperador em que ano?', options: ['1789', '1799', '1804', '1815'], answer: 2, explanation: 'Napoleão foi coroado imperador em 1804.' },
      { question: 'A guilhotina foi usada para:', options: ['Executar prisioneiros', 'Colher trigo', 'Construir estradas', 'Navegar'], answer: 0, explanation: 'A guilhotina era o instrumento de execução da Revolução.' },
      { question: 'O Congresso de Viena ocorreu após:', options: ['Revolução Americana', 'Queda de Napoleão', 'Primeira Guerra', 'Revolução Industrial'], answer: 1, explanation: 'O Congresso reorganizou a Europa após a derrota de Napoleão.' },
      { question: 'Qual era o lema da Revolução Francesa?', options: ['Deus, Pátria e Família', 'Liberdade, Igualdade e Fraternidade', 'Ordem e Progresso', 'Paz e Amor'], answer: 1, explanation: 'O lema revolucionário sintetizava os ideais iluministas.' },
      { question: 'Luís XVI foi executado em que ano?', options: ['1789', '1791', '1793', '1799'], answer: 2, explanation: 'O rei Luís XVI foi guilhotinado em janeiro de 1793.' },
      { question: 'A Revolução Industrial teve início em qual país?', options: ['França', 'Estados Unidos', 'Inglaterra', 'Alemanha'], answer: 2, explanation: 'A Revolução Industrial começou na Inglaterra no século XVIII.' },
    ],
    'brasil colonial': [
      { question: 'Em que ano os portugueses chegaram ao Brasil?', options: ['1492', '1500', '1530', '1822'], answer: 1, explanation: 'Pedro Álvares Cabral chegou ao Brasil em 22 de abril de 1500.' },
      { question: 'Qual foi a primeira atividade econômica no Brasil colonial?', options: ['Café', 'Açúcar', 'Pau-brasil', 'Ouro'], answer: 2, explanation: 'O pau-brasil foi a primeira riqueza explorada.' },
      { question: 'As Capitanias Hereditárias foram criadas em que ano?', options: ['1500', '1534', '1600', '1808'], answer: 1, explanation: 'O sistema de capitanias foi instituído em 1534.' },
      { question: 'Quem fundou a cidade de São Paulo?', options: ['Tome de Souza', 'João Ramalho', 'Padre Anchieta', 'Duarte Coelho'], answer: 2, explanation: 'O Colégio de São Paulo foi fundado por Anchieta e Nobrega.' },
      { question: 'O ciclo do ouro ocorreu principalmente em qual região?', options: ['Nordeste', 'Minas Gerais', 'Amazônia', 'Sul'], answer: 1, explanation: 'O ouro foi descoberto em Minas Gerais no século XVIII.' },
      { question: 'A Família Real portuguesa chegou ao Brasil em:', options: ['1500', '1808', '1822', '1889'], answer: 1, explanation: 'D. João VI e sua corte chegaram em 1808.' },
      { question: 'Os bandeirantes eram:', options: ['Soldados portugueses', 'Exploradores do interior', 'Jesuítas', 'Escravos'], answer: 1, explanation: 'Os bandeirantes paulistas exploraram o interior do Brasil.' },
      { question: 'O Quilombo de Palmares ficava em qual estado atual?', options: ['Bahia', 'Pernambuco', 'Minas Gerais', 'São Paulo'], answer: 1, explanation: 'Palmares ficava no interior de Pernambuco.' },
      { question: 'Quem foi Zumbi dos Palmares?', options: ['Um bandeirante', 'Líder do Quilombo de Palmares', 'Um jesuíta', 'Um governador'], answer: 1, explanation: 'Zumbi foi o último líder do Quilombo de Palmares.' },
      { question: 'O Tratado de Tordesilhas dividia o mundo entre:', options: ['Portugal e Espanha', 'Portugal e França', 'Espanha e Inglaterra', 'Portugal e Holanda'], answer: 0, explanation: 'O tratado de 1494 dividia as terras entre Portugal e Espanha.' },
    ],
    'império': [
      { question: 'A Independência do Brasil foi proclamada em:', options: ['1808', '1822', '1889', '1500'], answer: 1, explanation: 'D. Pedro I proclamou a Independência em 7 de setembro de 1822.' },
      { question: 'Quem proclamou a Independência do Brasil?', options: ['D. João VI', 'D. Pedro I', 'D. Pedro II', 'Tiradentes'], answer: 1, explanation: 'D. Pedro I gritou "Independência ou Morte!" às margens do Ipiranga.' },
      { question: 'A primeira Constituição brasileira foi promulgada em:', options: ['1822', '1824', '1889', '1891'], answer: 1, explanation: 'A Constituição de 1824 foi outorgada por D. Pedro I.' },
      { question: 'A Lei Áurea aboliu a escravidão em que ano?', options: ['1850', '1871', '1888', '1889'], answer: 2, explanation: 'A Princesa Isabel assinou a Lei Áurea em 13 de maio de 1888.' },
      { question: 'O Brasil foi governado por quantos imperadores?', options: ['1', '2', '3', '4'], answer: 1, explanation: 'O Brasil teve dois imperadores: D. Pedro I e D. Pedro II.' },
      { question: 'A Guerra do Paraguai durou de:', options: ['1822-1825', '1864-1870', '1889-1894', '1914-1918'], answer: 1, explanation: 'A guerra contra o Paraguai durou de 1864 a 1870.' },
      { question: 'D. Pedro I abdicou do trono em que ano?', options: ['1822', '1831', '1840', '1889'], answer: 1, explanation: 'D. Pedro I abdicou em 1831, deixando o trono para seu filho.' },
      { question: 'O período regencial durou de:', options: ['1822-1831', '1831-1840', '1840-1889', '1889-1891'], answer: 1, explanation: 'O período regencial foi de 1831 a 1840.' },
      { question: 'A Lei do Ventre Livre foi aprovada em:', options: ['1850', '1871', '1885', '1888'], answer: 1, explanation: 'A Lei do Ventre Livre de 1871 libertou filhos de escravas.' },
      { question: 'Quem assinou a Lei Áurea?', options: ['D. Pedro II', 'Princesa Isabel', 'Deodoro da Fonseca', 'Getúlio Vargas'], answer: 1, explanation: 'A Princesa Isabel assinou a abolição em 1888.' },
    ],
    'república': [
      { question: 'A Proclamação da República ocorreu em:', options: ['1822', '1889', '1891', '1930'], answer: 1, explanation: 'A República foi proclamada em 15 de novembro de 1889.' },
      { question: 'Quem proclamou a República no Brasil?', options: ['D. Pedro II', 'Deodoro da Fonseca', 'Getúlio Vargas', 'Dom Pedro I'], answer: 1, explanation: 'Marechal Deodoro da Fonseca liderou o golpe de 1889.' },
      { question: 'O que era o coronelismo?', options: ['Sistema de governo militar', 'Poder político dos latifundiários', 'Movimento operário', 'Partido político'], answer: 1, explanation: 'Coronelismo era o controle político dos grandes proprietários.' },
      { question: 'A República da Espada foi o período de:', options: ['Monarquia', 'Governo militar provisório', 'Democracia', 'Ditadura'], answer: 1, explanation: 'A República da Espada (1889-1894) foi o governo dos marechais.' },
      { question: 'O voto de cabresto caracterizava-se por:', options: ['Voto secreto', 'Voto controlado pelos coronéis', 'Voto feminino', 'Voto obrigatório'], answer: 1, explanation: 'O voto de cabresto era controlado pelos coronéis.' },
      { question: 'A Revolução de 1930 marcou o fim de:', options: ['Império', 'República Velha', 'Ditadura Militar', 'Era Vargas'], answer: 1, explanation: 'A Revolução de 1930 encerrou a República Velha.' },
      { question: 'O café foi o principal produto de exportação durante:', options: ['Colônia', 'Império', 'República Velha', 'Ditadura Militar'], answer: 2, explanation: 'O café "com leite" dominou a economia da República Velha.' },
      { question: 'A política do café com leite envolvia:', options: ['SP e RJ', 'SP e MG', 'RJ e MG', 'BA e PE'], answer: 1, explanation: 'A política alternava presidentes de SP (café) e MG (leite).' },
      { question: 'O tenentismo era um movimento de:', options: ['Trabalhadores', 'Jovens oficiais militares', 'Fazendeiros', 'Jesuítas'], answer: 1, explanation: 'O tenentismo reunia jovens oficiais insatisfeitos.' },
      { question: 'A Constituição de 1891 estabeleceu:', options: ['Monarquia parlamentar', 'República federativa', 'Estado unitário', 'Ditadura militar'], answer: 1, explanation: 'A primeira constituição republicana criou a federação.' },
    ],
    'era vargas': [
      { question: 'Getúlio Vargas chegou ao poder em que ano?', options: ['1889', '1930', '1945', '1964'], answer: 1, explanation: 'Vargas assumiu o poder após a Revolução de 1930.' },
      { question: 'O Estado Novo foi um período de:', options: ['Democracia', 'Ditadura', 'Monarquia', 'República'], answer: 1, explanation: 'O Estado Novo (1937-1945) foi uma ditadura de Vargas.' },
      { question: 'A CLT foi criada durante qual governo?', options: ['Império', 'Era Vargas', 'Ditadura Militar', 'República Velha'], answer: 1, explanation: 'A Consolidação das Leis do Trabalho foi criada em 1943.' },
      { question: 'Vargas cometeu suicídio em que ano?', options: ['1945', '1951', '1954', '1964'], answer: 2, explanation: 'Getúlio Vargas suicidou-se em agosto de 1954.' },
      { question: 'A Revolução Constitucionalista de 1932 ocorreu em:', options: ['Rio de Janeiro', 'Minas Gerais', 'São Paulo', 'Rio Grande do Sul'], answer: 2, explanation: 'São Paulo se revoltou contra o governo Vargas em 1932.' },
      { question: 'O que foi o "petróleo é nosso"?', options: ['Lei', 'Movimento pela nacionalização', 'Guerra', 'Partido político'], answer: 1, explanation: 'A campanha resultou na criação da Petrobras em 1953.' },
      { question: 'A Petrobras foi criada em que ano?', options: ['1930', '1945', '1953', '1964'], answer: 2, explanation: 'A Petrobras foi criada durante o segundo governo Vargas.' },
      { question: 'O DIP era responsável por:', options: ['Educação', 'Censura e propaganda', 'Saúde', 'Agricultura'], answer: 1, explanation: 'O DIP controlava a imprensa e fazia propaganda do governo.' },
      { question: 'Vargas foi deposto em 1945 por:', options: ['Eleição', 'Golpe militar', 'Morte', 'Renúncia'], answer: 1, explanation: 'Vargas foi deposto por um golpe militar em 1945.' },
      { question: 'Qual partido foi criado por Vargas?', options: ['PTB', 'PSD', 'UDN', 'PCB'], answer: 0, explanation: 'O PTB (Partido Trabalhista Brasileiro) foi fundado por Vargas.' },
    ],
    'ditadura': [
      { question: 'O Golpe Militar no Brasil ocorreu em:', options: ['1930', '1945', '1964', '1985'], answer: 2, explanation: 'O golpe militar ocorreu em 31 de março de 1964.' },
      { question: 'O AI-5 foi decretado em que ano?', options: ['1964', '1968', '1974', '1985'], answer: 1, explanation: 'O AI-5 endureceu o regime em dezembro de 1968.' },
      { question: 'A Lei da Anistia foi aprovada em:', options: ['1964', '1968', '1979', '1985'], answer: 2, explanation: 'A anistia foi promulgada em 1979 durante o governo Figueiredo.' },
      { question: 'O "Milagre Econômico" ocorreu durante qual período?', options: ['1950-1960', '1969-1973', '1980-1985', '1990-1995'], answer: 1, explanation: 'O período de alto crescimento foi de 1969 a 1973.' },
      { question: 'As Diretas Já foram manifestações por:', options: ['Fim da censura', 'Eleições presidenciais diretas', 'Fim da ditadura', 'Anistia'], answer: 1, explanation: 'O movimento em 1984 pedia eleições diretas para presidente.' },
      { question: 'Quem foi o último presidente militar?', options: ['Médici', 'Geisel', 'Figueiredo', 'Costa e Silva'], answer: 2, explanation: 'João Figueiredo foi o último general-presidente (1979-1985).'},
      { question: 'O DOPS era um órgão de:', options: ['Educação', 'Repressão política', 'Economia', 'Cultura'], answer: 1, explanation: 'O DOPS perseguia opositores do regime.' },
      { question: 'Tancredo Neves morreu antes de assumir a presidência em:', options: ['1964', '1974', '1985', '1989'], answer: 2, explanation: 'Tancredo morreu em 1985, assumindo Sarney.' },
      { question: 'O Ato Institucional número 1 (AI-1) foi de:', options: ['1964', '1965', '1968', '1969'], answer: 0, explanation: 'O primeiro AI foi decretado em abril de 1964.' },
      { question: 'A Constituição de 1988 é conhecida como:', options: ['Constituição Cidadã', 'Constituição Militar', 'Constituição Imperial', 'Carta Magna'], answer: 0, explanation: 'A Constituição de 1988 garantiu muitos direitos civis.' },
    ],
    'américa': [
      { question: 'Quem chegou à América em 1492?', options: ['Vasco da Gama', 'Cristóvão Colombo', 'Pedro Álvares Cabral', 'Américo Vespúcio'], answer: 1, explanation: 'Colombo chegou às Bahamas em outubro de 1492.' },
      { question: 'O Império Asteca estava localizado em:', options: ['Peru', 'México', 'Brasil', 'Argentina'], answer: 1, explanation: 'Os astecas dominavam o atual México central.' },
      { question: 'Machu Picchu foi construída por qual civilização?', options: ['Asteca', 'Maia', 'Inca', 'Olmeca'], answer: 2, explanation: 'Machu Picchu é uma cidade inca nos Andes peruanos.' },
      { question: 'Os Estados Unidos tornaram-se independentes em:', options: ['1492', '1776', '1822', '1889'], answer: 1, explanation: 'A independência americana foi declarada em 4 de julho de 1776.' },
      { question: 'Hernán Cortés conquistou qual civilização?', options: ['Inca', 'Asteca', 'Maia', 'Olmeca'], answer: 1, explanation: 'Cortés conquistou o Império Asteca em 1521.' },
      { question: 'O Tratado de Tordesilhas foi assinado em:', options: ['1492', '1494', '1500', '1530'], answer: 1, explanation: 'O tratado entre Portugal e Espanha foi assinado em 1494.' },
      { question: 'Quem conquistou o Império Inca?', options: ['Cortés', 'Pizarro', 'Colombo', 'Cabral'], answer: 1, explanation: 'Francisco Pizarro conquistou o Império Inca em 1533.' },
      { question: 'A Revolução Mexicana começou em que ano?', options: ['1810', '1910', '1920', '1950'], answer: 1, explanation: 'A Revolução Mexicana começou em 1910 contra Porfirio Díaz.' },
      { question: 'Simón Bolívar lutou pela independência de quais países?', options: ['Brasil e Argentina', 'Venezuela, Colômbia, Equador, Peru e Bolívia', 'México e Guatemala', 'Chile e Argentina'], answer: 1, explanation: 'Bolívar liderou a independência de vários países andinos.' },
      { question: 'A Doutrina Monroe proclamava:', options: ['Intervenção europeia na América', 'América para os americanos', 'Colonização inglesa', 'Fim da escravidão'], answer: 1, explanation: 'A doutrina de 1823 opunha-se à intervenção europeia na América.' },
    ],
    'áfrica': [
      { question: 'O continente africano foi dividido em qual conferência?', options: ['Conferência de Berlim', 'Conferência de Viena', 'Conferência de Paris', 'Conferência de Londres'], answer: 0, explanation: 'A Partilha da África foi decidida em Berlim em 1884-1885.' },
      { question: 'O apartheid foi abolido na África do Sul em que ano?', options: ['1960', '1975', '1990', '1994'], answer: 3, explanation: 'O apartheid terminou oficialmente com as eleições de 1994.' },
      { question: 'Quem foi o primeiro presidente negro da África do Sul?', options: ['Desmond Tutu', 'Nelson Mandela', 'Steve Biko', 'Walter Sisulu'], answer: 1, explanation: 'Nelson Mandela foi eleito presidente em 1994.' },
      { question: 'O Egito Antigo se desenvolveu às margens de qual rio?', options: ['Congo', 'Nilo', 'Níger', 'Zambeze'], answer: 1, explanation: 'A civilização egípcia dependia das cheias do Nilo.' },
      { question: 'Quantos africanos foram escravizados durante o tráfico transatlântico?', options: ['1 milhão', '5 milhões', '12 milhões', '20 milhões'], answer: 2, explanation: 'Estima-se que cerca de 12 milhões foram trazidos à força.' },
      { question: 'Mansa Musa foi rei de qual império africano?', options: ['Império Songai', 'Império Mali', 'Império Gana', 'Império Zulu'], answer: 1, explanation: 'Mansa Musa governou o Império Mali no século XIV.' },
      { question: 'A cidade de Timbuktu era famosa por:', options: ['Comércio de escravos', 'Universidade islâmica', 'Mineração de ouro', 'Agricultura'], answer: 1, explanation: 'Timbuktu foi um grande centro de aprendizado islâmico.' },
      { question: 'O Império Songai existia em qual região africana atual?', options: ['Sul da África', 'África Ocidental', 'Norte da África', 'África Oriental'], answer: 1, explanation: 'O Songhai dominava a região do Níger e Mali.' },
      { question: 'O líder quênia Jomo Kenyatta lutou contra:', options: ['Dominação francesa', 'Dominação britânica', 'Dominação portuguesa', 'Dominação alemã'], answer: 1, explanation: 'Kenyatta liderou a independência do Quênia em 1963.' },
      { question: 'O genocídio de Ruanda ocorreu em que ano?', options: ['1960', '1975', '1994', '2000'], answer: 2, explanation: 'O genocídio entre hutus e tutsis ocorreu em 1994.' },
    ],
  };

  for (const [key, questions] of Object.entries(questionBank)) {
    if (lowerTitle.includes(key)) {
      return questions;
    }
  }

  // Return generic history questions if no match
  return [
    { question: 'A História é a ciência que estuda:', options: ['O futuro da humanidade', 'As ações humanas através do tempo', 'Apenas guerras', 'Só a natureza'], answer: 1, explanation: 'A História estuda as transformações humanas ao longo do tempo.' },
    { question: 'As fontes históricas podem ser:', options: ['Apenas escritas', 'Escritas e materiais', 'Só orais', 'Só arqueológicas'], answer: 1, explanation: 'As fontes históricas incluem documentos, artefatos, tradições orais, etc.' },
    { question: 'O que é um documento histórico?', options: ['Qualquer objeto antigo', 'Registro que fornece informações sobre o passado', 'Apenas textos', 'Apenas fotografias'], answer: 1, explanation: 'Documentos históricos são vestígios que revelam informações sobre o passado.' },
    { question: 'A cronologia estuda:', options: ['A geografia', 'A ordem temporal dos acontecimentos', 'A política', 'A economia'], answer: 1, explanation: 'A cronologia organiza eventos na linha do tempo.' },
    { question: 'O que são fontes primárias?', options: ['Livros de história', 'Documentos produzidos no período estudado', 'Filmes sobre história', 'Entrevistas'], answer: 1, explanation: 'Fontes primárias são produzidas na época do evento estudado.' },
    { question: 'A mitologia grega era importante para:', options: ['Explicar fenômenos naturais', 'Escrever leis', 'Fazer guerras', 'Construir navios'], answer: 0, explanation: 'Os mitos explicavam origens e fenômenos naturais para os gregos.' },
    { question: 'O que é cultura?', options: ['Apenas arte', 'Conjunto de valores e práticas de um povo', 'Só língua', 'Apenas religião'], answer: 1, explanation: 'Cultura abrange costumes, valores, língua, arte e práticas de um grupo.' },
    { question: 'A arqueologia estuda:', options: ['Documentos escritos', 'Vestígios materiais do passado', 'Línguas antigas', 'Só o Egito'], answer: 1, explanation: 'A arqueologia analisa artefatos e estruturas do passado.' },
    { question: 'O que é patrimônio histórico?', options: ['Prédios novos', 'Bens preservados por seu valor cultural', 'Apenas museus', 'Só monumentos'], answer: 1, explanation: 'Patrimônio histórico são bens preservados por sua importância cultural.' },
    { question: 'A memória histórica é importante porque:', options: ['Serve para esquecer o passado', 'Permite compreender identidades e evitar erros', 'É apenas para museus', 'Não tem importância'], answer: 1, explanation: 'A memória coletiva preserva identidades e ensina lições.' },
  ];
}

main()
  .catch(console.error)
  .finally(() => process.exit());
