import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// =============================================
// MÓDULO: HISTÓRIA DA ÁSIA
// Baseado na Matriz de Referência do ENEM/MEC
// =============================================

const modulesData = [
  // ==========================================
  // MÓDULO 14: HISTÓRIA DA ÁSIA
  // ==========================================
  {
    title: 'História da Ásia',
    description: 'Civilizações milenares, impérios e transformações do continente asiático.',
    icon: 'Globe',
    color: 'red',
    order: 14,
    lessons: [
      {
        title: 'China Antiga: Das Dinastias ao Confucionismo',
        content: `# China Antiga: Das Dinastias ao Confucionismo

## As Primeiras Dinastias

A China possui uma das civilizações mais antigas e contínuas do mundo, com registros históricos que remontam a mais de 4.000 anos.

### Dinastia Xia (c. 2070-1600 a.C.)
- Primeira dinastia chinesa segundo a tradição
- Desenvolvimento da agricultura no vale do Rio Amarelo
- Surgimento da escrita em ossos de oráculo

### Dinastia Shang (c. 1600-1046 a.C.)
- Período do bronze na China
- Desenvolvimento da escrita chinesa
- Organização feudal com rei no topo

### Dinastia Zhou (1046-256 a.C.)
- Período dos Reinos Combatentes
- Surgimento do Confucionismo e Taoismo
- Desenvolvimento da filosofia chinesa

## O Confucionismo

Confúcio (551-479 a.C.) desenvolveu um sistema filosófico que influenciou profundamente a sociedade chinesa:

- **Ren (Humanidade)**: Virtude suprema, tratamento digno aos outros
- **Li (Ritual)**: Normas de comportamento e etiqueta social
- **Xiao (Piedade filial)**: Respeito aos pais e ancestrais
- **Junzi (Homem superior)**: Ideal de conduta moral

## O Taoismo

Laozi, contemporâneo de Confúcio, fundou o Taoismo:

- **Tao (Caminho)**: Princípio cósmico que rege o universo
- **Wu wei (Não-ação)**: Agir em harmonia com a natureza
- **Yin e Yang**: Equilíbrio entre opostos
- **Simplicidade**: Valorização da vida natural

## A Dinastia Qin (221-206 a.C.)

Qin Shi Huang unificou a China:

- Padronização de pesos, medidas e escrita
- Construção da Grande Muralha
- Queima de livros e enterro de intelectuais
- Sistema legalista rigoroso

## A Dinastia Han (206 a.C.-220 d.C.)

Período de ouro da civilização chinesa:

- Expansão da Rota da Seda
- Desenvolvimento do papel e bússola
- Consolidação do Confucionismo como ideologia oficial
- Contato com o Império Romano através do comércio`,
        duration: 25,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A filosofia confuciana, desenvolvida na China antiga, propunha uma organização social baseada em hierarquias e rituais. Um dos princípios fundamentais do Confucionismo é:

- (A) a busca pelo lucro como motor do progresso social.
- (B) a igualdade absoluta entre todos os seres humanos.
- (C) a valorização da piedade filial e do respeito aos ancestrais.
- (D) a rejeição de qualquer forma de governo organizado.
- (E) a prática da guerra como forma de unificação.`,
              options: '["A busca pelo lucro como motor do progresso social", "A igualdade absoluta entre todos os seres humanos", "A valorização da piedade filial e do respeito aos ancestrais", "A rejeição de qualquer forma de governo organizado"]',
              answer: 2,
              explanation: 'O Confucionismo valoriza profundamente a piedade filial (xiao) e o respeito aos ancestrais, considerando a família a base da sociedade e o respeito aos pais como virtude fundamental.',
              order: 1
            },
            {
              question: `(ENEM 2019) A unificação da China sob a dinastia Qin representou um marco na história asiática. Uma das principais realizações de Qin Shi Huang foi:

- (A) a adoção do Confucionismo como religião oficial.
- (B) a construção da Grande Muralha para defesa contra invasões.
- (C) a abertura da Rota da Seda para o comércio com o Ocidente.
- (D) a implementação do sistema democrático de governo.
- (E) a proibição do uso da escrita chinesa.`,
              options: '["A adoção do Confucionismo como religião oficial", "A construção da Grande Muralha para defesa contra invasões", "A abertura da Rota da Seda para o comércio com o Ocidente", "A implementação do sistema democrático de governo"]',
              answer: 1,
              explanation: 'Qin Shi Huang é conhecido pela construção da Grande Muralha, unificação da escrita, pesos e medidas, e implementação de um sistema legalista rigoroso.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Índia Antiga: Hinduísmo, Budismo e Castas',
        content: `# Índia Antiga: Hinduísmo, Budismo e Castas

## A Civilização do Vale do Indo (c. 3300-1300 a.C.)

Uma das primeiras civilizações urbanas do mundo:

- **Harappa e Mohenjo-daro**: Cidades planejadas com sistema de esgoto
- **Escrita não decifrada**: Símbolos em selos e cerâmicas
- **Comércio**: Conexões com Mesopotâmia e Pérsia
- **Declínio**: Possivelmente por mudanças climáticas

## O Sistema de Castas

A sociedade indiana foi organizada em castas (varnas):

- **Brahmans**: Sacerdotes e intelectuais (casta mais alta)
- **Kshatriyas**: Guerreiros e governantes
- **Vaishyas**: Comerciantes e agricultores
- **Shudras**: Servos e trabalhadores manuais
- **Intocáveis**: Fora do sistema, marginalizados

## O Hinduísmo

Religião dominante na Índia antiga:

- **Vedas**: Textos sagrados mais antigos (1500-500 a.C.)
- **Trimurti**: Brahma (criador), Vishnu (preservador), Shiva (destruidor)
- **Karma**: Lei de causa e efeito
- **Samsara**: Ciclo de reencarnações
- **Moksha**: Libertação do ciclo

## O Budismo

Fundado por Siddhartha Gautama (Buda) no século VI a.C.:

- **Quatro Nobres Verdades**: A vida é sofrimento
- **Caminho Óctuplo**: Caminho para o nirvana
- **Não-violência (ahimsa)**: Respeito a todos os seres
- **Meditação**: Prática para alcançar a iluminação
- **Expansão**: Índia, China, Japão, Sudeste Asiático

## O Império Máuria (322-185 a.C.)

Primeiro grande império indiano:

- **Chandragupta Máuria**: Fundador
- **Ashoka**: Imperador que adotou o budismo
- **Editos de Ashoka**: Inscrições em pilares pedindo não-violência
- **Unificação**: Subcontinente indiano quase totalmente unificado

## O Império Gupta (320-550 d.C.)

Idade de ouro da Índia:

- **Ciência**: Sistema numérico decimal, conceito de zero
- **Literatura**: Épicos hindus (Ramayana, Mahabharata)
- **Arte**: Templos e esculturas
- **Matemática**: Álgebra e trigonometria avançadas`,
        duration: 25,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2020) O sistema de castas na Índia antiga organizava a sociedade de forma hierárquica. Sobre esse sistema, é correto afirmar que:

- (A) permitia a mobilidade social livre entre as castas.
- (B) era baseado exclusivamente na riqueza individual.
- (C) determinava a ocupação e os direitos de cada pessoa desde o nascimento.
- (D) foi criado pelos budistas para organizar a sociedade.
- (E) não influenciava as relações sociais na Índia.`,
              options: '["Permitia a mobilidade social livre entre as castas", "Era baseado exclusivamente na riqueza individual", "Determinava a ocupação e os direitos de cada pessoa desde o nascimento", "Foi criado pelos budistas para organizar a sociedade"]',
              answer: 2,
              explanation: 'O sistema de castas determinava a posição social, ocupação e direitos de cada pessoa desde o nascimento, sendo praticamente impossível mudar de casta.',
              order: 1
            },
            {
              question: `(ENEM 2021) O budismo, surgido na Índia antiga, propunha uma filosofia diferente do hinduísmo. Uma das principais diferenças entre as duas religiões é:

- (A) o budismo aceita o sistema de castas como natural.
- (B) o hinduísmo rejeita a ideia de reencarnação.
- (C) o budismo não acredita na existência de deuses.
- (D) o hinduísmo valoriza mais a meditação que o budismo.
- (E) o budismo rejeita o sistema de castas e prega a igualdade.`,
              options: '["O budismo aceita o sistema de castas como natural", "O hinduísmo rejeita a ideia de reencarnação", "O budismo não acredita na existência de deuses", "O hinduísmo valoriza mais a meditação que o budismo"]',
              answer: 4,
              explanation: 'Uma das principais diferenças é que o budismo rejeita o sistema de castas, pregando que todos podem alcançar a iluminação independentemente de sua posição social.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Japão Feudal: Samurais e Xogunato',
        content: `# Japão Feudal: Samurais e Xogunato

## Origens do Japão

### Período Jomon (c. 14.000-300 a.C.)
- Primeiros habitantes do Japão
- Cerâmica mais antiga do mundo
- Caçadores-coletores e pescadores

### Período Yayoi (300 a.C.-300 d.C.)
- Introdução do arroz e metalurgia
- Contato com China e Coreia
- Formação de clãs familiares

## O Período Heian (794-1185)

Idade de ouro da cultura japonesa:

- **Corte Imperial**: Centro de poder em Kyoto
- **Literatura**: "O Conto de Genji" (primeiro romance do mundo)
- **Arte**: Pintura, poesia e caligrafia
- **Budismo**: Influência crescente na sociedade

## O Sistema Feudal Japonês

### Hierarquia Social
- **Imperador**: Figura cerimonial, sem poder real
- **Shogun**: Líder militar, verdadeiro governante
- **Daimyo**: Senhores feudais regionais
- **Samurai**: Guerreiros da classe nobre
- **Camponeses**: Maioria da população
- **Comerciantes**: Classe mais baixa (paradoxalmente ricos)

## Os Samurais

Guerreiros que seguiram um código de honra rigoroso:

- **Bushido**: "Caminho do guerreiro"
- **Lealdade**: Ao senhor feudal acima de tudo
- **Honra**: Morte antes da desonra
- **Artes Marciais**: Domínio da espada (katana)
- **Zen Budismo**: Influência espiritual

## O Xogunato

### Xogunato Kamakura (1185-1333)
- Primeiro governo militar
- Minamoto no Yoritomo
- Invasões mongóis repelidas

### Xogunato Ashikaga (1336-1573)
- Período de guerras civis
- Desenvolvimento do teatro Noh
- Comércio com China

### Xogunato Tokugawa (1603-1868)
- Unificação do Japão
- Política de isolamento (sakoku)
- Período de paz e estabilidade
- Desenvolvimento das artes e cultura urbana`,
        duration: 25,
        order: 3,
        quiz: {
          questions: [
            {
              question: `(ENEM 2022) No Japão feudal, o código de honra dos samurais, conhecido como Bushido, valorizava:

- (A) o acúmulo de riquezas materiais acima de tudo.
- (B) a lealdade ao senhor feudal e a honra pessoal.
- (C) a paz e a não-violência como princípios supremos.
- (D) a igualdade entre todas as classes sociais.
- (E) o comércio como atividade mais importante.`,
              options: '["O acúmulo de riquezas materiais acima de tudo", "A lealdade ao senhor feudal e a honra pessoal", "A paz e a não-violência como princípios supremos", "A igualdade entre todas as classes sociais"]',
              answer: 1,
              explanation: 'O Bushido valorizava a lealdade ao senhor feudal, a honra pessoal, a coragem e a retidão, sendo a morte preferível à desonra.',
              order: 1
            },
            {
              question: `(ENEM 2023) O Xogunato Tokugawa (1603-1868) implementou uma política de isolamento do Japão em relação ao mundo exterior. Essa política, conhecida como sakoku, tinha como objetivo:

- (A) facilitar o comércio com as potências europeias.
- (B) permitir a livre circulação de missionários cristãos.
- (C) manter o controle social e evitar influências externas.
- (D) promover a industrialização do país.
- (E) expandir o território japonês para o continente.`,
              options: '["Facilitar o comércio com as potências europeias", "Permitir a livre circulação de missionários cristãos", "Manter o controle social e evitar influências externas", "Promover a industrialização do país"]',
              answer: 2,
              explanation: 'A política sakoku visava manter o controle social interno e evitar influências externas, especialmente do cristianismo e do colonialismo europeu.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Impérios Asiáticos: Mongóis, Mughais e Expansão',
        content: `# Impérios Asiáticos: Mongóis, Mughais e Expansão

## O Império Mongol (1206-1368)

O maior império terrestre da história:

### Genghis Khan (c. 1162-1227)
- Unificação das tribos mongóis
- Código de leis (Yasa)
- Tolerância religiosa
- Sistema postal eficiente

### Expansão Mongol
- **Ásia Central**: Destruição de cidades como Samarcanda
- **China**: Dinastia Yuan (1271-1368)
- **Rússia**: Domínio por 240 anos (Tártaro-Mongol)
- **Pérsia**: Ilcanato mongol

### Legado Mongol
- **Pax Mongolica**: Período de paz e comércio
- **Rota da Seda**: Reaberta e segura
- **Intercâmbio cultural**: Tecnologias, religiões, doenças
- **Declínio**: Fragmentação e assimilação cultural

## O Império Mughal na Índia (1526-1857)

Império islâmico no subcontinente indiano:

### Fundação
- **Babur**: Descendente de Genghis Khan e Tamerlão
- **Batalha de Panipat (1526)**: Derrota do Sultanato de Delhi
- **Akbar, o Grande**: Expansão e tolerância religiosa

### Características
- **Arquitetura**: Taj Mahal, Forte Vermelho
- **Arte**: Miniaturas, poesia urdu
- **Administração**: Sistema de mansabdari
- **Religião**: Tolerância inicial, depois conflitos

### Declínio
- **Aurangzeb**: Intolerância religiosa
- **Rebeliões**: Sikhs, Marathas
- **Colonização**: Companhia Britânica das Índias Orientais

## A Rota da Seda

Caminho comercial entre Ásia e Europa:

### Produtos Comercializados
- **Do Oriente**: Seda, especiarias, porcelana, papel
- **Do Ocidente**: Ouro, prata, lã, vidro

### Impacto Cultural
- **Religiões**: Budismo, Islamismo, Cristianismo
- **Tecnologias**: Pólvora, bússola, imprensa
- **Doenças**: Peste Negra (século XIV)

### Cidades Importantes
- **Samarcanda**: Centro cultural islâmico
- **Chang'an (Xi'an)**: Capital chinesa
- **Constantinopla**: Ponte entre Oriente e Ocidente

## A Colonização Europeia na Ásia

### Portugueses na Ásia (século XVI)
- **Malaca**: Controle do comércio de especiarias
- **Goa**: Capital na Índia
- **Macau**: Base na China
- **Japão**: Primeiros europeus a chegar

### Companhias de Comércio
- **Holandesa (VOC)**: Indonésia
- **Britânica (EIC)**: Índia
- **Francesa**: Indochina

### Consequências
- **Exploração econômica**: Matérias-primas
- **Culturas híbridas**: Sincretismo religioso
- **Resistência**: Movimentos nativistas`,
        duration: 25,
        order: 4,
        quiz: {
          questions: [
            {
              question: `(ENEM 2024) O Império Mongol, sob Genghis Khan, foi o maior império terrestre da história. Uma das características desse império era:

- (A) a intolerância religiosa e perseguição sistemática.
- (B) a proibição do comércio entre os povos conquistados.
- (C) a tolerância religiosa e manutenção das culturas locais.
- (D) a destruição de todas as cidades conquistadas.
- (E) a imposição do budismo como religião oficial.`,
              options: '["A intolerância religiosa e perseguição sistemática", "A proibição do comércio entre os povos conquistados", "A tolerância religiosa e manutenção das culturas locais", "A destruição de todas as cidades conquistadas"]',
              answer: 2,
              explanation: 'O Império Mongol era conhecido pela tolerância religiosa e pela manutenção das culturas locais dos povos conquistados, desde que pagassem tributos.',
              order: 1
            },
            {
              question: `(ENEM 2023) A Rota da Seda foi fundamental para o intercâmbio cultural e comercial entre Oriente e Ocidente. Além de produtos comerciais, a Rota da Seda também permitiu:

- (A) apenas o transporte de seda chinesa.
- (B) a difusão de religiões como o budismo e o islamismo.
- (C) a unificação política de toda a Ásia.
- (D) a proibição do contato entre diferentes culturas.
- (E) a eliminação de todas as diferenças culturais.`,
              options: '["Apenas o transporte de seda chinesa", "A difusão de religiões como o budismo e o islamismo", "A unificação política de toda a Ásia", "A proibição do contato entre diferentes culturas"]',
              answer: 1,
              explanation: 'A Rota da Seda não era apenas comercial, mas também cultural, permitindo a difusão de religiões como o budismo, islamismo e cristianismo, além de tecnologias.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Ásia Contemporânea: Revoluções e Ascensão Econômica',
        content: `# Ásia Contemporânea: Revoluções e Ascensão Econômica

## A Revolução Chinesa (1949)

### Antecedentes
- **Guerra Civil**: Nacionalistas (Chiang Kai-shek) vs. Comunistas (Mao Tsé-Tung)
- **Invasão Japonesa (1937-1945)**: Segunda Guerra Sino-Japonesa
- **Fome e pobreza**: Crise social generalizada

### A Revolução Comunista
- **Partido Comunista Chinês (PCC)**: Fundado em 1921
- **Mao Tsé-Tung**: Líder da revolução
- **1º de outubro de 1949**: Proclamação da República Popular da China
- **Reforma agrária**: Confisco de terras dos latifundiários

### Consequências
- **Grande Salto Adiante (1958-1962)**: Industrialização forçada, fome
- **Revolução Cultural (1966-1976)**: Perseguição a intelectuais
- **Abertura econômica (1978)**: Deng Xiaoping, "socialismo com características chinesas"

## A Guerra da Coreia (1950-1953)

### Divisão da Coreia
- **Paralelo 38**: Divisão após Segunda Guerra Mundial
- **Coreia do Norte**: Comunista, apoiada por URSS e China
- **Coreia do Sul**: Capitalista, apoiada por EUA

### O Conflito
- **Invasão norte-coreana (1950)**: Unificação forçada
- **Intervenção da ONU**: Liderada pelos EUA
- **Entrada da China (1950)**: Volta ao paralelo 38
- **Armistício (1953)**: Sem tratado de paz

### Legado
- **Tensão permanente**: Zona Desmilitarizada (DMZ)
- **Desenvolvimento desigual**: Sul industrializado, Norte isolado
- **Nuclearização**: Programa nuclear norte-coreano

## A Guerra do Vietnã (1955-1975)

### Contexto
- **Colonização francesa**: Indochina Francesa
- **Divisão do Vietnã**: Norte comunista, Sul capitalista
- **Guerra Fria**: Conflito por procuração

### O Conflito
- **Vietcong**: Guerrilha comunista no Sul
- **Intervenção americana (1965)**: Bombardeios e tropas
- **Ofensiva do Tet (1968)**: Virada na opinião pública
- **Acordos de Paz de Paris (1973)**: Retirada americana
- **Queda de Saigon (1975)**: Unificação comunista

### Consequências
- **Vietnã unificado**: República Socialista
- **Refugiados**: "Boat people"
- **Impacto nos EUA**: Crise de confiança, síndrome do Vietnã

## Os Tigres Asiáticos

Países que se industrializaram rapidamente:

### Tigres (anos 1960-1990)
- **Coreia do Sul**: Chaebols (Samsung, Hyundai)
- **Taiwan**: Tecnologia e eletrônicos
- **Hong Kong**: Centro financeiro
- **Singapura**: Portos e comércio

### Características
- **Investimento em educação**: Alta taxa de alfabetização
- **Exportações**: Foco em manufatura
- **Estado intervencionista**: Planejamento econômico
- **Cultura do trabalho**: Longas jornadas

## A Ascensão da China e Índia

### China (anos 1980-presente)
- **Reformas de Deng Xiaoping**: Zonas Econômicas Especiais
- **Crescimento médio de 10% ao ano**: Por 30 anos
- **Maior economia do mundo (PPC)**: Desde 2014
- **Belt and Road Initiative**: Nova Rota da Seda

### Índia (anos 1990-presente)
- **Liberalização econômica (1991)**: Fim do License Raj
- **Setor de TI**: Bangalore, "Silicon Valley indiano"
- **Demografia jovem**: Bônus demográfico
- **Potência nuclear**: Desde 1974

## Desafios Contemporâneos

### Meio Ambiente
- **Poluição**: Cidades mais poluídas do mundo
- **Mudanças climáticas**: Emissões de CO2
- **Recursos hídricos**: Escassez em algumas regiões

### Geopolítica
- **Mar do Sul da China**: Disputas territoriais
- **Coreia do Norte**: Programa nuclear
- **Índia-Paquistão**: Conflito pela Caxemira`,
        duration: 25,
        order: 5,
        quiz: {
          questions: [
            {
              question: `(ENEM 2024) A Revolução Chinesa de 1949, liderada por Mao Tsé-Tung, estabeleceu a República Popular da China. Uma das principais consequências dessa revolução foi:

- (A) a adoção do capitalismo como sistema econômico.
- (B) a implementação de reformas agrárias e coletivização.
- (C) a manutenção do sistema feudal de terras.
- (D) a aliança com os Estados Unidos contra a URSS.
- (E) a proibição de qualquer forma de industrialização.`,
              options: '["A adoção do capitalismo como sistema econômico", "A implementação de reformas agrárias e coletivização", "A manutenção do sistema feudal de terras", "A aliança com os Estados Unidos contra a URSS"]',
              answer: 1,
              explanation: 'A Revolução Chinesa implementou reformas agrárias, confiscando terras dos latifundiários e coletivizando a agricultura, além de estabelecer um regime comunista.',
              order: 1
            },
            {
              question: `(ENEM 2023) Os "Tigres Asiáticos" (Coreia do Sul, Taiwan, Hong Kong e Singapura) se destacaram no cenário econômico mundial a partir dos anos 1960. Uma das características desse modelo de desenvolvimento foi:

- (A) a rejeição ao comércio internacional.
- (B) o foco em exportações de manufatura e investimento em educação.
- (C) a dependência exclusiva de recursos naturais.
- (D) a ausência de planejamento estatal na economia.
- (E) a manutenção de economias agrárias e pré-industriais.`,
              options: '["A rejeição ao comércio internacional", "O foco em exportações de manufatura e investimento em educação", "A dependência exclusiva de recursos naturais", "A ausência de planejamento estatal na economia"]',
              answer: 1,
              explanation: 'Os Tigres Asiáticos se caracterizaram pelo foco em exportações de manufatura, forte investimento em educação e intervenção estatal no planejamento econômico.',
              order: 2
            }
          ]
        }
      }
    ]
  }
];

async function main() {
  console.log('🌱 Iniciando seed do Módulo: História da Ásia...');
  console.log('📚 Baseado na Matriz de Referência do ENEM/MEC');

  // Criar módulo e aulas
  for (const moduleData of modulesData) {
    const createdModule = await prisma.module.create({
      data: {
        title: moduleData.title,
        description: moduleData.description,
        icon: moduleData.icon,
        color: moduleData.color,
        order: moduleData.order,
      },
    });

    console.log(`✅ Módulo ${moduleData.order}: ${moduleData.title}`);

    for (const lessonData of moduleData.lessons) {
      const createdLesson = await prisma.lesson.create({
        data: {
          moduleId: createdModule.id,
          title: lessonData.title,
          content: lessonData.content,
          duration: lessonData.duration,
          order: lessonData.order,
        },
      });

      console.log(`  📖 Aula: ${lessonData.title}`);

      // Criar quiz se existir
      if (lessonData.quiz) {
        const createdQuiz = await prisma.quiz.create({
          data: {
            lessonId: createdLesson.id,
          },
        });

        for (const questionData of lessonData.quiz.questions) {
          await prisma.quizQuestion.create({
            data: {
              quizId: createdQuiz.id,
              question: questionData.question,
              options: questionData.options,
              answer: questionData.answer,
              explanation: questionData.explanation,
              order: questionData.order,
            },
          });
        }

        console.log(`    ❓ Quiz criado com ${lessonData.quiz.questions.length} questões`);
      }
    }
  }

  console.log('🎉 Seed do Módulo História da Ásia concluído!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
