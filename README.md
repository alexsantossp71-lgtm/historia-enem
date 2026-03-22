# 📚 História ENEM - Preparação Completa

Plataforma de estudos para o ENEM focada em História, com conteúdo interativo, questões de provas anteriores e recursos de aprendizagem gamificados.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Funcionalidades

### 📖 Conteúdo Estruturado
- **13 módulos cobrindo todo o conteúdo de História do ENEM**
- Lições com texto, quizzes e flashcards
- Linhas do tempo interativas
- Narrativas históricas imersivas

### 📝 Banco de Questões
- Questões de provas anteriores do ENEM (2009-2024)
- Organização por ano e tema
- Explicações detalhadas
- Sistema de simulados

### 🎮 Recursos Gamificados
- Flashcards com revisão espaçada
- Jogos de memória (Match Pairs)
- Progresso do aluno com dashboard
- Sistema de conquistas

### 🤖 Integração com IA
- Text-to-Speech para leitura de conteúdo
- Resumos automáticos powered by AI
- Feedback adaptativo personalizado

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- Bun (recomendado) ou npm/yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/historia-enem.git
cd historia-enem

# Entre no diretório do site
cd site

# Instale as dependências
bun install

# Configure o banco de dados
bun run db:push

# Inicie o servidor de desenvolvimento
bun run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
bun run build
bun run start
```

## 📁 Estrutura do Projeto

```
site/
├── prisma/                 # Schema do banco de dados
│   ├── schema.prisma       # Modelos (Module, Lesson, Quiz, etc.)
│   └── seed-*.ts          # Seeds de conteúdo
├── src/
│   ├── app/              # Páginas Next.js (App Router)
│   ├── components/       # Componentes React
│   │   └── ui/          # Componentes shadcn/ui
│   ├── lib/              # Utilitários
│   └── hooks/           # Custom hooks
├── docs/                  # Documentação
└── public/               # Arquivos estáticos
```

## 📚 Módulos Disponíveis

### Módulos Implementados ✅
1. Pré-História e Povos Originários
2. Civilizações Antigas (Egito, Grécia, Roma)
3. Idade Média
4. Idade Moderna
5. Revoluções e Iluminismo
6. Brasil Colonial
7. Brasil Império
8. Primeira República
9. Era Vargas
10. Ditadura Militar
11. História Contemporânea
12. História da América
13. História da África

### Módulos em Desenvolvimento 🚧
- História da Ásia
- História do Oriente Médio
- Brasil Contemporâneo (1985-presente)
- História da Ciência e Tecnologia
- História das Religiões

## 🛠️ Tecnologias

- **Framework:** Next.js 16 (App Router)
- **TypeScript:** Type-safe development
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Prisma ORM + SQLite (local)
- **State:** Zustand + TanStack Query
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion
- **AI:** z-ai-web-dev-sdk

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia nosso [guia de contribuição](CONTRIBUTING.md) antes de enviar um PR.

### Reportando Bugs
Use as [issue templates](.github/ISSUE_TEMPLATE.md) para reportar bugs ou solicitar funcionalidades.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [INEP](https://www.gov.br/inep/) - Provas e matriz de referência do ENEM
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI
- [Z.ai](https://chat.z.ai/) - AI coding assistance

---

Feito com ❤️ para estudantes brasileiros 🇧🇷
