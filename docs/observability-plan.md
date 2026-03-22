# Plano de Observabilidade e Telemetria

Objetivo: definir métricas, eventos e dashboards para monitorar performance, disponibilidade e uso educacional.

Métricas-chave
- Tempo de carregamento da lição (First Contentful Paint, LCP)
- Tempo de resposta das APIs (db queries via Prisma, endpoints internos)
- CLS (layout shift) durante navegação entre lições
- Taxa de erro (5xx/4xx) por rota (home, módulo, aula, quiz)
- Progresso dos alunos (lectures completed, quiz attempts)
- Uso ativo por módulo/curso
- Disponibilidade do serviço (uptime)
- Número de acessos concorrentes simultâneos (picos de carga)

Eventos e logs
- Carregamento de lição iniciado/concluído
- Progresso atualizado (com timestamp)
- Início/Concluão de quiz; falhas de perguntas
- Erros de renderização de conteúdo HTML (render, hydration) e validação de conteúdo
- Falhas de autenticação/autorizações (quando aplicável)

Dashboards sugeridos
- Dashboard de Performance (LCP/CLS/TBT/TTFB, p95/p99 latência)
- Dashboard de Engajamento (visitas por lição, progresso, tempo no conteúdo)
- Dashboard de Segurança/Qualidade (erros, injects detectados, tentativas de acesso não autorizado)
- Dashboard de disponibilidade de API (latência, throughput, erros)

-Plano de implementação de telemetria
- Instrumentar pontos-chave no frontend (carregamento de lição, transições entre abas, quizzes)
- Instrumentar backend (APIs Prisma, gestão de progresso, fetch de conteúdos)
- Configurar logs estruturados com contexto (lessonId, moduleId, userId quando disponível)
- Criar dashboards no Grafana/Tempo/Datadog ou ferramenta equivalente
- Definir alertas básicos (alto tempo de resposta, queda de disponibilidade, picos de erro)
- Estabelecer um plano de resposta a incidentes e rotação de contatos para escalonamento
- Garantir governança de dados de telemetria (retencao, privacidade, minimização de dados)

- Modelo de dados de telemetria (telemetry data model): campos padrão (timestamp, service, environment, traceId, spanId, userId, lessonId, moduleId, event, payload)
- Instrumentação de eventos (blueprint): frontend events (page_load, lesson_start, lesson_complete, quiz_start, quiz_submit, progress_update, content_render_time), backend events (db_query_time, api_latency, cache_hit_ratio, error_rate)
- Dashboards detalhados: Performance, Engajamento, Segurança, Disponibilidade; com exemplos de widgets
- Governança de dados: retenção (ex: 90 dias), anonimização de dados, acesso (roles), privacidade (LGPD), gravação de logs sensíveis
- Plano de validação: critérios de DoD para telemetria (existência de dashboards, dados coletados, alertas, qualidade)
