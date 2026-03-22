import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Dados dos módulos e aulas baseados nos temas mais cobrados no ENEM
const courseData = [
  {
    title: "Brasil Colonial",
    description: "O tema MAIS cobrado no ENEM! Domine o período colonial brasileiro, desde a chegada dos portugueses até a Independência.",
    icon: "Ship",
    color: "amber",
    order: 1,
    lessons: [
      {
        title: "Chegada dos Portugueses e Início da Colonização",
        content: `# Chegada dos Portugueses e Início da Colonização

## Contexto Histórico

A chegada dos portugueses ao Brasil em **1500** marca o início da colonização portuguesa na América. Este período é fundamental para compreender a formação da sociedade brasileira.

### Antecedentes

- **Tratado de Tordesilhas (1494)**: Dividiu o mundo entre Portugal e Espanha, garantindo a Portugal as terras que viriam a ser o Brasil
- **Viagem de Cabral**: Oficialmente uma expedição comercial às Índias, mas que resultou no "descobrimento" do Brasil

### O Período Pré-Colonial (1500-1530)

- **Extração do Pau-Brasil**: Primeira atividade econômica, baseada no escambo com os indígenas
- **Feitorias**: Postos de comércio costeiros
- **Ataques de corsários**: Franceses e holandeses ameaçavam a posse portuguesa

### O Início da Colonização Efetiva (1530-1534)

#### Expedição de Martim Afonso de Sousa (1530)

- Objetivo: Expulsar os franceses e iniciar a colonização
- Fundação de **São Vicente** (1532) - primeira vila do Brasil
- Introdução da cana-de-açúcar

#### Sistema de Capitanias Hereditárias (1534)

O rei D. João III dividiu o Brasil em 15 capitanias hereditárias:

| Característica | Descrição |
|----------------|-----------|
| **Doação** | Carta de doação conferia direitos ao donatário |
| **Foral** | Definia direitos e deveres dos colonos |
| **Hereditariedade** | Capitanias podiam ser herdadas |
| **Autonomia** | Donatários tinham amplos poderes |

**Por que a maioria fracassou?**
- Falta de recursos dos donatários
- Ataques indígenas
- Isolamento e dificuldades de comunicação
- Apenas Pernambuco e São Vicente prosperaram

### O Governo-Geral (1549)

Devido ao fracasso das capitanias, Portugal criou o Governo-Geral:

- **Tomé de Sousa** foi o primeiro governador-geral
- Fundação de **Salvador** - primeira capital do Brasil
- Criação de cargos administrativos: ouvidor, provedor-mor, capitão-mor
- Unificação da defesa e administração

## Pontos-Chave para o ENEM

1. **Tordesilhas**: Entender a disputa colonial entre Portugal e Espanha
2. **Capitanias Hereditárias**: Sistema feudalizante, privado, descentralizado
3. **Governo-Geral**: Centralização administrativa
4. **Mudança de foco**: De exploração comercial para colonização de povoamento`,
        duration: 25,
        order: 1,
        quiz: {
          questions: [
            {
              question: "O Tratado de Tordesilhas (1494) foi importante porque:",
              options: JSON.stringify([
                "Estabeleceu os limites das possessões coloniais de Portugal e Espanha",
                "Determinou o fim da escravidão indígena",
                "Criou o sistema de capitanias hereditárias",
                "Oficializou a independência do Brasil"
              ]),
              answer: 0,
              explanation: "O Tratado de Tordesilhas dividiu o mundo entre Portugal e Espanha, estabelecendo uma linha imaginária a 370 léguas a oeste de Cabo Verde. As terras a leste pertenciam a Portugal, e a oeste, à Espanha.",
              order: 0
            },
            {
              question: "Qual foi a principal razão para a criação do Governo-Geral em 1549?",
              options: JSON.stringify([
                "Para defender o território das invasões holandesas",
                "Para centralizar a administração colonial diante do fracasso das capitanias",
                "Para estimular a imigração europeia",
                "Para abolir a escravidão africana"
              ]),
              answer: 1,
              explanation: "O Governo-Geral foi criado para centralizar a administração colonial, uma vez que o sistema de capitanias hereditárias fracassou na maioria das regiões, exceto em Pernambuco e São Vicente.",
              order: 1
            },
            {
              question: "O período pré-colonial (1500-1530) caracterizou-se pela:",
              options: JSON.stringify([
                "Intensa produção de açúcar para exportação",
                "Extração de pau-brasil através do escambo com indígenas",
                "Fundação de diversas cidades no interior",
                "Implantação do sistema de plantation"
              ]),
              answer: 1,
              explanation: "Durante o período pré-colonial, a principal atividade econômica foi a extração de pau-brasil, realizada através do escambo com os indígenas. A colonização efetiva só começou em 1530 com a expedição de Martim Afonso de Souza.",
              order: 2
            }
          ]
        }
      },
      {
        title: "A Economia Açucareira e a Escravidão",
        content: `# A Economia Açucareira e a Escravidão

## O Açúcar no Brasil Colonial

A produção de açúcar foi a primeira grande atividade econômica do Brasil colonial e transformou o Nordeste no maior produtor mundial do século XVII.

### Características do Engenho

O engenho de açúcar era uma unidade produtora que combinava:

- **Agricultura**: Plantio de cana-de-açúcar
- **Indústria**: Transformação da cana em açúcar
- **Complexo produtivo**: Casa de purgar, capela, senzala, casa-grande

#### Estrutura Social

| Grupo Social | Função |
|--------------|--------|
| **Senhor de engenho** | Proprietário, detinha poder político e econômico |
| **Lavradores de cana** | Pequenos produtores dependentes do engenho |
| **Feitores** | Encarregados da fiscalização do trabalho |
| **Escravos** | Mão de obra forçada (africanos e indígenas) |
| **Brancos pobres** | Trabalhadores livres em funções variadas |

### O Sistema de Plantation

O engenho funcionava como uma **plantation**:

- **Monocultura**: Foco exclusivo na cana-de-açúcar
- **Latifúndio**: Grandes propriedades de terra
- **Escravidão**: Mão de obra compulsória
- **Exportação**: Produção voltada para o mercado europeu

### O Ciclo do Ouro e a Escravidão Africana

A partir do século XVII, a escravidão africana intensificou-se:

#### Motivos da Escravidão Africana

1. Experiência agrícola dos africanos
2. Resistência a doenças
3. Maior facilidade de aquisição (tráfico negreiro)
4. Ideologia de que africanos eram "naturalmente" escravos

#### O Tráfico Negreiro

- **Rotas triangulares**: Europa → África → América → Europa
- **Middle Passage**: Travessia do Atlântico, condições precárias
- **Lucratividade**: Enorme fonte de riqueza para Portugal

### Zumbi dos Palmares e a Resistência

Os **Quilombos** representaram a principal forma de resistência:

- **Palmares**: Maior quilombo do Brasil, em Alagoas
- **Zumbi**: Líder que resistiu por décadas aos ataques
- **Organização**: Sociedades complexas com agricultura, comércio e defesa

## Pontos-Chave para o ENEM

1. **Engenho**: Unidade produtiva agroindustrial
2. **Casa-grande & Senzala**: Metáfora de Gilberto Freyre para a sociedade brasileira
3. **Tráfico negreiro**: Base econômica da escravidão
4. **Quilombos**: Resistência à escravidão`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: "O engenho de açúcar no Brasil colonial pode ser caracterizado como:",
              options: JSON.stringify([
                "Uma empresa capitalista com trabalho assalariado",
                "Uma unidade agroindustrial baseada na escravidão",
                "Um sistema de produção artesanal para o mercado interno",
                "Uma cooperativa de pequenos produtores"
              ]),
              answer: 1,
              explanation: "O engenho era uma unidade agroindustrial que combinava a produção agrícola (cana) com a transformação industrial (açúcar), utilizando mão de obra escrava e voltada para a exportação.",
              order: 0
            },
            {
              question: "O Quilombo de Palmares representou:",
              options: JSON.stringify([
                "Uma colônia de europeus fugitivos",
                "A principal forma de resistência à escravidão no período colonial",
                "Um núcleo de produção de açúcar independente",
                "Uma missão religiosa jesuítica"
              ]),
              answer: 1,
              explanation: "Os quilombos, especialmente Palmares, foram a principal forma de resistência à escravidão. Palmares chegou a ter cerca de 30 mil habitantes e resistiu por quase todo o século XVII.",
              order: 1
            }
          ]
        }
      },
      {
        title: "A União Ibérica e as Invasões Holandesas",
        content: `# A União Ibérica e as Invasões Holandesas

## A União Ibérica (1580-1640)

Em 1580, Portugal perdeu sua independência para a Espanha, iniciando um período conhecido como **União Ibérica** ou "Domínio Filipino".

### Causas da União

- Morte de D. Sebastião em Alcácer-Quibir (1578) sem herdeiros
- Crise de sucessão em Portugal
- Claim de Filipe II de Espanha ao trono português
- Vitória militar espanhola

### Consequências para o Brasil

| Aspecto | Impacto |
|---------|---------|
| **Expansão territorial** | Avanço para além de Tordesilhas |
| **Comércio** | Brasil passou a comercializar com colônias espanholas |
| **Segurança** | Maior vulnerabilidade a ataques de inimigos da Espanha |

## As Invasões Holandesas

A Holanda, inimiga da Espanha, atacou o Brasil para controlar o lucrativo comércio de açúcar.

### Fases da Invasão

#### Primeira Invasão - Bahia (1624-1625)

- Holandeses ocuparam Salvador
- Resistência luso-brasileira
- Expulsão após um ano com ajuda espanhola

#### Segunda Invasão - Pernambuco (1630-1654)

- Conquista de Olinda e Recife
- Período mais longo e significativo
- Domínio de grande parte do Nordeste

### O Período de Maurício de Nassau (1637-1644)

**Maurício de Nassau** foi o governador holandês que transformou Recife:

#### Realizações de Nassau

- **Urbanização**: Ampliação de Recife (Mauritsstad)
- **Tolerância religiosa**: Permissão para diferentes cultos
- **Ciência e Arte**: Patrocinou artistas e cientistas
- **Relações com senhores de engenho**: Empréstimos e apoio

#### Obras Importantes

- Pontes e canais
- Observatório astronômico (primeiro das Américas)
- Zoológico e jardim botânico

### A Insurreição Pernambucana (1645-1654)

Após a saída de Nassau, os holandeses começaram a cobrar as dívidas dos senhores de engenho, levando à revolta:

- **Batalhas dos Guararapes**: Marco da expulsão
- **Rendição em 1654**: Fim do domínio holandês

## Pontos-Chave para o ENEM

1. **União Ibérica**: Expansão territorial brasileira
2. **Invasões Holandesas**: Impacto na economia açucareira
3. **Nassau**: Modernização e tolerância
4. **Insurreição**: Nacionalismo e defesa dos interesses locais`,
        duration: 25,
        order: 3,
        quiz: {
          questions: [
            {
              question: "A União Ibérica (1580-1640) favoreceu o Brasil porque:",
              options: JSON.stringify([
                "Permitiu a expansão territorial além da linha de Tordesilhas",
                "Estimulou a imigração de protestantes europeus",
                "Aboliu a escravidão nas áreas de mineração",
                "Criou um parlamento brasileiro independente"
              ]),
              answer: 0,
              explanation: "Durante a União Ibérica, o Brasil se beneficiou do enfraquecimento das fronteiras coloniais, permitindo a expansão territorial para o oeste, além da linha de Tordesilhas.",
              order: 0
            },
            {
              question: "Maurício de Nassau, governador holandês em Pernambuco, destacou-se por:",
              options: JSON.stringify([
                "Implantar um regime de intolerância religiosa",
                "Promover a modernização urbana e a tolerância religiosa",
                "Estimular o fim da escravidão africana",
                "Proibir o comércio de açúcar com a Europa"
              ]),
              answer: 1,
              explanation: "Nassau é lembrado por sua administração iluminista, que incluiu urbanização de Recife, tolerância religiosa, e patrocínio de ciências e artes.",
              order: 1
            }
          ]
        }
      },
      {
        title: "A Mineração e o Ciclo do Ouro",
        content: `# A Mineração e o Ciclo do Ouro

## O Descobrimento do Ouro

No final do século XVII, bandeirantes paulistas descobriram ouro na região das Minas Gerais, iniciando um novo ciclo econômico.

### As Principais Regiões Mineradoras

- **Minas Gerais**: Principal região, com Vila Rica (Ouro Preto)
- **Mato Grosso**: Descobertas posteriores
- **Goiás**: Expansão da mineração

## Transformações Econômicas e Sociais

### Mudanças na Economia

| Aspecto | Antes | Depois |
|---------|-------|--------|
| **Centro econômico** | Nordeste (açúcar) | Centro-Sul (mineração) |
| **Capital** | Salvador | Rio de Janeiro (1763) |
| **População** | Concentrada no litoral | Interiorização |

### A Sociedade Mineradora

- **Maior urbanização**: Cidades cresciam em torno das minas
- **Maior mobilidade social**: Possibilidade de enriquecimento rápido
- **Diversidade**: Presença de pessoas de diversas origens
- **Mulheres**: Maior presença feminina nas cidades

### O Trabalho nas Minas

A mineração utilizava predominantemente mão de obra escrava africana:

- **Escravos de mineração**: Especializados na extração
- **Aluguel de escravos**: Prática comum nas cidades
- **Alforrias**: Mais frequentes que nos engenhos

## O Quilombo dos Palmares e a Resistência

O século XVIII viu a intensificação da resistência escrava:

- **Quilombos**: Comunidades de escravos fugidos
- **Palmares**: Maior e mais organizado quilombo
- **Zumbi**: Líder que se tornou símbolo da resistência

## A Inconfidência Mineira (1789)

### Contexto

- **Derrama**: Cobrança forçada de impostos atrasados
- **Ideias iluministas**: Influência da Independência Americana (1776)
- **Insatisfação**: Contra a exploração portuguesa

### Conspiração

Grupo de intelectuais e proprietários mineiros planejou a independência:

- **Tiradentes**: Joaquim José da Silva Xavier, líder do movimento
- **Cláudio Manuel da Costa**: Poeta e advogado
- **Tomás Antônio Gonzaga**: Poeta e magistrado

### Desfecho

- Denúncia do movimento às autoridades
- Prisão dos conjurados
- **Execução de Tiradentes** (1792): Enforcado e esquartejado
- Outros condenados ao exílio

## Pontos-Chave para o ENEM

1. **Interiorização**: Ouro moveu o centro econômico para o interior
2. **Urbanização**: Minas Gerais se urbanizou rapidamente
3. **Inconfidência**: Primeiro movimento de independência
4. **Tiradentes**: Mártir da independência brasileira`,
        duration: 30,
        order: 4,
        quiz: {
          questions: [
            {
              question: "A descoberta de ouro em Minas Gerais provocou:",
              options: JSON.stringify([
                "O esvaziamento das cidades litorâneas",
                "A transferência da capital de Salvador para o Rio de Janeiro",
                "O fim da escravidão africana",
                "A diminuição da imigração portuguesa"
              ]),
              answer: 1,
              explanation: "Com o ciclo do ouro, o centro econômico se deslocou para o Centro-Sul, levando à transferência da capital de Salvador para o Rio de Janeiro em 1763.",
              order: 0
            },
            {
              question: "A Inconfidência Mineira (1789) foi inspirada por:",
              options: JSON.stringify([
                "Ideias socialistas europeias",
                "Ideias iluministas e pela Independência Americana",
                "Pela Revolução Francesa",
                "Pela Revolução Industrial Inglesa"
              ]),
              answer: 1,
              explanation: "A Inconfidência Mineira foi influenciada pelas ideias iluministas que circulavam entre a elite intelectual e pelo exemplo da Independência Americana (1776).",
              order: 1
            }
          ]
        }
      }
    ]
  },
  {
    title: "Brasil Império",
    description: "O período imperial brasileiro, desde a Independência até a Proclamação da República. Inclui Primeiro e Segundo Reinado.",
    icon: "Crown",
    color: "purple",
    order: 2,
    lessons: [
      {
        title: "A Independência do Brasil",
        content: `# A Independência do Brasil

## O Processo de Independência

A Independência do Brasil em 1822 foi um processo complexo que envolveu conflitos entre Brasil e Portugal, e também conflitos internos no próprio Brasil.

### Contexto: A Corte no Brasil (1808-1821)

A transferência da corte portuguesa para o Brasil em 1808, fugindo de Napoleão, foi decisiva:

- **Abertura dos Portos**: Liberação do comércio com nações amigas
- **Elevação a Reino Unido**: Brasil deixou de ser colônia (1815)
- **Modernização**: Criação de instituições (Banco do Brasil, Imprensa Régia)

### A Revolução do Porto (1820)

Em Portugal, uma revolução liberal exigiu:

- Retorno de D. João VI a Portugal
- Retorno do Brasil à condição de colônia
- Aprovação de uma constituição

### O Caminho para a Independência

#### Medidas de D. Pedro I

1. **Fico** (janeiro de 1822): Recusa em retornar a Portugal
2. **Cumpra-se** (maio de 1822): Decretos só vigorariam com seu aval
3. **Independência ou Morte** (7 de setembro de 1822): Proclamação oficial

### Conflitos Pós-Independência

A independência não foi aceita pacificamente:

- **Guerra de Independência**: Contra tropas portuguesas na Bahia, Maranhão e Pará
- **Resistência**: Algumas províncias eram contrárias à separação

## Pontos-Chave para o ENEM

1. **Processo pacífico?**: Mito - houve conflitos armados
2. **D. Pedro I**: Papel central, mas dentro de uma elite agrária
3. **Elite agrária**: Beneficiada com a independência
4. **Unidade territorial**: Mantida, diferentemente da América espanhola`,
        duration: 20,
        order: 1,
        quiz: {
          questions: [
            {
              question: "A Independência do Brasil foi proclamada em:",
              options: JSON.stringify([
                "1808, com a chegada da família real",
                "1822, por D. Pedro I, às margens do Rio Ipiranga",
                "1889, pela Proclamação da República",
                "1815, com a elevação a Reino Unido"
              ]),
              answer: 1,
              explanation: "A Independência foi proclamada em 7 de setembro de 1822 por D. Pedro I, às margens do Rio Ipiranga, em São Paulo.",
              order: 0
            },
            {
              question: "A Revolução do Porto (1820) influenciou a Independência do Brasil porque:",
              options: JSON.stringify([
                "Defendeu a permanência de D. João VI no Brasil",
                "Exigiu o retorno do Brasil à condição de colônia",
                "Apoiou a independência das colônias americanas",
                "Aboliu a escravidão em Portugal"
              ]),
              answer: 1,
              explanation: "A Revolução do Porto exigiu o retorno de D. João VI a Portugal e pretendia recolonizar o Brasil, acelerando o processo de independência.",
              order: 1
            }
          ]
        }
      },
      {
        title: "O Primeiro Reinado e a Constituição de 1824",
        content: `# O Primeiro Reinado e a Constituição de 1824

## O Primeiro Reinado (1822-1831)

O período entre a Independência e a abdicação de D. Pedro I foi marcado por conflitos políticos e instabilidade.

### A Constituição de 1824

D. Pedro I outorgou a primeira Constituição brasileira após dissolver a Assembleia Constituinte.

#### Principais Características

| Poder | Característica |
|-------|----------------|
| **Executivo** | Forte, centralizado no Imperador |
| **Legislativo** | Bicameral (Senado e Câmara) |
| **Judiciário** | Independente em tese |
| **Moderador** | Poder exclusivo do Imperador |

#### O Poder Moderador

O **Poder Moderador** era o mais polêmico:

- Permitia ao imperador intervir nos demais poderes
- Dissolver a Câmara dos Deputados
- Nomear senadores vitalícios
- Vetar leis

### Conflitos Políticos

#### A Confederação do Equador (1824)

Revolta em Pernambuco contra o autoritarismo de D. Pedro I:

- **Líderes**: Frei Caneca, Manuel de Carvalho
- **Ideais**: Republicanismo e federalismo
- **Desfecho**: Violenta repressão, execuções

### A Abdicação (1831)

D. Pedro I abdicou do trono devido a:

- Perda de apoio político
- Crise econômica
- Conflitos com os portugueses
- Para defender a sucessão ao trono português (sua filha Maria II)

## Pontos-Chave para o ENEM

1. **Constituição de 1824**: Centralizadora, autoritária
2. **Poder Moderador**: Principal instrumento de poder imperial
3. **Confederação do Equador**: Resistência ao autoritarismo
4. **Abdicação**: Resultado da crise política`,
        duration: 25,
        order: 2,
        quiz: {
          questions: [
            {
              question: "A Constituição de 1824 estabeleceu o Poder Moderador, que:",
              options: JSON.stringify([
                "Garantia a independência do Judiciário",
                "Permitia ao Imperador intervir nos demais poderes",
                "Estabelecia o voto universal",
                "Criava o regime parlamentarista"
              ]),
              answer: 1,
              explanation: "O Poder Moderador era um poder exclusivo do Imperador que permitia intervir nos demais poderes, dissolver a Câmara, nomear senadores e vetar leis.",
              order: 0
            },
            {
              question: "A Confederação do Equador (1824) foi:",
              options: JSON.stringify([
                "Uma rebelião escrava contra o Império",
                "Uma revolta contra o autoritarismo de D. Pedro I, com ideais republicanos",
                "Um movimento de apoio ao imperador",
                "Uma guerra contra a Argentina"
              ]),
              answer: 1,
              explanation: "A Confederação do Equador foi uma revolta em Pernambuco contra o autoritarismo de D. Pedro I, defendendo ideais republicanos e federalistas.",
              order: 1
            }
          ]
        }
      },
      {
        title: "O Segundo Reinado e a Economia Cafeeira",
        content: `# O Segundo Reinado e a Economia Cafeeira

## O Período Regencial (1831-1840)

Entre a abdicação de D. Pedro I e a maioridade de D. Pedro II, o Brasil viveu grande instabilidade.

### Principais Revoltas

| Revolta | Região | Características |
|---------|--------|-----------------|
| **Cabanagem** | Pará | Populares contra elite local |
| **Balaiada** | Maranhão | Camponeses e escravos |
| **Sabinada** | Bahia | República separatista |
| **Farroupilha** | Rio Grande do Sul | Republicanismo e federalismo |
| **Praieira** | Pernambuco | Partido Liberal contra conservadores |

### A Maioridade (1840)

D. Pedro II assumiu o trono com apenas 14 anos, iniciando o Segundo Reinado.

## O Segundo Reinado (1840-1889)

### Estabilidade Política

O longo reinado de D. Pedro II trouxe:

- **Paz interna**: Superação das revoltas regenciais
- **Parlamentarismo às avessas**: Sistema adaptado ao Brasil
- **Conciliação**: Política de acordos entre partidos

### A Economia Cafeeira

O café tornou-se o principal produto de exportação:

#### Características

- **Latifúndio**: Grandes propriedades no Vale do Paraíba e Oeste Paulista
- **Escravidão**: Mão de obra escrava até 1888
- **Exportação**: Principal destino: Europa e EUA
- **Imigração**: Após 1850, imigrantes europeus (especialmente italianos)

### Modernização do Brasil

#### Infraestrutura

- **Ferrovia**: Primeira estrada de ferro (1852)
- **Telégrafo**: Comunicação mais rápida
- **Iluminação a gás**: Nas principais cidades
- **Urbanização**: Melhoria do Rio de Janeiro e São Paulo

#### Instituições

- **Banco do Brasil**: Reorganização
- **Educação**: Criação de faculdades
- **Censura**: Liberdade de imprensa relativa

## Pontos-Chave para o ENEM

1. **Período Regencial**: Instabilidade e revoltas
2. **Segundo Reinado**: Estabilidade e modernização
3. **Café**: Motor da economia
4. **Imigração**: Início com o café`,
        duration: 30,
        order: 3,
        quiz: {
          questions: [
            {
              question: "O café tornou-se o principal produto de exportação do Brasil durante o Segundo Reinado. Isso provocou:",
              options: JSON.stringify([
                "O esvaziamento das cidades litorâneas",
                "O enriquecimento do Nordeste",
                "O desenvolvimento do Vale do Paraíba e do Oeste Paulista",
                "O fim da escravidão imediatamente"
              ]),
              answer: 2,
              explanation: "A cafeicultura desenvolveu-se inicialmente no Vale do Paraíba e depois no Oeste Paulista, concentrando riqueza e poder político nessas regiões.",
              order: 0
            },
            {
              question: "A Revolução Farroupilha (1835-1845) ocorreu durante:",
              options: JSON.stringify([
                "O Primeiro Reinado",
                "O Período Regencial",
                "O Segundo Reinado",
                "A República Velha"
              ]),
              answer: 1,
              explanation: "A Revolução Farroupilha foi uma das revoltas do Período Regencial (1831-1840), período de instabilidade entre a abdicação de D. Pedro I e a maioridade de D. Pedro II.",
              order: 1
            }
          ]
        }
      },
      {
        title: "A Escravidão e a Abolição",
        content: `# A Escravidão e a Abolição

## A Escravidão no Brasil Império

O Brasil foi o último país das Américas a abolir a escravidão, em 1888.

### Legislação Abolicionista

| Lei | Ano | Significado |
|-----|-----|-------------|
| **Lei Eusébio de Queirós** | 1850 | Fim do tráfico negreiro |
| **Lei do Ventre Livre** | 1871 | Filhos de escravas nasciam livres |
| **Lei dos Sexagenários** | 1885 | Liberdade aos maiores de 60 anos |
| **Lei Áurea** | 1888 | Abolição total da escravidão |

### O Movimento Abolicionista

#### Principais Abolicionistas

- **Joaquim Nabuco**: Político e escritor
- **José do Patrocínio**: Jornalista e escritor
- **André Rebouças**: Engenheiro e intelectual
- **Luís Gama**: Advogado e ex-escravo

#### Formas de Luta

- **Imprensa**: Jornais abolicionistas
- **Sociedades**: Clubes e associações
- **Fuga**: Redes de apoio a escravos fugidos
- **Advocacia**: Processos de alforria

### A Resistência Escrava

Os próprios escravos resistiram:

- **Quilombos**: Comunidades de fugitivos
- **Rebeliões**: Revoltas nas fazendas
- **Fugas**: Individuais e coletivas
- **Sabotagem**: Quebra de instrumentos, trabalho lento

## O Fim da Escravidão (1888)

### Fatores que levaram à Abolição

1. **Pressão britânica**: Inglaterra queria fim do tráfico
2. **Movimento abolicionista**: Crescimento no Brasil e exterior
3. **Resistência escrava**: Fugas e rebeliões
4. **Imigração**: Alternativa à mão de obra escrava
5. **Guerra do Paraguai**: Escravos que lutaram ganharam liberdade

### A Lei Áurea (13 de maio de 1888)

- Assinada pela Princesa Isabel
- Abolição sem indenização aos senhores
- Sem políticas de integração dos ex-escravos

## Consequências da Abolição

- **Marginalização**: Ex-escravos sem terra ou trabalho
- **Desemprego**: Falta de qualificação
- **Favelas**: Surgimento de cortiços e favelas
- **Racismo**: Continuidade da discriminação

## Pontos-Chave para o ENEM

1. **Último país**: Brasil foi o último a abolir
2. **Leis gradualistas**: Não resolveram o problema
3. **Resistência escrava**: Papel fundamental
4. **Abolição incompleta**: Sem redistribuição de terra`,
        duration: 30,
        order: 4,
        quiz: {
          questions: [
            {
              question: "A Lei Áurea (1888) representou:",
              options: JSON.stringify([
                "A concessão de terras aos ex-escravos",
                "A abolição total da escravidão sem indenização aos senhores",
                "O início do tráfico negreiro",
                "A libertação gradual dos escravos ao longo de 20 anos"
              ]),
              answer: 1,
              explanation: "A Lei Áurea aboliu totalmente a escravidão no Brasil, sem qualquer indenização aos senhores e sem políticas de integração dos ex-escravos à sociedade.",
              order: 0
            },
            {
              question: "A Lei do Ventre Livre (1871) estabelecia que:",
              options: JSON.stringify([
                "Todos os escravos estariam livres em 20 anos",
                "Filhos de mulheres escravas nasciam livres",
                "O tráfico negreiro era proibido",
                "Escravos com mais de 60 anos seriam libertos"
              ]),
              answer: 1,
              explanation: "A Lei do Ventre Livre determinou que filhos de mulheres escravas nasciam livres, mas permaneciam sob tutela dos senhores até os 21 anos.",
              order: 1
            }
          ]
        }
      }
    ]
  },
  {
    title: "Primeira República",
    description: "Um dos temas mais cobrados! Da Proclamação da República à Era Vargas, passando pela República Velha e suas oligarquias.",
    icon: "Building2",
    color: "green",
    order: 3,
    lessons: [
      {
        title: "A Proclamação da República",
        content: `# A Proclamação da República

## O Fim do Império

A República foi proclamada em 15 de novembro de 1889 por um golpe militar liderado pelo Marechal Deodoro da Fonseca.

### Causas da Queda da Monarquia

| Causa | Explicação |
|-------|------------|
| **Questão militar** | Militares insatisfeitos com o governo |
| **Questão religiosa** | Conflito entre Igreja e Estado |
| **Questão abolicionista** | Fazendeiros prejudicados com a Abolição |
| ** republicanismo** | Ideias republicanas ganhavam força |

### O Golpe Republicano

- **15 de novembro de 1889**: Deodoro da Fonseca proclamou a República
- **Sem resistência**: População não defendeu o Império
- **Exílio da família real**: D. Pedro II e família partiram para Europa

## O Governo Provisório (1889-1891)

### Medidas Iniciais

- **Separação Igreja-Estado**: Fim do catolicismo como religião oficial
- **Federalismo**: Estados com maior autonomia
- **Nacionalismo**: Símbolos nacionais (hino, bandeira)
- **Naturalização**: Facilitação para imigrantes

### A Constituição de 1891

A primeira Constituição republicana estabeleceu:

- **República federativa**: Estados autônomos
- **Presidencialismo**: Presidente com amplos poderes
- **Voto**: Masculino, aberto, não obrigatório
- **Três poderes**: Executivo, Legislativo e Judiciário

## Pontos-Chave para o ENEM

1. **Golpe militar**: Não houve participação popular
2. **Elite agrária**: Continuou no poder
3. **Federalismo**: Fortaleceu os estados
4. **Voto aberto**: Favorecia os coronéis`,
        duration: 20,
        order: 1,
        quiz: {
          questions: [
            {
              question: "A Proclamação da República em 1889 foi:",
              options: JSON.stringify([
                "Uma revolução popular que derrubou a monarquia",
                "Um golpe militar sem participação popular significativa",
                "O resultado de um referendo democrático",
                "Uma guerra de independência contra Portugal"
              ]),
              answer: 1,
              explanation: "A República foi proclamada por um golpe militar liderado pelo Marechal Deodoro da Fonseca, sem participação popular significativa.",
              order: 0
            },
            {
              question: "A Constituição de 1891 estabeleceu o sistema de votação:",
              options: JSON.stringify([
                "Secreto e obrigatório para todos os cidadãos",
                "Aberto e não obrigatório, apenas para homens",
                "Universal, incluindo mulheres",
                "Apenas para proprietários de terras"
              ]),
              answer: 1,
              explanation: "A Constituição de 1891 manteve o voto aberto (não secreto) e não obrigatório, apenas para homens maiores de 21 anos, o que facilitava o controle dos coronéis.",
              order: 1
            }
          ]
        }
      },
      {
        title: "A República Velha e o Coronelismo",
        content: `# A República Velha e o Coronelismo

## O Período Oligárquico (1894-1930)

Após os primeiros governos militares, os civis assumiram, iniciando a República Velha ou Oligárquica.

### Política dos Governadores

Idealizada por Campos Sales, estabelecia:

- Apoio federal aos governadores em troca de apoio ao Congresso
- Troca de favores entre estados e União
- Domínio das oligarquias estaduais

### Política do Café com Leite

Alternância entre São Paulo (café) e Minas Gerais (leite) na presidência:

- **São Paulo**: República do café, mais rico
- **Minas Gerais**: Maior estado em população
- **Acordo**: Alternância no poder

## O Coronelismo

### Estrutura do Poder Local

| Nível | Função |
|-------|--------|
| **Coronel** | Chefe local, dono de terras, controlava votos |
| **Coronelismo** | Sistema de poder baseado na troca de favores |
| **Mandonismo** | Autoridade arbitrária dos coronéis |

### O Voto de Cabresto

- **Voto aberto**: Permitia o controle
- **Coronel**: Exigia votos dos dependentes
- **Fraudes**: "Gatos", "votos dos mortos", etc.

### As Capitanias do Mato

- Forças policiais particulares dos coronéis
- Mantinham a ordem nas fazendas
- Perseguiam opositores

## Revoltas da República Velha

| Revolta | Local | Motivo |
|---------|-------|--------|
| **Canudos** | Bahia | Messianismo, contra a República |
| **Vacina** | Rio de Janeiro | Obrigação de vacinação |
| **Chibata** | Rio de Janeiro | Marinheiros contra castigos físicos |
| **Cangaço** | Nordeste | Banditismo social |
| **1922 e 1924** | Vários | Tenentismo contra oligarquias |

## Pontos-Chave para o ENEM

1. **Coronelismo**: Controle local através de favores
2. **Café com Leite**: Domínio de SP e MG
3. **Voto de cabresto**: Manipulação eleitoral
4. **Revoltas**: Descontentamento popular`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: "O 'voto de cabresto' durante a República Velha consistia em:",
              options: JSON.stringify([
                "Um sistema de voto secreto e obrigatório",
                "A manipulação de eleitores através do voto aberto e controle dos coronéis",
                "A proibição do voto para analfabetos",
                "A obrigatoriedade de votar no candidato do governo"
              ]),
              answer: 1,
              explanation: "O 'voto de cabresto' era a prática de controlar os eleitores através do voto aberto (não secreto), onde os coronéis podiam verificar em quem cada pessoa votou.",
              order: 0
            },
            {
              question: "A Política do Café com Leite caracterizou-se pela:",
              options: JSON.stringify([
                "Alternância entre paulistas e mineiros na presidência",
                "Domínio político do Nordeste açucareiro",
                "Parceria entre cafeicultores e industriais",
                "Ditadura militar do exército"
              ]),
              answer: 0,
              explanation: "A Política do Café com Leite foi o acordo entre as oligarquias de São Paulo (café) e Minas Gerais (leite) para alternarem-se na presidência da República.",
              order: 1
            }
          ]
        }
      },
      {
        title: "A Guerra de Canudos",
        content: `# A Guerra de Canudos

## O Contexto de Canudos

Canudos foi uma comunidade fundada em 1893 no sertão da Bahia pelo beato Antônio Conselheiro.

### Antônio Conselheiro

- Pregador religioso que percorria o sertão
- Crítico da República e da separação Igreja-Estado
- Atraiu milhares de sertanejos desesperados

### O Assentamento de Canudos

- **Localização**: Região árida da Bahia
- **População**: Cerca de 25 mil pessoas
- **Características**: Propriedade coletiva, sem impostos, sem moeda

## As Expedições Militares

O governo enviou quatro expedições para destruir Canudos:

| Expedição | Resultado |
|-----------|-----------|
| **1ª** | Derrota, comandante morto |
| **2ª** | Derrota humilhante |
| **3ª** | Derrota, Moreira César morto |
| **4ª** | Vitória após cerco prolongado |

### A Quarta Expedição

- Milhares de soldados enviados
- Cerco longo e sangrento
- Destruição completa do arraial
- Mortandade massiva de canudenses

## Interpretações de Canudos

### Visão da Época

- Canudos como ameaça à República
- Monarquistas fanáticos
- Perigo para a ordem

### Visão Atual

- Movimento social de sertanejos excluídos
- Resistência ao modelo de República excludente
- Tragédia causada pela intolerância

## Pontos-Chave para o ENEM

1. **Exclusão social**: Base do movimento
2. **Intolerância**: Reação desproporcional
3. **República excludente**: Não contemplava os pobres
4. **Guerra cívica**: Brasileiros matando brasileiros`,
        duration: 25,
        order: 3,
        quiz: {
          questions: [
            {
              question: "A Guerra de Canudos pode ser interpretada como:",
              options: JSON.stringify([
                "Uma guerra entre Brasil e Argentina",
                "Um movimento de resistência de sertanejos excluídos da República",
                "Uma rebelião de escravos contra a Abolição",
                "Uma invasão estrangeira no Nordeste"
              ]),
              answer: 1,
              explanation: "Canudos foi um movimento social de sertanejos pobres que foram excluídos do projeto republicano e buscaram refúgio na comunidade liderada por Antônio Conselheiro.",
              order: 0
            },
            {
              question: "A destruição de Canudos pelo governo republicano demonstrou:",
              options: JSON.stringify([
                "A tolerância religiosa do novo regime",
                "A capacidade de diálogo do governo",
                "A intolerância e violência do Estado contra movimentos populares",
                "O sucesso das políticas sociais da República"
              ]),
              answer: 2,
              explanation: "A destruição de Canudos revelou a intolerância da República com movimentos populares que não se enquadrassem no modelo oficial, usando violência desproporcional contra civis.",
              order: 1
            }
          ]
        }
      }
    ]
  },
  {
    title: "Era Vargas",
    description: "Um dos temas mais cobrados! O período de Getúlio Vargas (1930-1945) transformou o Brasil com industrialização e direitos trabalhistas.",
    icon: "Factory",
    color: "red",
    order: 4,
    lessons: [
      {
        title: "A Revolução de 1930 e o Governo Provisório",
        content: `# A Revolução de 1930 e o Governo Provisório

## A Crise da República Velha

A República Velha entrou em crise nos anos 1920:

### Fatores da Crise

- **Tenentismo**: Militares contra as oligarquias
- **Crise do café**: Superprodução, quebra da bolsa de 1929
- **Quebra do Café com Leite**: Em 1929, São Paulo não apoiou o candidato de Minas

### A Eleição de 1930

- **Júlio Prestes** (SP) x **Getúlio Vargas** (RS)
- Prestes venceu com denúncias de fraude
- Vargas não aceitou o resultado

## A Revolução de 1930

- **3 de outubro**: Início do movimento
- **Aliança Liberal**: RS, MG, PB e tenentes
- **Vitória rápida**: Em 3 semanas, o governo caiu
- **24 de outubro**: Washington Luís deposto

## O Governo Provisório (1930-1934)

### Medidas de Vargas

- **Centralização**: Fechamento de Congressos estaduais
- **Interventores**: Nomeou governadores leais
- **Ministérios**: Criou ministérios (Educação, Trabalho)
- **DIT**: Departamento de Imprensa e Propaganda

### A Constituição de 1934

- Voto secreto e obrigatório
- Direitos trabalhistas
- Mandato de 4 anos para presidente
- Eleição indireta

## Pontos-Chave para o ENEM

1. **1930**: Fim da República Velha
2. **Centralização**: Fortalecimento do poder federal
3. **Tenentismo**: Aliados de Vargas
4. **Transformações**: Início da Era Vargas`,
        duration: 25,
        order: 1,
        quiz: {
          questions: [
            {
              question: "A Revolução de 1930 foi causada principalmente por:",
              options: JSON.stringify([
                "O desejo de restaurar a monarquia",
                "A crise da República Velha, a quebra do Café com Leite e a crise econômica de 1929",
                "A pressão dos movimentos operários",
                "A invasão de potências estrangeiras"
              ]),
              answer: 1,
              explanation: "A Revolução de 1930 resultou da crise do modelo oligárquico, da ruptura do acordo Café com Leite e do impacto da crise de 1929 sobre a economia cafeeira.",
              order: 0
            },
            {
              question: "O Governo Provisório de Vargas (1930-1934) caracterizou-se pela:",
              options: JSON.stringify([
                "Descentralização administrativa",
                "Centralização do poder e nomeação de interventores nos estados",
                "Manutenção da política do Café com Leite",
                "Fortalecimento das oligarquias estaduais"
              ]),
              answer: 1,
              explanation: "Vargas centralizou o poder, fechou Congressos estaduais e nomeou interventores fiéis em cada estado, enfraquecendo as oligarquias regionais.",
              order: 1
            }
          ]
        }
      },
      {
        title: "O Estado Novo (1937-1945)",
        content: `# O Estado Novo (1937-1945)

## O Contexto

Após um governo constitucional (1934-1937), Vargas deu um golpe e instaurou a ditadura do Estado Novo.

### O Plano Cohen

- Documento falso atribuído aos comunistas
- Serviu de pretexto para o golpe
- Justificou a "defesa da nação"

### O Golpe de 1937

- **10 de novembro**: Fechamento do Congresso
- **Nova Constituição**: Autoritária, inspirada na Polônia
- **Ditadura**: Vargas governou por decretos

## Características do Estado Novo

### Políticas

| Área | Característica |
|------|----------------|
| **Política** | Ditadura, sem partidos, censura |
| **Economia** | Industrialização, empresas estatais |
| **Trabalho** | CLT, sindicatos controlados |
| **Propaganda** | Culto a Vargas, nacionalismo |

### A Industrialização

- **CSN**: Companhia Siderúrgica Nacional (1941)
- **Petrobras**: Projeto iniciado (criada em 1953)
- **Vale**: Companhia Vale do Rio Doce (1942)
- **Infraestrutura**: Estradas, hidrelétricas

### A CLT (1943)

A Consolidação das Leis do Trabalho garantiu:

- Salário mínimo
- Férias remuneradas
- Jornada de trabalho de 8 horas
- 13º salário
- Férias proporcionais

## O Fim do Estado Novo

- **Segunda Guerra**: Brasil apoiou os Aliados
- **Contradição**: Lutar pela democracia na Europa com ditadura em casa
- **Pressão**: Movimentos pela redemocratização
- **Outubro de 1945**: Vargas foi deposto pelos militares

## Pontos-Chave para o ENEM

1. **Ditadura**: Sem democracia, censura
2. **Industrialização**: Base industrial do Brasil
3. **CLT**: Direitos trabalhistas
4. **Contradição**: Ditadura apoiando Aliados`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: "O Estado Novo (1937-1945) foi uma ditadura que:",
              options: JSON.stringify([
                "Estabeleceu a democracia pluripartidária",
                "Promoveu a industrialização e criou a CLT, mas com censura e sem partidos",
                "Manteve o sistema oligárquico da República Velha",
                "Entregou o poder aos comunistas"
              ]),
              answer: 1,
              explanation: "O Estado Novo foi uma ditadura que promoveu a industrialização (criando empresas estatais) e estabeleceu direitos trabalhistas (CLT), mas com forte censura, perseguição política e sem partidos.",
              order: 0
            },
            {
              question: "A CLT (Consolidação das Leis do Trabalho), de 1943, garantiu aos trabalhadores:",
              options: JSON.stringify([
                "O direito de greve irrestrito",
                "Salário mínimo, férias, jornada de 8 horas e 13º salário",
                "A desapropriação das fábricas",
                "O fim dos sindicatos"
              ]),
              answer: 1,
              explanation: "A CLT garantiu importantes direitos como salário mínimo, férias remuneradas, jornada de trabalho de 8 horas, 13º salário, entre outros.",
              order: 1
            }
          ]
        }
      },
      {
        title: "O Segundo Governo Vargas (1951-1954)",
        content: `# O Segundo Governo Vargas (1951-1954)

## O Retorno de Vargas

Após o fim do Estado Novo, Vargas foi eleito democraticamente em 1951.

### O Contexto

- **Redemocratização**: Nova Constituição em 1946
- **Dutratra (1946-1951)**: Governo de transição
- **Eleição de 1950**: Vargas venceu democraticamente

## O Governo (1951-1954)

### Políticas Econômicas

- **Nacionalismo**: Defesa dos recursos nacionais
- **Petrobras**: Criada em 1953, monopólio estatal do petróleo
- **ECT**: Empresa Brasileira de Correios e Telégrafos
- **BNDES**: Banco Nacional de Desenvolvimento Econômico

### Contradições

Vargas enfrentou oposição de:

- **UEs (Urubus)**: Oposicionistas do jornal Tribuna da Imprensa
- **Carlos Lacerda**: Principal opositor
- **Militares**: Desconfiavam de Vargas
- **EUA**: Preocupados com nacionalismo

### A Crise Política

- **Atentado da Rua Toneleros**: Assassinato do major Vaz, ferimento de Lacerda
- **Crime do Largo do Machado**: Atribuído à guarda pessoal de Vargas
- **Pressão militar**: Exigência de renúncia
- **Ultimato**: Generais deram ultimato a Vargas

## O Suicídio (24 de agosto de 1954)

Vargas suicidou-se no Palácio do Catete, deixando carta-testamento:

> "Seria fácil a um homem que não tivesse o meu conceito da vida e da honra aceitar o ultimato..."

### Consequências

- Comoção nacional
- Morte vista como sacrifício
- Preservação da memória de Vargas
- Café Filho assumiu a presidência

## Pontos-Chave para o ENEM

1. **Petrobras**: Principal realização
2. **Nacionalismo**: Marco do governo
3. **Oposição**: Imprensa e militares
4. **Suicídio**: Desfecho trágico`,
        duration: 25,
        order: 3,
        quiz: {
          questions: [
            {
              question: "A criação da Petrobras em 1953, durante o segundo governo Vargas, representou:",
              options: JSON.stringify([
                "A venda do petróleo brasileiro para empresas estrangeiras",
                "O monopólio estatal sobre a exploração de petróleo",
                "O fim da produção de petróleo no Brasil",
                "A privatização do setor energético"
              ]),
              answer: 1,
              explanation: "A Petrobras foi criada como empresa estatal com monopólio sobre a exploração, refino e distribuição de petróleo, marco do nacionalismo econômico varguista.",
              order: 0
            },
            {
              question: "O suicídio de Getúlio Vargas em 1954 foi motivado por:",
              options: JSON.stringify([
                "Problemas de saúde graves",
                "Pressão política e militar após uma grave crise política",
                "Vontade de transferir o poder ao vice-presidente",
                "Decisão de concorrer às próximas eleições"
              ]),
              answer: 1,
              explanation: "Vargas suicidou-se após uma grave crise política, com acusações de envolvimento em atentados e pressão dos militares para renunciar.",
              order: 1
            }
          ]
        }
      }
    ]
  },
  {
    title: "Ditadura Militar",
    description: "Tema muito cobrado! O período de 1964 a 1985 marcou a história brasileira com autoritarismo, censura e resistência.",
    icon: "Shield",
    color: "slate",
    order: 5,
    lessons: [
      {
        title: "O Golpe de 1964",
        content: `# O Golpe de 1964

## O Contexto

O Brasil vivia uma democracia desde 1945, mas enfrentava crescente polarização.

### O Governo João Goulart (1961-1964)

- **Posse complicada**: Sistema parlamentarista inicialmente
- **Reformas de Base**: Propostas progressistas
- **Conflitos**: Oposição de conservadores e militares

### As Reformas de Base

| Reforma | Proposta |
|---------|----------|
| **Agrária** | Distribuição de terras |
| **Tributária** | Tributação de grandes fortunas |
| **Eleitoral** | Voto para analfabetos |
| **Universitária** | Democratização do ensino |
| **Bancária** | Controle de remessas de lucros |

### A Polarização

- **Esquerda**: PCB, estudantes, sindicatos, ligas camponesas
- **Direita**: UDN, militares, Igreja conservadora, empresários
- **Medo**: Temor de "comunização" do Brasil

## O Golpe

### O Movimento

- **31 de março de 1964**: Tropas de Minas marcharam sobre o Rio
- **Apoiado por**: EUA, empresários, setores da classe média
- **Sem resistência**: Jango fugiu para o Uruguai

### Por que o golpe venceu?

1. Apoio dos EUA (Operação Brother Sam)
2. Fraqueza do governo
3. Apoio de setores da sociedade
4. Coesão militar

## O Governo Castelo Branco (1964-1967)

### Medidas Iniciais

- **Atos Institucionais**: Acima da Constituição
- **AI-1**: Cassações, suspensão de direitos
- **AI-2**: Extinção de partidos, eleição indireta
- **Censura**: Controle da imprensa

## Pontos-Chave para o ENEM

1. **Contexto da Guerra Fria**: Golpe apoiado pelos EUA
2. **Reformas de Base**: Justificativa dos golpistas
3. **Participação civil**: Apoio de setores da sociedade
4. **Quebra democrática**: Fim do período democrático`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: "O Golpe de 1964 que derrubou João Goulart foi apoiado por:",
              options: JSON.stringify([
                "Exclusivamente por militares",
                "Setores militares, empresários, classe média e o governo dos EUA",
                "Apenas pelos comunistas",
                "O movimento operário organizado"
              ]),
              answer: 1,
              explanation: "O golpe teve amplo apoio de militares, empresários, setores da classe média, Igreja conservadora e contou com apoio explícito do governo dos Estados Unidos.",
              order: 0
            },
            {
              question: "As Reformas de Base propostas por João Goulart incluíam:",
              options: JSON.stringify([
                "A privatização das empresas estatais",
                "Reforma agrária, tributária e extensão do voto a analfabetos",
                "O fim dos sindicatos",
                "A adesão ao bloco soviético"
              ]),
              answer: 1,
              explanation: "As Reformas de Base propunham reformas progressistas como reforma agrária, tributação de grandes fortunas, voto para analfabetos e democratização do ensino superior.",
              order: 1
            }
          ]
        }
      },
      {
        title: "A Repressão e a Resistência",
        content: `# A Repressão e a Resistência

## O Aprofundamento da Ditadura

### O AI-5 (1968)

O **Ato Institucional nº 5** foi o mais duro da ditadura:

- Fechamento do Congresso
- Suspensão de garantias constitucionais
- Cassações em massa
- Tortura institucionalizada

### O Ano de 1968

- **Movimento estudantil**: Protestos, Passeata dos 100 Mil
- **Morte de Edson Luís**: Estudante morto pela polícia
- **Greves**: Movimentos operários
- **Resposta**: AI-5 em dezembro

## A Repressão

### Órgãos de Segurança

| Órgão | Função |
|-------|--------|
| **DOPS** | Departamento de Ordem Política e Social |
| **DOI-CODI** | Centros de interrogatório e tortura |
| **Censura** | Controle de imprensa e arte |

### Tortura e Mortes

- **Desaparecidos políticos**: Mais de 400
- **Torturados**: Milhares
- **Exilados**: Milhares tiveram que sair do país

## A Resistência

### Luta Armada

- **MR-8, ALN, PCBR**: Organizações de esquerda
- **Sequestros**: De embaixadores para trocar presos
- **Assaltos a bancos**: Financiamento das ações
- **Guerrilha**: Tentativas de foco rural

### Guerrilha do Araguaia

- **PCdoB** organizou foco guerrilheiro no Pará
- **Camponeses**: Tentativa de mobilização
- **Destruição**: Exército destruiu o movimento
- **Desaparecidos**: Corpos só encontrados décadas depois

### Movimento Democrático

- **MDB**: Oposição legal permitida
- **Igreja**: Setores progressistas apoiaram a resistência
- **Movimentos sociais**: Reconstrução gradual

## Pontos-Chave para o ENEM

1. **AI-5**: Marco da repressão
2. **Tortura**: Institucionalizada pelo Estado
3. **Resistência**: Armada e democrática
4. **Movimentos**: Estudantes, operários, Igreja`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: "O AI-5 (1968) representou:",
              options: JSON.stringify([
                "A abertura democrática do regime",
                "O endurecimento máximo da ditadura, com fechamento do Congresso e tortura institucionalizada",
                "O fim da censura à imprensa",
                "A convocação de eleições livres"
              ]),
              answer: 1,
              explanation: "O AI-5 foi o mais duro ato da ditadura, fechando o Congresso, suspendendo garantias constitucionais e instituindo a tortura como prática de Estado.",
              order: 0
            },
            {
              question: "A Guerrilha do Araguaia foi:",
              options: JSON.stringify([
                "Um movimento de independência do Sul do Brasil",
                "Uma tentativa de foco guerrilheiro organizado pelo PCdoB no Pará, destruída pelo exército",
                "Uma revolta de militares contra o governo",
                "Um movimento separatista no Nordeste"
              ]),
              answer: 1,
              explanation: "A Guerrilha do Araguaia foi organizada pelo PCdoB no interior do Pará, tentando criar um foco guerrilheiro. Foi destruída pelo exército com violência, deixando dezenas de desaparecidos.",
              order: 1
            }
          ]
        }
      },
      {
        title: "A Abertura Política e a Redemocratização",
        content: `# A Abertura Política e a Redemocratização

## O Processo de Abertura

A transição para a democracia foi lenta, gradual e segura, como definiu o general Golbery do Couto e Silva.

### Geisel e a Distensão (1974-1979)

- **Geisel**: Iniciou a "distensão"
- **Fim do AI-5**: 1978
- **Lei da Anistia**: 1979, anistiou crimes políticos

### Figueiredo e a Abertura (1979-1985)

- **Continuidade**: Processo de abertura mantido
- **Lei dos Partidos**: Retorno ao pluripartidarismo
- **Movimentos sociais**: Crescimento das organizações

## A Campanha das Diretas Já (1984)

### O Movimento

- **Emenda Dante de Oliveira**: Propunha eleições diretas para presidente
- **Comícios**: Milhões nas ruas
- **Principal líder**: Tancredo Neves, Franco Montoro, Ulysses Guimarães

### O Fracasso

- **Congresso**: Rejeitou a emenda
- **Motivo**: Aliança entre PDS e governo
- **Consequência**: Eleição indireta em 1985

## A Nova República (1985)

### A Eleição de Tancredo

- **Colégio Eleitoral**: Escolheu Tancredo Neves
- **Morte de Tancredo**: Antes de assumir
- **Sarney**: Vice assumiu a presidência

### Realizações

- **Constituinte**: Eleita em 1986
- **Constituição de 1988**: Promulgada
- **Plano Cruzado**: Tentativa de conter inflação

## A Constituição de 1988

### Principais Garantias

- **Direitos individuais**: Amplos
- **Voto**: Direto, secreto, universal
- **Trabalho**: Direitos mantidos e ampliados
- **Saúde**: SUS criado
- **Educação**: Direito universal

## Pontos-Chave para o ENEM

1. **Abertura lenta**: Transição negociada
2. **Diretas Já**: Movimento popular massivo
3. **Constituição Cidadã**: Marco democrático
4. **Nova República**: Retorno à democracia`,
        duration: 30,
        order: 3,
        quiz: {
          questions: [
            {
              question: "O movimento Diretas Já (1984) tinha como objetivo:",
              options: JSON.stringify([
                "Apoiar o governo militar",
                "Conseguir eleições diretas para presidente da República",
                "Ampliar os poderes do executivo",
                "Criar um regime parlamentarista"
              ]),
              answer: 1,
              explanation: "O movimento Diretas Já reuniu milhões de brasileiros nas ruas para exigir eleições diretas para presidente, através da Emenda Dante de Oliveira.",
              order: 0
            },
            {
              question: "A Constituição de 1988 é conhecida como 'Constituição Cidadã' porque:",
              options: JSON.stringify([
                "Estabeleceu a ditadura militar",
                "Ampliou os direitos individuais, sociais e políticos dos brasileiros",
                "Reduziu os direitos dos trabalhadores",
                "Instituiu o voto censitário"
              ]),
              answer: 1,
              explanation: "A Constituição de 1988 é chamada de 'Cidadã' por ampliar significativamente os direitos individuais, políticos e sociais, criando o SUS e garantindo direitos fundamentais.",
              order: 1
            }
          ]
        }
      }
    ]
  },
  {
    title: "História Geral",
    description: "História mundial desde as primeiras civilizações até a contemporaneidade. Essencial para contextualizar os processos históricos.",
    icon: "Globe",
    color: "teal",
    order: 6,
    lessons: [
      {
        title: "Antiguidade Oriental e Ocidental",
        content: `# Antiguidade Oriental e Ocidental

## As Primeiras Civilizações

As primeiras civilizações surgiram em vales fluviais, onde a agricultura se desenvolveu.

### Civilizações Orientais

| Civilização | Localização | Características |
|-------------|-------------|-----------------|
| **Mesopotâmia** | Rios Tigre e Eufrates | Cidades-Estado, Código de Hamurabi |
| **Egito** | Rio Nilo | Faraós, pirâmides, mumificação |
| **China** | Rio Amarelo | Dinastias, Muralha da China |
| **Índia** | Rio Indo | Sistema de castas, hinduísmo |

### Modo de Produção Asiático

Características:

- **Estado forte**: Controle das águas (hidráulico)
- **Propriedade coletiva**: Terra pertencia ao Estado
- **Trabalho compulsório**: Camponeses deviam trabalho ao Estado
- **Despotismo**: Poder absoluto do governante

## Civilização Grega

### Períodos

1. **Homérico (XII-VIII a.C.)**: Genos, comunidade primitiva
2. **Arcaico (VIII-VI a.C.)**: Formação das pólis
3. **Clássico (V-VI a.C.)**: Apogeu de Atenas
4. **Helenístico (IV-I a.C.)**: Império de Alexandre

### As Pólis

- **Atenas**: Democracia (para cidadãos livres)
- **Esparta**: Oligarquia militarista
- **Cidadania**: Apenas homens livres, nascidos na cidade

### A Democracia Ateniense

- **Assembleia**: Todos os cidadãos participavam
- **Sorteio**: Cargos preenchidos por sorteio
- **Exclusões**: Mulheres, escravos e estrangeiros excluídos

## Civilização Romana

### Períodos

1. **Realeza (753-509 a.C.)**: Reis etruscos
2. **República (509-27 a.C.)**: Senado, magistraturas
3. **Império (27 a.C.-476 d.C.)**: Imperadores, expansão

### O Direito Romano

- **Lei das XII Tábuas**: Primeira legislação escrita
- **Direito Civil**: Para cidadãos romanos
- **Direito das Gentes**: Para todos os povos

## Pontos-Chave para o ENEM

1. **Modo asiático**: Estado controla tudo
2. **Democracia ateniense**: Limitada e excludente
3. **Roma**: Direito como herança
4. **Cidadania**: Conceito limitado na Antiguidade`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: "A democracia ateniense, na Antiguidade, pode ser caracterizada como:",
              options: JSON.stringify([
                "Um sistema onde todos os habitantes participavam igualmente",
                "Um regime participativo restrito a homens livres nascidos em Atenas",
                "Uma monarquia absolutista",
                "Um sistema parlamentar moderno"
              ]),
              answer: 1,
              explanation: "A democracia ateniense era um sistema participativo, mas extremamente excludente: apenas homens livres, nascidos em Atenas e maiores de idade tinham direitos políticos. Mulheres, escravos e estrangeiros eram excluídos.",
              order: 0
            },
            {
              question: "O Modo de Produção Asiático caracterizava-se pela:",
              options: JSON.stringify([
                "Propriedade privada da terra pelos camponeses",
                "Centralização do poder no Estado, que controlava as terras e as águas",
                "Existência de democracia direta",
                "Divisão igualitária da riqueza"
              ]),
              answer: 1,
              explanation: "No Modo de Produção Asiático, o Estado era muito forte e controlava as terras e os sistemas de irrigação. Os camponeses deviam trabalho compulsório ao Estado em troca de proteção.",
              order: 1
            }
          ]
        }
      },
      {
        title: "Idade Média e Feudalismo",
        content: `# Idade Média e Feudalismo

## A Idade Média (476-1453)

Período entre a queda do Império Romano do Ocidente e a tomada de Constantinopla.

### Alta Idade Média (476-1000)

- **Invasões bárbaras**: Germanos invadiram Roma
- **Reinos bárbaros**: Francos, visigodos, ostrogodos
- **Império Carolíngio**: Carlos Magno (800)

### Baixa Idade Média (1000-1453)

- **Renascimento comercial**: Cruzadas, rotas comerciais
- **Crescimento urbano**: Burgos e cidades
- **Universidades**: Surge o ensino superior
- **Crise do século XIV**: Peste negra, fome, guerras

## O Feudalismo

### Estrutura Social

| Estamento | Função |
|-----------|--------|
| **Clero** | Orar, guiar espiritualmente |
| **Nobreza** | Guerrear, administrar |
| **Servos** | Trabalhar a terra |

### Relações de Produção

- **Senhor feudal**: Dono da terra
- **Servo**: Trabalhador preso à terra
- **Corvéia**: Trabalho gratuito nas terras do senhor
- **Talha**: Parte da produção ia para o senhor
- **Banalidade**: Pagamento pelo uso de instalações

### Características

- **Economia natural**: Pouco comércio
- **Poder descentralizado**: Senhores feudais
- **Igreja forte**: Poder espiritual e temporal
- **Trabalho servil**: Não era escravidão, mas compulsório

## A Igreja Medieval

- **Poder espiritual**: Controlava a salvação
- **Poder temporal**: Terras, exércitos
- **Cultura**: Mosteiros preservavam conhecimento
- **Cruzadas**: Guerras santas

## A Transição para o Capitalismo

- **Renascimento comercial**: Cruzadas abriram rotas
- **Burguesia**: Novas classes comerciantes
- **Centralização**: Reis ganharam poder
- **Fim do feudalismo**: Séculos XV-XVI

## Pontos-Chave para o ENEM

1. **Tríade**: Clero, Nobreza, Servos
2. **Servidão**: Diferente de escravidão
3. **Igreja**: Poder central
4. **Transição**: Comércio gerou mudanças`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: "No feudalismo, a relação entre senhor e servo caracterizava-se pela:",
              options: JSON.stringify([
                "Liberdade total do servo para ir e vir",
                "Servidão, onde o servo estava preso à terra e devia obrigações ao senhor",
                "Igualdade econômica entre ambos",
                "Assalariamento do trabalhador rural"
              ]),
              answer: 1,
              explanation: "Na servidão feudal, o servo estava preso à terra (não podia abandoná-la) e devia obrigações ao senhor como corvéia (trabalho gratuito), talha (parte da produção) e banalidades.",
              order: 0
            },
            {
              question: "A Igreja Católica na Idade Média tinha:",
              options: JSON.stringify([
                "Apenas poder espiritual",
                "Poder exclusivamente econômico",
                "Poder espiritual e temporal, controlando terras e influenciando a política",
                "Nenhum poder na sociedade medieval"
              ]),
              answer: 2,
              explanation: "A Igreja Medieval acumulava poder espiritual (controlava a salvação das almas) e poder temporal (era grande proprietária de terras, tinha exércitos e influenciava a política dos reinos).",
              order: 1
            }
          ]
        }
      },
      {
        title: "Renascimento e Reforma Protestante",
        content: `# Renascimento e Reforma Protestante

## O Renascimento (Séculos XIV-XVI)

Movimento cultural que retomou valores da Antiguidade clássica.

### Características

- **Humanismo**: Valorização do ser humano
- **Antropocentrismo**: Homem no centro do universo
- **Individualismo**: Valorização do indivíduo
- **Racionalismo**: Fé na razão humana

### Causas

- **Burguesia**: Novas classes buscavam nova cultura
- **Comércio**: Contato com outras culturas
- **Imprensa**: Difusão do conhecimento
- **Decadência da Igreja**: Questionamentos

### Principais Nomes

| Área | Nome | Obra |
|------|------|------|
| **Arte** | Leonardo da Vinci | Mona Lisa |
| **Arte** | Michelangelo | David, Capela Sistina |
| **Literatura** | Shakespeare | Romeu e Julieta |
| **Ciência** | Galileu | Telescópio |

## A Reforma Protestante (1517)

Martinho Lutero iniciou a Reforma ao criticar a Igreja Católica.

### Causas

- **Venda de indulgências**: Pagamento para perdão
- **Corrupção do clero**: Escândalos
- **Nacionalismo**: Reis queriam controlar Igreja
- **Burguesia**: Ideais mais compatíveis

### Principais Reformadores

- **Lutero (Alemanha)**: Sola fide, sola scriptura
- **Calvino (Suíça)**: Predestinação
- **Henrique VIII (Inglaterra)**: Igreja Anglicana

### A Contrarreforma

Resposta da Igreja Católica:

- **Concílio de Trento**: Reformas internas
- **Companhia de Jesus**: Jesuítas na educação
- **Index**: Lista de livros proibidos
- **Inquisição**: Combate à heresia

## Consequências

- **Guerras religiosas**: Conflitos na Europa
- **Educação**: Expansão do ensino
- **Colonização**: Religião no Novo Mundo
- **Capitalismo**: Ética protestante (Weber)

## Pontos-Chave para o ENEM

1. **Humanismo**: Base do Renascimento
2. **95 teses**: Início da Reforma
3. **Contrarreforma**: Resposta católica
4. **Consequências**: Mundo moderno`,
        duration: 30,
        order: 3,
        quiz: {
          questions: [
            {
              question: "O Renascimento foi um movimento cultural que:",
              options: JSON.stringify([
                "Fortaleceu o teocentrismo medieval",
                "Valorizou o ser humano e a razão, inspirando-se na Antiguidade clássica",
                "Defendeu o poder absoluto da Igreja",
                "Promoveu o isolamento cultural da Europa"
              ]),
              answer: 1,
              explanation: "O Renascimento valorizou o humanismo (o ser humano como centro), o antropocentrismo e o racionalismo, inspirando-se na cultura greco-romana da Antiguidade.",
              order: 0
            },
            {
              question: "Martinho Lutero iniciou a Reforma Protestante em 1517 criticando principalmente:",
              options: JSON.stringify([
                "O capitalismo comercial",
                "A venda de indulgências pela Igreja Católica",
                "A monarquia absolutista",
                "O Renascimento cultural"
              ]),
              answer: 1,
              explanation: "Lutero iniciou a Reforma ao fixar suas 95 teses criticando a venda de indulgências (pagamento para perdão dos pecados), uma prática corrupta da Igreja Católica.",
              order: 1
            }
          ]
        }
      }
    ]
  }
];

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Limpar dados existentes
  await prisma.quizQuestion.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.progress.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.module.deleteMany();

  console.log('📚 Criando módulos e aulas...');

  for (const moduleData of courseData) {
    const moduleRecord = await prisma.module.create({
      data: {
        title: moduleData.title,
        description: moduleData.description,
        icon: moduleData.icon,
        color: moduleData.color,
        order: moduleData.order,
      },
    });

    console.log(`✅ Módulo criado: ${moduleRecord.title}`);

    for (const lessonData of moduleData.lessons) {
      const lesson = await prisma.lesson.create({
        data: {
          moduleId: moduleRecord.id,
          title: lessonData.title,
          content: lessonData.content,
          duration: lessonData.duration,
          order: lessonData.order,
        },
      });

      console.log(`  📖 Aula criada: ${lesson.title}`);

      if (lessonData.quiz) {
        const quiz = await prisma.quiz.create({
          data: {
            lessonId: lesson.id,
          },
        });

        for (const questionData of lessonData.quiz.questions) {
          await prisma.quizQuestion.create({
            data: {
              quizId: quiz.id,
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

  console.log('✨ Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
