import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// =============================================
// MÓDULO: BRASIL CONTEMPORÂNEO (1985-PRESENTE)
// Baseado na Matriz de Referência do ENEM/MEC
// =============================================

const modulesData = [
  // ==========================================
  // MÓDULO 16: BRASIL CONTEMPORÂNEO
  // ==========================================
  {
    title: 'Brasil Contemporâneo (1985-presente)',
    description: 'Redemocratização, estabilização econômica e transformações políticas recentes.',
    icon: 'Landmark',
    color: 'green',
    order: 16,
    lessons: [
      {
        title: 'Redemocratização e a Constituição de 1988',
        content: `# Redemocratização e a Constituição de 1988

## O Fim da Ditadura Militar

### O Processo de Abertura (1974-1985)
- **Geisel (1974-1979)**: "Distensão lenta, gradual e segura"
- **Figueiredo (1979-1985)**: Anistia política, pluripartidarismo
- **Lei de Anistia (1979)**: Perdão a crimes políticos
- **Eleições diretas para governadores (1982)**: Oposição vence em estados importantes

### A Campanha das Diretas Já (1983-1984)
- **Emenda Dante de Oliveira**: Proposta de eleições diretas para presidente
- **Manifestações populares**: Milhões nas ruas de todo o Brasil
- **Votação na Câmara (abril de 1984)**: Emenda rejeitada (298 a favor, 65 contra)
- **Simbolismo**: Maior mobilização popular desde 1964

### A Eleição de Tancredo Neves (1985)
- **Coligação Partido do Movimento Democrático Brasileiro (PMDB) e Partido Democrático Trabalhista (PDT)**: União da oposição
- **Eleição indireta**: Congresso Nacional
- **Doença de Tancredo**: Internação antes da posse
- **Morte (21/04/1985)**: Nunca assumiu a presidência

### O Governo Sarney (1985-1990)
- **José Sarney**: Vice-presidente, assume após morte de Tancredo
- **Plano Cruzado (1986)**: Controle de preços, congelamento salarial
- **Eleições para governadores (1986)**: PMDB vence em 22 estados
- **Assembleia Nacional Constituinte (1987-1988)**: Nova constituição

## A Constituição de 1988

### Contexto
- **21 anos de ditadura**: Fim do regime militar
- **Democratização**: Restabelecimento de direitos
- **Participação popular**: Emendas populares
- **Duração**: 18 meses de trabalhos

### Princípios Fundamentais
- **Soberania**: Autodeterminação dos povos
- **Cidadania**: Exercício dos direitos políticos
- **Dignidade da pessoa humana**: Valorização do ser humano
- **Valores sociais do trabalho**: Proteção ao trabalhador
- **Pluralismo político**: Diversidade partidária

### Direitos e Garantias Fundamentais
- **Direitos individuais**: Vida, liberdade, igualdade
- **Direitos sociais**: Educação, saúde, trabalho, moradia
- **Direitos políticos**: Voto direto, secreto, universal
- **Direitos coletivos**: Meio ambiente, patrimônio cultural

### Organização do Estado
- **República Federativa**: União, Estados, Municípios
- **Tripartição dos poderes**: Executivo, Legislativo, Judiciário
- **Municípios**: Autonomia política e administrativa
- **Distrito Federal**: Brasília, capital federal

### Inovações Constitucionais
- **Mandado de segurança coletivo**: Proteção a direitos coletivos
- **Ação popular**: Controle de constitucionalidade
- **Ministério Público**: Defesa da ordem jurídica
- **Defensoria Pública**: Assistência jurídica gratuita
- **Estatuto da Criança e do Adolescente (1990)**: Proteção integral

### Legado
- **Constituição cidadã**: Apelido dado por Ulysses Guimarães
- **Democracia**: Consolidação do regime democrático
- **Direitos humanos**: Proteção ampla e irrestrita
- **Federalismo**: Descentralização do poder`,
        duration: 25,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2024) A Constituição de 1988, conhecida como "Constituição Cidadã", foi promulgada após 21 anos de ditadura militar. Uma das principais características dessa constituição é:

- (A) a centralização total do poder no Executivo federal.
- (B) a proibição de qualquer forma de participação popular.
- (C) a garantia de direitos individuais, sociais e políticos amplos.
- (D) a manutenção do bipartidarismo da era militar.
- (E) a exclusão de direitos trabalhistas da constituição.`,
              options: '["A centralização total do poder no Executivo federal", "A proibição de qualquer forma de participação popular", "A garantia de direitos individuais, sociais e políticos amplos", "A manutenção do bipartidarismo da era militar"]',
              answer: 2,
              explanation: 'A Constituição de 1988 garantiu amplos direitos individuais, sociais e políticos, incluindo direitos trabalhistas, previdenciários e de proteção ao meio ambiente.',
              order: 1
            },
            {
              question: `(ENEM 2023) A Campanha das Diretas Já (1983-1984) foi um movimento popular que exigia eleições diretas para presidente da República. Esse movimento:

- (A) conseguiu a aprovação da emenda constitucional que restabelecia as eleições diretas.
- (B) foi derrotado no Congresso, mas demonstrou a força da mobilização popular.
- (C) foi apoiado pelo governo militar e aprovado facilmente.
- (D) não teve participação popular significativa.
- (E) resultou na eleição direta de Tancredo Neves.`,
              options: '["Conseguiu a aprovação da emenda constitucional que restabelecia as eleições diretas", "Foi derrotado no Congresso, mas demonstrou a força da mobilização popular", "Foi apoiado pelo governo militar e aprovado facilmente", "Não teve participação popular significativa"]',
              answer: 1,
              explanation: 'A Campanha das Diretas Já mobilizou milhões de pessoas, mas a Emenda Dante de Oliveira foi rejeitada no Congresso. No entanto, demonstrou a força da mobilização popular pela democracia.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Plano Real e Estabilização Econômica',
        content: `# Plano Real e Estabilização Econômica

## A Crise da Hiperinflação (1980-1994)

### Contexto Econômico
- **Inflação acumulada**: 2.477% em 1993
- **Planos econômicos fracassados**: Cruzado, Bresser, Verão, Collor
- **Indexação generalizada**: Preços reajustados diariamente
- **Pobreza**: 40% da população abaixo da linha de pobreza

### Planos Anteriores
- **Plano Cruzado (1986)**: Congelamento de preços, fracassou
- **Plano Bresser (1987)**: Controle de preços e salários
- **Plano Verão (1989)**: Confisco de poupanças
- **Plano Collor (1990)**: Confisco de 80% das poupanças

## O Plano Real (1994)

### Antecedentes
- **Fernando Henrique Cardoso**: Ministro da Fazenda
- **Equipe econômica**: Persio Arida, Edmar Bacha, André Lara Resende
- **Unidade Real de Valor (URV)**: Moeda de referência (março de 1994)
- **Real**: Nova moeda (1º de julho de 1994)

### Componentes do Plano
- **Âncora fiscal**: Superávit primário, corte de gastos
- **Âncora monetária**: Juros altos para controlar demanda
- **Âncora cambial**: Taxa de câmbio fixa (1 real = 1 dólar)
- **Plano de estabilização**: Controle de preços inicial

### Resultados Imediatos
- **Inflação**: Caiu para 2% ao mês em 1994
- **Poder de compra**: Aumento real dos salários
- **Consumo**: Expansão do mercado interno
- **Confiança**: Retorno de investimentos

## O Governo FHC (1995-2002)

### Primeiro Mandato (1995-1998)
- **Reeleição**: Emenda constitucional da reeleição (1997)
- **Privatizações**: Vale do Rio Doce, Telebrás, bancos estaduais
- **Abertura comercial**: Redução de tarifas de importação
- **Plano Real**: Consolidação da estabilidade

### Segundo Mandato (1999-2002)
- **Crise asiática (1997) e russa (1998)**: Impacto no Brasil
- **Desvalorização do real (1999)**: Fim do câmbio fixo
- **Metas de inflação**: Sistema adotado pelo Banco Central
- **Crise energética (2001)**: Racionamento de eletricidade

### Legado Econômico
- **Estabilidade**: Fim da hiperinflação
- **Modernização**: Infraestrutura e tecnologia
- **Dívida pública**: Aumento significativo
- **Desemprego**: Aumento durante o período

## A Transição para o PT

### Eleição de Lula (2002)
- **Quarta tentativa**: Lula candidato desde 1989
- **"Carta ao Povo Brasileiro"**: Sinalização de moderação
- **Vitória no segundo turno**: 61,3% dos votos
- **Esperança**: Expectativa de mudanças sociais

### Desafios Iniciais
- **Herança econômica**: Dívida alta, juros elevados
- **Mercados**: Desconfiança inicial
- **Expectativas**: Pressão por mudanças rápidas
- **Equipe econômica**: Continuidade com FHC`,
        duration: 25,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2024) O Plano Real, implementado em 1994, foi fundamental para estabilizar a economia brasileira após anos de hiperinflação. Um dos componentes essenciais do plano foi:

- (A) o confisco de poupanças da população.
- (B) a adoção de uma moeda indexada ao dólar.
- (C) o controle total de preços pelo governo.
- (D) a manutenção da inflação em patamares elevados.
- (E) a abolição de qualquer forma de controle monetário.`,
              options: '["O confisco de poupanças da população", "A adoção de uma moeda indexada ao dólar", "O controle total de preços pelo governo", "A manutenção da inflação em patamares elevados"]',
              answer: 1,
              explanation: 'O Plano Real adotou inicialmente uma taxa de câmbio fixa (1 real = 1 dólar) como âncora cambial, além de políticas fiscal e monetária rigorosas para controlar a inflação.',
              order: 1
            },
            {
              question: `(ENEM 2023) O governo de Fernando Henrique Cardoso (1995-2002) implementou diversas reformas econômicas. Uma das principais características desse período foi:

- (A) a estatização de todas as empresas privadas.
- (B) a privatização de empresas estatais e abertura comercial.
- (C) o isolamento econômico do Brasil em relação ao mundo.
- (D) a manutenção de tarifas de importação elevadíssimas.
- (E) a proibição de investimentos estrangeiros no país.`,
              options: '["A estatização de todas as empresas privadas", "A privatização de empresas estatais e abertura comercial", "O isolamento econômico do Brasil em relação ao mundo", "A manutenção de tarifas de importação elevadíssimas"]',
              answer: 1,
              explanation: 'O governo FHC promoveu privatizações (Vale do Rio Doce, Telebrás) e abertura comercial, reduzindo tarifas de importação e atraindo investimentos estrangeiros.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Governos do PT: Lula e Dilma Rousseff',
        content: `# Governos do PT: Lula e Dilma Rousseff

## O Governo Lula (2003-2010)

### Primeiro Mandato (2003-2006)
- **Equipe econômica**: Continuidade com FHC (Palocci, Meirelles)
- **Bolsa Família**: Unificação de programas sociais
- **Fome Zero**: Combate à fome e à pobreza
- **Política externa ativa**: Sul-global, Brics

### Segundo Mandato (2007-2010)
- **Crescimento econômico**: PIB crescendo 5% ao ano
- **Programa de Aceleração do Crescimento (PAC)**: Investimentos em infraestrutura
- **Pré-sal**: Descoberta de reservas de petróleo
- **Crise financeira global (2008)**: Brasil resiste relativamente bem

### Políticas Sociais
- **Bolsa Família**: 13 milhões de famílias beneficiadas
- **ProUni**: Bolsas de estudo em universidades privadas
- **FIES**: Financiamento estudantil
- **Aumento do salário mínimo**: Acima da inflação
- **Expansão do ensino técnico**: Rede federal de educação

### Política Externa
- **Brics**: Grupo de países emergentes (Brasil, Rússia, Índia, China, África do Sul)
- **Unasul**: União de Nações Sul-Americanas
- **África**: Cooperação Sul-Sul
- **Irã**: Mediação nuclear (2010)

### Legado de Lula
- **Popularidade**: 87% de aprovação ao final do mandato
- **Pobreza**: Redução significativa
- **Classe média**: Expansão de 30 milhões de pessoas
- **Reconhecimento internacional**: Líder global

## O Governo Dilma Rousseff (2011-2016)

### Primeiro Mandato (2011-2014)
- **Política econômica**: "Nova matriz econômica"
- **Redução de juros**: Taxa Selic em 7,25% (2012)
- **Desonerações**: Redução de impostos para indústria
- **Crise econômica**: Desaceleração do crescimento

### Protestos de Junho de 2013
- **Aumento das passagens**: 20 centavos em São Paulo
- **Manifestações**: 1 milhão de pessoas em todo o Brasil
- **Reivindicações**: Saúde, educação, transporte, corrupção
- **Impacto**: Crise de legitimidade política

### Segundo Mandato (2015-2016)
- **Reeleição apertada**: 51,6% no segundo turno
- **Crise econômica**: PIB caindo 3,8% em 2015
- **Inflação**: Acima de 10% ao ano
- **Desemprego**: Aumento para 11%

### Impeachment (2016)
- **Pedaladas fiscais**: Operações de crédito ilegais
- **Processo no Congresso**: Câmara e Senado
- **Afastamento**: 31 de agosto de 2016
- **Michel Temer**: Assume a presidência

## O Governo Temer (2016-2018)

### Reformas Implementadas
- **Reforma trabalhista**: Flexibilização das leis trabalhistas
- **Teto de gastos públicos**: Emenda constitucional 95
- **Ensino médio**: Reforma curricular
- **Previdência**: Proposta de reforma (não aprovada)

### Crise Política
- **Denúncias de corrupção**: Gravações de Temer
- **Popularidade**: 5% de aprovação
- **Eleições 2018**: Polarização política`,
        duration: 25,
        order: 3,
        quiz: {
          questions: [
            {
              question: `(ENEM 2024) O governo Lula (2003-2010) implementou diversas políticas sociais que impactaram significativamente a sociedade brasileira. Uma das principais políticas desse período foi:

- (A) a extinção de todos os programas de transferência de renda.
- (B) o Bolsa Família, que unificou programas de assistência social.
- (C) a privatização de todas as universidades federais.
- (D) a proibição de qualquer forma de investimento social.
- (E) a redução do salário mínimo abaixo da inflação.`,
              options: '["A extinção de todos os programas de transferência de renda", "O Bolsa Família, que unificou programas de assistência social", "A privatização de todas as universidades federais", "A proibição de qualquer forma de investimento social"]',
              answer: 1,
              explanation: 'O Bolsa Família unificou diversos programas de transferência de renda em um só, beneficiando milhões de famílias em situação de pobreza.',
              order: 1
            },
            {
              question: `(ENEM 2023) Os protestos de junho de 2013 no Brasil foram uma série de manifestações que começaram com o aumento das passagens de ônibus. Esses protestos:

- (A) foram reprimidos violentamente e não tiveram impacto político.
- (B) se limitaram apenas à questão do transporte público.
- (C) se expandiram para diversas reivindicações sociais e políticas.
- (D) contaram com o apoio unânime de todos os partidos políticos.
- (E) não tiveram participação significativa da população.`,
              options: '["Foram reprimidos violentamente e não tiveram impacto político", "Se limitaram apenas à questão do transporte público", "Se expandiram para diversas reivindicações sociais e políticas", "Contaram com o apoio unânime de todos os partidos políticos"]',
              answer: 2,
              explanation: 'Os protestos de junho de 2013 começaram com o aumento das passagens, mas se expandiram para reivindicações sobre saúde, educação, corrupção e participação política.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Crises Recentes e Transformações Políticas',
        content: `# Crises Recentes e Transformações Políticas

## A Crise Econômica de 2014-2016

### Causas
- **Desaceleração chinesa**: Redução de demanda por commodities
- **Fim do superciclo de commodities**: Queda de preços
- **Política econômica equivocada**: "Nova matriz econômica"
- **Crise política**: Instabilidade institucional

### Impactos
- **Recessão**: PIB caindo 3,8% em 2015 e 3,6% em 2016
- **Desemprego**: Aumento de 6,5% para 12%
- **Inflação**: Acima de 10% ao ano
- **Dívida pública**: Aumento de 50% para 70% do PIB

### Setores Afetados
- **Indústria**: Queda de 6% em 2015
- **Construção civil**: Crise imobiliária
- **Agronegócio**: Único setor que cresceu
- **Serviços**: Desaceleração generalizada

## A Operação Lava Jato (2014-2021)

### Origem
- **Posto de gasbras em Brasília**: Doleiro Alberto Youssef
- **Desdobramentos**: Escândalo na Petrobras
- **Método**: Delações premiadas, acordos de leniência
- **Impacto**: Maior operação anticorrupção da história

### Principais Desdobramentos
- **Executivos da Odebrecht**: Pagamento de propinas
- **Políticos**: Centenas investigados
- **Lula**: Condenado e preso (2018-2019)
- **Empresas**: Multas bilionárias

### Consequências Políticas
- **Crise de legitimidade**: Desconfiança nas instituições
- **Polarização**: Divisão da sociedade
- **Reforma política**: Discussões sobre financiamento de campanhas
- **Lava Jato**: Encerrada em 2021

## O Governo Bolsonaro (2019-2022)

### Contexto Eleitoral (2018)
- **Polarização**: Lula preso, Bolsonaro candidato
- **Fake news**: Influência nas eleições
- **Atentado**: Bolsonaro esfaqueado em Juiz de Fora
- **Vitória**: 55,1% no segundo turno

### Políticas de Governo
- **Economia**: Paulo Guedes, reformas liberalizantes
- **Reforma da Previdência**: Aprovada em 2019
- **Meio ambiente**: Flexibilização de regras ambientais
- **Educação**: Conflitos com universidades

### Pandemia de COVID-19 (2020-2022)
- **Negacionismo**: Minimização da pandemia
- **Conflitos**: Com governadores e prefeitos
- **Vacinação**: Atrasos e questionamentos
- **Impacto**: Mais de 700 mil mortes no Brasil

### Crise Política
- **Manifestações**: Pró e contra o governo
- **Relação com STF**: Conflitos institucionais
- **7 de setembro de 2021**: Protestos golpistas
- **Eleições 2022**: Derrota para Lula

## O Retorno de Lula (2023-presente)

### Eleições de 2022
- **Polarização extrema**: Lula vs. Bolsonaro
- **Segundo turno**: Lula vence com 50,9%
- **Transição**: Tensão política
- **8 de janeiro de 2023**: Ataque às sedes dos três poderes

### Terceiro Mandato de Lula
- **Política econômica**: Retorno de políticas sociais
- **Meio ambiente**: Combate ao desmatamento na Amazônia
- **Política externa**: Retorno ao protagonismo internacional
- **Desafios**: Inflação, juros altos, polarização

### Desafios Atuais
- **Reforma tributária**: Simplificação de impostos
- **Reforma administrativa**: Mudanças no serviço público
- **Polarização**: Divisão social persistente
- **Economia**: Crescimento abaixo do esperado`,
        duration: 25,
        order: 4,
        quiz: {
          questions: [
            {
              question: `(ENEM 2024) A Operação Lava Jato, iniciada em 2014, foi a maior operação anticorrupção da história do Brasil. Uma das principais consequências dessa operação foi:

- (A) a absolvição de todos os investigados por falta de provas.
- (B) a condenação de diversos políticos e empresários por corrupção.
- (C) a extinção de todas as empresas investigadas.
- (D) a unificação de todos os partidos políticos.
- (E) a proibição de qualquer forma de investigação policial.`,
              options: '["A absolvição de todos os investigados por falta de provas", "A condenação de diversos políticos e empresários por corrupção", "A extinção de todas as empresas investigadas", "A unificação de todos os partidos políticos"]',
              answer: 1,
              explanation: 'A Operação Lava Jato resultou na condenação de diversos políticos e empresários por corrupção, incluindo ex-presidentes, senadores e executivos de grandes empresas.',
              order: 1
            },
            {
              question: `(ENEM 2023) A pandemia de COVID-19, que atingiu o Brasil em 2020, teve impactos significativos na sociedade. Uma das características da resposta brasileira à pandemia foi:

- (A) a unificação de todas as esferas de governo na luta contra a pandemia.
- (B) o consenso científico absoluto sobre todas as medidas adotadas.
- (C) conflitos entre o governo federal e governadores sobre as medidas de combate.
- (D) a ausência de qualquer forma de debate público sobre a pandemia.
- (E) a implementação de medidas idênticas em todos os estados.`,
              options: '["A unificação de todas as esferas de governo na luta contra a pandemia", "O consenso científico absoluto sobre todas as medidas adotadas", "Conflitos entre o governo federal e governadores sobre as medidas de combate", "A ausência de qualquer forma de debate público sobre a pandemia"]',
              answer: 2,
              explanation: 'Houve significativos conflitos entre o governo federal e governadores/prefeitos sobre as medidas de combate à pandemia, incluindo lockdowns, uso de máscaras e vacinação.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Desafios Contemporâneos do Brasil',
        content: `# Desafios Contemporâneos do Brasil

## Desigualdade Social

### Indicadores Atuais
- **Índice de Gini**: 0,53 (um dos mais altos do mundo)
- **1% mais rico**: Detém 25% da renda nacional
- **Pobreza**: 30 milhões abaixo da linha de pobreza
- **Fome**: Retorno após erradicação em 2014

### Causas Estruturais
- **Herança colonial**: Escravidão e concentração de terras
- **Educação**: Qualidade desigual entre regiões
- **Tributação**: Sistema regressivo
- **Mercado de trabalho**: Informalidade e precarização

### Políticas de Combate
- **Bolsa Família**: Transferência de renda
- **Salário mínimo**: Reajustes acima da inflação
- **Educação**: Expansão de universidades públicas
- **Reforma agrária**: Limitada e controversa

## Educação Pública

### Desafios
- **Qualidade**: Baixo desempenho em avaliações internacionais
- **Evasão**: 25% dos jovens não completam o ensino médio
- **Infraestrutura**: Escolas sem recursos adequados
- **Valorização**: Professores com baixos salários

### Avanços
- **Expansão**: 10 novas universidades federais (2003-2014)
- **ProUni**: 2 milhões de bolsas concedidas
- **FIES**: Financiamento estudantil ampliado
- **ENEM**: Democratização do acesso ao ensino superior

### Reformas Recentes
- **Novo Ensino Médio**: Flexibilização curricular
- **Base Nacional Comum Curricular (BNCC)**: Padronização
- **Educação integral**: Expansão de tempo integral
- **Tecnologia**: Inclusão digital nas escolas

## Meio Ambiente

### Amazônia
- **Desmatamento**: 17% já desmatado
- **Queimadas**: Aumento nos últimos anos
- **Garimpo ilegal**: Terras indígenas invadidas
- **Crise climática**: Impacto global

### Políticas Ambientais
- **IBAMA**: Fiscalização ambiental
- **Áreas protegidas**: 27% do território em unidades de conservação
- **Povos tradicionais**: Proteção de terras indígenas
- **Acordos internacionais**: Paris, Amazônia

### Desafios Atuais
- **Desenvolvimento vs. conservação**: Conflito permanente
- **Mudanças climáticas**: Secas e enchentes
- **Recursos hídricos**: Escassez em algumas regiões
- **Energia**: Transição para fontes renováveis

## Violência e Segurança Pública

### Indicadores
- **Homicídios**: 45.000 por ano (2022)
- **Encarceramento**: 3ª maior população carcerária do mundo
- **Tráfico de drogas**: Principal causa de violência
- **Polícia**: Letalidade e corrupção

### Causas
- **Desigualdade**: Pobreza e exclusão social
- **Tráfico**: Narcotráfico internacional
- **Sistema prisional**: Superlotação e reincidência
- **Impunidade**: Baixa resolução de crimes

### Políticas de Segurança
- **Pacote Anticrime**: Lei aprovada em 2019
- **Sistema penitenciário**: Reformas limitadas
- **Policiamento comunitário**: Experiências locais
- **Inteligência**: Combate ao crime organizado

## Perspectivas Futuras

### Oportunidades
- **Demografia**: Bônus demográfico até 2030
- **Tecnologia**: Hub de inovação na América Latina
- **Agronegócio**: Potencial de crescimento
- **Energia renovável**: Líder em energia eólica e solar

### Desafios
- **Reformas estruturais**: Tributária, administrativa, previdenciária
- **Polarização**: Risco à democracia
- **Economia**: Crescimento sustentável
- **Inclusão social**: Redução de desigualdades`,
        duration: 25,
        order: 5,
        quiz: {
          questions: [
            {
              question: `(ENEM 2024) O Brasil enfrenta significativos desafios em relação à desigualdade social. Um dos indicadores que demonstra essa desigualdade é:

- (A) o Índice de Desenvolvimento Humano (IDH), que é o mais alto do mundo.
- (B) o Índice de Gini, que está entre os mais altos do mundo.
- (C) a distribuição de renda, que é a mais igualitária das Américas.
- (D) a taxa de pobreza, que é a mais baixa da América Latina.
- (E) o acesso à educação, que é universal e de alta qualidade.`,
              options: '["O Índice de Desenvolvimento Humano (IDH), que é o mais alto do mundo", "O Índice de Gini, que está entre os mais altos do mundo", "A distribuição de renda, que é a mais igualitária das Américas", "A taxa de pobreza, que é a mais baixa da América Latina"]',
              answer: 1,
              explanation: 'O Brasil possui um dos maiores Índices de Gini do mundo (0,53), indicando alta concentração de renda e significativa desigualdade social.',
              order: 1
            },
            {
              question: `(ENEM 2023) A Amazônia brasileira enfrenta diversos desafios ambientais contemporâneos. Um dos principais problemas ambientais da região é:

- (A) o desmatamento controlado e sustentável.
- (B) a ausência de qualquer forma de proteção ambiental.
- (C) o desmatamento ilegal e as queimadas.
- (D) a proibição de qualquer atividade econômica na região.
- (E) a ausência de povos tradicionais na Amazônia.`,
              options: '["O desmatamento controlado e sustentável", "A ausência de qualquer forma de proteção ambiental", "O desmatamento ilegal e as queimadas", "A proibição de qualquer atividade econômica na região"]',
              answer: 2,
              explanation: 'O desmatamento ilegal e as queimadas são os principais problemas ambientais da Amazônia, ameaçando a biodiversidade e contribuindo para as mudanças climáticas.',
              order: 2
            }
          ]
        }
      }
    ]
  }
];

async function main() {
  console.log('🌱 Iniciando seed do Módulo: Brasil Contemporâneo (1985-presente)...');
  console.log('📚 Baseado na Matriz de Referência do ENEM/MEC');

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

  console.log('🎉 Seed do Módulo Brasil Contemporâneo concluído!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
