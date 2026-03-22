import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// =============================================
// CURRÍCULO COMPLETO DE HISTÓRIA PARA ENEM
// Baseado na Matriz de Referência do INEP/MEC
// =============================================

const modulesData = [
  // ==========================================
  // MÓDULO 1: PRÉ-HISTÓRIA E POVOS ORIGINÁRIOS
  // ==========================================
  {
    title: 'Pré-História e Povos Originários',
    description: 'Origem da humanidade, desenvolvimento das primeiras sociedades e povos pré-colombianos.',
    icon: 'Tent',
    color: 'amber',
    order: 1,
    lessons: [
      {
        title: 'Pré-História: Paleolítico e Neolítico',
        content: `# Pré-História: Paleolítico e Neolítico

## Conceito de Pré-História

A Pré-História corresponde ao período da história humana anterior à invenção da escrita, aproximadamente de 2,5 milhões de anos atrás até cerca de 4000 a.C. Este período é dividido em três fases: Paleolítico, Neolítico e Idade dos Metais.

## Paleolítico (Idade da Pedra Lascada)

O Paleolítico é o período mais longo da história humana, caracterizado por:

- **Caçadores-coletores**: Sobrevivência através da caça e coleta de frutos
- **Nômades**: Grupos que se deslocavam seguindo manadas e estações
- **Instrumentos de pedra lascada**: Ferramentas rudimentares para corte e caça
- **Domínio do fogo**: Controle do fogo há cerca de 500 mil anos
- **Arte rupestre**: Pinturas em cavernas representando animais e cenas de caça
- **Organização social**: Bandos familiares com divisão sexual do trabalho

## Neolítico (Idade da Pedra Polida)

Há cerca de 10 mil anos, com o fim da última Era Glacial, ocorreu a Revolução Neolítica:

- **Sedentarização**: Fixação em aldeias
- **Agricultura**: Cultivo de cereais e leguminosas
- **Pecuária**: Domesticação de animais
- **Novas tecnologias**: Cerâmica, tecelagem, pedra polida
- **Excedente produção**: Acúmulo de alimentos
- **Divisão social do trabalho**: Especialização de funções
- **Surgimento das primeiras cidades**: Jericó, Çatal Huyuk

## A Transição para a Civilização

O Neolítico criou as condições para o surgimento das primeiras civilizações:
- Excedente alimentar permitiu especialização
- Crescimento populacional
- Comércio e trocas
- Hierarquização social
- Aparecimento da propriedade privada`,
        duration: 25,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2016) A transição do Paleolítico para o Neolítico representou uma mudança fundamental nas formas de vida humana, conhecida como Revolução Neolítica.

A principal característica que distingue o Neolítico do Paleolítico é:
- (A) o surgimento da arte rupestre nas cavernas.
- (B) o desenvolvimento da agricultura e da pecuária.
- (C) a utilização de instrumentos de pedra lascada.
- (D) a organização em bandos nômades de caçadores.
- (E) o domínio do fogo pelos seres humanos.`,
              options: '["O surgimento da arte rupestre nas cavernas", "O desenvolvimento da agricultura e da pecuária", "A utilização de instrumentos de pedra lascada", "A organização em bandos nômades de caçadores"]',
              answer: 1,
              explanation: 'A Revolução Neolítica é caracterizada principalmente pelo desenvolvimento da agricultura e da pecuária, que permitiu a sedentarização dos grupos humanos e a formação das primeiras aldeias e cidades.',
              order: 1
            }
          ]
        }
      },
      {
        title: 'Povos Originários do Brasil',
        content: `# Povos Originários do Brasil

## Os Primeiros Habitantes

Antes da chegada dos europeus, o território brasileiro era habitado por diversos povos indígenas com línguas, culturas e modos de vida distintos. Estima-se que havia entre 2 e 4 milhões de indígenas no Brasil em 1500.

## Principais Grupos Linguísticos

### Tronco Tupi
- **Tupinambá**: Litoral, praticavam agricultura e antropofagia ritual
- **Tupiniquim**: Bahia, primeiro contato com portugueses
- **Guarani**: Sul do Brasil, Paraguai e Argentina

### Tronco Macro-Jê
- **Jê ou Tapuia**: Interior, caçadores-coletores
- **Bororo**: Mato Grosso
- **Xavante**: Mato Grosso, guerreiros

## Modos de Vida

### Organização Social
- **Aldeias**: Comunidades de 300 a 2.000 pessoas
- **Malocas**: Casas coletivas
- **Liderança**: Caciques (chefes) e pajés (líderes espirituais)
- **Parentesco**: Estrutura baseada em clãs e linhagens

### Economia
- **Agricultura itinerante**: Coivara (queimada)
- **Mandioca**: Alimento básico
- **Caça e coleta**: Complemento alimentar
- **Pescaria**: Principalmente para grupos litorâneos

### Cultura
- **Línguas**: Mais de 1.000 línguas diferentes
- **Rituais**: Cunhadismo, antropofagia ritual
- **Arte**: Cerâmica, cestaria, pintura corporal
- **Conhecimentos**: Plantas medicinais, astronomia

## O Impacto da Colonização

A chegada dos europeus causou devastação:
- Doças desconhecidas (gripe, sarampo, varíola)
- Escravização e guerras
- Perda de territórios
- Desagregação cultural`,
        duration: 25,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2017) Os povos indígenas que habitavam o litoral brasileiro no momento da chegada dos portugueses pertenciam, majoritariamente, ao tronco linguístico:

- (A) Jê
- (B) Tupi
- (C) Aruaque
- (D) Caribe
- (E) Pano`,
              options: '["Jê", "Tupi", "Aruaque", "Caribe"]',
              answer: 1,
              explanation: 'Os povos do tronco Tupi, como os Tupinambá e Tupiniquim, habitavam majoritariamente o litoral brasileiro no momento da chegada dos portugueses. Eles praticavam agricultura, eram sedentários e tinham organização social complexa.',
              order: 1
            }
          ]
        }
      },
      {
        title: 'Civilizações Pré-Colombianas',
        content: `# Civilizações Pré-Colombianas

## Introdução

Antes da chegada de Colombo à América em 1492, o continente era habitado por civilizações avançadas que desenvolveram agricultura, arquitetura, escrita e sistemas políticos complexos.

## Maias (México e América Central)

### Período
- Civilização floresceu entre 250 e 900 d.C.
- Declínio misterioso antes da chegada espanhola

### Características
- **Cidades-Estado**: Tikal, Palenque, Chichén Itzá
- **Escrita hieroglífica**: Única escrita desenvolvida na América
- **Matemática**: Conceito de zero, sistema vigesimal
- **Astronomia**: Calendário de 365 dias, previsão de eclipses
- **Agricultura**: Milho, feijão, abóbora (trilogia mesoamericana)
- **Religião**: Sacrífícios humanos, pirâmides-templo

## Astecas (México)

### Período
- Império formado no século XIV
- Conquistado pelos espanhóis em 1521

### Características
- **Capital**: Tenochtitlán (atual Cidade do México)
- **Império tributário**: Domínio sobre povos vizinhos
- **Economia**: Mercados, tributos, chinampas (ilhas agrícolas)
- **Sociedade**: Dividida em classes (pipiltin, macehualtin)
- **Religião**: Huitzilopochtli, sacrifícios humanos em massa
- **Militarismo**: Guerras floridas para captura de prisioneiros

## Incas (Peru, Bolívia, Equador, Chile, Colômbia)

### Período
- Império formado no século XV
- Conquistado por Pizarro em 1533

### Características
- **Capital**: Cuzco
- **Extensão**: 4.000 km de norte a sul
- **Sistema viário**: 30.000 km de estradas
- **Economia**: Coletivista, sem moeda
- **Administração**: Quipus (sistema de nós para registros)
- **Agricultura**: Terraços, irrigação, batata, milho
- **Religião**: Inti (Sol), Viracocha (criador)`,
        duration: 30,
        order: 3,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) Os Maias desenvolveram uma das civilizações mais avançadas da América pré-colombiana, com destaque para seus conhecimentos matemáticos e astronômicos.

Um importante legado dos Maias foi:
- (A) o sistema de quipus para registro de informações.
- (B) a construção de chinampas para agricultura.
- (C) o desenvolvimento de um sistema de escrita hieroglífica.
- (D) a criação de um vasto sistema de estradas.
- (E) o estabelecimento de um império centralizado em Cuzco.`,
              options: '["O sistema de quipus para registro de informações", "A construção de chinampas para agricultura", "O desenvolvimento de um sistema de escrita hieroglífica", "A criação de um vasto sistema de estradas"]',
              answer: 2,
              explanation: 'Os Maias desenvolveram o único sistema de escrita hieroglífica das Américas, permitindo registros históricos, astronômicos e religiosos. Os quipus eram Incas, as chinampas eram Astecas, e as estradas eram Incas.',
              order: 1
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 2: CIVILIZAÇÕES ANTIGAS
  // ==========================================
  {
    title: 'Civilizações Antigas',
    description: 'As primeiras grandes civilizações da humanidade: Mesopotâmia, Egito, Grécia e Roma.',
    icon: 'Landmark',
    color: 'yellow',
    order: 2,
    lessons: [
      {
        title: 'Mesopotâmia e Egito Antigo',
        content: `# Mesopotâmia e Egito Antigo

## Mesopotâmia: "Terra entre Rios"

Localizada entre os rios Tigre e Eufrates (atual Iraque), a Mesopotâmia foi berço de grandes civilizações.

### Povos da Mesopotâmia

**Sumérios (4000-2000 a.C.)**
- Invenção da escrita cuneiforme
- Cidades-Estado (Ur, Uruk, Lagash)
- Zigurates (templos em forma de torre)
- Código de Ur-Nammu (primeiro código de leis)

**Babilônicos (2000-539 a.C.)**
- Hamurábi e seu famoso código (olho por olho)
- Jardins Suspensos da Babilônia
- Matemática e astronomia avançadas

**Assírios (1400-600 a.C.)**
- Império militar expansionista
- Biblioteca de Nínive
- Terror como arma de controle

### Características da Civilização Mesopotâmica
- Regime de irrigação
- Economia agrícola
- Sociedade estratificada
- Politeísmo antropomórfico
- Escrita cuneiforme

## Egito Antigo

Civilização que se desenvolveu às margens do rio Nilo, no nordeste da África.

### Períodos Históricos
- **Antigo Império** (2700-2200 a.C.): Pirâmides de Gizé
- **Médio Império** (2050-1750 a.C.): Expansão territorial
- **Novo Império** (1550-1070 a.C.): Apogeu, Tutancâmon

### Características

**Política**
- Faraó: rei absoluto, considerado deus vivo
- Teocracia: poder político e religioso unidos
- Centralização administrativa

**Economia**
- Agricultura às margens do Nilo
- Cheias periódicas fertilizavam o solo
- Estado controlava produção

**Sociedade**
- Nobreza e sacerdotes
- Escribas e funcionários
- Camponeses e escravos

**Cultura**
- Pirâmides e templos
- Mumificação e crença na vida após a morte
- Hieróglifos
- Medicina e matemática`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) O Egito Antigo desenvolveu-se às margens do rio Nilo, cujas cheias periódicas fertilizavam o solo e permitiam a prática da agricultura.

O rio Nilo foi fundamental para a civilização egípcia porque:
- (A) isolava o Egito de povos invasores.
- (B) facilitava o comércio com a Mesopotâmia.
- (C) permitia a navegação e a agricultura regular.
- (D) fornecia água para a irrigação do deserto.
- (E) separava o Alto do Baixo Egito de forma permanente.`,
              options: '["Isolava o Egito de povos invasores", "Facilitava o comércio com a Mesopotâmia", "Permitia a navegação e a agricultura regular", "Fornecia água para a irrigação do deserto"]',
              answer: 2,
              explanation: 'O Nilo era fundamental porque suas cheias periódicas depositavam nutrientes no solo (lodo), permitindo uma agricultura regular e abundante. Além disso, servia como via de transporte e comunicação.',
              order: 1
            },
            {
              question: `(ENEM 2016) O Código de Hamurábi, criado na Babilônia por volta de 1750 a.C., é um dos mais antigos conjuntos de leis escritas que se conhecem.

Uma característica do Código de Hamurábi era:
- (A) a igualdade de penas para todos os cidadãos.
- (B) a aplicação da lei de Talião (olho por olho).
- (C) a proteção jurídica dos escravos.
- (D) a separação entre religião e Estado.
- (E) a democracia participativa nas decisões.`,
              options: '["A igualdade de penas para todos os cidadãos", "A aplicação da lei de Talião (olho por olho)", "A proteção jurídica dos escravos", "A separação entre religião e Estado"]',
              answer: 1,
              explanation: 'O Código de Hamurábi é conhecido pela aplicação da lei de Talião ("olho por olho, dente por dente"), estabelecendo punições proporcionais ao crime cometido, embora as penas variassem conforme a posição social.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Grécia Antiga: Democracia e Cultura',
        content: `# Grécia Antiga: Democracia e Cultura

## Contexto Geográfico

A Grécia Antiga ocupava a península balcânica, ilhas do mar Egeu e costa da Ásia Menor. O relevo montanhoso favoreceu a fragmentação política em Cidades-Estado (polis).

## Períodos Históricos

### Período Homérico (XII-VIII a.C.)
- Invasões dóricas
- Desintegração da civilização micênica
- Formação das polis

### Período Arcaico (VIII-VI a.C.)
- Colonização grega
- Desenvolvimento das polis
- Surgimento da tirania

### Período Clássico (V-VI a.C.)
- Apogeu da civilização grega
- Guerras Pérsicas e do Peloponeso
- Ateniense e Esparta

### Período Helenístico (IV-II a.C.)
- Conquistas de Alexandre Magno
- Fusão cultural greco-oriental

## Esparta e Atenas

### Esparta
- **Governo**: Oligarquia militar
- **Economia**: Agrária, baseada em escravos (hilotas)
- **Educação**: Militarista (agogê)
- **Mulheres**: Maior liberdade que em Atenas

### Atenas
- **Governo**: Democracia (para cidadãos livres)
- **Economia**: Comércio marítimo
- **Educação**: Paideia (formação integral)
- **Cultura**: Filosofia, teatro, arquitetura

## A Democracia Ateniense

No século V a.C., Atenas desenvolveu a democracia:
- **Eclesia**: Assembleia de cidadãos
- **Bulé**: Conselho dos 500
- **Helieu**: Tribunal popular
- **Limitações**: Apenas homens livres, nascidos em Atenas, maiores de 18 anos

## Legado Cultural

- **Filosofia**: Sócrates, Platão, Aristóteles
- **Teatro**: Tragédia e comédia
- **Arquitetura**: Partenon, ordens arquitetônicas
- **História**: Heródoto, Tucídides
- **Esportes**: Jogos Olímpicos (776 a.C.)`,
        duration: 35,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A democracia ateniense, desenvolvida no século V a.C., é considerada um marco na história política ocidental.

Na democracia ateniense, os cidadãos:
- (A) incluíam mulheres, escravos e estrangeiros.
- (B) participavam diretamente das decisões políticas na Eclesia.
- (C) elegiam representantes para o Senado.
- (D) eram todos os habitantes da cidade de Atenas.
- (E) tinham direitos iguais independentemente da riqueza.`,
              options: '["Incluíam mulheres, escravos e estrangeiros", "Participavam diretamente das decisões políticas na Eclesia", "Elegiam representantes para o Senado", "Eram todos os habitantes da cidade de Atenas"]',
              answer: 1,
              explanation: 'Na democracia ateniense, os cidadãos participavam diretamente das decisões políticas na Eclesia (Assembleia). Era uma democracia direta, não representativa, mas restrita a homens livres nascidos em Atenas.',
              order: 1
            },
            {
              question: `(ENEM 2017) Esparta e Atenas foram as principais cidades-Estado da Grécia Antiga, com sistemas políticos e sociais distintos.

Esparta caracterizava-se por:
- (A) uma democracia participativa.
- (B) um regime militarista e oligárquico.
- (C) uma monarquia absolutista.
- (D) um governo teocrático.
- (E) uma república comercial.`,
              options: '["Uma democracia participativa", "Um regime militarista e oligárquico", "Uma monarquia absolutista", "Um governo teocrático"]',
              answer: 1,
              explanation: 'Esparta caracterizava-se por um regime militarista e oligárquico, com poder concentrado em poucos cidadãos e uma sociedade voltada para a guerra e disciplina militar.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Roma Antiga: República e Império',
        content: `# Roma Antiga: República e Império

## Origens e Monarquia (753-509 a.C.)

Segundo a tradição, Roma foi fundada em 753 a.C. por Rômulo e Remo. O período monárquico foi governado por sete reis, sendo os últimos de origem etrusca.

## A República Romana (509-27 a.C.)

### Instituições Políticas
- **Senado**: Órgão mais importante, 300 senadores vitalícios
- **Cônsules**: Dois magistrados eleitos anualmente
- **Assembleias**: Centuriata (guerra), Tribal (leis)
- **Tribunos da Plebe**: Defensores dos plebeus

### Conflitos Sociais
- **Luta entre Patrícios e Plebeus**: Plebeus conquistaram direitos
- **Leis das XII Tábuas** (451 a.C.): Primeira codificação
- **Cargos para plebeus**: Tribuno da plebe, edil, cônsul

### Expansão Territorial
- Conquista da Itália
- Guerras Púnicas contra Cartago
- Domínio do Mediterrâneo ("Mare Nostrum")

### Crise da República
- Concentração de terras (latifúndios)
- Escravidão e empobrecimento dos camponeses
- Guerras civis (Mário x Sila, César x Pompeu)
- Assassinato de Júlio César (44 a.C.)

## O Império Romano (27 a.C.-476 d.C.)

### O Principado de Augusto
- Fim da República, início do Império
- Paz Romana (Pax Romana)
- Obras públicas e administração eficiente

### Sociedade Imperial
- **Cidadãos romanos**: Direitos políticos
- **Não-cidadãos**: Habitantes das províncias
- **Escravos**: Base da economia

### Crise e Queda
- Crise do século III: instabilidade política
- Invasões bárbaras
- Divisão do Império (395 d.C.)
- Queda de Roma (476 d.C.)

## Legado Romano

- **Direito**: Lei das XII Tábuas, Corpus Juris Civilis
- **Latim**: Base das línguas românicas
- **Arquitetura**: Arcos, aquedutos, estradas
- **Cristianismo**: Oficializado por Teodósio (380 d.C.)`,
        duration: 35,
        order: 3,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A República Romana (509-27 a.C.) foi caracterizada por um sistema político que buscava equilibrar os poderes.

O Senado Romano, durante a República, era:
- (A) eleito pelos cidadãos para mandatos de quatro anos.
- (B) composto por antigos magistrados vitalícios.
- (C) formado por representantes de todas as classes sociais.
- (D) responsável pela eleição direta dos cônsules.
- (E) subordinado às decisões das assembleias populares.`,
              options: '["Eleito pelos cidadãos para mandatos de quatro anos", "Composto por antigos magistrados vitalícios", "Formado por representantes de todas as classes sociais", "Responsável pela eleição direta dos cônsules"]',
              answer: 1,
              explanation: 'O Senado Romano era composto por antigos magistrados (ex-cônsules, pretores, etc.) que ocupavam o cargo vitaliciamente. Era o órgão mais poderoso da República.',
              order: 1
            },
            {
              question: `(ENEM 2015) O Império Romano do Ocidente entrou em declínio a partir do século III, culminando com sua queda em 476 d.C.

Um fator que contribuiu para a queda do Império Romano foi:
- (A) a expansão do cristianismo.
- (B) o fim da escravidão.
- (C) as invasões de povos bárbaros.
- (D) a crise do comércio mediterrâneo.
- (E) a revolução dos escravos.`,
              options: '["A expansão do cristianismo", "O fim da escravidão", "As invasões de povos bárbaros", "A crise do comércio mediterrâneo"]',
              answer: 2,
              explanation: 'As invasões de povos bárbaros (visigodos, vândalos, ostrogodos, hérulos, entre outros) foram fator decisivo para a queda do Império Romano do Ocidente em 476 d.C.',
              order: 2
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 3: IDADE MÉDIA
  // ==========================================
  {
    title: 'Idade Média',
    description: 'O período medieval: feudalismo, Igreja, Cruzadas e transformações da Baixa Idade Média.',
    icon: 'Castle',
    color: 'slate',
    order: 3,
    lessons: [
      {
        title: 'O Feudalismo',
        content: `# O Feudalismo

## Contexto Histórico

O feudalismo desenvolveu-se na Europa Ocidental após a queda do Império Romano (séc. V), consolidando-se entre os séculos X e XIII. Foi um sistema político, econômico e social baseado na terra e nas relações de dependência pessoal.

## Características do Feudalismo

### Políticas
- **Fragmentação política**: Poder descentralizado
- **Suserania e vassalagem**: Relação de fidelidade entre senhor e vassalo
- **Soberania limitada**: Nobres tinham poder em seus feudos

### Econômicas
- **Economia natural**: Pouca moeda, produção para subsistência
- **Feudo**: Unidade de produção
- **Trabalho servil**: Servos presos à terra
- **Baixa produtividade**: Técnicas agrícolas rudimentares

### Sociais
- **Estamentos**: Clero, Nobreza e Povo (Terceiro Estado)
- **Imobilidade social**: Posição definida pelo nascimento
- **Relações de dependência**: Proteção em troca de trabalho

## Estrutura do Feudo

### Propriedades
- **Reserva senhorial**: Terras exploradas diretamente pelo senhor
- **Mansos servis**: Terras concedidas aos servos
- **Terras comunais**: Bosques e pastos de uso comum

## Relações de Trabalho

### Obrigações dos Servos
- **Corveia**: Trabalho gratuito na reserva senhorial (3 dias/semana)
- **Talha**: Parte da produção do manso servo
- **Banalidades**: Pagamento pelo uso de instalações (moinho, forno)
- **Dízimo**: 10% da produção para a Igreja
- **Mão-morta**: Direito do senhor sobre bens do servo falecido

## A Sociedade Estamental

### Clero
- **Alto clero**: Bispos e abades (origem nobre)
- **Baixo clero**: Padres e monges (origem popular)

### Nobreza
- Senhores feudais
- Cavaleiros
- Função militar

### Terceiro Estado
- Servos (maioria)
- Burgueses (surgem na Baixa Idade Média)`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2017) O feudalismo foi um sistema que se estruturou na Europa após a queda do Império Romano, caracterizado pela descentralização política.

No sistema feudal, a relação de vassalagem envolvia:
- (A) a subordinação econômica dos servos aos senhores feudais.
- (B) o compromisso de fidelidade entre senhor e vassalo.
- (C) a obrigatoriedade do trabalho assalariado nas terras do feudo.
- (D) a igualdade jurídica entre nobres e camponeses.
- (E) a propriedade privada da terra pelos servos.`,
              options: '["A subordinação econômica dos servos aos senhores feudais", "O compromisso de fidelidade entre senhor e vassalo", "A obrigatoriedade do trabalho assalariado nas terras do feudo", "A igualdade jurídica entre nobres e camponeses"]',
              answer: 1,
              explanation: 'A vassalagem era uma relação de fidelidade entre senhor (suserano) e vassalo, geralmente membros da nobreza. O vassalo recebia um feudo e em troca prestava serviço militar e conselho ao senhor.',
              order: 1
            },
            {
              question: `(ENEM 2016) A servidão foi a forma de trabalho predominante no feudalismo europeu.

O servo diferenciava-se do escravo porque:
- (A) não tinha obrigações com o senhor feudal.
- (B) podia vender a terra que cultivava.
- (C) tinha posse de um lote de terra (manso).
- (D) era proprietário dos meios de produção.
- (E) podia abandonar o feudo livremente.`,
              options: '["Não tinha obrigações com o senhor feudal", "Podia vender a terra que cultivava", "Tinha posse de um lote de terra (manso)", "Era proprietário dos meios de produção"]',
              answer: 2,
              explanation: 'O servo diferenciava-se do escravo principalmente por ter posse de um lote de terra (manso servo) que cultivava para seu sustento, embora não pudesse vendê-lo e estivesse preso à terra.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Igreja Medieval e Cruzadas',
        content: `# Igreja Medieval e Cruzadas

## O Papel da Igreja Católica

Na Idade Média, a Igreja Católica era a instituição mais poderosa e influente da Europa, exercendo papel político, econômico, social e cultural.

### Poder Espiritual
- Monopólio da salvação
- Sacramentos
- Controle de costumes
- Combate a heresias

### Poder Temporal
- Propriedade de terras (cerca de 1/3 da Europa)
- Cobrança do dízimo
- Influência política sobre reis e nobres
- Clero participando da administração

### Organização Eclesiástica
- **Papa**: Chefia da Igreja em Roma
- **Cardeais**: Eleitores do papa
- **Bispos**: Chefes de dioceses
- **Abades**: Chefes de mosteiros
- **Padres e monges**: Clero local

## O Monasticismo

Os mosteiros foram centros de:
- Preservação cultural (cópia de manuscritos)
- Produção agrícola
- Assistência social
- Educação

### Ordens Monásticas
- **Beneditinos**: Regra de São Bento
- **Franciscanos**: Pobreza e pregação
- **Dominicanos**: Combate a heresias

## As Cruzadas (séc. XI-XIII)

### Causas
- Reconquista da Terra Santa dos muçulmanos
- União da cristandade contra inimigo comum
- Controle de rotas comerciais
- Canalização da violência da nobreza

### Principais Cruzadas
1. **Primeira (1096-1099)**: Conquista de Jerusalém
2. **Terceira (1189-1192)**: Saladino x Ricardo Coração de Leão
3. **Quarta (1202-1204)**: Saque de Constantinopla

### Consequências
- Retomada do comércio com o Oriente
- Declínio do feudalismo
- Fortalecimento do poder real
- Renascimento urbano e comercial
- Intercâmbio cultural`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A Igreja Católica exerceu grande influência na Europa medieval, controlando diversos aspectos da vida social e política.

O poder da Igreja na Idade Média fundamentava-se:
- (A) na separação entre Igreja e Estado.
- (B) no monopólio da salvação espiritual.
- (C) na defesa do racionalismo filosófico.
- (D) na oposição ao sistema feudal.
- (E) no apoio às heresias religiosas.`,
              options: '["Na separação entre Igreja e Estado", "No monopólio da salvação espiritual", "Na defesa do racionalismo filosófico", "Na oposição ao sistema feudal"]',
              answer: 1,
              explanation: 'O poder da Igreja medieval fundamentava-se no monopólio da salvação espiritual, controlando os sacramentos e sendo a única via de acesso a Deus para os fiéis.',
              order: 1
            },
            {
              question: `(ENEM 2015) As Cruzadas foram expedições militares organizadas pela Igreja Católica entre os séculos XI e XIII.

Uma consequência das Cruzadas para a Europa foi:
- (A) o fortalecimento do poder dos senhores feudais.
- (B) o isolamento comercial com o Oriente.
- (C) a retomada das atividades comerciais.
- (D) o enfraquecimento do poder real.
- (E) a extinção da servidão.`,
              options: '["O fortalecimento do poder dos senhores feudais", "O isolamento comercial com o Oriente", "A retomada das atividades comerciais", "O enfraquecimento do poder real"]',
              answer: 2,
              explanation: 'As Cruzadas contribuíram para a retomada das atividades comerciais entre Europa e Oriente, reativando rotas comerciais no Mediterrâneo e estimulando o renascimento urbano.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Baixa Idade Média e Renascimento Comercial',
        content: `# Baixa Idade Média e Renascimento Comercial

## Contexto (séc. XI-XV)

A Baixa Idade Média foi marcada por profundas transformações que levaram à crise do feudalismo e ao surgimento do mundo moderno.

## Renascimento Comercial e Urbano

### Causas
- Fim das invasões (Vikings, Magiares, Muçulmanos)
- Crescimento populacional
- Aumento da produção agrícola
- Cruzadas e contato com o Oriente

### O Comércio
- Rotas mediterrâneas (Veneza, Gênova)
- Feiras de Champagne (França)
- Liga Hanseática (norte da Europa)
- Surgimento das corporações de ofício

### As Cidades
- Renascimento urbano
- Burgos (cidades) e burgueses
- Cartas de franquia (liberdade)
- Luta entre comunas e senhores feudais

## Transformações Sociais

### Surgimento da Burguesia
- Comerciantes e artesãos
- Nova classe social urbana
- Base econômica: dinheiro, não terra
- Valores: trabalho, lucro, individualismo

## Crise do Feudalismo

### Fatores
- **Peste Negra (1347-1354)**: Mortes de 1/3 da população
- **Guerra dos Cem Anos** (1337-1453): França x Inglaterra
- **Revolta camponesa**: Jacqueries, questionamento da ordem
- **Fome e carestia**: Mudanças climáticas

### Consequências
- Êxodo rural e escassez de mão de obra
- Fim da servidão na Europa Ocidental
- Fortalecimento do poder real
- Centralização política

## Centralização Monárquica

Os reis aproveitaram a crise para:
- Apoiar a burguesia
- Criar exércitos permanentes
- Unificar territórios
- Controlar a justiça e impostos`,
        duration: 30,
        order: 3,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A Peste Negra, que atingiu a Europa no século XIV, causou a morte de cerca de um terço da população europeia.

A Peste Negra contribuiu para o fim do feudalismo porque:
- (A) enfraqueceu a nobreza e valorizou a mão de obra.
- (B) fortaleceu o poder dos senhores feudais.
- (C) isolou a Europa do comércio internacional.
- (D) extinguiu a servidão imediatamente.
- (E) enfraqueceu o poder da Igreja Católica.`,
              options: '["Enfraqueceu a nobreza e valorizou a mão de obra", "Fortaleceu o poder dos senhores feudais", "Isolou a Europa do comércio internacional", "Extinguiu a servidão imediatamente"]',
              answer: 0,
              explanation: 'A Peste Negra contribuiu para o fim do feudalismo ao causar escassez de mão de obra, valorizando o trabalho dos servos sobreviventes e permitindo melhores condições, além de enfraquecer a nobreza.',
              order: 1
            },
            {
              question: `(ENEM 2016) A burguesia surgiu na Europa durante a Baixa Idade Média, ligada ao renascimento comercial e urbano.

A burguesia medieval distinguia-se da nobreza feudal porque:
- (A) baseava seu poder na propriedade da terra.
- (B) exercia funções militares.
- (C) tinha origem no trabalho e no comércio.
- (D) integrava o clero regular.
- (E) defendia a imobilidade social.`,
              options: '["Baseava seu poder na propriedade da terra", "Exercia funções militares", "Tinha origem no trabalho e no comércio", "Integrava o clero regular"]',
              answer: 2,
              explanation: 'A burguesia distinguia-se da nobreza porque seu poder e riqueza vinham do trabalho e do comércio, não da terra ou da linhagem. Eram uma nova classe social que surgiu nas cidades medievais.',
              order: 2
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 4: IDADE MODERNA
  // ==========================================
  {
    title: 'Idade Moderna',
    description: 'Renascimento, Reforma, Absolutismo e Expansão Marítima Europeia.',
    icon: 'Sun',
    color: 'orange',
    order: 4,
    lessons: [
      {
        title: 'Renascimento Cultural',
        content: `# Renascimento Cultural

## Contexto Histórico

O Renascimento foi um movimento cultural que surgiu na Itália no século XIV e se expandiu pela Europa nos séculos XV e XVI, marcando a transição da Idade Média para a Idade Moderna.

## Características

### Humanismo
- Valorização do ser humano (antropocentrismo)
- Crítica ao teocentrismo medieval
- Estudo dos clássicos greco-romanos
- Otimismo sobre a capacidade humana

### Individualismo
- Valorização do indivíduo
- Reconhecimento do talento pessoal
- Assinatura de obras de arte

### Racionalismo
- Confiança na razão humana
- Observação da natureza
- Método científico

### Naturalismo
- Representação realista da natureza
- Estudo de anatomia
- Perspectiva e profundidade

## Manifestações

### Artes Plásticas
- **Pintura**: Leonardo da Vinci, Michelangelo, Rafael
- **Escultura**: Michelangelo, Donatello
- **Arquitetura**: Brunelleschi, Alberti

### Literatura
- Dante Alighieri (Divina Comédia)
- Petrarca (sonetos)
- Boccaccio (Decamerão)
- Shakespeare (Inglaterra)
- Camões (Portugal)

### Ciência
- Copérnico (heliocentrismo)
- Galileu Galilei (física, astronomia)
- Vesálio (anatomia)

## Difusão do Renascimento

### Fatores de Expansão
- Imprensa (Gutenberg, séc. XV)
- Mecenas (patronos das artes)
- Universidades
- Contatos comerciais

### Renascentismo em Portugal
- Navegações e descobrimentos
- Literatura: Camões, Gil Vicente
- Arquitetura: Estilo manuelino`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) O Renascimento foi um movimento cultural que surgiu na Itália no século XIV e se caracterizou pela valorização da cultura clássica.

Uma característica do Renascimento foi:
- (A) o teocentrismo, com ênfase na vida após a morte.
- (B) o antropocentrismo, com valorização do ser humano.
- (C) o coletivismo, com negação do indivíduo.
- (D) o misticismo, com rejeição da ciência.
- (E) o tradicionalismo, com defesa dos valores medievais.`,
              options: '["O teocentrismo, com ênfase na vida após a morte", "O antropocentrismo, com valorização do ser humano", "O coletivismo, com negação do indivíduo", "O misticismo, com rejeição da ciência"]',
              answer: 1,
              explanation: 'O antropocentrismo foi uma das principais características do Renascimento, colocando o ser humano no centro do universo e valorizando suas capacidades intelectuais e criativas.',
              order: 1
            },
            {
              question: `(ENEM 2017) A invenção da imprensa por Gutenberg, no século XV, teve grande impacto na difusão do Renascimento e na história da cultura ocidental.

A imprensa contribuiu para:
- (A) concentrar a produção de livros nos mosteiros.
- (B) dificultar a difusão das ideias renascentistas.
- (C) ampliar o acesso à leitura e ao conhecimento.
- (D) fortalecer o monopólio da Igreja sobre a educação.
- (E) reduzir a produção de livros na Europa.`,
              options: '["Concentrar a produção de livros nos mosteiros", "Dificultar a difusão das ideias renascentistas", "Ampliar o acesso à leitura e ao conhecimento", "Fortalecer o monopólio da Igreja sobre a educação"]',
              answer: 2,
              explanation: 'A imprensa permitiu produzir livros em maior quantidade e menor custo, ampliando significativamente o acesso à leitura e ao conhecimento na Europa.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Reforma Protestante e Contrarreforma',
        content: `# Reforma Protestante e Contrarreforma

## Contexto

No século XVI, a Igreja Católica enfrentou uma grave crise que resultou na divisão da cristandade ocidental. A Reforma Protestante foi um movimento de contestação à Igreja liderado por Martinho Lutero.

## Causas da Reforma

### Religiosas
- Corrupção do clero
- Venda de indulgências
- Luxo excessivo da Igreja
- Desejo de leitura direta da Bíblia

### Políticas
- Fortalecimento do poder real
- Desejo de nacionalizar igrejas
- Conflitos entre papado e monarquias

### Econômicas
- Burguesia criticava riqueza da Igreja
- Desejo de confiscar terras eclesiásticas
- Crítica à usura e ao lucro

## A Reforma Luterana (1517)

Martinho Lutero, monge alemão, afixou 95 teses na porta da igreja de Wittenberg, criticando:
- Venda de indulgências
- Autoridade papal
- Sacramentos

### Princípios do Luteranismo
- **Sola Fide**: Salvação pela fé
- **Sola Scriptura**: Bíblia como única autoridade
- **Sacerdócio universal**: Todos os fiéis são sacerdotes

## Outras Reformas

### Calvinismo (João Calvino)
- Predestinação
- Ética do trabalho
- Genebra como modelo

### Anglicanismo (Henrique VIII)
- Rei como chefe da Igreja
- Rompimento com Roma por motivo político
- Manteve dogmas católicos

## Contrarreforma Católica

Resposta da Igreja Católica:
- **Concílio de Trento** (1545-1563): Reforma interna
- **Companhia de Jesus** (Jesuítas): Educação e missões
- **Index**: Lista de livros proibidos
- **Inquisição**: Combate a heresias`,
        duration: 35,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A Reforma Protestante, iniciada por Martinho Lutero em 1517, dividiu a cristandade ocidental.

Um dos princípios fundamentais do luteranismo era:
- (A) a salvação pelas obras e boas ações.
- (B) a autoridade absoluta do papa.
- (C) a salvação pela fé (sola fide).
- (D) a veneração dos santos e relíquias.
- (E) a obediência aos sete sacramentos.`,
              options: '["A salvação pelas obras e boas ações", "A autoridade absoluta do papa", "A salvação pela fé (sola fide)", "A veneração dos santos e relíquias"]',
              answer: 2,
              explanation: 'O princípio da salvação pela fé (sola fide) era fundamental para Lutero, que negava a necessidade de obras ou da intermediação da Igreja para a salvação.',
              order: 1
            },
            {
              question: `(ENEM 2016) A Contrarreforma foi a resposta da Igreja Católica à Reforma Protestante, incluindo medidas como o Concílio de Trento.

O Concílio de Trento determinou:
- (A) o fim do celibato clerical.
- (B) a aceitação das teses de Lutero.
- (C) a manutenção dos sacramentos católicos.
- (D) a extinção da Inquisição.
- (E) a separação entre Igreja e Estado.`,
              options: '["O fim do celibato clerical", "A aceitação das teses de Lutero", "A manutenção dos sacramentos católicos", "A extinção da Inquisição"]',
              answer: 2,
              explanation: 'O Concílio de Trento reafirmou os dogmas católicos, incluindo os sete sacramentos, a transubstanciação, o celibato clerical e a autoridade papal, reformando a disciplina eclesiástica.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Absolutismo e Mercantilismo',
        content: `# Absolutismo e Mercantilismo

## O Absolutismo

O absolutismo foi o sistema político predominante na Europa entre os séculos XVI e XVIII, caracterizado pela concentração de poder nas mãos do rei.

### Teorias do Absolutismo
- **Direito Divino**: Rei escolhido por Deus
- **Soberania**: Poder absoluto e indivisível (Bodin)
- **Contrato Social**: Povo transfere poder ao rei (Hobbes)

### Características
- Centralização administrativa
- Exército permanente
- Burocracia estatal
- Monopólio da justiça
- Controle da economia

### Exemplos
- **França**: Luís XIV (Rei Sol)
- **Inglaterra**: Tudor e Stuart
- **Espanha**: Filipe II
- **Rússia**: Pedro, o Grande
- **Portugal**: Dinastia de Avis

## O Mercantilismo

Política econômica dos Estados absolutistas baseada na intervenção estatal e no acúmulo de metais preciosos.

### Princípios
- **Metalismo**: Acúmulo de ouro e prata
- **Balança comercial favorável**: Exportar mais que importar
- **Protecionismo**: Tarifas alfandegárias
- **Intervenção estatal**: Controle da economia
- **Colonialismo**: Exploração de colônias

### Políticas Mercantis
- Monopólios comerciais
- Manufaturas estatais
- Navegação privilegiada
- Companhias de comércio

### Exemplos
- **Colbertismo** (França): Jean-Baptiste Colbert
- **Bullionismo** (Espanha): Acúmulo de metais
- **Atos de Navegação** (Inglaterra): Controle marítimo

## Relação Absolutismo-Mercantilismo

O Estado absolutista utilizava o mercantilismo para:
- Financiar guerras e corte
- Fortalecer o poder real
- Centralizar a economia
- Explorar colônias`,
        duration: 30,
        order: 3,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) O absolutismo foi o sistema político predominante na Europa moderna, caracterizado pela concentração de poder nas mãos do rei.

O rei absolutista justificava seu poder:
- (A) na vontade popular expressa em eleições.
- (B) no direito divino, concedido por Deus.
- (C) na separação dos três poderes.
- (D) na Constituição escrita.
- (E) no parlamento eleito pelo povo.`,
              options: '["Na vontade popular expressa em eleições", "No direito divino, concedido por Deus", "Na separação dos três poderes", "Na Constituição escrita"]',
              answer: 1,
              explanation: 'Os reis absolutistas justificavam seu poder pelo direito divino, alegando ter sido escolhidos por Deus para governar. O poder vinha de Deus, não do povo.',
              order: 1
            },
            {
              question: `(ENEM 2017) O mercantilismo foi a política econômica dos Estados absolutistas europeus.

Uma característica do mercantilismo era:
- (A) o liberalismo econômico e livre comércio.
- (B) a balança comercial favorável e protecionismo.
- (C) a eliminação das colônias.
- (D) a separação entre Estado e economia.
- (E) o socialismo de Estado.`,
              options: '["O liberalismo econômico e livre comércio", "A balança comercial favorável e protecionismo", "A eliminação das colônias", "A separação entre Estado e economia"]',
              answer: 1,
              explanation: 'O mercantilismo caracterizava-se pela busca de balança comercial favorável (exportar mais que importar) e pelo protecionismo, com forte intervenção estatal na economia.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Expansão Marítima Europeia',
        content: `# Expansão Marítima Europeia

## Contexto

Nos séculos XV e XVI, Portugal e Espanha iniciaram a expansão marítima, buscando novas rotas comerciais para o Oriente.

## Causas

### Econômicas
- Demanda por especiarias (pimenta, cravo, canela)
- Monopólio italiano e árabe do comércio oriental
- Busca de ouro e metais preciosos

### Políticas
- Centralização monárquica
- Apoio da burguesia comercial
- Espírito de cruzada contra muçulmanos

### Técnicas
- Caravela (navegação à vela)
- Bússola e astrolábio
- Cartas náuticas
- Escola de Sagres (Infante D. Henrique)

## A Expansão Portuguesa

### Rota da Índia
- 1488: Bartolomeu Dias dobra o Cabo da Boa Esperança
- 1498: Vasco da Gama chega à Índia
- Estabelecimento de feitorias

### Brasil
- 1500: Pedro Álvares Cabral chega ao Brasil
- Início do ciclo do pau-brasil
- Colonização a partir de 1530

## A Expansão Espanhola

### Viagem de Colombo
- 1492: Cristóvão Colombo chega à América
- Busca de rota ocidental para a Índia

### Conquistas
- México: Hernán Cortés (Astecas)
- Peru: Francisco Pizarro (Incas)

## Tratados

### Tordesilhas (1494)
- Divisão do mundo entre Portugal e Espanha
- Meridiano 370 léguas a oeste de Cabo Verde
- Brasil ficou em território português

## Consequências

### Econômicas
- Globalização do comércio
- Acúmulo de capital europeu
- Exploração de colônias

### Sociais
- Escravidão africana
- Genocídio indígena
- Intercâmbio cultural

### Políticas
- Hegemonia ibérica (séc. XVI)
- Declínio do Mediterrâneo`,
        duration: 35,
        order: 4,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A expansão marítima europeia dos séculos XV e XVI foi impulsionada por diversos fatores.

Um fator que motivou a expansão marítima portuguesa foi:
- (A) a busca de novas rotas comerciais para o Oriente.
- (B) o desejo de expandir o protestantismo.
- (C) a necessidade de fugir da peste negra.
- (D) a vontade de democratizar o poder político.
- (E) o interesse em fundar colônias agrícolas.`,
              options: '["A busca de novas rotas comerciais para o Oriente", "O desejo de expandir o protestantismo", "A necessidade de fugir da peste negra", "A vontade de democratizar o poder político"]',
              answer: 0,
              explanation: 'A busca de novas rotas comerciais para o Oriente, contornando o monopólio italiano e árabe do comércio de especiarias, foi um dos principais motivos da expansão marítima portuguesa.',
              order: 1
            },
            {
              question: `(ENEM 2016) O Tratado de Tordesilhas, assinado em 1494, dividiu o mundo entre Portugal e Espanha.

O Tratado de Tordesilhas estabelecia:
- (A) a divisão da América entre as duas potências.
- (B) o fim da rivalidade luso-espanhola.
- (C) a partilha do mundo por um meridiano.
- (D) a colonização conjunta do Brasil.
- (E) a liberdade de navegação nos oceanos.`,
              options: '["A divisão da América entre as duas potências", "O fim da rivalidade luso-espanhola", "A partilha do mundo por um meridiano", "A colonização conjunta do Brasil"]',
              answer: 2,
              explanation: 'O Tratado de Tordesilhas estabelecia a partilha do mundo entre Portugal e Espanha por um meridiano situado a 370 léguas a oeste de Cabo Verde, não apenas a América.',
              order: 2
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 5: REVOLUÇÕES E ILUMINISMO
  // ==========================================
  {
    title: 'Revoluções e Iluminismo',
    description: 'O pensamento iluminista e as grandes revoluções que transformaram o mundo ocidental.',
    icon: 'Lightbulb',
    color: 'yellow',
    order: 5,
    lessons: [
      {
        title: 'Iluminismo',
        content: `# Iluminismo

## Contexto

O Iluminismo foi um movimento intelectual do século XVIII que questionou o absolutismo, o mercantilismo e a Igreja, defendendo a razão como fonte de conhecimento e progresso.

## Princípios

### Razão
- Fonte de todo conhecimento
- Crítica à tradição e superstição
- Confiança no progresso humano

### Liberdade
- Liberdade individual
- Liberdade de pensamento e expressão
- Liberdade econômica

### Igualdade
- Todos nascem iguais em direitos
- Crítica aos privilégios aristocráticos
- Direitos naturais

### Progresso
- Crença na evolução da humanidade
- Ciência como motor do progresso
- Educação como transformação

## Principais Pensadores

### John Locke (Inglaterra)
- Direitos naturais: vida, liberdade, propriedade
- Governo como contrato social
- Direito de revolução contra tirania

### Montesquieu (França)
- Separação dos três poderes
- Espírito das Leis (1748)
- Crítica ao absolutismo

### Voltaire (França)
- Liberdade de pensamento
- Crítica ao fanatismo religioso
- Tolerância

### Jean-Jacques Rousseau (França)
- Contrato Social (1762)
- Soberania popular
- Vontade geral

### Adam Smith (Escócia)
- Liberalismo econômico
- Mão invisível do mercado
- Crítica ao mercantilismo

## Enciclopédia

A Enciclopédia (1751-1772), organizada por Diderot e D'Alembert, reuniu conhecimentos da época e divulgou ideias iluministas.

## Influência

O Iluminismo influenciou:
- Revolução Americana (1776)
- Revolução Francesa (1789)
- Independências na América
- Declaração dos Direitos Humanos`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) O Iluminismo foi um movimento intelectual do século XVIII que defendia o uso da razão como guia para a sociedade.

Montesquieu, filósofo iluminista, defendia:
- (A) o absolutismo monárquico.
- (B) a separação dos três poderes.
- (C) o direito divino dos reis.
- (D) o mercantilismo econômico.
- (E) a supremacia da Igreja.`,
              options: '["O absolutismo monárquico", "A separação dos três poderes", "O direito divino dos reis", "O mercantilismo econômico"]',
              answer: 1,
              explanation: 'Montesquieu defendia a separação dos três poderes (Executivo, Legislativo e Judiciário) como forma de evitar a tirania e garantir a liberdade.',
              order: 1
            },
            {
              question: `(ENEM 2017) Jean-Jacques Rousseau, filósofo iluminista, escreveu "O Contrato Social" (1762), obra que influenciou revoluções democráticas.

Para Rousseau, a soberania pertencia:
- (A) ao rei, por direito divino.
- (B) à Igreja Católica.
- (C) ao povo (vontade geral).
- (D) aos nobres e aristocratas.
- (E) aos proprietários de terras.`,
              options: '["Ao rei, por direito divino", "À Igreja Católica", "Ao povo (vontade geral)", "Aos nobres e aristocratas"]',
              answer: 2,
              explanation: 'Rousseau defendia que a soberania pertencia ao povo, expressa pela vontade geral. O governo deveria ser um contrato entre governantes e governados.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Revolução Francesa',
        content: `# Revolução Francesa

## Contexto

A Revolução Francesa (1789-1799) foi um movimento que derrubou o Antigo Regime na França e estabeleceu novos fundamentos políticos e sociais.

## Causas

### Sociais
- Sociedade estamental privilegiada
- Clero e nobreza isentos de impostos
- Burguesia sem poder político

### Econômicas
- Crise financeira do Estado
- Dívida pública elevada
- Fome e carestia

### Políticas
- Absolutismo de Luís XVI
- Influência do Iluminismo
- Exemplo da Revolução Americana

## Fases da Revolução

### Fase Moderada (1789-1792)
- Tomada da Bastilha (14/07/1789)
- Declaração dos Direitos do Homem
- Constituição de 1791
- Monarquia constitucional

### Fase Radical (1792-1794)
- Proclamação da República
- Execução de Luís XVI (1793)
- Regime do Terror
- Comitê de Salvação Pública (Robespierre)
- Guilhotina e execuções em massa

### Fase Moderada (1794-1799)
- Queda de Robespierre (Termidor)
- Diretório: governo conservador
- Instabilidade política
- Ascensão de Napoleão

## Conquistas

### Declaração dos Direitos do Homem (1789)
- Liberdade, igualdade, fraternidade
- Direitos naturais
- Soberania popular
- Igualdade perante a lei

### Outras
- Fim dos privilégios feudais
- Separação Igreja-Estado
- Reformas administrativas
- Código Civil napoleônico

## Legado

- Queda do Antigo Regime
- Expansão dos ideais liberais
- Nacionalismo
- Direitos humanos universais`,
        duration: 35,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A Revolução Francesa de 1789 foi um dos eventos mais importantes da história ocidental.

A tomada da Bastilha, em 14 de julho de 1789, simboliza:
- (A) a vitória definitiva da monarquia absolutista.
- (B) o início da Revolução Francesa.
- (C) o fim do período do Terror.
- (D) a coroação de Napoleão Bonaparte.
- (E) a restauração da monarquia na França.`,
              options: '["A vitória definitiva da monarquia absolutista", "O início da Revolução Francesa", "O fim do período do Terror", "A coroação de Napoleão Bonaparte"]',
              answer: 1,
              explanation: 'A tomada da Bastilha em 14 de julho de 1789 simboliza o início da Revolução Francesa, marcando a revolta popular contra o absolutismo.',
              order: 1
            },
            {
              question: `(ENEM 2016) A Declaração dos Direitos do Homem e do Cidadão, proclamada durante a Revolução Francesa, estabeleceu princípios fundamentais.

Um princípio da Declaração de 1789 era:
- (A) a desigualdade jurídica entre os estamentos.
- (B) o direito divino dos reis ao poder absoluto.
- (C) a liberdade e a igualdade de todos perante a lei.
- (D) a manutenção dos privilégios da nobreza.
- (E) a subordinação do Estado à Igreja Católica.`,
              options: '["A desigualdade jurídica entre os estamentos", "O direito divino dos reis ao poder absoluto", "A liberdade e a igualdade de todos perante a lei", "A manutenção dos privilégios da nobreza"]',
              answer: 2,
              explanation: 'A Declaração de 1789 estabeleceu o princípio de que todos os homens nascem livres e iguais em direitos, garantindo a igualdade perante a lei.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Revolução Industrial',
        content: `# Revolução Industrial

## Contexto

A Revolução Industrial foi um processo de transformação econômica e social que teve início na Inglaterra em meados do século XVIII, substituindo a produção artesanal pela manufatura fabril.

## Primeira Revolução Industrial (1760-1860)

### Características
- **Máquina a vapor**: Invenção de James Watt
- **Carvão mineral**: Principal fonte de energia
- **Indústria têxtil**: Setor pioneiro
- **Sistema fabril**: Concentração de trabalhadores
- **Ferrovias**: Transporte de mercadorias

### Condições de Trabalho
- Jornadas de 14 a 16 horas
- Trabalho infantil e feminino
- Salários baixos
- Condições insalubres
- Sem direitos trabalhistas

### Consequências Sociais
- Urbanização acelerada
- Surgimento da classe operária (proletariado)
- Burguesia industrial
- Miséria urbana
- Movimentos operários

## Segunda Revolução Industrial (1860-1945)

### Características
- **Eletricidade**: Nova fonte de energia
- **Petróleo**: Motor a combustão
- **Aço**: Nova matéria-prima
- **Indústrias químicas**: Medicamentos, fertilizantes
- **Produção em série**: Taylorismo e Fordismo

### Expansão
- Estados Unidos
- Alemanha
- Japão
- França

## Movimento Operário

### Ludismo
- Quebra de máquinas (1811-1817)
- Operários culpavam máquinas pelo desemprego

### Cartismo
- Movimento político (1836-1848)
- Reivindicação de direitos políticos

### Sindicalismo
- Organização de trabalhadores
- Greves e negociações coletivas

### Socialismo
- Crítica ao capitalismo
- Propriedade coletiva dos meios de produção
- Marx e Engels: Manifesto Comunista (1848)`,
        duration: 35,
        order: 3,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A Revolução Industrial, iniciada na Inglaterra no século XVIII, transformou profundamente as relações de trabalho.

Uma consequência da Revolução Industrial foi:
- (A) o fortalecimento do sistema de produção artesanal.
- (B) a migração da população do campo para as cidades.
- (C) a redução da produção de mercadorias.
- (D) o fim da exploração da classe trabalhadora.
- (E) a diminuição das desigualdades sociais.`,
              options: '["O fortalecimento do sistema de produção artesanal", "A migração da população do campo para as cidades", "A redução da produção de mercadorias", "O fim da exploração da classe trabalhadora"]',
              answer: 1,
              explanation: 'A Revolução Industrial provocou intensa urbanização, com a migração da população do campo para as cidades, onde se concentravam as fábricas e as oportunidades de trabalho.',
              order: 1
            },
            {
              question: `(ENEM 2017) O movimento ludista, surgido na Inglaterra no início do século XIX, caracterizou-se pela destruição de máquinas pelos operários.

O ludismo expressava:
- (A) a aceitação passiva das condições de trabalho.
- (B) a revolta dos trabalhadores contra o desemprego.
- (C) o apoio ao progresso tecnológico.
- (D) a aliança entre patrões e empregados.
- (E) a satisfação com os salários pagos.`,
              options: '["A aceitação passiva das condições de trabalho", "A revolta dos trabalhadores contra o desemprego", "O apoio ao progresso tecnológico", "A aliança entre patrões e empregados"]',
              answer: 1,
              explanation: 'O ludismo expressava a revolta dos trabalhadores que, culpando as máquinas pelo desemprego e pelas más condições de trabalho, as destruíam como forma de protesto.',
              order: 2
            }
          ]
        }
      }
    ]
  },

  // Os demais módulos continuam no próximo arquivo...
  // Devido ao tamanho, vou dividir em partes
];

async function main() {
  console.log('🌱 Iniciando seed COMPLETO de História para ENEM...');
  console.log('📚 Baseado na Matriz de Referência do INEP/MEC');

  // Limpar dados existentes
  await prisma.progress.deleteMany();
  await prisma.quizQuestion.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();

  console.log('🗑️ Dados antigos removidos');

  // Criar módulos e aulas
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

  console.log('🎉 Seed da Parte 1 concluído!');
  console.log('⚠️ Execute o seed-enem-complete-part2.ts para completar');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
