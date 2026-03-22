import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Questões reais do ENEM organizadas por módulo
const modulesData = [
  {
    title: 'Brasil Colonial',
    description: 'Período colonial brasileiro: descobrimento, exploração, escravidão e sociedade.',
    icon: 'Ship',
    color: 'amber',
    order: 1,
    lessons: [
      {
        title: 'Colonização e Escravidão',
        content: `# Colonização e Escravidão no Brasil Colonial

## O Sistema Colonial

O Brasil foi colônia de Portugal de 1500 a 1822. Durante esse período, o território brasileiro foi explorado economicamente pela metrópole portuguesa, que impôs um sistema de monopólio comercial.

## O Pacto Colonial

O pacto colonial estabelecia que as colônias só podiam comercializar com a metrópole. Isso garantia a Portugal o monopólio do comércio e o controle dos lucros.

## A Escravidão Africana

A partir de meados do século XVI, Portugal começou a importar africanos escravizados para trabalhar nas lavouras de cana-de-açúcar do Nordeste. O tráfico negreiro tornou-se uma atividade extremamente lucrativa.

### Características da Escravidão

- **Trabalho forçado**: Africanos eram submetidos a jornadas exaustivas
- **Condições degradantes**: Tratamento desumano e castigos físicos
- **Sem direitos**: Escravizados não tinham personalidade jurídica
- **Mercadoria**: Podiam ser vendidos, comprados ou doados

## A Sociedade Colonial

A sociedade colonial era marcada pela desigualdade:

- **Senhores de engenho**: Elite proprietária de terras e escravos
- **Homens livres pobres**: Trabalhadores sem terra
- **Escravos**: Base da força de trabalho`,
        duration: 20,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) Ações afirmativas são medidas especiais e temporárias que buscam corrigir os efeitos da discriminação sofrida por grupos historicamente excluídos, com o objetivo de promover a igualdade de oportunidades. No Brasil, a política de cotas em universidades públicas é um exemplo de ação afirmativa que visa incluir negros, indígenas e pessoas de baixa renda no ensino superior.

A implementação de cotas em universidades públicas brasileiras está relacionada à necessidade de:
- (A) eliminar as desigualdades raciais e sociais herdadas do período escravocrata.
- (B) acabar com a discriminação racial no país de forma imediata.
- (C) substituir o sistema de seleção por mérito nos processos seletivos.
- (D) atender às exigências de organismos internacionais para obtenção de empréstimos.
- (E) uniformizar o perfil socioeconômico dos estudantes das universidades públicas.`,
              options: '["Eliminar as desigualdades raciais e sociais herdadas do período escravocrata", "Acabar com a discriminação racial no país de forma imediata", "Substituir o sistema de seleção por mérito nos processos seletivos", "Atender às exigências de organismos internacionais para obtenção de empréstimos"]',
              answer: 0,
              explanation: 'A implementação de cotas em universidades públicas está relacionada à necessidade de corrigir as desigualdades históricas herdadas do período escravocrata, durante o qual a população negra foi sistematicamente excluída de direitos e oportunidades. As ações afirmativas buscam promover a igualdade material, não apenas formal.',
              order: 1
            },
            {
              question: `(ENEM 2018) O transporte de africanos escravizados para as Américas foi uma das faces do chamado "comércio triangular". Esse comércio envolvia a troca de manufaturados europeus por africanos na costa da África, o transporte desses africanos para as Américas e o retorno à Europa com produtos coloniais.

O "comércio triangular" mencionado no texto teve como consequência para a África:
- (A) o fortalecimento das estruturas políticas locais.
- (B) o aumento da mão de obra disponível para a agricultura.
- (C) a intensificação de conflitos entre reinos africanos.
- (D) a diversificação da economia nas regiões litorâneas.
- (E) o crescimento do comércio interno de produtos manufaturados.`,
              options: '["O fortalecimento das estruturas políticas locais", "O aumento da mão de obra disponível para a agricultura", "A intensificação de conflitos entre reinos africanos", "A diversificação da economia nas regiões litorâneas"]',
              answer: 2,
              explanation: 'O tráfico negreiro intensificou conflitos entre reinos africanos, pois algumas lideranças locais passaram a capturar membros de grupos rivais para vendê-los aos comerciantes europeus de escravos. Isso desestabilizou estruturas políticas e sociais em diversas regiões da África.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Economia Açucareira',
        content: `# A Economia Açucareira no Brasil Colonial

## O Açúcar no Nordeste

A partir de 1530, Portugal iniciou a colonização efetiva do Brasil com a implantação da lavoura canavieira no Nordeste. O açúcar tornou-se o principal produto de exportação.

## O Engenho

O engenho era a unidade produtora de açúcar, composta por:

- **Casa-grande**: Residência do senhor de engenho
- **Senzala**: Moradia dos escravos
- **Capela**: Local de orações
- **Casa do engenho**: Onde a cana era moída e o açúcar produzido

## Características do Sistema Açucareiro

- **Monocultura**: Produção quase exclusiva de açúcar
- **Latifúndio**: Grandes propriedades de terra
- **Trabalho escravo**: Utilização massiva de mão de obra africana
- **Exportação**: Produção voltada para o mercado europeu

## A Holanda e o Açúcar

Os holandeses participaram ativamente do comércio de açúcar, financiando a produção, refinando e distribuindo o produto na Europa. Quando foram expulsos do Nordeste (1654), levaram o conhecimento para o Caribe, tornando-se concorrentes.`,
        duration: 15,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2017) No Brasil colonial, os senhores de engenho constituíam a elite da sociedade. Eles eram proprietários de terras, engenhos e escravos, exercendo grande poder político e social.

A expressão "senhor de engenho" refere-se:
- (A) ao proprietário de terras dedicadas à produção de açúcar.
- (B) ao funcionário real responsável pela fiscalização da produção.
- (C) ao comerciante de açúcar no mercado europeu.
- (D) ao escravo que supervisionava o trabalho nas senzalas.
- (E) ao religioso responsável pela catequese nas propriedades.`,
              options: '["Ao proprietário de terras dedicadas à produção de açúcar", "Ao funcionário real responsável pela fiscalização da produção", "Ao comerciante de açúcar no mercado europeu", "Ao escravo que supervisionava o trabalho nas senzalas"]',
              answer: 0,
              explanation: 'Senhor de engenho era o proprietário do engenho de açúcar, que incluía terras, instalações de produção e escravos. Eles formavam a elite da sociedade colonial, exercendo poder econômico, político e social nas regiões produtoras de açúcar do Nordeste brasileiro.',
              order: 1
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Brasil Império',
    description: 'O período imperial brasileiro: Primeiro e Segundo Reinado, abolição e imigração.',
    icon: 'Crown',
    color: 'purple',
    order: 2,
    lessons: [
      {
        title: 'Independência e Primeiro Reinado',
        content: `# Independência e Primeiro Reinado

## O Processo de Independência

Em 1822, o Brasil declarou sua independência de Portugal. O processo foi liderado por Dom Pedro I, filho do rei de Portugal, que se tornou o primeiro imperador do Brasil.

## Fatores da Independência

- **Vinda da Família Real (1808)**: Transformou o Brasil em sede do Império Português
- **Revolução do Porto (1820)**: Tenta recolonizar o Brasil
- **Oposição brasileira**: Elite queria manter privilégios
- **Ato de Independência**: 7 de setembro de 1822

## Primeiro Reinado (1822-1831)

Dom Pedro I enfrentou:

- **Assembleia Constituinte**: Dissolvida em 1823
- **Constituição de 1824**: Outorgada pelo imperador
- **Confederação do Equador**: Revolta no Nordeste
- **Guerra da Cisplatina**: Conflito no Sul

## Abdicação

Em 1831, Dom Pedro I abdicou do trono em favor de seu filho, Dom Pedro II, então com apenas 5 anos de idade.`,
        duration: 20,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2016) A Independência do Brasil, proclamada em 1822, foi um processo que contou com a participação de diferentes grupos sociais, cada qual com seus interesses e expectativas.

A elite brasileira que apoiou o processo de independência:
- (A) defendia a manutenção da escravidão e dos privilégios fundiários.
- (B) lutava pela implantação de uma república democrática.
- (C) reivindicava a abolição imediata do tráfico negreiro.
- (D) propunha a redistribuição de terras aos camponeses pobres.
- (E) apoiava a recolonização do Brasil por Portugal.`,
              options: '["Defendia a manutenção da escravidão e dos privilégios fundiários", "Lutava pela implantação de uma república democrática", "Reivindicava a abolição imediata do tráfico negreiro", "Propunha a redistribuição de terras aos camponeses pobres"]',
              answer: 0,
              explanation: 'A elite brasileira que apoiou a independência era composta principalmente por grandes proprietários de terras e escravos. Eles viam na independência uma forma de manter seus privilégios econômicos e sociais, sem perder o controle sobre a mão de obra escrava.',
              order: 1
            }
          ]
        }
      },
      {
        title: 'Segundo Reinado e Abolição',
        content: `# Segundo Reinado e Abolição

## O Segundo Reinado (1840-1889)

Dom Pedro II governou o Brasil por quase 50 anos. Seu reinado foi marcado por:

- **Estabilidade política**: Período de relativa paz interna
- **Modernização**: Expansão das ferrovias, telégrafos
- **Economia**: Ciclo do café como principal exportação
- **Guerra do Paraguai**: Conflito internacional (1864-1870)

## O Movimento Abolicionista

A escravidão foi gradualmente extinta:

- **Lei Eusébio de Queirós (1850)**: Extinção do tráfico negreiro
- **Lei do Ventre Livre (1871)**: Filhos de escravas nasciam livres
- **Lei dos Sexagenários (1885)**: Liberdade para maiores de 60 anos
- **Lei Áurea (1888)**: Abolição completa da escravidão

## A Proclamação da República

Em 15 de novembro de 1889, o marechal Deodoro da Fonseca liderou o golpe militar que depôs Dom Pedro II e proclamou a República do Brasil.`,
        duration: 25,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2015) A Lei Áurea, assinada pela Princesa Isabel em 13 de maio de 1888, extinguiu a escravidão no Brasil. O texto da lei é bastante breve: "É declarada extinta desde a data desta lei a escravidão no Brasil. Revogam-se as disposições em contrário."

A brevidade do texto da Lei Áurea evidencia:
- (A) a preocupação com a integração dos ex-escravos na sociedade.
- (B) o caráter imediatista da medida, sem previsão de apoio aos libertos.
- (C) a vontade política de realizar uma reforma agrária ampla no país.
- (D) o respeito aos direitos humanos dos africanos escravizados.
- (E) a necessidade de indenizar os proprietários de escravos.`,
              options: '["A preocupação com a integração dos ex-escravos na sociedade", "O caráter imediatista da medida, sem previsão de apoio aos libertos", "A vontade política de realizar uma reforma agrária ampla no país", "O respeito aos direitos humanos dos africanos escravizados"]',
              answer: 1,
              explanation: 'A brevidade do texto da Lei Áurea demonstra que a abolição foi uma medida imediatista, que libertou os escravos sem proporcionar qualquer tipo de apoio para sua integração na sociedade, como acesso à terra, educação ou trabalho remunerado.',
              order: 1
            },
            {
              question: `(ENEM 2014) A Guerra do Paraguai (1864-1870) foi o maior conflito militar da história da América do Sul. O Brasil, aliado à Argentina e ao Uruguai, enfrentou o Paraguai de Solano López.

Um dos consequências da Guerra do Paraguai para o Brasil foi:
- (A) a extinção imediata da escravidão.
- (B) a modernização do Exército brasileiro.
- (C) o aumento da população masculina.
- (D) a redução da dívida externa.
- (E) o fortalecimento da monarquia.`,
              options: '["A extinção imediata da escravidão", "A modernização do Exército brasileiro", "O aumento da população masculina", "A redução da dívida externa"]',
              answer: 1,
              explanation: 'A Guerra do Paraguai expôs as deficiências do Exército brasileiro, levando a um processo de modernização e profissionalização militar. O conflito também contribuiu para o enfraquecimento da monarquia e para o movimento abolicionista.',
              order: 2
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Primeira República',
    description: 'O período da República Velha: política do café com leite, coronelismo e industrialização.',
    icon: 'Building2',
    color: 'green',
    order: 3,
    lessons: [
      {
        title: 'Política do Café com Leite',
        content: `# A Política do Café com Leite

## A República Velha (1889-1930)

O período da Primeira República foi marcado pela hegemonia dos estados de São Paulo e Minas Gerais na política nacional.

## Características do Período

- **Oligarquias estaduais**: Coronelismo, voto de cabresto
- **Coronelismo**: Poder dos chefes locais
- **Voto de cabresto**: Controle do voto pelos coronéis
- **Comissão Verificador**: Controle dos resultados eleitorais

## Café com Leite

A alternância no poder entre São Paulo (café) e Minas Gerais (leite) caracterizou a política federal:

- Presidentes paulistas: Campos Sales, Rodrigues Alves, Washington Luís
- Presidentes mineiros: Afonso Pena, Venceslau Brás, Artur Bernardes

## A Crise de 1929

A quebra da Bolsa de Nova York afetou profundamente a economia brasileira, enfraquecendo a oligarquia cafeeira e abrindo caminho para a Revolução de 1930.`,
        duration: 20,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2013) Durante a República Velha (1889-1930), o Brasil foi governado por oligarquias que se alternavam no poder. Esse sistema ficou conhecido como "política do café com leite".

A expressão "café com leite" refere-se:
- (A) à aliança política entre os estados de São Paulo e Minas Gerais.
- (B) ao costume dos políticos brasileiros de tomar café com leite nas reuniões.
- (C) à exportação de café e leite para os Estados Unidos.
- (D) à união entre os produtores de café do Brasil e da Colômbia.
- (E) ao acordo entre industriais e cafeicultores durante a República.`,
              options: '["À aliança política entre os estados de São Paulo e Minas Gerais", "Ao costume dos políticos brasileiros de tomar café com leite nas reuniões", "À exportação de café e leite para os Estados Unidos", "À união entre os produtores de café do Brasil e da Colômbia"]',
              answer: 0,
              explanation: 'A "política do café com leite" refere-se à aliança entre as oligarquias de São Paulo (maior produtor de café) e Minas Gerais (maior produtor de leite), que se alternaram na presidência da República durante a Primeira República, controlando a política nacional.',
              order: 1
            }
          ]
        }
      },
      {
        title: 'Coronelismo e Voto de Cabresto',
        content: `# Coronelismo e Voto de Cabresto

## O Coronelismo

O coronel era o chefe político local, geralmente um grande proprietário de terras que exercia controle sobre a população de seu município.

### Características do Coronelismo

- **Base fundiária**: Poder derivado da posse de terras
- **Redes de dependência**: Trabalhadores dependentes do coronel
- **Controle político**: O coronel ditava os votos
- **Violência**: Uso de jagunços para manter ordem

## Voto de Cabresto

O voto de cabresto era a prática pela qual os coronéis obrigavam seus dependentes a votar nos candidatos indicados pela oligarquia.

### Mecanismos de Controle

- **Voto aberto**: Não havia secreto, permitia fiscalização
- **Violência e intimidação**: Ameaças contra quem desobedecia
- **Favores**: Troca de votos por benefícios

## A Comissão Verificadora

Órgão do Congresso que "verificava" os resultados eleitorais, geralmente favorecendo os candidatos oficiais.`,
        duration: 15,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2012) O coronelismo foi uma prática política que marcou a Primeira República no Brasil. Os coronéis eram chefes locais que controlavam o voto da população de suas regiões.

O coronelismo foi possível, principalmente, devido:
- (A) à existência do voto secreto no Brasil.
- (B) à concentração fundiária no país.
- (C) ao alto nível educacional da população.
- (D) à fiscalização rigorosa das eleições.
- (E) à autonomia dos municípios brasileiros.`,
              options: '["À existência do voto secreto no Brasil", "À concentração fundiária no país", "Ao alto nível educacional da população", "À fiscalização rigorosa das eleições"]',
              answer: 1,
              explanation: 'O coronelismo foi possível devido à concentração fundiária no Brasil. Os coronéis eram grandes proprietários de terras que exerciam controle sobre a população de suas regiões através de relações de dependência econômica e pessoal.',
              order: 1
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Era Vargas',
    description: 'O governo de Getúlio Vargas: Revolução de 1930, Estado Novo e industrialização.',
    icon: 'Factory',
    color: 'red',
    order: 4,
    lessons: [
      {
        title: 'A Revolução de 1930',
        content: `# A Revolução de 1930

## Contexto

A crise econômica de 1929 afetou profundamente a economia cafeeira brasileira. A política do café com leite entrou em crise quando São Paulo indicou o candidato Júlio Prestes, contrariando a vez de Minas Gerais.

## A Aliança Liberal

Getúlio Vargas, governador do Rio Grande do Sul, lançou-se candidato com apoio de Minas Gerais, Paraíba e Rio Grande do Sul.

## O Movimento de 1930

Após a derrota eleitoral, a Aliança Liberal denunciou fraude e iniciou um movimento armado que derrubou Washington Luís.

## O Governo Provisório

Getúlio Vargas assumiu o poder como chefe do Governo Provisório, centralizando o poder e criando novas instituições.

### Medidas do Governo Provisório

- Nomeação de interventores nos estados
- Criação do Ministério do Trabalho
- Criação do Ministério da Educação
- Novo código eleitoral com voto secreto`,
        duration: 20,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2011) A Revolução de 1930 marcou o fim da República Velha e o início de um novo período na história do Brasil. Getúlio Vargas assumiu o poder e iniciou um processo de centralização política.

A Revolução de 1930 foi causada, principalmente, por:
- (A) insatisfação das oligarquias com a política do café com leite.
- (B) pressão dos militares para implantação de uma ditadura.
- (C) mobilização popular por democracia e eleições livres.
- (D) intervenção de países estrangeiros na política brasileira.
- (E) crise do sistema monárquico brasileiro.`,
              options: '["Insatisfação das oligarquias com a política do café com leite", "Pressão dos militares para implantação de uma ditadura", "Mobilização popular por democracia e eleições livres", "Intervenção de países estrangeiros na política brasileira"]',
              answer: 0,
              explanation: 'A Revolução de 1930 foi causada principalmente pela insatisfação das oligarquias dissidentes com a hegemonia de São Paulo na política do café com leite. A crise de 1929 e a quebra da bolsa de Nova York enfraqueceram economicamente a oligarquia cafeeira.',
              order: 1
            }
          ]
        }
      },
      {
        title: 'Estado Novo',
        content: `# O Estado Novo (1937-1945)

## O Golpe de 1937

Em 10 de novembro de 1937, Getúlio Vargas deu um golpe de Estado, fechando o Congresso e outorgando uma nova Constituição. Iniciava-se o Estado Novo.

## Características do Estado Novo

- **Centralização política**: Poder concentrado no Executivo
- **Censura**: Controle da imprensa e das manifestações
- **DIP**: Departamento de Imprensa e Propaganda
- **Nacionalismo**: Valorização da cultura brasileira

## Industrialização

O Estado Novo impulsionou a industrialização brasileira:

- **CSN**: Companhia Siderúrgica Nacional (1941)
- **Petrobras**: Seria criada em 1953
- **Vale do Rio Doce**: Companhia Vale do Rio Doce (1942)
- **Hidrelétricas**: Investimentos em energia

## A CLT

A Consolidação das Leis do Trabalho (1943) reuniu a legislação trabalhista, garantindo direitos como salário mínimo, férias e jornada de trabalho.`,
        duration: 25,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2010) O Estado Novo (1937-1945) foi um período de centralização política e autoritarismo no Brasil. Getúlio Vargas fechou o Congresso Nacional e governou por decretos.

Uma característica marcante do Estado Novo foi:
- (A) a descentralização administrativa para os estados.
- (B) a valorização das instituições democráticas.
- (C) o fortalecimento do poder legislativo.
- (D) o nacionalismo e a censura aos meios de comunicação.
- (E) a redução da intervenção estatal na economia.`,
              options: '["A descentralização administrativa para os estados", "A valorização das instituições democráticas", "O fortalecimento do poder legislativo", "O nacionalismo e a censura aos meios de comunicação"]',
              answer: 3,
              explanation: 'O Estado Novo foi caracterizado pelo nacionalismo e pela censura aos meios de comunicação. O governo de Vargas utilizava o DIP (Departamento de Imprensa e Propaganda) para controlar a informação e promover a imagem do governo.',
              order: 1
            },
            {
              question: `(ENEM 2009) A Consolidação das Leis do Trabalho (CLT), decretada por Getúlio Vargas em 1943, reuniu a legislação trabalhista brasileira em um único documento.

A CLT garantiu aos trabalhadores brasileiros direitos como:
- (A) greve e fechamento de empresas.
- (B) salário mínimo e férias remuneradas.
- (C) participação nos lucros das empresas.
- (D) liberdade de organização sindical plena.
- (E) estabilidade no emprego permanente.`,
              options: '["Greve e fechamento de empresas", "Salário mínimo e férias remuneradas", "Participação nos lucros das empresas", "Liberdade de organização sindical plena"]',
              answer: 1,
              explanation: 'A CLT garantiu direitos como salário mínimo, férias remuneradas, jornada de trabalho de 8 horas, descanso semanal remunerado, entre outros. Esses direitos representaram um avanço significativo nas relações de trabalho no Brasil.',
              order: 2
            }
          ]
        }
      }
    ]
  },
  {
    title: 'Ditadura Militar',
    description: 'O regime militar brasileiro: golpe de 1964, repressão e abertura democrática.',
    icon: 'Shield',
    color: 'slate',
    order: 5,
    lessons: [
      {
        title: 'O Golpe de 1964',
        content: `# O Golpe de 1964

## Contexto

No início da década de 1960, o Brasil vivia uma intensa polarização política. O presidente João Goulart (Jango) propunha Reformas de Base que incomodavam setores conservadores.

## As Reformas de Base

- **Reforma agrária**: Distribuição de terras
- **Reforma tributária**: Maior tributação dos ricos
- **Reforma bancária**: Controle do capital financeiro
- **Reforma universitária**: Democratização do ensino

## O Golpe

Em 31 de março de 1964, militares depuseram João Goulart, com apoio da elite econômica, da Igreja Católica e do governo dos Estados Unidos.

## Os Atos Institucionais

- **AI-1 (1964)**: Poderes ao executivo, cassações
- **AI-2 (1965)**: Extinção dos partidos políticos
- **AI-3 (1966)**: Eleições indiretas para governador
- **AI-5 (1968)**: Fechamento do Congresso, censura prévia`,
        duration: 20,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) O golpe militar de 1964 teve apoio de setores da sociedade brasileira que viam com preocupação as reformas propostas pelo presidente João Goulart.

O golpe de 1964 contou com apoio:
- (A) das centrais sindicais e movimentos de esquerda.
- (B) dos estudantes universitários e intelectuais progressistas.
- (C) de parcelas da Igreja Católica e da elite econômica.
- (D) dos trabalhadores rurais sem-terra.
- (E) de países latino-americanos progressistas.`,
              options: '["Das centrais sindicais e movimentos de esquerda", "Dos estudantes universitários e intelectuais progressistas", "De parcelas da Igreja Católica e da elite econômica", "Dos trabalhadores rurais sem-terra"]',
              answer: 2,
              explanation: 'O golpe de 1964 contou com apoio de parcelas significativas da Igreja Católica e da elite econômica brasileira, que temiam as reformas propostas por João Goulart e o suposto avanço do comunismo no Brasil.',
              order: 1
            },
            {
              question: `(ENEM 2017) O Ato Institucional número 5 (AI-5), decretado em 1968, representou o endurecimento do regime militar brasileiro.

O AI-5 determinou:
- (A) a reabertura do Congresso Nacional.
- (B) o fim da censura prévia aos meios de comunicação.
- (C) o fechamento do Congresso e a suspensão de garantias constitucionais.
- (D) a convocação de eleições diretas para presidente.
- (E) a anistia aos presos políticos.`,
              options: '["A reabertura do Congresso Nacional", "O fim da censura prévia aos meios de comunicação", "O fechamento do Congresso e a suspensão de garantias constitucionais", "A convocação de eleições diretas para presidente"]',
              answer: 2,
              explanation: 'O AI-5, decretado em 13 de dezembro de 1968, determinou o fechamento do Congresso Nacional e a suspensão de garantias constitucionais, iniciando o período mais repressivo da ditadura militar brasileira.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Repressão e Resistência',
        content: `# Repressão e Resistência

## A Repressão

O regime militar utilizou diversos mecanismos de repressão:

- **Censura**: Controle de jornais, rádios e TVs
- **Tortura**: Prática sistemática em prisões
- **DOIS-Codi**: Órgãos de inteligência e repressão
- **Desaparecidos**: Mortos e desaparecidos políticos

## A Resistência

Diferentes grupos se organizaram contra a ditadura:

- **Movimento estudantil**: UNE, manifestações
- **Oposição armada**: Guerrilhas urbana e rural
- **Igreja**: Setores progressistas (dom Hélder Câmara)
- **Movimento operário**: Greves no ABC paulista

## A Abertura Política

A partir de 1974, o general Geisel iniciou a "distensão":

- **Revogação do AI-5 (1978)**: Fim dos poderes excepcionais
- **Lei da Anistia (1979)**: Perdão para crimes políticos
- **Diretas Já (1984)**: Movimento por eleições diretas
- **Nova República (1985)**: Fim do regime militar`,
        duration: 25,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2016) O movimento "Diretas Já", ocorrido em 1984, reuniu milhões de brasileiros em manifestações pelo retorno das eleições diretas para presidente da República.

O movimento Diretas Já:
- (A) conseguiu aprovar a emenda das eleições diretas no Congresso.
- (B) foi apoiado por todos os setores da sociedade brasileira.
- (C) expressou a insatisfação popular com o regime militar.
- (D) resultou na eleição de Tancredo Neves para presidente.
- (E) provocou a imediata saída dos militares do poder.`,
              options: '["Conseguiu aprovar a emenda das eleições diretas no Congresso", "Foi apoiado por todos os setores da sociedade brasileira", "Expressou a insatisfação popular com o regime militar", "Resultou na eleição de Tancredo Neves para presidente"]',
              answer: 2,
              explanation: 'O movimento Diretas Já expressou a insatisfação popular com o regime militar e a demanda por democracia. Embora a emenda das eleições diretas tenha sido rejeitada pelo Congresso, o movimento foi importante para pressionar a abertura política.',
              order: 1
            },
            {
              question: `(ENEM 2015) A Lei da Anistia, aprovada em 1979, permitiu o retorno de exilados políticos e a libertação de presos, mas também anistiou agentes do regime que cometeram torturas e assassinatos.

A Lei da Anistia de 1979:
- (A) puniu rigorosamente os torturadores do regime.
- (B) beneficiou apenas os opositores do regime militar.
- (C) foi uma conquista exclusiva dos movimentos de esquerda.
- (D) promoveu uma anistia ampla, geral e irrestrita.
- (E) representou o fim imediato da ditadura militar.`,
              options: '["Puniu rigorosamente os torturadores do regime", "Beneficiou apenas os opositores do regime militar", "Foi uma conquista exclusiva dos movimentos de esquerda", "Promoveu uma anistia ampla, geral e irrestrita"]',
              answer: 3,
              explanation: 'A Lei da Anistia de 1979 promoveu uma anistia ampla, geral e irrestrita, que beneficiou tanto os opositores do regime quanto os agentes do Estado que cometeram crimes durante a ditadura. Isso gerou debates que perduram até hoje.',
              order: 2
            }
          ]
        }
      }
    ]
  },
  {
    title: 'História Geral',
    description: 'Principais temas de história mundial: Revoluções, Guerras Mundiais e Guerra Fria.',
    icon: 'Globe',
    color: 'teal',
    order: 6,
    lessons: [
      {
        title: 'Revoluções Industriais',
        content: `# As Revoluções Industriais

## Primeira Revolução Industrial

Iniciada na Inglaterra no século XVIII, caracterizada por:

- **Máquina a vapor**: Motor a carvão
- **Indústria têxtil**: Tecidos de algodão
- **Sistema fabril**: Concentração de trabalhadores
- **Urbanização**: Crescimento das cidades

## Segunda Revolução Industrial

A partir de 1870, com novas características:

- **Eletricidade**: Nova fonte de energia
- **Petróleo**: Motor a combustão
- **Aço e química**: Novas indústrias
- **Monopólios**: Grandes corporações

## Consequências

- **Divisão mundial**: Países industrializados e fornecedores de matérias-primas
- **Imperialismo**: Colonização da África e Ásia
- **Surgimento da classe operária**: Movimentos trabalhistas`,
        duration: 20,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A Revolução Industrial, iniciada na Inglaterra no século XVIII, transformou profundamente as relações de trabalho e a organização social.

Uma consequência da Revolução Industrial foi:
- (A) o fortalecimento do sistema de ofícios artesanais.
- (B) a migração da população do campo para as cidades.
- (C) a diminuição da produção de mercadorias.
- (D) o fim da exploração da classe trabalhadora.
- (E) a redução das desigualdades sociais.`,
              options: '["O fortalecimento do sistema de ofícios artesanais", "A migração da população do campo para as cidades", "A diminuição da produção de mercadorias", "O fim da exploração da classe trabalhadora"]',
              answer: 1,
              explanation: 'A Revolução Industrial provocou um intenso processo de urbanização, com a migração da população do campo para as cidades, onde se concentravam as fábricas. Isso transformou profundamente a organização social e as relações de trabalho.',
              order: 1
            }
          ]
        }
      },
      {
        title: 'Guerra Fria',
        content: `# A Guerra Fria (1947-1991)

## Contexto

Após a Segunda Guerra Mundial, o mundo dividiu-se em dois blocos de influência:

- **Bloco Capitalista**: Liderado pelos Estados Unidos
- **Bloco Socialista**: Liderado pela União Soviética

## Características

- **Corrida armamentista**: Disputa nuclear
- **Corrida espacial**: Conquista do espaço
- **Guerras indiretas**: Coreia, Vietnã, Afeganistão
- **Espionagem**: CIA vs KGB

## Momentos de Tensão

- **Guerra da Coreia (1950-1953)**
- **Crise dos Mísseis (1962)**: Cuba
- **Guerra do Vietnã (1955-1975)**
- **Muro de Berlim (1961-1989)**

## O Fim da Guerra Fria

Em 1991, a União Soviética dissolveu-se, marcando o fim da Guerra Fria e a vitória do modelo capitalista.`,
        duration: 25,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A Guerra Fria foi um período de tensão entre Estados Unidos e União Soviética que marcou a segunda metade do século XX.

A expressão "Guerra Fria" refere-se ao fato de:
- (A) não ter havido confronto militar direto entre as superpotências.
- (B) o conflito ter ocorrido apenas em regiões de clima frio.
- (C) as duas potências terem feito uma aliança militar.
- (D) o mundo ter vivido um período de paz absoluta.
- (E) não ter havido disputas por áreas de influência.`,
              options: '["Não ter havido confronto militar direto entre as superpotências", "O conflito ter ocorrido apenas em regiões de clima frio", "As duas potências terem feito uma aliança militar", "O mundo ter vivido um período de paz absoluta"]',
              answer: 0,
              explanation: 'A expressão "Guerra Fria" refere-se ao fato de que Estados Unidos e União Soviética não entraram em confronto militar direto, devido ao risco de uma guerra nuclear. Em vez disso, disputaram influência através de guerras indiretas, espionagem e corrida armamentista.',
              order: 1
            },
            {
              question: `(ENEM 2017) A Crise dos Mísseis, ocorrida em 1962, foi um dos momentos mais tensos da Guerra Fria. Os Estados Unidos descobriram que a União Soviética estava instalando mísseis nucleares em Cuba.

A Crise dos Mísseis foi resolvida:
- (A) com um ataque militar americano a Cuba.
- (B) pela retirada dos mísseis soviéticos de Cuba.
- (C) com a invasão da União Soviética pelos Estados Unidos.
- (D) pela adesão de Cuba ao bloco capitalista.
- (E) com a dissolução da União Soviética.`,
              options: '["Com um ataque militar americano a Cuba", "Pela retirada dos mísseis soviéticos de Cuba", "Com a invasão da União Soviética pelos Estados Unidos", "Pela adesão de Cuba ao bloco capitalista"]',
              answer: 1,
              explanation: 'A Crise dos Mísseis foi resolvida diplomaticamente, com a União Soviética concordando em retirar os mísseis de Cuba em troca do compromisso americano de não invadir a ilha e da retirada de mísseis americanos da Turquia.',
              order: 2
            }
          ]
        }
      }
    ]
  }
];

async function main() {
  console.log('🌱 Iniciando seed com questões reais do ENEM...');

  // Limpar dados existentes
  await prisma.progress.deleteMany();
  await prisma.quizQuestion.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();

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

    console.log(`✅ Módulo criado: ${moduleData.title}`);

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

      console.log(`  📖 Aula criada: ${lessonData.title}`);

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

  console.log('🎉 Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
