# Roadmap de Implementação

Visão geral: sequência de ações priorizadas para transformar o site em uma plataforma de aprendizado estável, segura e escalável.

- Fases e prioridades
- Fase 1 (0-2 semanas): Inventário da estrutura (Módulos/Lições/Quiz), diagrama do site; criar site map (concluído). Entrega: site-map.md + diagrama de alto nível.
- Fase 2 (2-4 semanas): Auditorias de Acessibilidade WCAG e SEO (em andamento/entregáveis: accessible-audit.md, seo-audit.md). Entrega: relatórios com planos de remediação.
- Fase 3 (4-6 semanas): Auditoria de Performance (performance-audit.md) e Security (security-plan.md). Entrega: plano de segurança e quick wins de performance.
- Fase 4 (6-8 semanas): Currículo/Conteúdo (content-curriculum.md) + Observabilidade (observability-plan.md). Entregas: roadmap de conteúdo e observabilidade.
- Fase 5 (8-12 semanas): Roadmap detalhado com milestones, guia de implementação (tasks, owners, dependencies, deadlines) e definição de DoD (implementation-roadmap.md + definition-of-done.md).
- Integração de DoD com o fluxo de CI/CD e revisões de PR para garantir qualidade antes de merges.
- Milestones detalhados com owners e datas propostas:
  - Milestone 1: Inventário completo e site map (owner: Eng, prazo: 2 semanas)
  - Milestone 2: Acessibilidade e SEO (owner: UX/SEO, prazo: 4 semanas)
  - Milestone 3: Observabilidade e Segurança (owner: SRE/Security, prazo: 6-8 semanas)
  - Milestone 4: Currículo/Conteúdo enriquecido (owner: Content, prazo: 8-10 semanas)
  - Milestone 5: Roadmap final com DoD alinhado e pipeline CI/CD (owner: PM, prazo: 12 semanas)

Critérios de sucesso
- DoD claro para cada entrega (ver definitions in definition-of-done.md)
- Build e tests estáveis; zero regressões críticas
- Aumento mensurável de acessibilidade, SEO e desempenho conforme metas estabelecidas
