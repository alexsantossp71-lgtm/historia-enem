import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Dados de jogos para cada aula
const gameData: Record<string, { flashcards: { front: string; back: string }[]; timeline: { year: string; event: string }[]; matchPairs: { term: string; definition: string }[] }> = {
  'pré-história': {
    flashcards: [
      { front: 'Paleolítico', back: 'Idade da Pedra Lascada, período nômade de caça e coleta' },
      { front: 'Neolítico', back: 'Idade da Pedra Polida, surgimento da agricultura e sedentarização' },
      { front: 'Homo erectus', back: 'Primeiro hominídeo a dominar o fogo' },
      { front: 'Revolução Neolítica', back: 'Transição para agricultura e vida sedentária' },
      { front: 'Pinturas rupestres', back: 'Arte parietal do Paleolítico em cavernas' },
    ],
    timeline: [
      { year: '2,5 milhões de anos atrás', event: 'Aparecimento dos primeiros hominídeos' },
      { year: '400.000 anos atrás', event: 'Domínio do fogo pelo Homo erectus' },
      { year: '40.000 anos atrás', event: 'Chegada do Homo sapiens à América' },
      { year: '10.000 a.C.', event: 'Início da Revolução Neolítica' },
      { year: '3.000 a.C.', event: 'Invenção da escrita - fim da Pré-História' },
    ],
    matchPairs: [
      { term: 'Paleolítico', definition: 'Período nômade de caça e coleta' },
      { term: 'Neolítico', definition: 'Período de agricultura e sedentarização' },
      { term: 'Pedra lascada', definition: 'Tecnologia do Paleolítico' },
      { term: 'Pedra polida', definition: 'Tecnologia do Neolítico' },
      { term: 'Nômades', definition: 'Povos que se deslocam constantemente' },
    ],
  },
  'povos originários': {
    flashcards: [
      { front: 'Tupi', back: 'Principal tronco linguístico indígena do litoral brasileiro' },
      { front: 'Jê/Tapuia', back: 'Tronco linguístico do interior e sertão brasileiro' },
      { front: 'Arawak', back: 'Tronco linguístico do norte da Amazônia' },
      { front: 'Maloca', back: 'Habitação coletiva indígena' },
      { front: 'Pajelança', back: 'Sistema religioso e de cura indígena' },
    ],
    timeline: [
      { year: '12.000 a.C.', event: 'Chegada dos primeiros humanos ao Brasil' },
      { year: '1500', event: 'Contato com os portugueses - cerca de 5 milhões de indígenas' },
      { year: 'Século XVI', event: 'Início do declínio populacional indígena' },
      { year: '2010', event: 'Censo: 896 mil indígenas no Brasil' },
      { year: '2023', event: 'Reconhecimento de 724 terras indígenas' },
    ],
    matchPairs: [
      { term: 'Tupi', definition: 'Povos do litoral brasileiro' },
      { term: 'Pajé', definition: 'Líder espiritual indígena' },
      { term: 'Cacique', definition: 'Líder político indígena' },
      { term: 'Oca', definition: 'Habitação indígena' },
      { term: 'Caça e coleta', definition: 'Modo de vida tradicional indígena' },
    ],
  },
  'civilizações pré-colombianas': {
    flashcards: [
      { front: 'Maias', back: 'Civilização mesoamericana com calendário avançado e escrita' },
      { front: 'Astecas', back: 'Império do México central, capital Tenochtitlan' },
      { front: 'Incas', back: 'Império sul-americano com capital em Cusco' },
      { front: 'Quipu', back: 'Sistema de cordões para registro inca' },
      { front: 'Machu Picchu', back: 'Cidade inca nas montanhas dos Andes' },
    ],
    timeline: [
      { year: '200 a.C.', event: 'Apogeu da civilização maia' },
      { year: 'Século XIII', event: 'Fundação de Tenochtitlan pelos astecas' },
      { year: '1438', event: 'Início do Império Inca' },
      { year: '1519', event: 'Cortés chega ao México' },
      { year: '1533', event: 'Pizarro conquista o Império Inca' },
    ],
    matchPairs: [
      { term: 'Maias', definition: 'Península de Yucatán' },
      { term: 'Astecas', definition: 'México central' },
      { term: 'Incas', definition: 'Peru e Andes' },
      { term: 'Tenochtitlan', definition: 'Capital asteca' },
      { term: 'Cusco', definition: 'Capital inca' },
    ],
  },
  'mesopotâmia': {
    flashcards: [
      { front: 'Mesopotâmia', back: 'Região entre rios Tigre e Eufrates' },
      { front: 'Sumérios', back: 'Primeira civilização urbana, inventores da escrita cuneiforme' },
      { front: 'Código de Hamurabi', back: 'Primeiro código de leias escrito, "olho por olho"' },
      { front: 'Zigurates', back: 'Templos em forma de torre dos mesopotâmicos' },
      { front: 'Egito Antigo', back: 'Civilização às margens do rio Nilo' },
    ],
    timeline: [
      { year: '3500 a.C.', event: 'Invenção da escrita cuneiforme' },
      { year: '3100 a.C.', event: 'Unificação do Egito Antigo' },
      { year: '1792-1750 a.C.', event: 'Reinado de Hamurabi na Babilônia' },
      { year: '2560 a.C.', event: 'Construção da Grande Pirâmide de Gizé' },
      { year: '539 a.C.', event: 'Queda da Babilônia para os persas' },
    ],
    matchPairs: [
      { term: 'Mesopotâmia', definition: 'Tigre e Eufrates' },
      { term: 'Egito', definition: 'Rio Nilo' },
      { term: 'Cuneiforme', definition: 'Escrita suméria' },
      { term: 'Hieróglifos', definition: 'Escrita egípcia' },
      { term: 'Faraó', definition: 'Rei do Egito Antigo' },
    ],
  },
  'grécia': {
    flashcards: [
      { front: 'Pólis', back: 'Cidade-estado grega' },
      { front: 'Democracia', back: 'Governo do povo, nascida em Atenas' },
      { front: 'Esparta', back: 'Cidade-estado militarista grega' },
      { front: 'Partenon', back: 'Templo dedicado a Atena na Acrópole' },
      { front: 'Filosofia', back: 'Surgimento do pensamento racional grego' },
    ],
    timeline: [
      { year: '776 a.C.', event: 'Primeiros Jogos Olímpicos' },
      { year: '508 a.C.', event: 'Instituição da democracia em Atenas' },
      { year: '490 a.C.', event: 'Batalha de Maratona' },
      { year: '336 a.C.', event: 'Alexandre Magno torna-se rei' },
      { year: '146 a.C.', event: 'Grécia dominada por Roma' },
    ],
    matchPairs: [
      { term: 'Atenas', definition: 'Berço da democracia' },
      { term: 'Esparta', definition: 'Sociedade militarizada' },
      { term: 'Platão', definition: 'Filósofo, autor de A República' },
      { term: 'Sócrates', definition: 'Pai da filosofia ocidental' },
      { term: 'Aristóteles', definition: 'Mestre de Alexandre Magno' },
    ],
  },
  'roma': {
    flashcards: [
      { front: 'República Romana', back: 'Período de governo com Senado e magistrados' },
      { front: 'Império Romano', back: 'Período de governo imperial, iniciado por Augusto' },
      { front: 'Pax Romana', back: 'Período de paz e estabilidade do Império' },
      { front: 'Direito Romano', back: 'Sistema jurídico que influencia o direito atual' },
      { front: 'Cristianismo', back: 'Religião que se tornou oficial no Império Romano' },
    ],
    timeline: [
      { year: '753 a.C.', event: 'Fundação lendária de Roma' },
      { year: '509 a.C.', event: 'Início da República Romana' },
      { year: '27 a.C.', event: 'Augusto torna-se primeiro imperador' },
      { year: '476 d.C.', event: 'Queda do Império Romano do Ocidente' },
      { year: '1453', event: 'Queda de Constantinopla' },
    ],
    matchPairs: [
      { term: 'República', definition: 'Governo com Senado' },
      { term: 'Império', definition: 'Governo de um imperador' },
      { term: 'Júlio César', definition: 'General que cruzou o Rubicão' },
      { term: 'Augusto', definition: 'Primeiro imperador romano' },
      { term: 'Senado', definition: 'Assembleia de patrícios' },
    ],
  },
  'feudalismo': {
    flashcards: [
      { front: 'Feudo', back: 'Terra concedida pelo senhor ao vassalo' },
      { front: 'Suserania', back: 'Relação de poder entre senhor e vassalo' },
      { front: 'Servidão', back: 'Condição de trabalho dos camponeses no feudo' },
      { front: 'Corvéia', back: 'Trabalho obrigatório do servo para o senhor' },
      { front: 'Banalidade', back: 'Taxas pagas pelos servos pelo uso de instalações' },
    ],
    timeline: [
      { year: 'Século V', event: 'Início da Idade Média e feudalismo' },
      { year: '800', event: 'Coroação de Carlos Magno' },
      { year: 'Século XI', event: 'Início das Cruzadas' },
      { year: '1347-1351', event: 'Peste Negra na Europa' },
      { year: 'Século XV', event: 'Declínio do feudalismo' },
    ],
    matchPairs: [
      { term: 'Senhor feudal', definition: 'Proprietário do feudo' },
      { term: 'Vassalo', definition: 'Recebe terra em troca de fidelidade' },
      { term: 'Servo', definition: 'Trabalhador presom à terra' },
      { term: 'Castelo', definition: 'Fortaleza do senhor feudal' },
      { term: 'Bailio', definition: 'Administrador do feudo' },
    ],
  },
  'igreja medieval': {
    flashcards: [
      { front: 'Cruzadas', back: 'Expedições militares para retomar a Terra Santa' },
      { front: 'Inquisição', back: 'Tribunal da Igreja contra heresias' },
      { front: 'Clero', back: 'Classe social dos religiosos' },
      { front: 'Mosteiro', back: 'Comunidade de monges' },
      { front: 'Herege', back: 'Pessoa que nega dogmas da Igreja' },
    ],
    timeline: [
      { year: '1096', event: 'Primeira Cruzada' },
      { year: '1204', event: 'Quarta Cruzada saqueia Constantinopla' },
      { year: '1231', event: 'Criação da Inquisição papal' },
      { year: '1291', event: 'Queda de Acre - fim das Cruzadas' },
      { year: '1517', event: 'Reforma Protestante' },
    ],
    matchPairs: [
      { term: 'Papa', definition: 'Líder da Igreja Católica' },
      { term: 'Bispo', definition: 'Líder de uma diocese' },
      { term: 'Monge', definition: 'Vida religiosa em mosteiro' },
      { term: 'Cruzada', definition: 'Guerra santa' },
      { term: 'Dízimo', definition: 'Imposto à Igreja' },
    ],
  },
  'baixa idade média': {
    flashcards: [
      { front: 'Renascimento Comercial', back: 'Retomada do comércio na Europa medieval' },
      { front: 'Burguesia', back: 'Classe social dos comerciantes e artesãos' },
      { front: 'Guildas', back: 'Associações de artesãos medievais' },
      { front: 'Feiras medievais', back: 'Centros de comércio entre cidades' },
      { front: 'Cartas de franquia', back: 'Documentos que liberavam cidades do feudalismo' },
    ],
    timeline: [
      { year: 'Século XI', event: 'Início do renascimento comercial' },
      { year: 'Século XII', event: 'Surgimento das primeiras universidades' },
      { year: '1347', event: 'Chegada da Peste Negra à Europa' },
      { year: 'Século XIV', event: 'Crise do feudalismo' },
      { year: '1453', event: 'Queda de Constantinopla' },
    ],
    matchPairs: [
      { term: 'Burgo', definition: 'Cidade medieval' },
      { term: 'Burguês', definition: 'Morador do burgo' },
      { term: 'Guilda', definition: 'Associação de artesãos' },
      { term: 'Universidade', definition: 'Instituição de ensino medieval' },
      { term: 'Peste Negra', definition: 'Epidemia que matou 1/3 da Europa' },
    ],
  },
  'renascimento': {
    flashcards: [
      { front: 'Humanismo', back: 'Valorização do ser humano e da razão' },
      { front: 'Antropocentrismo', back: 'Visão de mundo centrada no homem' },
      { front: 'Perspectiva', back: 'Técnica artística renascentista de profundidade' },
      { front: 'Mecenas', back: 'Patronos das artes renascentistas' },
      { front: 'Manierismo', back: 'Estilo artístico que sucede o Renascimento' },
    ],
    timeline: [
      { year: 'Século XIV', event: 'Início do Renascimento na Itália' },
      { year: '1453', event: 'Queda de Constantinopla - eruditos fogem para Itália' },
      { year: '1498', event: 'Última Ceia de Da Vinci' },
      { year: '1504', event: 'Davi de Michelangelo' },
      { year: 'Século XVI', event: 'Renascimento se espalha pela Europa' },
    ],
    matchPairs: [
      { term: 'Leonardo da Vinci', definition: 'Mona Lisa, homem universal' },
      { term: 'Michelangelo', definition: 'Davi, Capela Sistina' },
      { term: 'Rafael', definition: 'Escola de Atenas' },
      { term: 'Medici', definition: 'Família mecenas de Florença' },
      { term: 'Florença', definition: 'Berço do Renascimento' },
    ],
  },
  'reforma': {
    flashcards: [
      { front: 'Martinho Lutero', back: 'Iniciador da Reforma Protestante em 1517' },
      { front: '95 Teses', back: 'Documento de Lutero criticando indulgências' },
      { front: 'Contrarreforma', back: 'Resposta da Igreja Católica ao protestantismo' },
      { front: 'Concílio de Trento', back: 'Reunião que definiu dogmas católicos' },
      { front: 'Companhia de Jesus', back: 'Ordem religiosa fundada por Inácio de Loyola' },
    ],
    timeline: [
      { year: '1517', event: 'Lutero afixa as 95 Teses' },
      { year: '1521', event: 'Excomunhão de Lutero' },
      { year: '1534', event: 'Fundação da Companhia de Jesus' },
      { year: '1545-1563', event: 'Concílio de Trento' },
      { year: '1555', event: 'Paz de Augsburgo' },
    ],
    matchPairs: [
      { term: 'Luteranismo', definition: 'Doutrina de Lutero' },
      { term: 'Calvinismo', definition: 'Doutrina de João Calvino' },
      { term: 'Anglicanismo', definition: 'Igreja da Inglaterra' },
      { term: 'Jesuítas', definition: 'Missionários católicos' },
      { term: 'Indulgência', definition: 'Venda de perdão de pecados' },
    ],
  },
  'absolutismo': {
    flashcards: [
      { front: 'Absolutismo', back: 'Poder ilimitado nas mãos do rei' },
      { front: 'Direito Divino', back: 'Poder do rei vem de Deus' },
      { front: 'Luís XIV', back: 'Rei Sol, símbolo do absolutismo francês' },
      { front: 'Mercantilismo', back: 'Política econômica de acumulação de metais' },
      { front: 'Balança comercial favorável', back: 'Exportar mais do que importar' },
    ],
    timeline: [
      { year: 'Século XVI', event: 'Consolidação do absolutismo' },
      { year: '1643-1715', event: 'Reinado de Luís XIV' },
      { year: '1648', event: 'Paz de Vestfália - soberania nacional' },
      { year: '1688', event: 'Revolução Gloriosa na Inglaterra' },
      { year: '1789', event: 'Revolução Francesa - fim do absolutismo' },
    ],
    matchPairs: [
      { term: 'Rei Sol', definition: 'Luís XIV da França' },
      { term: 'Versalhes', definition: 'Palácio do rei francês' },
      { term: 'Metalismo', definition: 'Acúmulo de ouro e prata' },
      { term: 'Protecionismo', definition: 'Taxas sobre importações' },
      { term: 'Monopólio', definition: 'Controle estatal de comércio' },
    ],
  },
  'expansão marítima': {
    flashcards: [
      { front: 'Escola de Sagres', back: 'Centro de estudos náuticos portugueses' },
      { front: 'Caravela', back: 'Navio de navegação oceânica' },
      { front: 'Tordesilhas', back: 'Tratado que dividiu o mundo entre Portugal e Espanha' },
      { front: 'Vasco da Gama', back: 'Chegou à Índia em 1498' },
      { front: 'Cabral', back: 'Chegou ao Brasil em 1500' },
    ],
    timeline: [
      { year: '1415', event: 'Conquista de Ceuta' },
      { year: '1488', event: 'Bartolomeu Dias dobra o Cabo da Boa Esperança' },
      { year: '1492', event: 'Colombo chega à América' },
      { year: '1494', event: 'Tratado de Tordesilhas' },
      { year: '1500', event: 'Cabral chega ao Brasil' },
    ],
    matchPairs: [
      { term: 'Portugal', definition: 'Pioneiro nas navegações' },
      { term: 'Espanha', definition: 'Patrocinou Colombo' },
      { term: 'Bússola', definition: 'Instrumento de orientação' },
      { term: 'Astrolábio', definition: 'Instrumento de navegação' },
      { term: 'Índias', definition: 'Destino das navegações' },
    ],
  },
  'iluminismo': {
    flashcards: [
      { front: 'Iluminismo', back: 'Movimento intelectual que valorizava a razão' },
      { front: 'Contrato Social', back: 'Obra de Rousseau sobre soberania popular' },
      { front: 'O Espírito das Leis', back: 'Obra de Montesquieu sobre separação de poderes' },
      { front: 'Enciclopédia', back: 'Obra de Diderot que compilou conhecimento' },
      { front: 'Liberalismo', back: 'Ideologia de liberdade econômica e política' },
    ],
    timeline: [
      { year: '1690', event: 'Locke publica Dois Tratados sobre o Governo' },
      { year: '1748', event: 'Montesquieu publica O Espírito das Leis' },
      { year: '1751', event: 'Início da publicação da Enciclopédia' },
      { year: '1762', event: 'Rousseau publica O Contrato Social' },
      { year: '1776', event: 'Declaração de Independência dos EUA' },
    ],
    matchPairs: [
      { term: 'Voltaire', definition: 'Crítico da Igreja e do absolutismo' },
      { term: 'Rousseau', definition: 'Soberania popular e vontade geral' },
      { term: 'Montesquieu', definition: 'Separação dos três poderes' },
      { term: 'Locke', definition: 'Direito natural à vida, liberdade e propriedade' },
      { term: 'Adam Smith', definition: 'Pai do liberalismo econômico' },
    ],
  },
  'revolução francesa': {
    flashcards: [
      { front: 'Queda da Bastilha', back: '14 de julho de 1789 - início da Revolução' },
      { front: 'Declaração dos Direitos', back: 'Documento que proclamou direitos naturais' },
      { front: 'Reino do Terror', back: 'Período de execuções liderado por Robespierre' },
      { front: 'Guilhotina', back: 'Instrumento de execução da Revolução' },
      { front: 'Napoleão', back: 'General que se tornou imperador após a Revolução' },
    ],
    timeline: [
      { year: '1789', event: 'Queda da Bastilha' },
      { year: '1791', event: 'Constituição civil do clero' },
      { year: '1793', event: 'Execução de Luís XVI' },
      { year: '1799', event: 'Golpe de Napoleão' },
      { year: '1804', event: 'Coroação de Napoleão' },
    ],
    matchPairs: [
      { term: 'Liberdade', definition: 'Um dos lemas da Revolução' },
      { term: 'Igualdade', definition: 'Princípio revolucionário' },
      { term: 'Fraternidade', definition: 'Terceiro lema revolucionário' },
      { term: 'Jacobinos', definition: 'Grupo radical da Revolução' },
      { term: 'Girondinos', definition: 'Grupo moderado da Revolução' },
    ],
  },
  'revolução industrial': {
    flashcards: [
      { front: 'Revolução Industrial', back: 'Transição para produção mecanizada em fábricas' },
      { front: 'James Watt', back: 'Aperfeiçoou a máquina a vapor' },
      { front: 'Proletariado', back: 'Classe operária industrial' },
      { front: 'Ludismo', back: 'Movimento de destruição de máquinas' },
      { front: 'Socialismo', back: 'Ideologia que propõe igualdade social' },
    ],
    timeline: [
      { year: '1769', event: 'Patente da máquina a vapor de Watt' },
      { year: 'Século XVIII', event: 'Primeira Revolução Industrial' },
      { year: '1848', event: 'Manifesto Comunista de Marx e Engels' },
      { year: 'Século XIX', event: 'Segunda Revolução Industrial' },
      { year: 'Século XX', event: 'Terceira Revolução Industrial' },
    ],
    matchPairs: [
      { term: 'Carvão', definition: 'Combustível da Primeira Revolução' },
      { term: 'Aço', definition: 'Material da Segunda Revolução' },
      { term: 'Eletricidade', definition: 'Energia da Segunda Revolução' },
      { term: 'Inglaterra', definition: 'Berço da Revolução Industrial' },
      { term: 'Fábrica', definition: 'Local de produção industrial' },
    ],
  },
  'brasil colonial': {
    flashcards: [
      { front: 'Pau-brasil', back: 'Primeira riqueza explorada no Brasil' },
      { front: 'Capitanias Hereditárias', back: 'Sistema de divisão territorial do Brasil' },
      { front: 'Engenho', back: 'Unidade de produção de açúcar' },
      { front: 'Sesmaria', back: 'Sistema de concessão de terras' },
      { front: 'Quilombo', back: 'Comunidade de escravos fugidos' },
    ],
    timeline: [
      { year: '1500', event: 'Chegada dos portugueses' },
      { year: '1534', event: 'Criação das Capitanias Hereditárias' },
      { year: '1549', event: 'Chegada de Tomé de Sousa' },
      { year: '1690', event: 'Descoberta do ouro em Minas Gerais' },
      { year: '1808', event: 'Chegada da Família Real' },
    ],
    matchPairs: [
      { term: 'Açúcar', definition: 'Principal produto do Nordeste colonial' },
      { term: 'Ouro', definition: 'Produto do ciclo de Minas Gerais' },
      { term: 'Escravidão', definition: 'Base do trabalho colonial' },
      { term: 'Zumbi', definition: 'Líder de Palmares' },
      { term: 'Jesuítas', definition: 'Missionários no Brasil' },
    ],
  },
  'inconfidência': {
    flashcards: [
      { front: 'Tiradentes', back: 'Líder da Inconfidência Mineira' },
      { front: 'Inconfidência Mineira', back: 'Revolta contra a Coroa em 1789' },
      { front: 'Conjuração Baiana', back: 'Revolta em 1798 por igualdade racial' },
      { front: 'Derrama', back: 'Cobrança forçada de impostos atrasados' },
      { front: 'Alferes', back: 'Patente militar de Tiradentes' },
    ],
    timeline: [
      { year: '1789', event: 'Inconfidência Mineira' },
      { year: '1792', event: 'Execução de Tiradentes' },
      { year: '1798', event: 'Conjuração Baiana' },
      { year: '1808', event: 'Chegada da Família Real' },
      { year: '1822', event: 'Independência' },
    ],
    matchPairs: [
      { term: 'Minas Gerais', definition: 'Local da Inconfidência Mineira' },
      { term: 'Bahia', definition: 'Local da Conjuração Baiana' },
      { term: 'Tiradentes', definition: 'Enforcado e esquartejado' },
      { term: 'Cláudio Manoel', definition: 'Inconfidente poeta' },
      { term: 'D. Maria I', definition: 'Rainha louca de Portugal' },
    ],
  },
  'família real': {
    flashcards: [
      { front: 'D. João VI', back: 'Rei que trouxe a Corte para o Brasil' },
      { front: 'Transferência da Corte', back: 'Mudança da família real em 1808' },
      { front: 'Abertura dos portos', back: 'Fim do monopólio comercial português' },
      { front: 'Elevação a Reino Unido', back: 'Brasil deixa de ser colônia em 1815' },
      { front: 'D. Pedro I', back: 'Primeiro imperador do Brasil' },
    ],
    timeline: [
      { year: '1807', event: 'Invasão de Portugal por Napoleão' },
      { year: '1808', event: 'Chegada da Família Real ao Brasil' },
      { year: '1815', event: 'Elevação a Reino Unido' },
      { year: '1821', event: 'Retorno de D. João VI a Portugal' },
      { year: '1822', event: 'Independência' },
    ],
    matchPairs: [
      { term: 'Rio de Janeiro', definition: 'Sede da Corte portuguesa' },
      { term: 'Inglaterra', definition: 'Protegeu a transferência da Corte' },
      { term: 'Imprensa Régia', definition: 'Primeira impressora do Brasil' },
      { term: 'Banco do Brasil', definition: 'Criado em 1808' },
      { term: 'Reino Unido', definition: 'Status do Brasil em 1815' },
    ],
  },
  'independência': {
    flashcards: [
      { front: 'Grito do Ipiranga', back: '7 de setembro de 1822 - Independência' },
      { front: 'D. Pedro I', back: 'Proclamou a Independência' },
      { front: 'Constituição de 1824', back: 'Primeira constituição brasileira' },
      { front: 'Poder Moderador', back: 'Poder especial do imperador' },
      { front: 'Reconhecimento', back: 'Portugal reconheceu independência em 1825' },
    ],
    timeline: [
      { year: '1822', event: 'Independência do Brasil' },
      { year: '1824', event: 'Constituição outorgada' },
      { year: '1825', event: 'Reconhecimento por Portugal' },
      { year: '1831', event: 'Abdicação de D. Pedro I' },
      { year: '1840', event: 'Maioridade de D. Pedro II' },
    ],
    matchPairs: [
      { term: 'Ipiranga', definition: 'Local do grito de Independência' },
      { term: 'José Bonifácio', definition: 'Patriarca da Independência' },
      { term: 'Andrada', definition: 'Irmãos que apoiaram a Independência' },
      { term: 'Brasil independente', definition: 'Império do Brasil' },
      { term: 'Portugal', definition: 'Ex-metrópole' },
    ],
  },
  'segundo reinado': {
    flashcards: [
      { front: 'D. Pedro II', back: 'Segundo e último imperador do Brasil' },
      { front: 'Lei do Ventre Livre', back: 'Libertou filhos de escravas em 1871' },
      { front: 'Lei dos Sexagenários', back: 'Libertou escravos com mais de 65 anos' },
      { front: 'Lei Áurea', back: 'Abolição da escravidão em 1888' },
      { front: 'Princesa Isabel', back: 'Assinou a Lei Áurea' },
    ],
    timeline: [
      { year: '1840', event: 'Declaração da Maioridade' },
      { year: '1850', event: 'Fim do tráfico de escravos' },
      { year: '1871', event: 'Lei do Ventre Livre' },
      { year: '1888', event: 'Abolição da escravidão' },
      { year: '1889', event: 'Proclamação da República' },
    ],
    matchPairs: [
      { term: 'Paraguai', definition: 'País inimigo na Guerra' },
      { term: 'Abolição', definition: 'Fim da escravidão' },
      { term: 'Cafeicultores', definition: 'Novo grupo de poder' },
      { term: 'Exército', definition: 'Instituição fortalecida pela guerra' },
      { term: 'República', definition: 'Regime que sucedeu o Império' },
    ],
  },
  'café com leite': {
    flashcards: [
      { front: 'Política do Café com Leite', back: 'Alternância entre SP e MG na presidência' },
      { front: 'Coronelismo', back: 'Poder político dos latifundiários locais' },
      { front: 'Voto de cabresto', back: 'Voto controlado pelos coronéis' },
      { front: 'Voto aberto', back: 'Voto não secreto da República Velha' },
      { front: 'Tenentismo', back: 'Movimento de jovens oficiais militares' },
    ],
    timeline: [
      { year: '1894', event: 'Início da hegemonia cafeeira' },
      { year: '1922', event: 'Semana de Arte Moderna' },
      { year: '1924', event: 'Revolta Paulista' },
      { year: '1929', event: 'Quebra da Bolsa de Nova York' },
      { year: '1930', event: 'Revolução de 1930' },
    ],
    matchPairs: [
      { term: 'São Paulo', definition: 'Estado produtor de café' },
      { term: 'Minas Gerais', definition: 'Estado produtor de leite' },
      { term: 'Coronel', definition: 'Chefe político local' },
      { term: 'Curral eleitoral', definition: 'Base de votos do coronel' },
      { term: 'Oligarquia', definition: 'Governo de poucas famílias' },
    ],
  },
  'movimentos sociais': {
    flashcards: [
      { front: 'Canudos', back: 'Arraial de Antônio Conselheiro destruído em 1897' },
      { front: 'Guerra de Canudos', back: 'Conflito entre sertanejos e Exército' },
      { front: 'Revolta da Vacina', back: 'Revolta popular no Rio em 1904' },
      { front: 'Revolta da Chibata', back: 'Revolta de marinheiros em 1910' },
      { front: 'Cangaço', back: 'Banditismo social no Nordeste' },
    ],
    timeline: [
      { year: '1893', event: 'Fundação de Canudos' },
      { year: '1897', event: 'Destruição de Canudos' },
      { year: '1904', event: 'Revolta da Vacina' },
      { year: '1910', event: 'Revolta da Chibata' },
      { year: '1938', event: 'Morte de Lampião' },
    ],
    matchPairs: [
      { term: 'Antônio Conselheiro', definition: 'Líder de Canudos' },
      { term: 'João Cândido', definition: 'Almirante Negro da Chibata' },
      { term: 'Lampião', definition: 'Cangaceiro famoso' },
      { term: 'Os Sertões', definition: 'Livro de Euclides da Cunha' },
      { term: 'Oswaldo Cruz', definition: 'Campanha da vacina' },
    ],
  },
  'revolução de 1930': {
    flashcards: [
      { front: 'Revolução de 1930', back: 'Fim da República Velha' },
      { front: 'Getúlio Vargas', back: 'Líder da Revolução de 1930' },
      { front: 'Aliança Liberal', back: 'Coligação oposicionista de 1930' },
      { front: 'República Nova', back: 'Período pós-1930' },
      { front: 'Governo Provisório', back: 'Período 1930-1934' },
    ],
    timeline: [
      { year: '1929', event: 'Crise econômica mundial' },
      { year: '1930', event: 'Revolução de 1930' },
      { year: '1932', event: 'Revolução Constitucionalista' },
      { year: '1934', event: 'Constituição' },
      { year: '1937', event: 'Golpe do Estado Novo' },
    ],
    matchPairs: [
      { term: 'Vargas', definition: 'Presidente revolucionário' },
      { term: 'São Paulo', definition: 'Revolução de 1932' },
      { term: 'Tenentes', definition: 'Apoiadores da revolução' },
      { term: 'PR', definition: 'Estado de Vargas' },
      { term: 'Junta Militar', definition: 'Governo provisório' },
    ],
  },
  'estado novo': {
    flashcards: [
      { front: 'Estado Novo', back: 'Ditadura de Vargas (1937-1945)' },
      { front: 'CLT', back: 'Consolidação das Leis do Trabalho' },
      { front: 'DIP', back: 'Departamento de Imprensa e Propaganda' },
      { front: 'Trabalhismo', back: 'Ideologia varguista' },
      { front: 'Nacionalismo', back: 'Política de valorização nacional' },
    ],
    timeline: [
      { year: '1937', event: 'Golpe do Estado Novo' },
      { year: '1941', event: 'Brasil na Segunda Guerra' },
      { year: '1943', event: 'Criação da CLT' },
      { year: '1945', event: 'Queda de Vargas' },
      { year: '1950', event: 'Vargas eleito democraticamente' },
    ],
    matchPairs: [
      { term: 'Petrobras', definition: 'Criada por Vargas em 1953' },
      { term: 'CSN', definition: 'Companhia Siderúrgica Nacional' },
      { term: 'DASP', definition: 'Departamento administrativo' },
      { term: 'PTB', definition: 'Partido de Vargas' },
      { term: 'Queremismo', definition: 'Movimento por Constituinte' },
    ],
  },
  'golpe 1964': {
    flashcards: [
      { front: 'Golpe de 1964', back: 'Derrubada de João Goulart' },
      { front: 'João Goulart', back: 'Presidente deposto em 1964' },
      { front: 'Reformas de Base', back: 'Propostas progressistas de Jango' },
      { front: 'IPM', back: 'Inquérito Policial Militar' },
      { front: 'Cassação', back: 'Perda de direitos políticos' },
    ],
    timeline: [
      { year: '1961', event: 'Jango assume após renúncia de Jânio' },
      { year: '1964', event: 'Golpe militar' },
      { year: '1964', event: 'AI-1' },
      { year: '1965', event: 'AI-2 - bipartidarismo' },
      { year: '1968', event: 'AI-5' },
    ],
    matchPairs: [
      { term: 'Castelo Branco', definition: 'Primeiro presidente militar' },
      { term: 'Costa e Silva', definition: 'Segundo presidente militar' },
      { term: 'Jânio Quadros', definition: 'Renunciou em 1961' },
      { term: 'CGT', definition: 'Central Geral dos Trabalhadores' },
      { term: 'LSD', definition: 'Liga Camponesa' },
    ],
  },
  'abertura democrática': {
    flashcards: [
      { front: 'Distensão', back: 'Abertura lenta, gradual e segura' },
      { front: 'Geisel', back: 'Presidente que iniciou a abertura' },
      { front: 'Diretas Já', back: 'Movimento por eleições diretas em 1984' },
      { front: 'Lei da Anistia', back: 'Lei de 1979 para exilados' },
      { front: 'Tancredo Neves', back: 'Primeiro presidente civil eleito' },
    ],
    timeline: [
      { year: '1974', event: 'Geisel inicia distensão' },
      { year: '1979', event: 'Lei da Anistia' },
      { year: '1984', event: 'Campanha das Diretas Já' },
      { year: '1985', event: 'Morte de Tancredo Neves' },
      { year: '1988', event: 'Constituição Cidadã' },
    ],
    matchPairs: [
      { term: 'Figueiredo', definition: 'Último general-presidente' },
      { term: 'Sarney', definition: 'Primeiro presidente civil' },
      { term: 'MDB', definition: 'Partido de oposição' },
      { term: 'ARENA', definition: 'Partido de apoio ao regime' },
      { term: 'Colégio Eleitoral', definition: 'Sistema de eleição indireta' },
    ],
  },
  'guerras mundiais': {
    flashcards: [
      { front: 'Primeira Guerra', back: '1914-1918, conflito na Europa' },
      { front: 'Segunda Guerra', back: '1939-1945, conflito global' },
      { front: 'Tratado de Versalhes', back: 'Tratado que encerrou a 1ª Guerra' },
      { front: 'Eixo', back: 'Alemanha, Itália e Japão' },
      { front: 'Aliados', back: 'Inglaterra, EUA, URSS e França' },
    ],
    timeline: [
      { year: '1914', event: 'Início da Primeira Guerra' },
      { year: '1918', event: 'Fim da Primeira Guerra' },
      { year: '1939', event: 'Início da Segunda Guerra' },
      { year: '1944', event: 'Dia D - Desembarque na Normandia' },
      { year: '1945', event: 'Fim da Segunda Guerra' },
    ],
    matchPairs: [
      { term: 'Hitler', definition: 'Líder nazista alemão' },
      { term: 'Mussolini', definition: 'Líder fascista italiano' },
      { term: 'Hiroshima', definition: 'Bomba atômica americana' },
      { term: 'Holocausto', definition: 'Genocídio de judeus' },
      { term: 'Liga das Nações', definition: 'Organização pós-1ª Guerra' },
    ],
  },
  'guerra fria': {
    flashcards: [
      { front: 'Guerra Fria', back: 'Disputa entre EUA e URSS (1947-1991)' },
      { front: 'Cortina de Ferro', back: 'Divisão entre Europa capitalista e socialista' },
      { front: 'Muro de Berlim', back: 'Símbolo da divisão da Alemanha' },
      { front: 'Plano Marshall', back: 'Ajuda americana à Europa' },
      { front: 'OTAN', back: 'Aliança militar ocidental' },
    ],
    timeline: [
      { year: '1947', event: 'Doutrina Truman e Plano Marshall' },
      { year: '1961', event: 'Construção do Muro de Berlim' },
      { year: '1962', event: 'Crise dos Mísseis' },
      { year: '1989', event: 'Queda do Muro de Berlim' },
      { year: '1991', event: 'Dissolução da URSS' },
    ],
    matchPairs: [
      { term: 'EUA', definition: 'Líder do bloco capitalista' },
      { term: 'URSS', definition: 'Líder do bloco socialista' },
      { term: 'Pacto de Varsóvia', definition: 'Aliança militar soviética' },
      { term: 'Guerra da Coreia', definition: '1950-1953' },
      { term: 'Guerra do Vietnã', definition: '1955-1975' },
    ],
  },
  'globalização': {
    flashcards: [
      { front: 'Globalização', back: 'Integração econômica e cultural mundial' },
      { front: 'Blocos econômicos', back: 'União de países para comércio' },
      { front: 'União Europeia', back: 'Bloco econômico europeu' },
      { front: 'MERCOSUL', back: 'Bloco econômico sul-americano' },
      { front: 'Internet', back: 'Rede de comunicação global' },
    ],
    timeline: [
      { year: '1991', event: 'Fim da URSS - nova ordem mundial' },
      { year: '1993', event: 'Criação da União Europeia' },
      { year: '1994', event: 'Criação do MERCOSUL' },
      { year: '2001', event: 'Ataques de 11 de setembro' },
      { year: '2008', event: 'Crise financeira global' },
    ],
    matchPairs: [
      { term: 'OMC', definition: 'Organização Mundial do Comércio' },
      { term: 'FMI', definition: 'Fundo Monetário Internacional' },
      { term: 'Banco Mundial', definition: 'Financiamento de desenvolvimento' },
      { term: 'TLC', definition: 'Tratado de Livre Comércio' },
      { term: 'BRICS', definition: 'Brasil, Rússia, Índia, China, África do Sul' },
    ],
  },
  'américa latina': {
    flashcards: [
      { front: 'Simón Bolívar', back: 'Libertador do norte da América do Sul' },
      { front: 'José de San Martín', back: 'Libertador do sul da América do Sul' },
      { front: 'Ditaduras militares', back: 'Regimes autoritários na América Latina' },
      { front: 'Revolução Cubana', back: '1959 - Fidel Castro' },
      { front: 'Ché Guevara', back: 'Revolucionário argentino-cubano' },
    ],
    timeline: [
      { year: '1810', event: 'Início das independências hispano-americanas' },
      { year: '1824', event: 'Batalha de Ayacucho - independência' },
      { year: '1959', event: 'Revolução Cubana' },
      { year: '1973', event: 'Golpe no Chile' },
      { year: '1989', event: 'Queda do Muro - fim das ditaduras' },
    ],
    matchPairs: [
      { term: 'Bolívia', definition: 'País nomeado em honra a Bolívar' },
      { term: 'Argentina', definition: 'País de San Martín' },
      { term: 'Chile', definition: 'Golpe contra Allende' },
      { term: 'Cuba', definition: 'Ilha socialista' },
      { term: 'México', definition: 'Revolução de 1910' },
    ],
  },
  'áfrica': {
    flashcards: [
      { front: 'Partilha da África', back: 'Divisão do continente em 1884-85' },
      { front: 'Apartheid', back: 'Regime de segregação na África do Sul' },
      { front: 'Nelson Mandela', back: 'Líder contra o apartheid' },
      { front: 'Descolonização', back: 'Processo de independência africana' },
      { front: 'Pan-africanismo', back: 'Movimento de unidade africana' },
    ],
    timeline: [
      { year: '1884-85', event: 'Conferência de Berlim' },
      { year: '1957', event: 'Independência de Gana' },
      { year: '1960', event: 'Ano da África - 17 independências' },
      { year: '1994', event: 'Fim do apartheid' },
      { year: '2011', event: 'Independência do Sudão do Sul' },
    ],
    matchPairs: [
      { term: 'Egito', definition: 'Civilização do Nilo' },
      { term: 'África do Sul', definition: 'País do apartheid' },
      { term: 'Nigéria', definition: 'Maior população africana' },
      { term: 'Etiópia', definition: 'Nunca foi colonizada' },
      { term: 'Ruanda', definition: 'Genocídio de 1994' },
    ],
  },
};

function getLessonKey(title: string): string {
  const lowerTitle = title.toLowerCase();
  for (const key of Object.keys(gameData)) {
    if (lowerTitle.includes(key)) {
      return key;
    }
  }
  return '';
}

async function main() {
  console.log('🌱 Populando flashcards, timeline events e match pairs...\n');

  const lessons = await prisma.lesson.findMany();

  let totalFlashcards = 0;
  let totalTimeline = 0;
  let totalMatchPairs = 0;

  for (const lesson of lessons) {
    const key = getLessonKey(lesson.title);
    const data = gameData[key];

    if (!data) {
      console.log(`⚠️ Sem dados para: ${lesson.title}`);
      continue;
    }

    // Limpar dados existentes
    await prisma.flashcard.deleteMany({ where: { lessonId: lesson.id } });
    await prisma.timelineEvent.deleteMany({ where: { lessonId: lesson.id } });
    await prisma.matchPair.deleteMany({ where: { lessonId: lesson.id } });

    // Criar flashcards
    for (let i = 0; i < data.flashcards.length; i++) {
      await prisma.flashcard.create({
        data: {
          lessonId: lesson.id,
          front: data.flashcards[i].front,
          back: data.flashcards[i].back,
          order: i + 1,
        },
      });
    }
    totalFlashcards += data.flashcards.length;

    // Criar timeline events
    for (let i = 0; i < data.timeline.length; i++) {
      await prisma.timelineEvent.create({
        data: {
          lessonId: lesson.id,
          year: data.timeline[i].year,
          event: data.timeline[i].event,
          order: i + 1,
        },
      });
    }
    totalTimeline += data.timeline.length;

    // Criar match pairs
    for (let i = 0; i < data.matchPairs.length; i++) {
      await prisma.matchPair.create({
        data: {
          lessonId: lesson.id,
          term: data.matchPairs[i].term,
          definition: data.matchPairs[i].definition,
          order: i + 1,
        },
      });
    }
    totalMatchPairs += data.matchPairs.length;

    console.log(`✅ ${lesson.title}: ${data.flashcards.length} flashcards, ${data.timeline.length} timeline, ${data.matchPairs.length} match pairs`);
  }

  console.log(`\n🎉 Total criado:`);
  console.log(`   Flashcards: ${totalFlashcards}`);
  console.log(`   Timeline Events: ${totalTimeline}`);
  console.log(`   Match Pairs: ${totalMatchPairs}`);

  await prisma.$disconnect();
}

main().catch(console.error);
