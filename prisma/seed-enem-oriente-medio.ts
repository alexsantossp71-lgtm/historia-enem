import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// =============================================
// MÓDULO: HISTÓRIA DO ORIENTE MÉDIO
// Baseado na Matriz de Referência do ENEM/MEC
// =============================================

const modulesData = [
  // ==========================================
  // MÓDULO 15: HISTÓRIA DO ORIENTE MÉDIO
  // ==========================================
  {
    title: 'História do Oriente Médio',
    description: 'Berço das civilizações, impérios islâmicos e conflitos contemporâneos.',
    icon: 'Mosque',
    color: 'emerald',
    order: 15,
    lessons: [
      {
        title: 'Berço da Civilização: Mesopotâmia e Pérsia',
        content: `# Berço da Civilização: Mesopotâmia e Pérsia

## A Mesopotâmia (c. 3500-539 a.C.)

Região entre os rios Tigre e Eufrates (atual Iraque):

### Sumérios (c. 3500-2350 a.C.)
- **Primeiras cidades**: Ur, Uruk, Eridu
- **Escrita cuneiforme**: Primeiro sistema de escrita
- **Rodas e arado**: Invenções revolucionárias
- **Religião**: Templos (zigurates) e deuses locais

### Acádios (c. 2350-2150 a.C.)
- **Sargão, o Grande**: Primeiro império da história
- **Unificação**: Mesopotâmia sob um governo
- **Língua acádia**: Substituiu o sumério

### Babilônios (c. 1894-539 a.C.)
- **Hamurabi (c. 1792-1750 a.C.)**: Código de leis
- **Código de Hamurabi**: "Olho por olho, dente por dente"
- **Babilônia**: Cidade mais importante
- **Jardins Suspensos**: Maravilha do mundo antigo

### Assírios (c. 2500-609 a.C.)
- **Império Assírio**: Militarista e expansionista
- **Nínive**: Capital com biblioteca de tábuas
- **Tiglate-Pileser III**: Reformas administrativas
- **Queda**: Destruída por medos e babilônios

## O Império Persa (550-330 a.C.)

### Dinastia Aquemênida
- **Ciro, o Grande (559-530 a.C.)**: Fundador
- **Tolerância religiosa**: Libertou judeus do exílio
- **Estrada Real**: 2.700 km de Susa a Sardes
- **Dario I (522-486 a.C.)**: Expansão e administração

### Organização do Império
- **Satrapias**: Províncias governadas por sátrapas
- **Correio real**: Sistema postal eficiente
- **Estradas**: Facilitavam comércio e comunicação
- **Moeda unificada**: Dário de ouro

### Legado Persa
- **Zoroastrismo**: Religião de Zoroastro
- **Arquitetura**: Persépolis
- **Administração**: Modelo para impérios posteriores
- **Queda**: Conquista por Alexandre, o Grande (330 a.C.)

## A Península Arábica Pré-Islâmica

### Sociedade Beduína
- **Nômades**: Pastoreio de camelos e cabras
- **Clãs e tribos**: Organização social básica
- **Meca**: Centro comercial e religioso
- **Caaba**: Santuário sagrado (pré-islâmico)

### Economia
- **Comércio**: Rota entre Mediterrâneo e Índia
- **Incenso**: Produto de luxo valorizado
- **Escambo**: Troca de mercadorias
- **Caravanas**: Transporte através do deserto

### Cultura
- **Poesia**: Tradição oral rica
- **Hospitalidade**: Valor fundamental
- **Vingança de sangue**: Justiça tribal
- **Politeísmo**: Muitos deuses tribais`,
        duration: 25,
        order: 1,
        quiz: {
          questions: [
            {
              question: `(ENEM 2019) O Código de Hamurabi, criado na Mesopotâmia por volta de 1750 a.C., é considerado um dos primeiros conjuntos de leis escritas. Uma das características desse código era:

- (A) a igualdade absoluta entre todos os cidadãos perante a lei.
- (B) a aplicação da lei de talião ("olho por olho, dente por dente").
- (C) a proibição de qualquer forma de punição corporal.
- (D) a isenção de punição para as classes mais altas.
- (E) a substituição da justiça tribal por tribunais democráticos.`,
              options: '["A igualdade absoluta entre todos os cidadãos perante a lei", "A aplicação da lei de talião (\"olho por olho, dente por dente\")", "A proibição de qualquer forma de punição corporal", "A isenção de punição para as classes mais altas"]',
              answer: 1,
              explanation: 'O Código de Hamurabi aplicava a lei de talião, onde a punição deveria ser proporcional ao crime cometido, embora as punições variassem conforme a classe social.',
              order: 1
            },
            {
              question: `(ENEM 2020) O Império Persa Aquemênida, sob Ciro, o Grande, destacou-se pela tolerância religiosa e administrativa. Uma das principais inovações administrativas persas foi:

- (A) a centralização total do poder em uma única cidade.
- (B) a divisão do império em satrapias com governadores locais.
- (C) a proibição de diferentes religiões no império.
- (D) a abolição de todas as formas de comércio.
- (E) a imposição da língua persa como única permitida.`,
              options: '["A centralização total do poder em uma única cidade", "A divisão do império em satrapias com governadores locais", "A proibição de diferentes religiões no império", "A abolição de todas as formas de comércio"]',
              answer: 1,
              explanation: 'O Império Persa organizou-se em satrapias, províncias governadas por sátrapas que mantinham certa autonomia, permitindo eficiente administração de um vasto território.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Ascensão do Islã: Maomé e os Califados',
        content: `# Ascensão do Islã: Maomé e os Califados

## Maomé e o Surgimento do Islã

### Contexto Histórico
- **Século VII d.C.**: Península Arábica fragmentada
- **Meca**: Centro comercial e religioso
- **Tribos beduínas**: Conflitos constantes

### Maomé (c. 570-632 d.C.)
- **Nascimento em Meca**: Família dos Coraixitas
- **Revelações (610 d.C.)**: Anjo Gabriel no monte Hira
- **Hégira (622 d.C.)**: Migração para Medina
- **Unificação**: Conquista de Meca (630 d.C.)

### Os Cinco Pilares do Islã
- **Chahada**: Declaração de fé
- **Salat**: Orações diárias (5 vezes)
- **Zakat**: Caridade obrigatória
- **Ramadão**: Jejum no mês sagrado
- **Hajj**: Peregrinação a Meca

### O Alcorão
- **Livro sagrado**: Revelações de Deus a Maomé
- **114 suras (capítulos)**: Organização temática
- **Língua árabe**: Texto sagrado original
- **Interpretação**: Sharia (lei islâmica)

## Os Califados

### Califado Ortodoxo (632-661 d.C.)
- **Abu Bakr**: Primeiro califa (sogro de Maomé)
- **Omar**: Expansão militar (Síria, Pérsia, Egito)
- **Otman**: Compilação do Alcorão
- **Ali**: Genro de Maomé, assassinato

### Califado Omíada (661-750 d.C.)
- **Damasco**: Capital do império
- **Expansão**: Norte da África, Espanha, Ásia Central
- **Arquitetura**: Domo da Rocha em Jerusalém
- **Administração**: Sistema burocrático eficiente

### Califado Abássida (750-1258 d.C.)
- **Bagdá**: Nova capital, centro cultural
- **Idade de Ouro**: Ciência, filosofia, medicina
- **Casa da Sabedoria**: Tradução de textos gregos
- **Comércio**: Rota da Seda, Oceano Índico

## A Expansão Islâmica

### Conquistas Militares
- **Síria (636)**: Batalha de Yarmouk
- **Pérsia (651)**: Fim do Império Sassânida
- **Egito (641)**: Conquista de Alexandria
- **Norte da África (700)**: Berberes convertidos
- **Espanha (711)**: Al-Andalus

### Fatores do Sucesso
- **Unidade religiosa**: Islã como força coesiva
- **Tolerância**: Povos conquistados podiam manter religião
- **Comércio**: Estímulo à prosperidade
- **Administração**: Sistemas eficientes adotados

### Legado Cultural
- **Arquitetura**: Mesquitas, palácios
- **Ciência**: Álgebra, astronomia, medicina
- **Filosofia**: Averroes, Avicena
- **Literatura**: "As Mil e Uma Noites"`,
        duration: 25,
        order: 2,
        quiz: {
          questions: [
            {
              question: `(ENEM 2021) O Islã surgiu na Península Arábica no século VII d.C., sob a liderança de Maomé. Um dos pilares fundamentais da religião islâmica é:

- (A) a rejeição de qualquer forma de caridade social.
- (B) a prática de cinco orações diárias obrigatórias.
- (C) a proibição de peregrinações religiosas.
- (D) a negação da existência de um livro sagrado.
- (E) a imposição do ateísmo como doutrina oficial.`,
              options: '["A rejeição de qualquer forma de caridade social", "A prática de cinco orações diárias obrigatórias", "A proibição de peregrinações religiosas", "A negação da existência de um livro sagrado"]',
              answer: 1,
              explanation: 'Um dos cinco pilares do Islã é o Salat, que consiste na prática de cinco orações diárias obrigatórias, realizadas em horários específicos.',
              order: 1
            },
            {
              question: `(ENEM 2022) O Califado Abássida (750-1258 d.C.) é conhecido como a "Idade de Ouro" da civilização islâmica. Uma das principais características desse período foi:

- (A) a rejeição de todo conhecimento científico e filosófico.
- (B) o desenvolvimento da ciência, filosofia e medicina.
- (C) a proibição do comércio internacional.
- (D) a destruição de todas as bibliotecas do império.
- (E) a imposição do analfabetismo como política de Estado.`,
              options: '["A rejeição de todo conhecimento científico e filosófico", "O desenvolvimento da ciência, filosofia e medicina", "A proibição do comércio internacional", "A destruição de todas as bibliotecas do império"]',
              answer: 1,
              explanation: 'O Califado Abássida promoveu uma "Idade de Ouro" com grande desenvolvimento científico, filosófico e médico, incluindo a tradução de textos gregos na Casa da Sabedoria de Bagdá.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Cruzadas e Conflitos Religiosos',
        content: `# Cruzadas e Conflitos Religiosos

## As Cruzadas (1096-1291)

### Contexto
- **Controle da Terra Santa**: Jerusalém sagrada para cristãos e muçulmanos
- **Apelo do Papa Urbano II (1095)**: Concílio de Clermont
- **Promessas**: Indulgências e terras no Oriente
- **Fatores sociais**: Segundos filosos, aventureiros, comerciantes

### Primeira Cruzada (1096-1099)
- **Conquista de Jerusalém (1099)**: Massacre da população
- **Estados Cruzados**: Condado de Edessa, Principado de Antioquia, Reino de Jerusalém, Condado de Trípoli
- **Ordens Militares**: Templários, Hospitalários

### Cruzadas Posteriores
- **Segunda Cruzada (1147-1149)**: Fracasso, perda de Edessa
- **Terceira Cruzada (1189-1192)**: Ricardo Coração de Leão vs. Saladino
- **Quarta Cruzada (1202-1204)**: Saque de Constantinopla
- **Crianças (1212)**: Trágica expedição popular
- **Últimas Cruzadas (13º século)**: Fracassos sucessivos

## Saladino e a Reconquista Muçulmana

### Saladino (1137-1193)
- **Unificação**: Síria e Egito sob seu comando
- **Batalha de Hattin (1187)**: Derrota dos cruzados
- **Reconquista de Jerusalém (1187)**: Tratamento digno aos cristãos
- **Cavaleiro muçulmano**: Respeitado por cristãos e muçulmanos

### Legado de Saladino
- **Tolerância**: Permitiu peregrinações cristãs
- **Unidade islâmica**: Símbolo de resistência
- **Honra**: Respeitado como líder justo
- **Morte (1193)**: Império fragmentado

## Consequências das Cruzadas

### Políticas
- **Enfraquecimento**: Feudalismo e papado
- **Fortalecimento**: Monarquias nacionais
- **Estados Cruzados**: Presença europeia no Oriente
- **Queda de Constantinopla (1204)**: Império Bizantino enfraquecido

### Econômicas
- **Comércio**: Cidades italianas (Veneza, Gênova)
- **Produtos**: Especiarias, seda, açúcar
- **Técnicas**: Navegação, cartografia
- **Moeda**: Florença, ducado

### Culturais
- **Intercâmbio**: Conhecimento grego e islâmico
- **Universidades**: Bolonha, Paris, Oxford
- **Tecnologia**: Pólvora, bússola, imprensa
- **Arte**: Influências orientais na arquitetura

### Religiosas
- **Intolerância**: Perseguição a judeus e muçulmanos
- **Ordens Militares**: Templários, Hospitalários, Teutônicos
- **Peregrinações**: Continuaram após as cruzadas
- **Missionários**: Franciscanos e dominicanos

## Outros Conflitos Religiosos

### Reconquista Ibérica (711-1492)
- **Al-Andalus**: Domínio muçulmano na Península Ibérica
- **Batalha de Covadonga (722)**: Início da Reconquista
- **Reinos Cristãos**: Castela, Aragão, Portugal
- **Queda de Granada (1492)**: Fim do domínio muçulmano

### Perseguição aos Judeus
- **Progroms**: Massacres na Europa
- **Expulsões**: Inglaterra (1290), França (1306), Espanha (1492)
- **Guetos**: Isolamento forçado
- **Inquisição**: Perseguição religiosa`,
        duration: 25,
        order: 3,
        quiz: {
          questions: [
            {
              question: `(ENEM 2023) As Cruzadas foram expedições militares organizadas pela Igreja Católica entre os séculos XI e XIII. Uma das principais consequências das Cruzadas foi:

- (A) o isolamento completo da Europa em relação ao Oriente.
- (B) o fortalecimento do feudalismo como sistema dominante.
- (C) o estímulo ao comércio e ao intercâmbio cultural entre Oriente e Ocidente.
- (D) a unificação de toda a Europa sob um único governo.
- (E) a proibição de qualquer contato com o mundo islâmico.`,
              options: '["O isolamento completo da Europa em relação ao Oriente", "O fortalecimento do feudalismo como sistema dominante", "O estímulo ao comércio e ao intercâmbio cultural entre Oriente e Ocidente", "A unificação de toda a Europa sob um único governo"]',
              answer: 2,
              explanation: 'As Cruzadas estimularam significativamente o comércio entre Oriente e Ocidente, além de promoverem intercâmbios culturais, científicos e tecnológicos.',
              order: 1
            },
            {
              question: `(ENEM 2024) Saladino, líder muçulmano do século XII, é conhecido por ter reconquistado Jerusalém dos cruzados. Uma das características de Saladino foi:

- (A) a perseguição sistemática de todas as religiões.
- (B) a destruição de todos os lugares sagrados cristãos.
- (C) a tolerância religiosa e tratamento digno aos cristãos.
- (D) a proibição de qualquer forma de comércio.
- (E) a imposição do islamismo como única religião permitida.`,
              options: '["A perseguição sistemática de todas as religiões", "A destruição de todos os lugares sagrados cristãos", "A tolerância religiosa e tratamento digno aos cristãos", "A proibição de qualquer forma de comércio"]',
              answer: 2,
              explanation: 'Saladino era conhecido por sua tolerância religiosa, permitindo peregrinações cristãs e tratando com dignidade os habitantes cristãos de Jerusalém após a reconquista.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Império Otomano: Ascensão e Declínio',
        content: `# Império Otomano: Ascensão e Declínio

## Origens e Ascensão (1299-1453)

### Fundação
- **Osman I (1299)**: Líder tribal turco
- **Anatólia**: Região da atual Turquia
- **Gueris**: Tradição militar nômade
- **Expansão**: Conquista de territórios bizantinos

### Conquista de Constantinopla (1453)
- **Mehmed II, o Conquistador**: Sultão aos 21 anos
- **Cerco de 53 dias**: Uso de canhões gigantes
- **Fim do Império Bizantino**: 1.000 anos de história
- **Istambul**: Nova capital do império

## Expansão e Auge (1453-1683)

### Territórios Conquistados
- **Bálcãs**: Sérvia, Hungria, Grécia
- **Norte da África**: Egito, Argélia, Tunísia
- **Oriente Médio**: Síria, Iraque, Arábia
- **Cáucaso**: Geórgia, Armênia

### Organização Política
- **Sultão**: Líder absoluto
- **Grão-vizir**: Primeiro-ministro
- **Millet**: Sistema de comunidades religiosas
- **Janízaros**: Elite militar de escravos

### Sociedade e Cultura
- **Islamismo**: Religião oficial
- **Tolerância**: Cristãos e judeus podiam praticar religião
- **Arquitetura**: Mesquitas, palácios (Sinan)
- **Literatura**: Poesia e prosa em turco otomano

## O Cerco de Viena (1683)

### Contexto
- **Expansão máxima**: Sob Solimão, o Magnífico
- **Objetivo**: Conquista da Europa Central
- **Forças otomanas**: 150.000 homens
- **Defensores**: Poloneses e austríacos

### A Batalha
- **Cerco de 60 dias**: Julho-setembro de 1683
- **Rei João III Sobieski**: Líder da coalizão cristã
- **Derrota otomana**: Fim da expansão para Europa
- **Tratado de Karlowitz (1699)**: Perda de territórios

## Declínio (1683-1922)

### Problemas Internos
- **Corrupção**: Administração ineficiente
- **Revoluções**: Nacionalismos nos Bálcãs
- **Dívida externa**: Dependência de potências europeias
- **Reformas falhas**: Tanzimat (1839-1876)

### Conflitos Externos
- **Guerras russo-turcas**: Perda de territórios
- **Guerra da Crimeia (1853-1856)**: Aliança com França e Inglaterra
- **Guerras dos Bálcãs (1912-1913)**: Perda de quase todos territórios europeus

### Primeira Guerra Mundial (1914-1918)
- **Aliança com Alemanha**: Impérios Centrais
- **Derrota**: Desintegração do império
- **Tratado de Sèvres (1920)**: Partição do império
- **Guerra de Independência (1919-1922)**: Mustafá Kemal Atatürk

## O Fim do Império Otomano

### Atatürk e a República Turca
- **Abolição do sultanato (1922)**: Fim da monarquia
- **República (1923)**: Atatürk primeiro presidente
- **Reformas**: Secularização, alfabeto latino, direitos das mulheres
- **Legado**: Turquia moderna

### Consequências
- **Partição**: Territórios divididos entre potências
- **Mandatos**: Liga das Nações (Síria, Iraque, Palestina)
- **Nacionalismos**: Surgimento de estados árabes
- **Conflitos**: Origem de muitos problemas atuais`,
        duration: 25,
        order: 4,
        quiz: {
          questions: [
            {
              question: `(ENEM 2024) O Império Otomano foi um dos maiores impérios da história, controlando vastos territórios por séculos. Uma das características do sistema político otomano era:

- (A) a eleição democrática do sultão pelo povo.
- (B) o sistema de millet, que permitia autonomia religiosa às comunidades.
- (C) a proibição de qualquer forma de tolerância religiosa.
- (D) a abolição de todas as formas de escravidão.
- (E) a igualdade absoluta entre muçulmanos e não-muçulmanos.`,
              options: '["A eleição democrática do sultão pelo povo", "O sistema de millet, que permitia autonomia religiosa às comunidades", "A proibição de qualquer forma de tolerância religiosa", "A abolição de todas as formas de escravidão"]',
              answer: 1,
              explanation: 'O sistema de millet permitia que comunidades religiosas (cristãos, judeus) mantivessem suas próprias leis e tradições, desde que pagassem impostos e aceitassem o domínio otomano.',
              order: 1
            },
            {
              question: `(ENEM 2023) O cerco de Viena em 1683 foi um marco na história do Império Otomano. A derrota otomana nessa batalha representou:

- (A) o início da expansão otomana para a Europa.
- (B) o fortalecimento do poder do sultão.
- (C) o fim da expansão otomana para a Europa Central.
- (D) a unificação de todos os territórios otomanos.
- (E) a adoção do cristianismo como religião oficial.`,
              options: '["O início da expansão otomana para a Europa", "O fortalecimento do poder do sultão", "O fim da expansão otomana para a Europa Central", "A unificação de todos os territórios otomanos"]',
              answer: 2,
              explanation: 'A derrota no cerco de Viena em 1683 marcou o fim da expansão otomana para a Europa Central e o início de um longo período de declínio do império.',
              order: 2
            }
          ]
        }
      },
      {
        title: 'Oriente Médio Contemporâneo: Conflitos e Transformações',
        content: `# Oriente Médio Contemporâneo: Conflitos e Transformações

## O Fim do Império Otomano e a Partição

### Acordo Sykes-Picot (1916)
- **Divisão secreta**: França e Reino Unido
- **Zonas de influência**: Síria, Iraque, Palestina
- **Promessas contraditórias**: Árabes, judeus, franceses
- **Consequências**: Fronteiras artificiais

### Mandatos da Liga das Nações
- **Síria e Líbano**: Mandato francês
- **Iraque e Palestina**: Mandato britânico
- **Transjordânia**: Reino hachemita
- **Nacionalismos árabes**: Movimentos de independência

## A Criação de Israel (1948)

### Sionismo
- **Theodor Herzl (1897)**: Congresso de Basileia
- **Imigração judaica**: Para a Palestina
- **Balfour Declaration (1917)**: Apoio britânico
- **Holocausto**: Reforço da necessidade de um estado judeu

### A Guerra de 1948
- **Plano de Partilha (1947)**: ONU divide a Palestina
- **Declaração de Independência (14/05/1948)**: Estado de Israel
- **Guerra árabe-israelense**: Egito, Síria, Jordânia, Iraque
- **Nakba**: "Catástrofe" palestina, 700.000 refugiados

### Conflitos Posteriores
- **Guerra dos Seis Dias (1967)**: Israel conquista Sinai, Gaza, Cisjordânia, Golã
- **Guerra do Yom Kippur (1973)**: Surpresa árabe, mas vitória israelense
- **Acordos de Camp David (1978)**: Paz Egito-Israel
- **Intifadas (1987, 2000)**: Revoltas palestinas

## A Revolução Iraniana (1979)

### Contexto
- **Xá Reza Pahlavi**: Modernização forçada, autoritarismo
- **SAVAK**: Polícia secreta, repressão
- **Ocidentalização**: Conflito com tradições islâmicas
- **Descontentamento**: Clero, estudantes, trabalhadores

### A Revolução
- **Aiatolá Khomeini**: Líder religioso exilado
- **Revolução Islâmica**: Queda do Xá (fevereiro de 1979)
- **República Islâmica**: Constituição teocrática
- **Crise dos reféns (1979-1981)**: Embaixada americana

### Consequências
- **Teocracia**: Governo religioso
- **Guerra Irã-Iraque (1980-1988)**: 1 milhão de mortos
- **Isolamento internacional**: Sanções econômicas
- **Influência regional**: Hezbollah, Hamas

## A Primavera Árabe (2010-2012)

### Origens
- **Desemprego**: Jovens sem perspectivas
- **Corrupção**: Governos autoritários
- **Redes sociais**: Mobilização rápida
- **Mohamed Bouazizi**: Imolação na Tunísia (dezembro de 2010)

### Protestos e Revoluções
- **Tunísia**: Queda de Ben Ali (janeiro de 2011)
- **Egito**: Queda de Mubarak (fevereiro de 2011)
- **Líbia**: Guerra civil, morte de Gaddafi
- **Síria**: Guerra civil devastadora
- **Bahrein, Iêmen**: Protestos reprimidos

### Resultados Mistas
- **Democracia frágil**: Tunísia
- **Autoritarismo**: Egito (Al-Sisi)
- **Guerra civil**: Síria, Líbia, Iêmen
- **Instabilidade**: Região desestabilizada

## Conflitos Atuais

### Guerra Civil Síria (2011-presente)
- **Bashar al-Assad**: Regime apoiado por Rússia e Irã
- **Oposição**: Grupos diversos, incluindo ISIS
- **Refugiados**: 5 milhões fora do país
- **Intervenções**: Rússia, EUA, Turquia

### Crise no Iêmen (2014-presente)
- **Houthis**: Rebeldes xiitas apoiados pelo Irã
- **Coalizão saudita**: Apoiada pelos EUA
- **Fome e doença**: Crise humanitária
- **Proxy war**: Conflito entre Arábia Saudita e Irã

### Questão Curda
- **Kurdos**: 30 milhões sem estado
- **Regiões**: Turquia, Síria, Iraque, Irã
- **Autonomia**: Governo Regional do Curdistão (Iraque)
- **Conflitos**: PKK na Turquia, YPG na Síria

### Questão Palestina
- **Ocupação**: Cisjordânia e Gaza
- **Autoridade Palestina**: Governo limitado
- **Hamas**: Controle de Gaza desde 2007
- **Solução dois estados**: Negociações fracassadas`,
        duration: 25,
        order: 5,
        quiz: {
          questions: [
            {
              question: `(ENEM 2024) A Primavera Árabe, iniciada em 2010, foi uma onda de protestos e revoluções no mundo árabe. Uma das principais causas desses movimentos foi:

- (A) a estabilidade política e prosperidade econômica da região.
- (B) o desemprego jovem, corrupção e governos autoritários.
- (C) a unificação de todos os países árabes em uma nação.
- (D) a adoção do sistema democrático em todos os países.
- (E) a ausência de qualquer forma de protesto social.`,
              options: '["A estabilidade política e prosperidade econômica da região", "O desemprego jovem, corrupção e governos autoritários", "A unificação de todos os países árabes em uma nação", "A adoção do sistema democrático em todos os países"]',
              answer: 1,
              explanation: 'A Primavera Árabe foi motivada principalmente pelo desemprego jovem, corrupção generalizada e governos autoritários que reprimiam a população.',
              order: 1
            },
            {
              question: `(ENEM 2023) A Revolução Iraniana de 1979 estabeleceu uma república islâmica no Irã. Uma das principais características desse novo regime foi:

- (A) a adoção do secularismo como princípio fundamental.
- (B) a implementação de um governo teocrático baseado na lei islâmica.
- (C) a aliança estratégica com os Estados Unidos.
- (D) a proibição de qualquer forma de religião no país.
- (E) a adoção do sistema democrático liberal ocidental.`,
              options: '["A adoção do secularismo como princípio fundamental", "A implementação de um governo teocrático baseado na lei islâmica", "A aliança estratégica com os Estados Unidos", "A proibição de qualquer forma de religião no país"]',
              answer: 1,
              explanation: 'A Revolução Iraniana estabeleceu uma república islâmica teocrática, onde a lei islâmica (sharia) e o clero xiita têm poder central no governo.',
              order: 2
            }
          ]
        }
      }
    ]
  }
];

async function main() {
  console.log('🌱 Iniciando seed do Módulo: História do Oriente Médio...');
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

  console.log('🎉 Seed do Módulo História do Oriente Médio concluído!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
