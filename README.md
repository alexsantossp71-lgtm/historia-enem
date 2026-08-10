# História ENEM 📚

**Plataforma de estudos de História para o ENEM** — site estático com aulas, conteúdo organizado e um pipeline de build em Node.js que gera páginas de aula a partir de dados estruturados.

## ✨ Funcionalidades

- 📖 **Aulas de História** organizadas por categoria e conteúdo
- 🗂️ **Conteúdo em JSON** (`content/`) — fácil de editar e expandir
- ⚙️ **Build automático** — `build_site.js` gera as páginas de aula a partir do template
- 🏷️ **Índice de aulas** gerado por script (`generate_lessons_index.js`)
- 🔍 **Ferramenta de teste de SEO** (`test_seo.js`)

## 🚀 Como executar

### Build do site

```bash
npm install   # nenhuma dependência real; Node ≥ 14
node build_site.js
node generate_lessons_index.js
```

### Servir o site

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## 📁 Estrutura do projeto

```
├── index.html              # Página inicial
├── aulas/                  # Páginas geradas de aulas
│   └── lesson-template.html
├── content/                # Conteúdo em JSON por aula
├── assets/                 # Recursos visuais
├── build_site.js           # Gera páginas das aulas
├── generate_lessons_index.js  # Gera índice de aulas
└── test_seo.js             # Validação de SEO das páginas
```

## 🛠️ Tecnologias

- HTML5 + Tailwind CSS
- JavaScript (Node.js para build, browser para o site)
- JSON como fonte de conteúdo

## 📄 Licença

Projeto de estudo para preparação ao ENEM.