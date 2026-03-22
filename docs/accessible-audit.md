-# Auditoria de Acessibilidade WCAG (Plano de ação)

Objetivo: assegurar que o site de História seja utilizável por usuários com diferentes habilidades, atendendo WCAG 2.2 e princípios ARIA.

Escopo
- Páginas de lições mais visitadas (padrões de navegação, foco, teclado, leitura de tela)
- Componentes de UI essenciais (layout, botões, formulários, modais, banners)
- Conteúdo dinâmico (vídeos, timelines, quizzes, histórias)

Achados (estado atual – preliminar)
- Foco não visível em alguns botões de navegação no cabeçalho (em modo compacto/mobile)
- Ausência de skip link no topo da página → dificulta navegação por leitores de tela
- Contraste de cores em alguns blocos de chamadas à ação pode ficar abaixo de AA em determinados temas de módulo
- Elementos interativos sem labels ARIA explicitas (ex.: botões com apenas ícones) podem não ser anunciados adequadamente por leitores de tela
- Conteúdo HTML externo vindo de lesson.content precisa sanitização para evitar vazamento de conteúdo inseguro
- Ausência de landmarks semânticos para seções (nav, main, aside, footer) para leitores de tela

Remediação (ações recomendadas)
- Adicionar skip link no topo da página e garantir foco ao pular para o conteúdo principal
- Garantir rótulos acessíveis em botões com ícones (aria-label ou aria-labelledby)
- Verificar e reforçar contraste de cores nos componentes de CTA e blocos de destaque; ajustar cores ou usar text-shadow/outline quando necessário
- Atribuir roles/landmarks apropriados (nav, main, region) e labels para áreas dinâmicas
- Garantir aria-live para atualizações de progresso, conclusão de atividades e feedback de quiz
- Implementar sanitização de lesson.content no backend ou na renderização para evitar XSS
- Realizar validação com ferramentas (Lighthouse, axe-core) e com usuários reais para validação de cenários de acessibilidade

Plano de remediação (alto nível)
- Implementar skip link, labels de botões e landmarks
- Aplicar sanitização de HTML de forma segura (server-side)
- Ajustar contraste de cores e revisar componentes de UI críticos
- Adicionar atributos ARIA apropriados para elementos interativos com ícones
- Introduzir aria-live/aria-atomic para atualizações de estado
- Executar testes com ferramentas automatizadas e validação com usuários

- Páginas de lições mais visitadas (padrões de navegação, foco, teclado, leitura de tela)
- Componentes de UI essenciais (layout, botões, formulários, modais, banners)
- Conteúdo dinâmico (vídeos, timelines, quizzes, histórias)

Checklists iniciais
- Navegação por teclado: tab order lógico, foco visível, ordem de leitura consistente
- Foco visível: contornos visíveis com foco em todos os componentes interativos
- Contraste de cores: contraste mínimo WCAG AA (4.5:1 para textos, 3:1 para gráficos baseados em cores)
- Alternativas de texto: imagens com alt, descrições para mídia rica
- ARIA: roles, labels, aria-live para conteúdo dinâmico, aria-expanded/hidden conforme necessário
- Semântica de HTML: uso adequado de cabeçalhos (h1..h6), listas, links com texto descritivo
- Tamanho de fonte: compatibilidade com zoom e escalabilidade
- Conteúdo de mídia: legendas para vídeos, transcrições para áudio
- Mensagens de erro acessíveis: mensagens claras para entradas inválidas

Plano de remediação (alto nível)
- Corrigir qualquer problema de foco visível e ordem de navegação
- Adicionar textos alternativos para imagens que ajudam no contexto
- Rever contraste de cores de interfaces críticas
- Introduzir atributos ARIA onde for necessário (ex.: breadcrumb, nav landmarks, status/aria-live)
- Validar com ferramentas de acessibilidade (Lighthouse, axe-core) e com usuários

Resultados esperados
- Atingir pelo menos nível AA nos caminhos críticos, com case de teste em cenários de acessibilidade.

## Atualizações da auditoria (adições)
- Observação adicional: algumas páginas dinâmicas com conteúdo HTML extraído do DB devem ser sanitizadas para evitar vulnerabilidades de XSS.
- Ações de melhoria contínua: introduzir monitoração de acessibilidade com Lighthouse/axe-core em pipelines de CI para regressões.
