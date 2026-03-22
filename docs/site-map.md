# Mapa do Site e Arquitetura - História

Visão geral do site em uso de Next.js com App Router, integrando dados via Prisma (SQLite).

Arquitetura principal
- Recurso frontend: Next.js (App Router) com rotas dinâmicas para lições, módulos e conteúdo educacional.
- Camada de dados: Prisma ORM conectando SQLite via site/prisma/schema.prisma.
- Ponto de integração de conteúdo: lições contêm HTML bruto (lesson.content), com recursos de timeline, flashcards, histórias e quizzes.
- API pública interna (Next.js API routes): diretório site/src/app/api com módulos para download, enem-quiz, flashcards, lessons etc.

Mapa de rotas (alto nível)
- / (home) — lista de módulos e visão geral do curso de História
- /modulos/[id] (ex.: Brasil-Colonial) — página de módulo com descrição, lições e progresso
- /aula/[id] — página de lição individual com conteúdo, módulo relacionado, progresso e quiz
- /api/ (endpoints internos) — operações de dados para módulos, lições, progresso, quizzes, perguntas, timeline e stories

Estrutura de dados (resumo de modelo)
- Module: id, title, description, icon, color, image, order, lessons
- Lesson: id, moduleId, title, summary, content (HTML), image, duration, order, progress[], quiz?
- Progress: id, lessonId, completed
- Quiz: id, lessonId, questions[]
- QuizQuestion: id, quizId, question, options (JSON), answer, explanation, order
- TimelineEvent, Flashcard, Story, EnemQuestion/EnemResult, MatchPair, etc.

Notas de implantação
- O layout global carrega meta-informação básica; para SEO efetivo, rotas dinâmicas devem fornecer metadata por página (generateMetadata).
- A sanitização de HTML vem como requisito antes de renderizar lesson.content.

Diagrama textual (alto nível)
- Conteúdo (Module) -> Lições (Lesson) -> Progresso (Progress) / Quiz (Quiz) -> Perguntas (QuizQuestion)
- Conteúdo suplementar: TimelineEvent, Flashcard, Story, EnemQuestion, EnemResult, MatchPair, etc.

Observação: Este documento serve como ponto de partida para a arquitetura. Atualizações devem refletir alterações no schema Prisma e nas rotas de API/Frontend.
