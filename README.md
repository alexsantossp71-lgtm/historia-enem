# História ENEM 📚

**Plataforma de estudos de História para o ENEM** — site estático com aulas, quizzes estilo ENEM, jogos de fixação ativa e um pipeline de build em Node.js que gera páginas a partir de dados estruturados (JSON).

## ✨ Funcionalidades

- 📖 **82 aulas de História** organizadas em trilha cronológica (Geral + Brasil)
- ✅ **305 questões de prática** no estilo ENEM com correção comentada
- 🎮 **Jogos de fixação ativa** em cada aula — flashcards, mitos e verdades, linha do tempo, jogo da memória e termo oculto
- 🔍 **Busca e filtros** por período/tema e por era
- 🎨 **Design editorial** responsivo com dark mode e temas por era
- 📊 **Progresso do aluno** salvo no navegador (aulas concluídas, quiz, barra de leitura)
- 🔎 **SEO** — JSON-LD (Course + Breadcrumb), meta/OG tags, sitemap.xml e robots.txt
- ♿ **Acessibilidade** — ARIA, foco visível, `prefers-reduced-motion`

## 🚀 Como executar

### Build do site

```bash
# Node.js ≥ 14 (nenhuma dependência real)
node build_site.js
```

O build gera:
- páginas de aula em `aulas/*.html` a partir do template e dos JSONs
- `aulas/Indice_aulas.html` (índice com busca, filtros e progresso)
- `sitemap.xml` e `robots.txt`

#### Utilitários

| Comando | O que faz |
|---|---|
| `node generate_lessons_index.js` | Regenera `content/data/lessonsIndex.json` a partir dos JSONs |
| `node audit.js` | Valida conteúdo (quiz, jogos, links, arquivos, SEO) — reporta issues |
| `node test_seo.js` | Testa a geração de JSON-LD (Course + Breadcrumb) |
| `node optimize_images.js` | Converte imagens PNG → WebP (usa `ffmpeg`) |

> Dica: use o serviço `npx http-server` ou `python3 -m http.server 8000` para visualizar localmente.

## 📁 Estrutura do projeto

```
├── index.html                  # Página inicial
├── aulas/                      # Páginas geradas de aulas
│   ├── lesson-template.html    # Template da aula (placeholders {{...}})
│   └── Indice-template.html    # Template do índice de aulas
├── content/data/               # Conteúdo estruturado (1 JSON por aula)
├── assets/
│   ├── css/                    # Design system (style.css + themes.css)
│   ├── js/                     # app.js (interatividade) + seo.js (JSON-LD)
│   └── images/                 # Imagens em .webp
├── build_site.js
├── generate_lessons_index.js
├── audit.js
├── test_seo.js
├── sitemap.xml                 # gerado pelo build
└── robots.txt                  # gerado pelo build
```

## 🛠️ Tecnologias

- HTML5 + **CSS puro** (design tokens, dark mode — sem Tailwind)
- **WebP** para imagens (otimizado via ffmpeg)
- JavaScript (Node.js para build; browser para o site)
- JSON como fonte de conteúdo

## 🔒 Notas

- O domínio padrão (`historiaenem.example.com`) fica em `assets/js/seo.js` — troque pelo domínio real em produção.
- `optimize_images.js` apaga os PNGs originais após conversão — mantenha backup se preferir.

## 📄 Licença

Projeto de estudo para preparação ao ENEM.

### Procedência das questões

As questões são classificadas na geração do site em três grupos: oficiais identificadas pelo cadastro, simulados/modelos e autorais com referência ao estilo ENEM. Rótulos genéricos como “ENEM” não são apresentados como prova oficial.
