# Plano de Segurança (Básico)

Objetivo: estabelecer controles mínimos para proteção de inputs, prevenção de XSS/CSRF, e políticas básicas de segurança.

 Medidas propostas
- Validação/escapamento de inputs no backend antes de persistência de lesson.content (HTML) e outros dados de usuário
- Sanitização de HTML (ex.: strip de tags potencialmente perigosas) antes de renderizar conteúdos vindos do DB
- CSRF: usar tokens CSRF para formulários sensíveis; considerar SameSite cookies
- CSP (Content Security Policy) inicial: restringir fontes de conteúdo externo e scripts inline
- Auditoria de dependências para vulnerabilidades (SBOM, scans periódicos)
- Logs de segurança com nível de severidade para eventos relevantes
- Políticas de atualização de dependências e patches de segurança
- Configurar mecanismos de autenticação e autorização mais granulares (RBAC) para áreas administrativas
- Detecção e resposta a incidentes básicos (playbooks) para incidentes de segurança
- Validação/escapamento de inputs no backend antes de persistência de lesson.content (HTML) e outros dados de usuário
- Sanitização de HTML (ex.: strip de tags potencialmente perigosas) antes de renderizar conteúdos vindos do DB
- CSRF: usar tokens CSRF para formulários sensíveis; considerar SameSite cookies
- CSP (Content Security Policy) inicial: restringir fontes de conteúdo externo e scripts inline
- Auditoria de dependências para vulnerabilidades (SBOM, scans periódicos)
- Logs de segurança com nível de severidade para eventos relevantes
- Políticas de atualização de dependências e patches de segurança

Observação: este é um plano inicial. Ajustes devem ocorrer conforme o ambiente de produção e requisitos de compliance.
