# Auditoria de SEO para o Site de História

Objetivo: otimizar visibilidade orgânica do conteúdo histórico por meio de boas práticas de SEO on-page, dados estruturados e arquitetura de site.

Visão geral da auditoria
- Áreas de foco: títulos, descrições, headings, canonical, sitemap, dados estruturados, desempenho e UX.
- Páginas-alvo: lista de lições, módulos, página inicial e páginas dinâmicas de aula (aula/[id]).

Achados (prévia)
- Titles/Descs: podem estar genéricos em páginas de módulo e lição; necessidade de palavras-chave históricas mais específicas e descrições atrativas.
- Headings: necessidade de hierarquia clara em páginas de lição com subtítulos lógicos.
- Dados estruturados: ausência de JSON-LD para timelines, eventos históricos e quiz.
- Sitemap/Robots: confirmar que sitemap.xml e robots.txt estão atualizados e acessíveis.
- Performance: imagens não otimizadas podem impactar Core Web Vitals e SEO.

Recomendações detalhadas
- Gerar metadata dinâmico por lição (title, meta description, keywords) com palavras-chave históricas relevantes (ex.: Brasil colonial, Era Vargas).
- Inserir JSON-LD para timelines, eventos históricos, perguntas de quiz e glossário, conforme apropriado.
- Assegurar canonicalização correta para evitar duplicação entre lições similares e páginas de categoria.
- Manter sitemap.xml atualizado e registrar no Google Search Console; considerar sitemap de imagens se aplicável.
- Melhorar a estrutura de headings: H1 para título da página, H2 para seções, H3 para subseções.
- Otimizar assets visuais (imagens) para SEO de imagem (alt text descritivo, nomes de arquivo). 
- Validar com Lighthouse SEO e ajustar métricas (CS, LCP, CLS, TBT) com correções iterativas.

Plano de implementação (alto nível)
- Implementar metadata dinâmico por página de lição (title, description, keywords).
- Adicionar JSON-LD para timelines/events/quizzes.
- Verificar/atualizar sitemap.xml; configurar no Search Console.
- Padronizar headings; aplicar estilos para acessibilidade.
- Otimizar imagens/CBV e carregar recursos de forma eficiente.
- Rodar auditorias recorrentes (CI) com Lighthouse/axe-core.
