# Contributing to História ENEM

Obrigado por contribuir com nosso projeto! Este documento fornece diretrizes para contribuir.

## 🚀 Como Começar

1. Fork o repositório
2. Clone seu fork: `git clone https://github.com/SEU_USUARIO/historia-enem.git`
3. Entre no diretório: `cd historia-enem/site`
4. Instale dependências: `bun install`
5. Crie uma branch: `git checkout -b feature/sua-feature`

## 📝 Padrões de Código

### TypeScript
- Use TypeScript estrito
- Evite `any`
- Use tipos apropriados para retornos de funções

### Commits
Seguimos o Conventional Commits:
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` refatoração
- `test:` testes
- `chore:` tarefas diversas

Exemplo:
```
feat: add quiz system for lessons
fix: resolve timeline rendering issue
docs: update README with new features
```

## 🧪 Testando

```bash
# Execute todos os testes
bun test

# Execute testes específicos
bun test:nome-do-teste
```

## 📤 Fazendo um Pull Request

1. Garanta que todos os testes passam
2. Atualize a documentação se necessário
3. Descreva suas mudanças detalhadamente
4. Solicite review de pelo menos um mantenedor

## 🐛 Reportando Bugs

Use as [issue templates](.github/ISSUE_TEMPLATE.md) para reportar:
- Bugs com passos para reproduzir
- Correções de conteúdo histórico (com fontes)
- Novas funcionalidades desejadas

## 📚 Adicionando Conteúdo

### Estrutura de uma Lição
Cada lição deve conter:
- [ ] Título descritivo
- [ ] Resumo (2-3 frases)
- [ ] Conteúdo em Markdown
- [ ] Duração estimada (20-30 min)
- [ ] Quiz com 10 questões ENEM-style
- [ ] Flashcards (opcional)
- [ ] Eventos de linha do tempo (opcional)

### Validação de Conteúdo
Antes de adicionar conteúdo histórico:
- [ ] Verificar com pelo menos 2 fontes acadêmicas
- [ ] Citar referências bibliográficas
- [ ] Garantir precisão factual
- [ ] Seguir alinhamento com Matriz de Referência do ENEM

## 📋 Checklist de Qualidade

- [ ] Código compila sem erros
- [ ] ESLint passa
- [ ] TypeScript compila sem erros
- [ ] Novos componentes têm testes
- [ ] Documentação atualizada
- [ ] Commits seguem conventional commits

## ❓ Dúvidas?

Abra uma issue ou entre em contato com os mantenedores do projeto.

---

Happy coding! 🎉
