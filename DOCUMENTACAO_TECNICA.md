# Documentação Técnica - Sistema de Curso de História para ENEM

## 1. Visão Geral do Projeto

Este projeto é uma plataforma educacional completa para preparação no exame ENEM (Exame Nacional do Ensino Médio), focada especificamente na disciplina de História. O sistema oferece uma experiência interativa de aprendizado com módulos, aulas, quizzes, flashcards e simulados baseados em questões oficiais.

---

## 2. Arquitetura do Sistema

### 2.1 Arquitetura Geral

```
┌─────────────────────────────────────────────────────────────────┐
│                        FRONTEND (Next.js 16)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │   Páginas   │  │ Componentes │  │    Hooks    │              │
│  │  (App Router)│  │  React/TSX  │  │  Personal.  │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
│                          │                                       │
│                    ┌─────┴─────┐                                 │
│                    │ API Routes│                                 │
│                    │ (Backend) │                                 │
│                    └─────┬─────┘                                 │
└──────────────────────────┼──────────────────────────────────────┘
                           │
┌──────────────────────────┼──────────────────────────────────────┐
│                    DATABASE LAYER                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │   Prisma    │  │   SQLite    │  │  Seed Data  │              │
│  │    ORM      │  │  Database   │  │   Scripts   │              │
│  └─────────────┘  └─────────────┘  └─────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Fluxo de Dados

```
Usuário → Interface (React) → API Routes (Next.js) → Prisma ORM → SQLite
                ↑                                              ↓
                └──────────── Resposta JSON ←──────────────────┘
```

---

## 3. Stack Tecnológico

### 3.1 Framework Principal

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Next.js** | 16.1.1 | Framework React com App Router |
| **React** | 19.0.0 | Biblioteca de interface do usuário |
| **TypeScript** | 5.x | Tipagem estática e segurança |

### 3.2 Estilização e UI

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Tailwind CSS** | 4.x | Framework CSS utilitário |
| **shadcn/ui** | - | Biblioteca de componentes React |
| **Radix UI** | Várias | Primitivos de UI acessíveis |
| **Framer Motion** | 12.23.2 | Animações fluidas |
| **Lucide React** | 0.525.0 | Biblioteca de ícones |
| **next-themes** | 0.4.6 | Suporte a tema claro/escuro |

### 3.3 Dados e Estado

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Prisma** | 6.x | ORM para banco de dados |
| **SQLite** | - | Banco de dados relacional |
| **Zustand** | 5.0.6 | Gerenciamento de estado cliente |
| **TanStack Query** | 5.82.0 | Cache e estado servidor |

### 3.4 Ferramentas e Utilitários

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Bun** | - | Runtime JavaScript e gerenciador de pacotes |
| **ESLint** | 9.x | Linting de código |
| **zod** | 4.0.2 | Validação de schemas |
| **date-fns** | 4.1.0 | Manipulação de datas |

### 3.5 Integrações AI e Mídia

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **z-ai-web-dev-sdk** | 0.0.16 | SDK para serviços de IA |
| **sharp** | 0.34.3 | Processamento de imagens |
| **react-markdown** | 10.1.0 | Renderização de Markdown |

---

## 4. Estrutura de Diretórios

```
/home/z/my-project/
├── prisma/
│   ├── schema.prisma          # Schema do banco de dados
│   ├── seed.ts                # Dados iniciais
│   ├── seed-enem.ts           # Questões ENEM
│   ├── seed-enem-complete.ts  # Questões completas
│   ├── seed-stories.ts        # Narrativas históricas
│   ├── seed-games.ts          # Jogos educativos
│   └── seed-flashcards.ts     # Flashcards
│
├── src/
│   ├── app/
│   │   ├── page.tsx           # Página principal (Home)
│   │   ├── layout.tsx         # Layout raiz
│   │   ├── globals.css        # Estilos globais
│   │   ├── aula/[id]/page.tsx # Página de aula
│   │   └── api/               # API Routes (Backend)
│   │       ├── modules/route.ts
│   │       ├── lessons/[id]/route.ts
│   │       ├── quiz/[lessonId]/route.ts
│   │       ├── flashcards/[lessonId]/route.ts
│   │       ├── timeline/[lessonId]/route.ts
│   │       ├── match-pairs/[lessonId]/route.ts
│   │       ├── progress/route.ts
│   │       ├── enem-quiz/route.ts
│   │       └── stories/[lessonId]/route.ts
│   │
│   ├── components/
│   │   ├── ui/                # Componentes shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── progress.tsx
│   │   │   └── ... (40+ componentes)
│   │   │
│   │   ├── CourseClient.tsx   # Cliente da página principal
│   │   ├── LessonPageClient.tsx # Cliente da página de aula
│   │   ├── LessonContent.tsx  # Renderização de conteúdo
│   │   ├── AudioPlayer.tsx    # Player de áudio (TTS)
│   │   └── StorySection.tsx   # Seção de narrativas
│   │
│   ├── hooks/
│   │   ├── use-mobile.ts      # Detecção de mobile
│   │   └── use-toast.ts       # Sistema de notificações
│   │
│   └── lib/
│       ├── db.ts              # Cliente Prisma
│       └── utils.ts           # Utilitários (cn, etc.)
│
├── public/
│   ├── images/
│   │   ├── lessons/           # Imagens das aulas
│   │   └── modules/           # Imagens dos módulos
│   └── logo.svg
│
├── db/
│   └── custom.db              # Arquivo do banco SQLite
│
├── upload/                    # Arquivos enviados pelo usuário
│
├── package.json               # Dependências do projeto
├── tailwind.config.ts         # Configuração Tailwind
├── tsconfig.json              # Configuração TypeScript
├── next.config.ts             # Configuração Next.js
└── Caddyfile                  # Configuração do Gateway
```

---

## 5. Modelagem de Dados (Prisma Schema)

### 5.1 Diagrama Entidade-Relacionamento

```
┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│    Module    │──1:N──│    Lesson    │──1:1──│     Quiz     │
│              │       │              │       │              │
│ - id         │       │ - id         │       │ - id         │
│ - title      │       │ - title      │       │ - lessonId   │
│ - description│       │ - content    │       └──────┬───────┘
│ - icon       │       │ - duration   │              │
│ - color      │       │ - image      │              │ 1:N
│ - image      │       │ - order      │              ↓
│ - order      │       └──────┬───────┘       ┌──────────────┐
└──────────────┘              │               │ QuizQuestion │
                              │ 1:N           │              │
                              ↓               │ - id         │
                       ┌──────────────┐       │ - question   │
                       │   Progress   │       │ - options    │
                       │              │       │ - answer     │
                       │ - id         │       │ - explanation│
                       │ - lessonId   │       └──────────────┘
                       │ - completed  │
                       └──────────────┘

┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│  Flashcard   │       │TimelineEvent │       │  MatchPair   │
│              │       │              │       │              │
│ - lessonId   │       │ - lessonId   │       │ - lessonId   │
│ - front      │       │ - year       │       │ - term       │
│ - back       │       │ - event      │       │ - definition │
│ - order      │       │ - order      │       │ - order      │
└──────────────┘       └──────────────┘       └──────────────┘

┌──────────────┐       ┌──────────────┐       ┌──────────────┐
│ EnemQuestion │       │ EnemResult   │       │    Story     │
│              │       │              │       │              │
│ - year       │       │ - totalQuest │       │ - lessonId   │
│ - topic      │       │ - correctAns │       │ - title      │
│ - question   │       │ - score      │       │ - witness    │
│ - options    │       │ - topicsRes  │       │ - atmosphere │
│ - answer     │       └──────────────┘       │ - content    │
│ - explanation│                              │ - reflection │
│ - difficulty │                              └──────────────┘
└──────────────┘
```

### 5.2 Descrição dos Models

#### Module
Representa um módulo do curso (ex: Brasil Colonial, Era Vargas).
- **id**: Identificador único (CUID)
- **title**: Título do módulo
- **description**: Descrição breve
- **icon**: Nome do ícone (Lucide)
- **color**: Cor temática (amber, purple, green, etc.)
- **image**: URL da imagem de capa
- **order**: Ordem de exibição
- **lessons**: Relacionamento 1:N com Lesson

#### Lesson
Representa uma aula dentro de um módulo.
- **id**: Identificador único (CUID)
- **moduleId**: FK para Module
- **title**: Título da aula
- **summary**: Resumo opcional
- **content**: Conteúdo em formato texto estruturado
- **image**: URL da imagem
- **duration**: Duração em minutos
- **order**: Ordem dentro do módulo

#### Progress
Rastreia o progresso do aluno.
- **id**: Identificador único
- **lessonId**: FK para Lesson
- **completed**: Status de conclusão (boolean)

#### Quiz / QuizQuestion
Sistema de quiz para cada aula.
- **Quiz**: Contêiner para questões de uma aula
- **QuizQuestion**: Questões individuais com:
  - question: Enunciado
  - options: JSON com 4 alternativas
  - answer: Índice da resposta correta (0-3)
  - explanation: Explicação didática

#### EnemQuestion
Questões oficiais do ENEM.
- **year**: Ano da prova
- **topic**: Tema (Brasil Colonial, Era Vargas, etc.)
- **question**: Enunciado
- **options**: JSON com 5 alternativas (A-E)
- **answer**: Índice da resposta correta (0-4)
- **explanation**: Explicação detalhada
- **difficulty**: easy, medium, hard

#### Flashcard
Cartões de memorização.
- **front**: Pergunta ou termo
- **back**: Resposta ou definição

#### TimelineEvent
Eventos para linha do tempo interativa.
- **year**: Ano ou período
- **event**: Descrição do evento
- **order**: Ordem cronológica real

#### MatchPair
Pares para jogo de associação.
- **term**: Termo ou conceito
- **definition**: Definição correspondente

#### Story
Narrativas históricas imersivas.
- **witness**: Nome da "testemunha" narradora
- **atmosphere**: Descrição do ambiente
- **content**: Texto narrativo
- **reflection**: Pergunta de reflexão

---

## 6. API Routes (Backend)

### 6.1 Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/modules` | Lista todos os módulos |
| GET | `/api/lessons/[id]` | Detalhes de uma aula |
| GET | `/api/quiz/[lessonId]` | Quiz de uma aula |
| POST | `/api/quiz/[lessonId]` | Verificar respostas |
| GET | `/api/flashcards/[lessonId]` | Flashcards de uma aula |
| GET | `/api/timeline/[lessonId]` | Eventos de linha do tempo |
| GET | `/api/match-pairs/[lessonId]` | Pares para jogo |
| GET/POST | `/api/progress` | Gerenciar progresso |
| GET | `/api/enem-quiz` | Questões ENEM (com filtro opcional) |
| GET | `/api/stories/[lessonId]` | Narrativa de uma aula |

### 6.2 Exemplos de Uso

#### Buscar módulos com aulas
```typescript
const response = await fetch('/api/modules');
const modules = await response.json();
// Retorna: [{ id, title, lessons: [...] }, ...]
```

#### Atualizar progresso
```typescript
await fetch('/api/progress', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ lessonId: 'abc123', completed: true })
});
```

#### Buscar questões ENEM por tema
```typescript
const response = await fetch('/api/enem-quiz?topic=Brasil Colonial');
const { questions } = await response.json();
```

---

## 7. Componentes Principais

### 7.1 CourseClient.tsx
Componente cliente da página principal. Gerencia:
- Exibição de módulos e aulas
- Sistema de progresso
- Modal de simulado ENEM
- Navegação mobile

**Props:**
```typescript
interface CourseClientProps {
  modules: Module[];
  totalLessons: number;
  completedLessons: number;
  overallProgress: number;
  totalDuration: number;
  totalQuizzes: number;
  enemQuestions: EnemQuestion[];
}
```

### 7.2 LessonPageClient.tsx
Componente cliente da página de aula. Gerencia:
- Renderização de conteúdo
- Abas de navegação (conteúdo, história, flashcards, etc.)
- Jogos educativos (quiz, timeline, match pairs)
- Player de áudio (TTS)
- Marcação de conclusão

**Funcionalidades incorporadas:**
- `FlashcardGame`: Jogo de flashcards interativo
- `TimelineGame`: Ordenação cronológica de eventos
- `MatchPairsGame`: Jogo de associação
- `QuizGame`: Quiz de múltipla escolha

### 7.3 StorySection.tsx
Seção de narrativas históricas imersivas.
- Apresenta histórias narradas por "testemunhas"
- Atmosfera contextual
- Pergunta de reflexão

### 7.4 AudioPlayer.tsx
Player de áudio para text-to-speech.
- Usa z-ai-web-dev-sdk para TTS
- Controles de reprodução

---

## 8. Sistema de Estilização

### 8.1 Tailwind CSS

O projeto utiliza Tailwind CSS 4 com configuração customizada:

```typescript
// tailwind.config.ts
{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        primary: { DEFAULT: 'hsl(var(--primary))', ... },
        // Variáveis CSS para theming
      }
    }
  }
}
```

### 8.2 Sistema de Cores por Módulo

```typescript
const colorMap = {
  amber: { 
    bg: 'bg-amber-500', 
    light: 'bg-amber-50', 
    text: 'text-amber-600',
    gradient: 'from-amber-500 to-orange-600'
  },
  purple: { ... },
  green: { ... },
  red: { ... },
  // etc.
};
```

### 8.3 Tema Claro/Escuro

Variáveis CSS definidas em `globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... */
}
```

---

## 9. shadcn/ui Components

O projeto utiliza a biblioteca shadcn/ui (estilo New York) com os seguintes componentes:

| Componente | Arquivo | Uso |
|------------|---------|-----|
| Button | button.tsx | Ações e navegação |
| Card | card.tsx | Containers de conteúdo |
| Dialog | dialog.tsx | Modais e overlays |
| Progress | progress.tsx | Barras de progresso |
| Badge | badge.tsx | Tags e indicadores |
| Input | input.tsx | Campos de texto |
| Select | select.tsx | Seletores dropdown |
| Tabs | tabs.tsx | Navegação em abas |
| Toast | toast.tsx | Notificações |
| Accordion | accordion.tsx | Conteúdo expansível |
| Carousel | carousel.tsx | Slides e carrosséis |
| Chart | chart.tsx | Gráficos |
| E mais 25+ componentes... | | |

---

## 10. Scripts e Automação

### 10.1 Scripts do Package.json

```json
{
  "scripts": {
    "dev": "NODE_OPTIONS='--no-warnings' next dev -p 3000",
    "build": "next build",
    "start": "NODE_ENV=production bun .next/standalone/server.js",
    "lint": "eslint .",
    "db:push": "prisma db push",
    "db:generate": "prisma generate",
    "db:migrate": "prisma migrate dev",
    "db:reset": "prisma migrate reset"
  }
}
```

### 10.2 Scripts de Seed

| Script | Finalidade |
|--------|------------|
| `seed.ts` | Dados iniciais do sistema |
| `seed-enem.ts` | Questões do ENEM básicas |
| `seed-enem-complete.ts` | Questões completas do ENEM |
| `seed-stories.ts` | Narrativas históricas |
| `seed-games.ts` | Dados dos jogos educativos |
| `seed-flashcards.ts` | Flashcards |

---

## 11. Infraestrutura e Deploy

### 11.1 Ambiente de Desenvolvimento

- **Runtime**: Bun (compatível com Node.js)
- **Porta**: 3000 (obrigatória)
- **Hot Reload**: Ativo via `bun --hot`

### 11.2 Gateway (Caddy)

```caddyfile
# Caddyfile
{
  admin off
}

:80 {
  handle /api* {
    reverse_proxy localhost:3000
  }
  handle {
    reverse_proxy localhost:3000
  }
}
```

### 11.3 Variáveis de Ambiente

```env
DATABASE_URL="file:../db/custom.db"
```

---

## 12. Segurança e Boas Práticas

### 12.1 Validação de Dados

- **Frontend**: Validação com Zod
- **Backend**: Validação em API Routes
- **Tipagem**: TypeScript strict mode

### 12.2 Tratamento de Erros

```typescript
try {
  // Operação
} catch (error) {
  console.error('Error:', error);
  return NextResponse.json(
    { error: 'Mensagem de erro' },
    { status: 500 }
  );
}
```

### 12.3 Otimizações

- **Imagens**: Componente `<Image>` do Next.js com lazy loading
- **Fontes**: Google Fonts otimizadas (Geist Sans, Geist Mono)
- **Bundle**: Code splitting automático
- **Cache**: Force dynamic para dados atualizados

---

## 13. Conteúdo Educacional

### 13.1 Módulos Disponíveis

1. **Pré-História e Povos Originários**
2. **Civilizações Antigas** (Egito, Grécia, Roma)
3. **Idade Média**
4. **Idade Moderna** (Renascimento, Reforma)
5. **Revoluções e Iluminismo**
6. **Brasil Colonial**
7. **Brasil Império**
8. **Primeira República**
9. **Era Vargas**
10. **Ditadura Militar**
11. **Idade Contemporânea** (Guerras Mundiais)
12. **História da América**
13. **História da África**

### 13.2 Metodologia

O conteúdo segue a **Matriz de Referência do ENEM** (INEP/MEC), com:
- Textos em formato de parágrafos narrativos (inspirado no modelo UNESP)
- Vocabulário acessível e contextualizado
- Conexões interdisciplinares
- Questões oficiais do ENEM organizadas por tema

---

## 14. Integrações com IA (z-ai-web-dev-sdk)

### 14.1 Serviços Disponíveis

| Serviço | Funcionalidade |
|---------|----------------|
| **LLM** | Geração de texto, chatbot |
| **TTS** | Text-to-Speech (áudio) |
| **ASR** | Speech-to-Text (transcrição) |
| **VLM** | Análise de imagens |
| **Image Generation** | Geração de imagens por IA |

### 14.2 Uso no Projeto

- **AudioPlayer**: TTS para leitura de conteúdo
- **Image Generation**: Geração de imagens para aulas (requer autenticação)

---

## 15. Manutenção e Extensão

### 15.1 Adicionar Novo Módulo

1. Criar seed no Prisma:
```typescript
await db.module.create({
  data: {
    title: 'Novo Módulo',
    description: 'Descrição...',
    icon: 'IconName',
    color: 'amber',
    order: 14
  }
});
```

2. Adicionar imagem em `/public/images/modules/`

3. Atualizar mapeamento em `CourseClient.tsx`

### 15.2 Adicionar Nova Aula

1. Criar aula via seed:
```typescript
await db.lesson.create({
  data: {
    moduleId: 'module-id',
    title: 'Nova Aula',
    content: 'Conteúdo em texto...',
    duration: 30,
    order: 1
  }
});
```

2. Criar quiz, flashcards, timeline conforme necessário

---

## 16. Contato e Suporte

Este projeto foi desenvolvido como uma plataforma educacional de código aberto para preparação no ENEM.

---

**Versão da Documentação**: 1.0  
**Última Atualização**: 2024  
**Autor**: Sistema Z.ai Code
