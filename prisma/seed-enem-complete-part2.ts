import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// =============================================
// CURRÍCULO COMPLETO DE HISTÓRIA PARA ENEM
// PARTE 2: MÓdulos 6 a 15
// =============================================

const modulesData = [
  // ==========================================
  // MÓDULO 6: BRASIL COLONIAL
  // ==========================================
  {
    title: 'Brasil Colonial',
    description: 'A colonização portuguesa, economia açucareira, escravidão e revoltas coloniais.',
    icon: 'Ship',
    color: 'amber',
    order: 6,
    lessons: [
      {
        title: 'Colonização Portuguesa e Economia Açucareira',
        content: `# Colonização Portuguesa e Economia Açucareira

## O Início da Colonização

Após a chegada de Pedro Álvares Cabral em 1500, Portugal iniciou lentamente a colonização do Brasil. O período pré-colonial (1500-1530) foi marcado pelo extrativismo de pau-brasil através do escambo com os indígenas.

## O Sistema de Capitanias Hereditárias

Em 1534, Portugal dividiu o território em capitanias hereditárias, doadas a donatários que deveriam colonizar e defender a terra.

### Características
- **Hereditariedade**: Capitanias passadas de pai para filho
- **Autonomia**: Donatários tinham amplos poderes
- **Falha**: A maioria das capitanias fracassou

## O Governo-Geral

Em 1549, Portugal criou o Governo-Geral para centralizar a administração:
- Tomé de Sousa: Primeiro governador-geral
- Fundação de Salvador (primeira capital)
- Jesuítas para catequese

## A Economia Açucareira

### O Engenho
- Unidade produtora de açúcar
- Casa-grande, senzala, capela
- Trabalho escravo africano

### Características
- **Monocultura**: Produção de um único produto
- **Latifúndio**: Grandes propriedades
- **Exportação**: Voltado para o mercado externo
- **Escravidão**: Base da força de trabalho

### Papel da Holanda
- Holandeses financiavam e refinavam o açúcar
- Ocuparam o Nordeste (1630-1654)
- Levariam a técnica para o Caribe

## A Escravidão Africana

### O Tráfico Negreiro
- Tráfico triangular: Europa-África-América
- Estima-se 4 milhões de africanos trazidos
- Lucro enorme para traficantes

### Resistência
- **Quilombos**: Comunidades de fugitivos
- **Palmares**: Maior quilombo, liderado por Zumbi
- Revoltas e sabotagens`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) O sistema de capitanias hereditárias foi implantado em 1534 para iniciar a colonização do Brasil.

Uma característica das capitanias hereditárias era:
- (A) a propriedade coletiva da terra pelos indígenas.
- (B) a transmissão da capitania por hereditariedade.
- (C) o controle direto da Coroa portuguesa.
- (D) a divisão igualitária das terras.
- (E) o fim da escravidão africana.`,
              options: '["A propriedade coletiva da terra pelos indígenas", "A transmissão da capitania por hereditariedade", "O controle direto da Coroa portuguesa", "A divisão igualitária das terras"]',
              answer: 1,
              explanation: 'As capitanias eram hereditárias, ou seja, passavam de pai para filho, dando aos donatários amplos poderes sobre a terra e seus habitantes.',
              order: 1
            },
            {
              question: `(ENEM 2018) A economia açucareira foi a base da colonização portuguesa no Brasil colonial.

O engenho de açúcar era caracterizado por:
- (A) o trabalho livre e assalariado.
- (B) a pequena propriedade agrícola.
- (C) a produção voltada para o mercado interno.
- (D) a monocultura e o trabalho escravo.
- (E) a diversificação da produção agrícola.`,
              options: '["O trabalho livre e assalariado", "A pequena propriedade agrícola", "A produção voltada para o mercado interno", "A monocultura e o trabalho escravo"]',
              answer: 3,
              explanation: 'O engenho era caracterizado pela monocultura (produção apenas de açúcar), latifúndio (grande propriedade) e trabalho escravo africano.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Inconfidência Mineira e Revoltas Coloniais',
        content: `# Inconfidência Mineira e Revoltas Coloniais

## Contexto: Mineração e Crise

No século XVIII, a descoberta de ouro em Minas Gerais transformou a economia colonial. A Coroa portuguesa intensificou a fiscalização e a cobrança de impostos.

### A Derrama
- Cobrança obrigatória de 100 arrobas de ouro anuais
- Intensificação da fiscalização
- Descontentamento da elite colonial

## Inconfidência Mineira (1789)

### Causas
- Altos impostos portugueses
- Derrama e fiscalização
- Influência do Iluminismo
- Desejo de independência

### Líderes
- Tiradentes (Joaquim José da Silva Xavier)
- Cláudio Manuel da Costa
- Tomás Antônio Gonzaga
- Inácio José de Alvarenga Peixoto

### Desfecho
- Denúncia de um dos conspiradores
- Prisão dos envolvidos
- Execução de Tiradentes (1792)
- Degredo dos outros líderes

## Conjuração Baiana (1798)

### Características
- Movimento popular
- Proposta de igualdade racial
- Abolição da escravidão
- República democrática

### Líderes
- Lucas Dantas
- João de Deus Nascimento
- Manuel Faustino

### Desfecho
- Prisão e execução dos líderes
- Movimento reprimido violentamente

## Outras Revoltas Coloniais

### Revolta de Beckman (Maranhão, 1684)
- Contra a Companhia de Comércio
- Protesto contra monopólios

### Guerra dos Emboabas (1707-1709)
- Conflito por controle das minas
- Paulistas x portugueses

### Guerra dos Mascates (Pernambuco, 1710)
- Olinda (senhores de engenho) x Recife (comerciantes)

## Significado

Essas revoltas demonstram:
- Descontentamento com domínio português
- Formação de identidade brasileira
- Influência das ideias iluministas`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2017) A Inconfidência Mineira (1789) foi um movimento de contestação ao domínio português.

Um fator que motivou a Inconfidência Mineira foi:
- (A) o aumento dos impostos cobrados pela Coroa portuguesa.
- (B) a defesa do absolutismo monárquico.
- (C) a oposição à independência do Brasil.
- (D) o apoio à escravidão africana.
- (E) a rejeição das ideias iluministas.`,
              options: '["O aumento dos impostos cobrados pela Coroa portuguesa", "A defesa do absolutismo monárquico", "A oposição à independência do Brasil", "O apoio à escravidão africana"]',
              answer: 0,
              explanation: 'A Inconfidência Mineira foi motivada, entre outros fatores, pelo aumento dos impostos e pela cobrança da derrama, que gerou descontentamento na elite mineira.',
              order: 1
            },
            {
              question: `(ENEM 2016) A Conjuração Baiana de 1798 diferenciou-se da Inconfidência Mineira por:

- (A) defender a manutenção da escravidão.
- (B) ser um movimento de elite.
- (C) propor a igualdade racial e abolição.
- (D) receber apoio da Coroa portuguesa.
- (E) rejeitar os ideais republicanos.`,
              options: '["Defender a manutenção da escravidão", "Ser um movimento de elite", "Propor a igualdade racial e abolição", "Receber apoio da Coroa portuguesa"]',
              answer: 2,
              explanation: 'A Conjuração Baiana diferenciou-se por ser um movimento popular que propunha a igualdade racial e a abolição da escravidão, ao contrário da Inconfidência Mineira, ligada à elite.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Família Real no Brasil',
        content: `# Família Real no Brasil

## Contexto: Guerras Napoleônicas

Em 1807, Portugal foi invadido pelo exército de Napoleão Bonaparte. Para evitar a captura, a família real portuguesa fugiu para o Brasil sob proteção da marinha britânica.

## A Transferência da Corte

### 1808: Chegada ao Brasil
- D. João VI e cerca de 15.000 pessoas
- Rio de Janeiro como sede do Império Português
- Proteção britânica (tratados de 1810)

## Transformações

### Abertura dos Portos (1808)
- Fim do monopólio comercial português
- Liberdade de comércio com todas as nações
- Favorecimento da Inglaterra

### Elevação a Reino Unido (1815)
- Brasil deixou de ser colônia
- Portugal, Brasil e Algarves formavam o Reino Unido

### Outras Medidas
- Criação do Banco do Brasil
- Biblioteca Real
- Imprensa Régia
- Escolas de medicina
- Jardim Botânico

## Revoltas

### Revolução Pernambucana (1817)
- Movimento republicano
- Influência iluminista
- Reprimida pela Coroa

### Revolta do Conciliábulo do Equador
- Protesto contra centralização

## O Retorno de D. João VI

Em 1821, após a Revolução Liberal do Porto em Portugal, D. João VI foi obrigado a retornar a Lisboa. D. Pedro I ficou como Regente do Brasil.`,
        duration: 25,
        order: 3,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) Em 1808, a família real portuguesa transferiu-se para o Brasil devido à invasão de Portugal por Napoleão Bonaparte.

Uma consequência da transferência da família real para o Brasil foi:
- (A) o fortalecimento do monopólio colonial português.
- (B) a abertura dos portos às nações amigas.
- (C) o fim da escravidão no Brasil.
- (D) a independência imediata do Brasil.
- (E) a rejeição da influência britânica.`,
              options: '["O fortalecimento do monopólio colonial português", "A abertura dos portos às nações amigas", "O fim da escravidão no Brasil", "A independência imediata do Brasil"]',
              answer: 1,
              explanation: 'A chegada da família real trouxe a abertura dos portos em 1808, acabando com o monopólio comercial português e permitindo o comércio com outras nações, especialmente a Inglaterra.',
              order: 1
            },
            {
              question: `(ENEM 2015) Em 1815, D. João VI elevou o Brasil à condição de Reino Unido a Portugal e Algarves.

Essa medida significava:
- (A) a independência completa do Brasil.
- (B) o fim da condição colonial do Brasil.
- (C) a expulsão dos portugueses do Brasil.
- (D) a abolição da escravidão.
- (E) o início da República no Brasil.`,
              options: '["A independência completa do Brasil", "O fim da condição colonial do Brasil", "A expulsão dos portugueses do Brasil", "A abolição da escravidão"]',
              answer: 1,
              explanation: 'A elevação a Reino Unido significou que o Brasil deixou formalmente de ser uma colônia, passando a ter igualdade jurídica com Portugal, embora ainda sob o domínio da Coroa portuguesa.',
              order: 2
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 7: BRASIL IMPÉRIO
  // ==========================================
  {
    title: 'Brasil Império',
    description: 'Independência, Primeiro e Segundo Reinado, Guerra do Paraguai e Abolição.',
    icon: 'Crown',
    color: 'purple',
    order: 7,
    lessons: [
      {
        title: 'Independência e Primeiro Reinado',
        content: `# Independência e Primeiro Reinado

## Contexto

Após o retorno de D. João VI a Portugal em 1821, o Brasil enfrentou pressões para recolonização por parte das Cortes de Lisboa.

## O Processo de Independência

### Fatores
- Revolução Liberal do Porto (1820)
- Pressão para recolonização
- Elite brasileira queria autonomia
- D. Pedro como Regente

### A Independência
- "Fico" (9 de janeiro de 1822)
- Grito do Ipiranga (7 de setembro de 1822)
- D. Pedro I proclamado Imperador

## Primeiro Reinado (1822-1831)

### Constituição de 1824
- Outorgada por D. Pedro I
- Poder Moderador (exclusivo do imperador)
- Catolicismo como religião oficial
- Senado vitalício

### Confederação do Equador (1824)
- Revolta em Pernambuco
- Protesto contra autoritarismo
- Líder: Frei Caneca
- Reprimida violentamente

### Crise Política
- Oposição liberal
- Problemas econômicos
- Guerra da Cisplatina (1825-1828)
- Crise de sucessão em Portugal

## Abdicação (1831)

D. Pedro I abdicou do trono em favor de seu filho de 5 anos, D. Pedro II, iniciando o Período Regencial.`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A Independência do Brasil foi proclamada em 7 de setembro de 1822 por D. Pedro I.

A independência brasileira foi caracterizada por:
- (A) ser um movimento popular e democrático.
- (B) manter a estrutura social e a escravidão.
- (C) romper completamente com Portugal.
- (D) abolir os privilégios da elite agrária.
- (E) estabelecer uma república federativa.`,
              options: '["Ser um movimento popular e democrático", "Manter a estrutura social e a escravidão", "Romper completamente com Portugal", "Abolir os privilégios da elite agrária"]',
              answer: 1,
              explanation: 'A independência brasileira manteve a estrutura social, a escravidão e o poder da elite agrária, sendo um movimento conservador que garantiu os privilégios dos grandes proprietários.',
              order: 1
            },
            {
              question: `(ENEM 2017) A Constituição de 1824, outorgada por D. Pedro I, estabeleceu o Poder Moderador.

O Poder Moderador permitia ao imperador:
- (A) ser julgado pelo Congresso Nacional.
- (B) intervir em todos os poderes do Estado.
- (C) respeitar a separação dos três poderes.
- (D) submeter-se às decisões do Judiciário.
- (E) convocar eleições diretas para presidente.`,
              options: '["Ser julgado pelo Congresso Nacional", "Intervir em todos os poderes do Estado", "Respeitar a separação dos três poderes", "Submeter-se às decisões do Judiciário"]',
              answer: 1,
              explanation: 'O Poder Moderador permitia ao imperador intervir nos demais poderes, dissolver a Câmara, nomear senadores e tomar decisões políticas fundamentais, concentrando poder.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Segundo Reinado e Abolição',
        content: `# Segundo Reinado e Abolição

## O Segundo Reinado (1840-1889)

D. Pedro II governou o Brasil por quase 50 anos, período de relativa estabilidade e modernização.

### Características
- **Centralização**: Fortalecimento do poder central
- **Conciliação**: Política de alianças entre partidos
- **Modernização**: Ferrovias, telégrafos, urbanização
- **Café**: Tornou-se o principal produto de exportação

### Economia Cafeeira
- Expansão para o Oeste paulista
- Imigração europeia
- Investimentos em infraestrutura
- Modernização dos portos

## O Movimento Abolicionista

### Leis Abolicionistas
- **Lei Eusébio de Queirós (1850)**: Fim do tráfico negreiro
- **Lei do Ventre Livre (1871)**: Filhos de escravas nasciam livres
- **Lei dos Sexagenários (1885)**: Liberdade aos maiores de 60 anos
- **Lei Áurea (1888)**: Abolição completa

### Movimento Abolicionista
- Sociedades abolicionistas
- Advogados que defendiam escravos
- Jornais e manifestações
- Quilombos e resistência

## A Guerra do Paraguai (1864-1870)

### Causas
- Disputa pela hegemonia na bacia do Prata
- Paraguai de Solano López
- Interesses britânicos

### Consequências
- Devastação do Paraguai
- Crise do Império
- Enfraquecimento da escravidão
- Modernização do Exército

## A Proclamação da República

### Causas
- Questão militar
- Republicanismo
- Crise da monarquia
- Abolição sem indenização

### 15 de Novembro de 1889
- Golpe militar liderado por Deodoro da Fonseca
- Fim do Império
- Proclamação da República`,
        duration: 35,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A Lei Áurea, assinada em 13 de maio de 1888 pela Princesa Isabel, aboliu a escravidão no Brasil.

A Lei Áurea significou:
- (A) a integração plena dos ex-escravos na sociedade.
- (B) a concessão de terras aos libertos.
- (C) o fim jurídico da escravidão sem medidas de integração.
- (D) a indenização dos proprietários de escravos.
- (E) o voto universal para todos os cidadãos.`,
              options: '["A integração plena dos ex-escravos na sociedade", "A concessão de terras aos libertos", "O fim jurídico da escravidão sem medidas de integração", "A indenização dos proprietários de escravos"]',
              answer: 2,
              explanation: 'A Lei Áurea apenas extinguiu a escravidão juridicamente, sem qualquer medida de integração social, distribuição de terras ou apoio aos libertos.',
              order: 1
            },
            {
              question: `(ENEM 2016) A Guerra do Paraguai (1864-1870) foi o maior conflito militar da América do Sul.

Uma consequência da Guerra do Paraguai para o Brasil foi:
- (A) o fortalecimento do regime monárquico.
- (B) a aceleração do processo abolicionista.
- (C) o isolamento internacional do país.
- (D) a expansão do território brasileiro.
- (E) o fim do Exército brasileiro.`,
              options: '["O fortalecimento do regime monárquico", "A aceleração do processo abolicionista", "O isolamento internacional do país", "A expansão do território brasileiro"]',
              answer: 1,
              explanation: 'A Guerra do Paraguai acelerou o processo abolicionista, pois muitos escravos foram libertos para lutar na guerra, e o Exército passou a defender o abolicionismo.',
              order: 2
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 8: PRIMEIRA REPÚBLICA
  // ==========================================
  {
    title: 'Primeira República',
    description: 'República Velha: política do café com leite, coronelismo e movimentos sociais.',
    icon: 'Building2',
    color: 'green',
    order: 8,
    lessons: [
      {
        title: 'Política do Café com Leite e Coronelismo',
        content: `# Política do Café com Leite e Coronelismo

## A Proclamação da República (1889)

O golpe militar de 15 de novembro de 1889, liderado pelo Marechal Deodoro da Fonseca, depôs D. Pedro II e proclamou a República.

## Características da Primeira República (1889-1930)

### República Oligárquica
- Poder nas mãos das oligarquias agrárias
- Exclusão política da maioria da população
- Voto de cabresto e fraudes eleitorais

### Política dos Governadores
- Alinhamento entre governo federal e oligarquias estaduais
- Apoio mútuo: deputados apoiam presidente, presidente apoia governadores

### Café com Leite
- Alternância entre São Paulo (café) e Minas Gerais (leite)
- Domínio das oligarquias paulista e mineira

## Coronelismo

### O Coronel
- Grande proprietário de terras
- Chefe político local
- Controlava a população através de favores e coerção

### Mecanismos de Controle
- **Voto de cabresto**: Controle do voto dos dependentes
- **Voto aberto**: Permitia fiscalização
- **Curral eleitoral**: Concentração de votos

### Comissão Verificadora
- Órgão que "verificava" resultados eleitorais
- Sempre favorecia candidatos governistas

## Transformações Econômicas

### O Café
- Principal produto de exportação
- Expansão para o Oeste paulista
- Política de valorização do café

### Industrialização
- Incipiente, concentrada em São Paulo
- Investimentos de capital cafeeiro
- Imigração europeia como mão de obra`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A "política do café com leite" caracterizou a Primeira República brasileira (1889-1930).

Essa política consistia:
- (A) na alternância entre presidentes de São Paulo e Minas Gerais.
- (B) na aliança entre trabalhadores rurais e urbanos.
- (C) na democratização do sistema eleitoral.
- (D) na distribuição igualitária de renda.
- (E) na participação popular nas decisões políticas.`,
              options: '["Na alternância entre presidentes de São Paulo e Minas Gerais", "Na aliança entre trabalhadores rurais e urbanos", "Na democratização do sistema eleitoral", "Na distribuição igualitária de renda"]',
              answer: 0,
              explanation: 'A política do café com leite consistia na alternância na presidência entre políticos de São Paulo (café) e Minas Gerais (leite), as duas oligarquias mais poderosas.',
              order: 1
            },
            {
              question: `(ENEM 2017) O coronelismo foi uma prática política característica da Primeira República.

O coronelismo baseava-se:
- (A) no voto secreto e consciente dos eleitores.
- (B) no controle dos votos pela força dos grandes proprietários.
- (C) na participação popular nas decisões políticas.
- (D) na democracia direta nos municípios.
- (E) na liberdade de escolha dos candidatos.`,
              options: '["No voto secreto e consciente dos eleitores", "No controle dos votos pela força dos grandes proprietários", "Na participação popular nas decisões políticas", "Na democracia direta nos municípios"]',
              answer: 1,
              explanation: 'O coronelismo baseava-se no controle dos votos pelos grandes proprietários de terras (coronéis), que usavam favores, coerção e violência para garantir os votos de seus dependentes.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Movimentos Sociais: Canudos, Vacina e Chibata',
        content: `# Movimentos Sociais da Primeira República

## Canudos (1896-1897)

### Contexto
- Região do sertão baiano
- Liderado por Antônio Conselheiro
- Comunidade de camponeses e excluídos

### Características
- Repúdio à República
- Protesto contra impostos
- Modo de vida comunitário
- Aproximadamente 25.000 habitantes

### Destruição
- Quatro expedições militares
- Última expedição com 8.000 soldados
- Massacre da população
- Canudos foi arrasado

## Revolta da Vacina (1904)

### Contexto
- Campanha de vacinação obrigatória contra varíola
- Rio de Janeiro, governo Rodrigues Alves
- Reforma urbana (bota-abaixo)

### Causas
- Obrigação da vacina
- Despejo de moradores de cortiços
- Descontentamento popular

### A Revolta
- Destruição de bondes e lampiões
- Confronto com a polícia
- Estado de sítio
- Suspensão da obrigatoriedade

## Revolta da Chibata (1910)

### Contexto
- Marinha brasileira
- Castigos físicos (chibatadas) em marinheiros

### Líder
- João Cândido, "Almirante Negro"

### A Revolta
- Tomada de navios de guerra
- Ameaça de bombardeio ao Rio
- Fim dos castigos físicos
- Reprimida com violência

## Cangaço

### Características
- Bandos armados no sertão nordestino
- Ataques a fazendas e cidades
- Protesto contra a ordem estabelecida

### Lampião
- Principal líder cangaceiro
- Perseguido pelas volantes`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A Guerra de Canudos (1896-1897) foi um dos conflitos mais violentos da Primeira República.

Canudos foi destruída pelo governo republicano porque:
- (A) defendia a monarquia e ameaçava a República.
- (B) era uma comunidade democrática e igualitária.
- (C) apoiava o governo federal brasileiro.
- (D) recebia apoio dos coronéis locais.
- (E) aceitava a autoridade da Igreja Católica.`,
              options: '["Defendia a monarquia e ameaçava a República", "Era uma comunidade democrática e igualitária", "Apoiava o governo federal brasileiro", "Recebia apoio dos coronéis locais"]',
              answer: 0,
              explanation: 'Canudos foi vista como ameaça à República por ser uma comunidade de excluídos que repudiava o novo regime, sendo acusada de monarquismo para justificar sua destruição.',
              order: 1
            },
            {
              question: `(ENEM 2016) A Revolta da Vacina (1904) ocorreu no Rio de Janeiro contra a obrigatoriedade da vacinação.

A revolta expressava:
- (A) o apoio às reformas urbanas do governo.
- (B) a satisfação com as políticas públicas.
- (C) o descontentamento com as intervenções governamentais.
- (D) a aceitação da medicina científica.
- (E) o apoio ao projeto modernizador.`,
              options: '["O apoio às reformas urbanas do governo", "A satisfação com as políticas públicas", "O descontentamento com as intervenções governamentais", "A aceitação da medicina científica"]',
              answer: 2,
              explanation: 'A Revolta da Vacina expressava o descontentamento popular com as intervenções autoritárias do governo, incluindo a vacinação obrigatória e os despejos durante a reforma urbana.',
              order: 2
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 9: ERA VARGAS
  // ==========================================
  {
    title: 'Era Vargas',
    description: 'Governo de Getúlio Vargas: Revolução de 1930, Estado Novo e industrialização.',
    icon: 'Factory',
    color: 'red',
    order: 9,
    lessons: [
      {
        title: 'Revolução de 1930 e Governo Provisório',
        content: `# Revolução de 1930 e Governo Provisório

## Contexto

A crise econômica de 1929 afetou profundamente a economia cafeeira brasileira, enfraquecendo as oligarquias e criando condições para mudanças políticas.

## A Revolução de 1930

### Causas
- Crise do café
- Descontentamento das oligarquias dissidentes
- Questão sucessória (fraude eleitoral)
- Tenentismo (movimento de jovens oficiais)

### Aliança Liberal
- Getúlio Vargas (RS) candidato à presidência
- João Pessoa (PB) vice
- Apoio de Minas Gerais, Rio Grande do Sul e Paraíba

### O Movimento
- Derrota eleitoral de Vargas
- Denúncia de fraude
- Assassinato de João Pessoa
- Revolução armada
- Washington Luís deposto

## Governo Provisório (1930-1934)

### Medidas
- Nomeação de interventores nos estados
- Criação do Ministério do Trabalho
- Criação do Ministério da Educação
- Novo código eleitoral (voto feminino, secreto)
- Fim da política do café com leite

### Tendências Políticas
- **Tenentismo**: Oficiais reformistas
- **Integralismo**: Ação Integralista Brasileira (fascista)
- **ANL**: Aliança Nacional Libertadora (comunista)
- **Constitucionalistas**: Defensores da ordem legal

## A Revolução Constitucionalista (1932)

- Revolta de São Paulo por constituição
- Governo federal usou força militar
- Derrota paulista
- Constituição de 1934`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A Revolução de 1930 marcou o fim da Primeira República e a ascensão de Getúlio Vargas.

A Revolução de 1930 foi motivada por:
- (A) a crise do café e a insatisfação das oligarquias dissidentes.
- (B) o apoio unânime das oligarquias a Vargas.
- (C) a estabilidade econômica do país.
- (D) o sucesso da política do café com leite.
- (E) a democracia plena na Primeira República.`,
              options: '["A crise do café e a insatisfação das oligarquias dissidentes", "O apoio unânime das oligarquias a Vargas", "A estabilidade econômica do país", "O sucesso da política do café com leite"]',
              answer: 0,
              explanation: 'A Revolução de 1930 foi motivada pela crise econômica do café (crise de 1929) e pela insatisfação das oligarquias que não eram contempladas no poder, especialmente Minas Gerais e Rio Grande do Sul.',
              order: 1
            },
            {
              question: `(ENEM 2017) O Governo Provisório de Vargas (1930-1934) implementou diversas reformas.

Uma medida do Governo Provisório foi:
- (A) a manutenção do voto aberto.
- (B) a criação do Ministério do Trabalho.
- (C) o fim do voto feminino.
- (D) a preservação da política do café com leite.
- (E) a eleição direta para presidente.`,
              options: '["A manutenção do voto aberto", "A criação do Ministério do Trabalho", "O fim do voto feminino", "A preservação da política do café com leite"]',
              answer: 1,
              explanation: 'O Governo Provisório criou o Ministério do Trabalho, Indústria e Comércio, iniciando a intervenção do Estado nas relações de trabalho.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Estado Novo e Industrialização',
        content: `# Estado Novo e Industrialização

## O Estado Novo (1937-1945)

### Contexto
- Plano Cohen: documento forjado alegando complô comunista
- Fechamento do Congresso
- Outorga da Constituição de 1937 (Polaca)

### Características do Regime
- **Centralização política**: Poder concentrado no Executivo
- **Censura**: Controle de imprensa e manifestações
- **DIP**: Departamento de Imprensa e Propaganda
- **Nacionalismo**: Valorização da cultura brasileira
- **Perseguição política**: Prisão de opositores

## Industrialização

### Políticas
- Investimentos em infraestrutura
- Criação de empresas estatais
- Substituição de importações
- Apoio à industrialização

### Empresas Estatais Criadas
- **CSN**: Companhia Siderúrgica Nacional (1941)
- **Vale do Rio Doce**: Mineração (1942)
- **CHESF**: Hidrelétrica (1945)
- **Petrobras**: Seria criada em 1953

## A CLT (1943)

A Consolidação das Leis do Trabalho reuniu a legislação trabalhista:

### Direitos Garantidos
- Salário mínimo
- Jornada de 8 horas
- Férias remuneradas
- Descanso semanal
- 13º salário (criado em 1962)
- Trabalho feminino e infantil regulamentados

### Limitações
- Controle sindical pelo Estado
- Greve proibida
- Dependência dos sindicatos em relação ao governo

## O Fim do Estado Novo

### Fatores
- Fim da Segunda Guerra Mundial
- Pressão pela democratização
- Contradições do regime

### 1945
- Queda de Vargas
- Eleições presidenciais
- Redemocratização`,
        duration: 35,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) O Estado Novo (1937-1945) foi um período de autoritarismo na história do Brasil.

Uma característica do Estado Novo era:
- (A) a democracia multipartidária.
- (B) a liberdade de imprensa plena.
- (C) a censura e o controle dos meios de comunicação.
- (D) a autonomia dos poderes do Estado.
- (E) a separação entre Igreja e Estado.`,
              options: '["A democracia multipartidária", "A liberdade de imprensa plena", "A censura e o controle dos meios de comunicação", "A autonomia dos poderes do Estado"]',
              answer: 2,
              explanation: 'O Estado Novo caracterizou-se pela censura e controle dos meios de comunicação através do DIP (Departamento de Imprensa e Propaganda).',
              order: 1
            },
            {
              question: `(ENEM 2016) A CLT (Consolidação das Leis do Trabalho), decretada em 1943, garantiu direitos aos trabalhadores brasileiros.

Um direito garantido pela CLT foi:
- (A) o salário mínimo e as férias remuneradas.
- (B) a liberdade de greve irrestrita.
- (C) a autonomia sindical plena.
- (D) o fim da intervenção estatal.
- (E) a distribuição de terras aos trabalhadores.`,
              options: '["O salário mínimo e as férias remuneradas", "A liberdade de greve irrestrita", "A autonomia sindical plena", "O fim da intervenção estatal"]',
              answer: 0,
              explanation: 'A CLT garantiu direitos como salário mínimo, férias remuneradas, jornada de trabalho de 8 horas e descanso semanal remunerado.',
              order: 2
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 10: DITADURA MILITAR
  // ==========================================
  {
    title: 'Ditadura Militar',
    description: 'O regime militar brasileiro: golpe de 1964, repressão e abertura democrática.',
    icon: 'Shield',
    color: 'slate',
    order: 10,
    lessons: [
      {
        title: 'O Golpe de 1964 e a Repressão',
        content: `# O Golpe de 1964 e a Repressão

## Contexto

No início da década de 1960, o Brasil vivia intensa polarização política. O presidente João Goulart (Jango) propunha reformas que incomodavam setores conservadores.

## O Golpe de 1964

### Causas
- **Reformas de Base**: Agrária, tributária, bancária
- **Temor do comunismo**: Guerra Fria
- **Oposição conservadora**: Militares, Igreja, empresários
- **Apoio dos EUA**: Governo americano apoiou o golpe

### O Movimento
- 31 de março de 1964
- Deposição de João Goulart
- Instalação do regime militar

## Os Atos Institucionais

### AI-1 (1964)
- Poderes excepcionais ao Executivo
- Cassação de mandatos
- Suspensão de direitos políticos

### AI-2 (1965)
- Extinção dos partidos políticos
- Criação de bipartidarismo (ARENA x MDB)
- Eleições indiretas para presidente

### AI-5 (1968)
- Fechamento do Congresso
- Suspensão de garantias constitucionais
- Censura prévia
- Tortura institucionalizada

## A Repressão

### Órgãos
- **DOPS**: Departamento de Ordem Política e Social
- **DOI-Codi**: Destacamento de Operações de Informações
- **Censura**: Controle de imprensa e arte

### Práticas
- Tortura de presos políticos
- Desaparecimentos forçados
- Cassação de políticos
- Demissão de professores
- Exílio de opositores`,
        duration: 35,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) O golpe militar de 1964 instalou um regime autoritário no Brasil.

O golpe de 1964 contou com apoio de:
- (A) movimentos sindicais e estudantis.
- (B) setores conservadores e dos Estados Unidos.
- (C) partidos de esquerda e comunistas.
- (D) camponeses e trabalhadores rurais.
- (E) intelectuais progressistas.`,
              options: '["Movimentos sindicais e estudantis", "Setores conservadores e dos Estados Unidos", "Partidos de esquerda e comunistas", "Camponeses e trabalhadores rurais"]',
              answer: 1,
              explanation: 'O golpe de 1964 contou com apoio de setores conservadores da sociedade brasileira (militares, empresários, setores da Igreja) e do governo dos Estados Unidos.',
              order: 1
            },
            {
              question: `(ENEM 2018) O Ato Institucional número 5 (AI-5), de 1968, representou o endurecimento do regime militar.

O AI-5 determinou:
- (A) a reabertura do Congresso Nacional.
- (B) o fim da censura aos meios de comunicação.
- (C) o fechamento do Congresso e a suspensão de garantias constitucionais.
- (D) a convocação de eleições diretas para presidente.
- (E) a anistia aos presos políticos.`,
              options: '["A reabertura do Congresso Nacional", "O fim da censura aos meios de comunicação", "O fechamento do Congresso e a suspensão de garantias constitucionais", "A convocação de eleições diretas para presidente"]',
              answer: 2,
              explanation: 'O AI-5 determinou o fechamento do Congresso Nacional e a suspensão de garantias constitucionais, iniciando o período mais repressivo da ditadura.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Abertura Democrática e Diretas Já',
        content: `# Abertura Democrática e Diretas Já

## O "Milagre Econômico" (1969-1973)

### Características
- Alto crescimento econômico (até 14% ao ano)
- Investimentos em infraestrutura
- Controle salarial
- Endividamento externo

## A Crise e a Distensão

### Crise Econômica
- Aumento do petróleo (1973)
- Inflação alta
- Desaceleração do crescimento

### Distensão (Geisel, 1974-1979)
- "Abertura lenta, gradual e segura"
- Fim do AI-5 (1978)
- Fim da censura prévia

## Lei da Anistia (1979)

- Perdão a crimes políticos
- Retorno de exilados
- Anistia ampla (também para agentes da repressão)

## O Movimento Diretas Já (1984)

### Contexto
- Insatisfação popular
- Crise econômica
- Reivindicação por democracia

### O Movimento
- Manifestações em todo o país
- Milhões de pessoas nas ruas
- Campanha pelas eleições diretas

### A Emenda Dante de Oliveira
- Propunha eleições diretas em 1984
- Derrotada no Congresso
- Continuidade do regime

## A Transição

### 1985
- Eleição indireta de Tancredo Neves
- Morte de Tancredo
- José Sarney assume a presidência
- Fim do regime militar`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2017) O movimento Diretas Já, em 1984, reuniu milhões de brasileiros em manifestações populares.

O movimento Diretas Já reivindicava:
- (A) a manutenção do regime militar.
- (B) eleições diretas para presidente da República.
- (C) o fechamento do Congresso Nacional.
- (D) o fim das eleições presidenciais.
- (E) a continuidade da censura à imprensa.`,
              options: '["A manutenção do regime militar", "Eleições diretas para presidente da República", "O fechamento do Congresso Nacional", "O fim das eleições presidenciais"]',
              answer: 1,
              explanation: 'O movimento Diretas Já reivindicava eleições diretas para presidente da República, em substituição ao sistema de eleições indiretas do regime militar.',
              order: 1
            },
            {
              question: `(ENEM 2016) A Lei da Anistia, aprovada em 1979, permitiu o retorno de exilados políticos ao Brasil.

A Lei da Anistia de 1979:
- (A) puniu os torturadores do regime.
- (B) foi uma conquista exclusiva da esquerda.
- (C) promoveu uma anistia ampla, geral e irrestrita.
- (D) beneficiou apenas os opositores do regime.
- (E) representou o fim imediato da ditadura.`,
              options: '["Puniu os torturadores do regime", "Foi uma conquista exclusiva da esquerda", "Promoveu uma anistia ampla, geral e irrestrita", "Beneficiou apenas os opositores do regime"]',
              answer: 2,
              explanation: 'A Lei da Anistia promoveu uma anistia ampla, geral e irrestrita, beneficiando tanto os opositores do regime quanto os agentes do Estado que cometeram crimes.',
              order: 2
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 11: HISTÓRIA CONTEMPORÂNEA
  // ==========================================
  {
    title: 'Idade Contemporânea',
    description: 'Guerras Mundiais, Guerra Fria, descolonização e globalização.',
    icon: 'Globe',
    color: 'teal',
    order: 11,
    lessons: [
      {
        title: 'Primeira e Segunda Guerra Mundial',
        content: `# Primeira e Segunda Guerra Mundial

## Primeira Guerra Mundial (1914-1918)

### Causas
- Imperialismo e partilha da África
- Nacionalismos (especialmente nos Bálcãs)
- Corrida armamentista
- Sistema de alianças

### Estopim
- Assassinato do arquiduque Francisco Ferdinando
- Sarajevo, 28 de junho de 1914

### Características
- **Guerra de trincheiras**: Estagnação nas frentes
- **Novas armas**: Metralhadoras, gás, tanques
- **Aviões**: Primeiro uso em combate
- **Submarinos**: Guerra naval

### Consequências
- 10 milhões de mortos
- Queda dos impérios (Austro-Húngaro, Otomano, Russo, Alemão)
- Tratado de Versalhes
- Sociedade das Nações

## Entre Guerras

### Crise de 1929
- Quebra da Bolsa de Nova York
- Crise do capitalismo
- Desemprego em massa

### Ascensão do Nazifascismo
- **Itália**: Mussolini (1922)
- **Alemanha**: Hitler (1933)
- **Espanha**: Franco (1939)

## Segunda Guerra Mundial (1939-1945)

### Causas
- Revanchismo alemão
- Expansionismo nazista
- Política de apaziguamento
- Invasão da Polônia

### Fases
- **1939-1941**: Vitórias do Eixo
- **1941-1943**: Entrada dos EUA, Stalingrado
- **1943-1945**: Ofensiva aliada

### Características
- Guerra total
- Civilis como alvos
- Holocausto: 6 milhões de judeus
- Bomba atômica

### Consequências
- 60 milhões de mortos
- Divisão do mundo (Guerra Fria)
- Criação da ONU
- Descolonização`,
        duration: 35,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A Primeira Guerra Mundial (1914-1918) foi causada por diversos fatores.

Uma causa da Primeira Guerra Mundial foi:
- (A) a unificação da Alemanha.
- (B) o imperialismo e a disputa por colônias.
- (C) o fim do colonialismo europeu.
- (D) a democracia nos países europeus.
- (E) a ausência de alianças militares.`,
              options: '["A unificação da Alemanha", "O imperialismo e a disputa por colônias", "O fim do colonialismo europeu", "A democracia nos países europeus"]',
              answer: 1,
              explanation: 'O imperialismo e a disputa por colônias na África e Ásia foram causas importantes da Primeira Guerra Mundial, gerando rivalidades entre as potências europeias.',
              order: 1
            },
            {
              question: `(ENEM 2018) A Segunda Guerra Mundial (1939-1945) foi o conflito mais mortífero da história.

Uma característica da Segunda Guerra foi:
- (A) o uso da bomba atômica e o Holocausto.
- (B) a ausência de baixas civis.
- (C) o uso apenas de armas convencionais.
- (D) a vitória rápida das forças do Eixo.
- (E) a não participação dos Estados Unidos.`,
              options: '["O uso da bomba atômica e o Holocausto", "A ausência de baixas civis", "O uso apenas de armas convencionais", "A vitória rápida das forças do Eixo"]',
              answer: 0,
              explanation: 'A Segunda Guerra foi caracterizada pelo uso da bomba atômica (Hiroshima e Nagasaki) e pelo Holocausto, o genocídio de 6 milhões de judeus pelos nazistas.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Guerra Fria',
        content: `# Guerra Fria

## Contexto

Após a Segunda Guerra Mundial, o mundo dividiu-se em dois blocos de influência: o capitalista (liderado pelos EUA) e o socialista (liderado pela URSS).

## Características

### Confronto Indireto
- Sem confronto militar direto entre superpotências
- Risco de guerra nuclear (dissuasão)

### Disputas
- **Corrida armamentista**: Acúmulo de armas nucleares
- **Corrida espacial**: Conquista do espaço
- **Guerras por procuração**: Vietnã, Coreia, Afeganistão
- **Espionagem**: CIA x KGB

## Momentos de Tensão

### Guerra da Coreia (1950-1953)
- Divisão da Coreia (Norte x Sul)
- Primeiro conflito da Guerra Fria

### Crise dos Mísseis (1962)
- URSS instalando mísseis em Cuba
- Mundo à beira da guerra nuclear
- Solução diplomática

### Guerra do Vietnã (1955-1975)
- EUA contra o Vietnã do Norte comunista
- Derrota americana
- Unificação do Vietnã

### Muro de Berlim (1961-1989)
- Divisão da Alemanha
- Símbolo da Guerra Fria
- Queda em 1989

## O Fim da Guerra Fria

### Fatores
- Crise econômica da URSS
- Glasnost e Perestroika (Gorbachev)
- Queda do Muro de Berlim (1989)

### Consequências
- Dissolução da URSS (1991)
- Unificação da Alemanha
- Hegemonia americana
- Globalização`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A Guerra Fria (1947-1991) foi um período de tensão entre Estados Unidos e União Soviética.

A expressão "Guerra Fria" refere-se ao fato de:
- (A) não ter havido confronto militar direto entre as superpotências.
- (B) o conflito ter ocorrido em regiões de clima frio.
- (C) as duas potências terem formado uma aliança militar.
- (D) o mundo ter vivido um período de paz absoluta.
- (E) não ter havido disputas por áreas de influência.`,
              options: '["Não ter havido confronto militar direto entre as superpotências", "O conflito ter ocorrido em regiões de clima frio", "As duas potências terem formado uma aliança militar", "O mundo ter vivido um período de paz absoluta"]',
              answer: 0,
              explanation: 'A Guerra Fria foi "fria" porque não houve confronto militar direto entre EUA e URSS, devido ao risco de aniquilação nuclear. O confronto era indireto.',
              order: 1
            },
            {
              question: `(ENEM 2017) A queda do Muro de Berlim, em 1989, foi um marco do fim da Guerra Fria.

O Muro de Berlim dividia:
- (A) a cidade de Berlim em duas zonas de ocupação.
- (B) a Alemanha da França.
- (C) a União Soviética dos Estados Unidos.
- (D) o bloco capitalista do socialista.
- (E) a Europa da Ásia.`,
              options: '["A cidade de Berlim em duas zonas de ocupação", "A Alemanha da França", "A União Soviética dos Estados Unidos", "O bloco capitalista do socialista"]',
              answer: 0,
              explanation: 'O Muro de Berlim dividia a cidade de Berlim em duas partes: Berlim Ocidental (capitalista) e Berlim Oriental (socialista), sendo símbolo da divisão do mundo.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Globalização e Mundo Contemporâneo',
        content: `# Globalização e Mundo Contemporâneo

## O Processo de Globalização

A globalização é um processo de integração econômica, política e cultural do mundo, intensificado a partir do fim da Guerra Fria.

### Características
- **Integração econômica**: Mercado global
- **Revolução tecnológica**: Internet, comunicações
- **Fluxos de capital**: Investimentos globais
- **Circulação de pessoas**: Migrações
- **Cultura global**: Mídia e entretenimento

## Aspectos Econômicos

### Blocos Econômicos
- **União Europeia**: Integração europeia
- **NAFTA/USMCA**: América do Norte
- **MERCOSUL**: América do Sul
- **ASEAN**: Sudeste Asiático

### Instituições
- **FMI**: Fundo Monetário Internacional
- **Banco Mundial**: Financiamento
- **OMC**: Organização Mundial do Comércio

### Empresas Multinacionais
- Atuação em vários países
- Poder econômico superior a muitos Estados
- Terceirização e cadeias globais

## Desafios Contemporâneos

### Ambientais
- Mudanças climáticas
- Perda de biodiversidade
- Poluição

### Sociais
- Desigualdade global
- Migrações e refugiados
- Terrorismo

### Políticos
- Crise da democracia
- Ascensão de populismos
- Tensões geopolíticas

## Aspectos Culturais

### Homogeneização
- Cultura de massas
- Hegemonia cultural ocidental

### Resistências
- Preservação de identidades
- Movimentos culturais locais
- Valorização da diversidade`,
        duration: 30,
        order: 3,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A globalização é um processo de integração mundial intensificado a partir do fim da Guerra Fria.

Uma característica da globalização é:
- (A) o fortalecimento das fronteiras nacionais.
- (B) a circulação de mercadorias, capitais e informações.
- (C) o fim das desigualdades econômicas.
- (D) a redução do poder das empresas multinacionais.
- (E) o isolamento dos países pobres.`,
              options: '["O fortalecimento das fronteiras nacionais", "A circulação de mercadorias, capitais e informações", "O fim das desigualdades econômicas", "A redução do poder das empresas multinacionais"]',
              answer: 1,
              explanation: 'A globalização caracteriza-se pela intensa circulação de mercadorias, capitais e informações em escala global, integrando mercados e sociedades.',
              order: 1
            },
            {
              question: `(ENEM 2016) Os blocos econômicos são formas de integração entre países.

O MERCOSUL é um bloco econômico que reúne países:
- (A) da América do Norte.
- (B) da Europa Ocidental.
- (C) da América do Sul.
- (D) da Ásia Oriental.
- (E) da África Subsaariana.`,
              options: '["Da América do Norte", "Da Europa Ocidental", "Da América do Sul", "Da Ásia Oriental"]',
              answer: 2,
              explanation: 'O MERCOSUL é um bloco econômico formado por países da América do Sul, incluindo Brasil, Argentina, Paraguai e Uruguai.',
              order: 2
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 12: HISTÓRIA DA AMÉRICA
  // ==========================================
  {
    title: 'História da América',
    description: 'Colonização europeia, independências e América Latina contemporânea.',
    icon: 'Map',
    color: 'emerald',
    order: 12,
    lessons: [
      {
        title: 'Colonização da América e Independências',
        content: `# Colonização da América e Independências

## Colonização Espanhola

### Características
- **Extração de metais**: Ouro e prata
- **Encomienda**: Sistema de trabalho forçado
- **Mita**: Trabalho obrigatório indígena
- **Catequese**: Evangelização pelos jesuítas

### Organização
- Vice-reinados: Nova Espanha, Peru, Nova Granada, Prata
- Capitanias gerais
- Audiências

## Colonização Inglesa

### Colonias do Norte
- Base religiosa (puritanos)
- Economia diversificada
- Trabalho livre e servidão

### Colônias do Sul
- Economia de plantation
- Tabaco, algodão, arroz
- Trabalho escravo africano

## As Independências

### Independência dos EUA (1776)
- Guerra contra a Inglaterra
- Declaração de Independência
- Primeira colônia independente

### Independências na América Espanhola (1810-1825)
- Influência do Iluminismo
- Napoleão na Espanha
- Líderes: Bolívar, San Martín, O'Higgins
- Fragmentação em múltiplos países

### Independência do Brasil (1822)
- Via monárquica
- Dom Pedro I
- Unidade territorial mantida`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A colonização espanhola na América caracterizou-se por diferentes formas de exploração.

Um elemento da colonização espanhola foi:
- (A) o trabalho escravo africano como base da economia.
- (B) a extração de metais preciosos.
- (C) a ausência de mistura racial.
- (D) o fim das culturas indígenas.
- (E) a democracia política nas colônias.`,
              options: '["O trabalho escravo africano como base da economia", "A extração de metais preciosos", "A ausência de mistura racial", "O fim das culturas indígenas"]',
              answer: 1,
              explanation: 'A colonização espanhola na América foi marcada pela extração de metais preciosos (ouro e prata), especialmente no México e no Peru.',
              order: 1
            }
          ]
        }
      },
      {
        title: 'América Latina no Século XX',
        content: `# América Latina no Século XX

## Revolução Mexicana (1910-1940)

### Causas
- Ditadura de Porfírio Díaz
- Desigualdade fundiária
- Exclusão política

### Líderes
- Emiliano Zapata: "Terra e Liberdade"
- Pancho Villa: Exército do Norte

### Conquistas
- Constituição de 1917
- Reforma agrária
- Nacionalismo

## Populismos Latino-Americanos

### Características
- Líderes carismáticos
- Industrialização por substituição de importações
- Políticas sociais
- Nacionalismo

### Exemplos
- **México**: Lázaro Cárdenas
- **Argentina**: Juan Perón
- **Brasil**: Getúlio Vargas

## Ditaduras Militares

### Contexto
- Guerra Fria
- Apoio dos EUA
- Doutrina de Segurança Nacional

### Características
- Golpes de Estado
- Repressão política
- Tortura e desaparecimentos
- Neoliberalismo econômico

### Exemplos
- **Chile**: Pinochet (1973-1990)
- **Argentina**: Junta militar (1976-1983)
- **Brasil**: 1964-1985
- **Uruguai**: 1973-1985

## Redemocratização

### Anos 1980
- Transição para democracia
- Crise da dívida
- Fim das ditaduras

### Desafios
- Desigualdade social
- Violência
- Instabilidade política
- Dependência econômica`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2018) A Revolução Mexicana (1910) foi um movimento social que reivindicava:

- (A) a manutenção do poder de Porfírio Díaz.
- (B) a reforma agrária e a democracia.
- (C) o fim da independência do México.
- (D) o retorno ao colonialismo espanhol.
- (E) a exclusão dos camponeses.`,
              options: '["A manutenção do poder de Porfírio Díaz", "A reforma agrária e a democracia", "O fim da independência do México", "O retorno ao colonialismo espanhol"]',
              answer: 1,
              explanation: 'A Revolução Mexicana reivindicava reforma agrária e democracia, contra a ditadura de Porfírio Díaz e a concentração de terras.',
              order: 1
            }
          ]
        }
      }
    ]
  },

  // ==========================================
  // MÓDULO 13: HISTÓRIA DA ÁFRICA
  // ==========================================
  {
    title: 'História da África',
    description: 'Civilizações africanas, tráfico negreiro e descolonização.',
    icon: 'Earth',
    color: 'yellow',
    order: 13,
    lessons: [
      {
        title: 'África Antiga e Tráfico Negreiro',
        content: `# África Antiga e Tráfico Negreiro

## Civilizações Africanas

### Norte da África
- **Egito**: Civilização do Nilo
- **Cartago**: Potência fenícia
- **Reino de Kush**: Núbia

### África Subsaariana
- **Império de Gana** (séc. IV-XIII): Comércio de ouro
- **Império de Mali** (séc. XIII-XVI): Mansa Musa
- **Império Songai** (séc. XV-XVI): Timbuktu
- **Grande Zimbabwe** (séc. XI-XV)

### Características
- Comércio transaariano
- Islã no norte e sahel
- Diversidade linguística e cultural
- Organização política variada

## O Tráfico Negreiro

### Escala
- Estima-se 12-15 milhões de africanos deportados
- Séculos XVI a XIX
- Parte do comércio triangular

### Impacto na África
- Despopulação
- Instabilidade política
- Enfraquecimento dos reinos
- Guerras para captura de escravos

### Resistência
- Quilombos nas Américas
- Resistência nos navios
- Comunidades de escravos fugitivos`,
        duration: 30,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2017) O tráfico negreiro teve consequências devastadoras para a África.

Um impacto do tráfico negreiro na África foi:
- (A) o fortalecimento dos reinos africanos.
- (B) a intensificação de conflitos internos.
- (C) o aumento da população africana.
- (D) o desenvolvimento econômico.
- (E) a unificação política do continente.`,
              options: '["O fortalecimento dos reinos africanos", "A intensificação de conflitos internos", "O aumento da população africana", "O desenvolvimento econômico"]',
              answer: 1,
              explanation: 'O tráfico negreiro intensificou conflitos internos na África, pois reinos rivais passaram a fazer guerras para capturar prisioneiros para vender como escravos.',
              order: 1
            }
          ]
        }
      },
      {
        title: 'Descolonização Africana',
        content: `# Descolonização Africana

## Partilha da África

### Conferência de Berlim (1884-1885)
- Divisão da África entre potências europeias
- Fronteiras artificiais
- Exploração de recursos

### Colonização
- **França**: África Ocidental
- **Inglaterra**: Egito, África do Sul, Quênia
- **Portugal**: Angola, Moçambique
- **Bélgica**: Congo

## O Processo de Descolonização

### Após a Segunda Guerra
- Enfraquecimento das potências coloniais
- Movimentos nacionalistas
- Apoio da ONU

### Independências
- **1950s**: Líbia, Marrocos, Tunísia, Gana
- **1960**: Ano da África (17 países)
- **1970s**: Angola, Moçambique (1975)

### Problemas
- Fronteiras herdadas da colonização
- Conflitos étnicos
- Instabilidade política
- Neocolonialismo econômico

## África do Sul e Apartheid

### O Regime
- Segregação racial (1948-1994)
- Minorias branca no poder
- Resistência: ANC, Nelson Mandela

### O Fim do Apartheid
- Pressão internacional
- Movimentos internos
- Mandela presidente (1994)`,
        duration: 30,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) A descolonização africana ocorreu principalmente nas décadas de 1950 e 1960.

Um problema enfrentado pelos países africanos após a independência foi:
- (A) a ausência de conflitos étnicos.
- (B) a estabilidade econômica.
- (C) as fronteiras herdadas da colonização.
- (D) o fim da dependência econômica.
- (E) a unidade nacional imediata.`,
              options: '["A ausência de conflitos étnicos", "A estabilidade econômica", "As fronteiras herdadas da colonização", "O fim da dependência econômica"]',
              answer: 2,
              explanation: 'As fronteiras herdadas da colonização europeia dividiam grupos étnicos e unia povos diferentes, gerando conflitos que perduram até hoje.',
              order: 1
            }
          ]
        }
      }
    ]
  }
];

async function main() {
  console.log('🌱 Iniciando seed PARTE 2 - História para ENEM...');

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

  console.log('🎉 Seed PARTE 2 concluído!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
