-# Auditoria de Performance (Quick Wins)

Objetivo: melhorar a experiência do usuário, reduzir CLS/LCP/TBT e acelerar o carregamento das lições de História.

Resumo executivo
- O site utiliza Next.js com rotas dinâmicas; há espaço para otimizações de assets, lazy loading, minificação e caching para alcançar melhorias rápidas de Core Web Vitals.

Quick wins (curto prazo)
- Habilitar imagens otimizadas com Next.js Image em páginas de lição, com sizes apropriados
- Ativar lazy loading para imagens fora da tela e conteúdos não críticos
- Garantir minificação de CSS/JS e gzip/Brotli no servidor
- Configurar caching adequado de conteúdo estático e headers de cache control
- Reduzir payloads HTML removendo estruturas pesadas in-line; adiar scripts não críticos
- Otimizar fontes (font-display: swap, preload de fontes críticas)

Medidas de médio a longo prazo
- Code-splitting eficaz para páginas dinâmicas (aula/[id]) e rotas de usuário
- Analisar e reduzir o tamanho do bundle (drill-down com analyzers, produção)
- Otimizar consultas Prisma (n+1 queries) e cache de resultados
- Utilizar CDN para assets estáticos (imagens/vídeos) para reduzir latência
- Monitorar performance com CI/CD ( Lighthouse/CI) e regressões

Plano de validação
- Rodar Lighthouse com cenários realistas e comparar antes/depois
- Medir LCP/CLS/TBT antes e depois das mudanças
- Validar consistência de UI com testes automatizados para não introduzir regressões visuais
- Habilitar imagens otimizadas com Next.js Image (em lições com HTML; usar placeholder/skeleton enquanto carrega)
- Habilitar lazy loading para recursos não críticos (imagens, vídeos, assets externos)
- Minificação de CSS/JS e compressão (gzip/ Brotli) no servidor
- Habilitar cache em nível de aplicação (instruções de cache de conteúdo estático, headers cache-control)
- Reduzir payload HTML: evitar inline large blocks; externalizar scripts quando possível
- Carregamento de fontes: font-display: swap; pré-carregamento de fontes críticas

Plano de longo prazo
- Code-splitting efetivo no Next.js para páginas dinâmicas (aula/[id])
- Auditoria de bundle para reduzir tamanho total de JS/CSS
- Otimização de consulta de dados com Prisma (n+1 queries) e caching de resultados
- Busca de CDN para assets estáticos (imagens, vídeos) para reduzir latência
