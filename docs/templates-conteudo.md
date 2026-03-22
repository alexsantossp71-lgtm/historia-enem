# Templates Padronizados para Conteúdo ENEM

## Visão Geral

Este documento define os templates padronizados para criação de novos módulos e lições no site de história para o ENEM. Todos os novos conteúdos devem seguir esses padrões para garantir consistência e qualidade.

## Template de Módulo

### Estrutura Básica
```typescript
{
  title: 'Nome do Módulo',
  description: 'Descrição breve do conteúdo do módulo.',
  icon: 'NomeDoIcone', // Lucide icon name
  color: 'cor', // amber, emerald, green, blue, purple, red
  order: N, // Número sequencial
  lessons: [ /* array de lições */ ]
}
```

### Exemplo Prático
```typescript
{
  title: 'História da Ásia',
  description: 'Civilizações milenares, impérios e transformações do continente asiático.',
  icon: 'Globe',
  color: 'red',
  order: 14,
  lessons: [ /* ... */ ]
}
```

## Template de Lição

### Estrutura Básica
```typescript
{
  title: 'Título da Lição',
  content: `# Título da Lição

## Seção 1
Conteúdo em markdown...

## Seção 2
Mais conteúdo...`,
  duration: 25, // minutos (padrão: 25)
  order: N, // Número sequencial dentro do módulo
  quiz: { /* objeto quiz */ }
}
```

### Estrutura do Conteúdo (Markdown)
```markdown
# Título da Lição

## Contexto Histórico
- Explicação do período
- Importância histórica
- Conexões com outros períodos

## Desenvolvimento Principal
- Eventos principais
- Personagens importantes
- Consequências

## Conexões com o ENEM
- Temas recorrentes
- Questões típicas
- Dicas de estudo

## Resumo
- Pontos-chave
- Datas importantes
- Conceitos essenciais
```

### Duração Recomendada
- **Mínimo:** 20 minutos
- **Padrão:** 25 minutos
- **Máximo:** 30 minutos

## Template de Quiz

### Estrutura Básica
```typescript
{
  questions: [
    {
      question: `(ENEM ANO) Texto da questão...

- (A) alternativa A.
- (B) alternativa B.
- (C) alternativa C.
- (D) alternativa D.
- (E) alternativa E.`,
      options: '["alternativa A", "alternativa B", "alternativa C", "alternativa D"]',
      answer: N, // índice da resposta correta (0-4)
      explanation: 'Explicação detalhada da resposta correta.',
      order: N // número sequencial
    }
  ]
}
```

### Padrões de Questões

#### Formato ENEM
- **Referência:** (ENEM ANO) ou (ENEM ANO - Adaptada)
- **Enunciado:** 3-5 linhas de texto
- **Alternativas:** 5 opções (A-E)
- **Explicação:** 2-3 linhas detalhando a resposta

#### Quantidade por Lição
- **Mínimo:** 2 questões
- **Padrão:** 3-5 questões
- **Máximo:** 10 questões

#### Tipos de Questões
1. **Interpretação:** Análise de textos ou imagens
2. **Contextualização:** Relação entre eventos históricos
3. **Causalidade:** Identificação de causas e consequências
4. **Comparação:** Semelhanças e diferenças entre períodos
5. **Cronologia:** Ordenação temporal de eventos

## Template de Flashcards

### Estrutura para Implementação Futura
```typescript
{
  flashcards: [
    {
      front: 'Termo ou conceito',
      back: 'Definição ou explicação',
      category: 'categoria', // opcional
      difficulty: 'easy' | 'medium' | 'hard' // opcional
    }
  ]
}
```

### Padrões de Flashcards
- **Quantidade por lição:** 10-15 cards
- **Frente:** Termo, data ou conceito
- **Verso:** Definição clara e concisa
- **Categorias:** Organizar por temas

## Template de Linha do Tempo

### Estrutura para Implementação Futura
```typescript
{
  timeline: [
    {
      date: 'AAAA ou AAAA-MM-DD',
      title: 'Título do evento',
      description: 'Descrição breve',
      importance: 'high' | 'medium' | 'low' // opcional
    }
  ]
}
```

### Padrões de Linha do Tempo
- **Quantidade por lição:** 8-12 eventos
- **Datas:** Formato consistente (ano ou AAAA-MM-DD)
- **Descrição:** Máximo 2 linhas
- **Importância:** Destacar eventos-chave

## Template de História Narrativa

### Estrutura para Implementação Futura
```typescript
{
  narrative: {
    title: 'Título da Narrativa',
    content: `Texto narrativo em primeira ou terceira pessoa...`,
    characters: ['Personagem 1', 'Personagem 2'],
    setting: 'Local e época',
    duration: 5 // minutos de leitura
  }
}
```

### Padrões de Narrativa
- **Comprimento:** 500-800 palavras
- **Perspectiva:** Primeira ou terceira pessoa
- **Tom:** Engajante e educativo
- **Elementos:** Personagens, conflito, resolução

## Checklist de Criação de Conteúdo

### Antes de Criar
- [ ] Verificar se o tema está na matriz do ENEM
- [ ] Consultar 2+ fontes acadêmicas
- [ ] Definir objetivos de aprendizagem
- [ ] Identificar conexões com outros módulos

### Durante a Criação
- [ ] Seguir template de módulo
- [ ] Criar lições com 25 minutos de duração
- [ ] Incluir 3-5 questões por lição
- [ ] Adicionar 10-15 flashcards
- [ ] Criar linha do tempo com 8-12 eventos
- [ ] Escrever história narrativa (opcional)

### Após a Criação
- [ ] Revisar ortografia e gramática
- [ ] Verificar datas e fatos históricos
- [ ] Testar questões com gabarito
- [ ] Validar com fontes acadêmicas
- [ ] Publicar e monitorar feedback

## Boas Práticas de Conteúdo

### Escrita
- **Clareza:** Frases curtas e diretas
- **Objetividade:** Focar nos pontos essenciais
- **Conexão:** Relacionar com o presente
- **Exemplos:** Usar casos concretos

### Questões
- **Autenticidade:** Basear em provas reais do ENEM
- **Diversidade:** Diferentes tipos de questões
- **Explicação:** Detalhar a resposta correta
- **Atualização:** Revisar anualmente

### Organização
- **Hierarquia:** Títulos e subtítulos claros
- **Fluxo:** Progressão lógica do conteúdo
- **Resumos:** Sintetizar pontos-chave
- **Recursos:** Links para materiais complementares

## Validação de Qualidade

### Critérios de Avaliação
1. **Precisão histórica:** Fatos corretos e contextualizados
2. **Alinhamento com ENEM:** Temas da matriz de referência
3. **Clareza didática:** Fácil compreensão para estudantes
4. **Engajamento:** Conteúdo interessante e relevante
5. **Atualização:** Informações recentes e pertinentes

### Processo de Revisão
1. **Autorevisão:** Criador revisa o próprio conteúdo
2. **Revisão por pares:** Outro membro da equipe revisa
3. **Validação acadêmica:** Consulta a especialistas
4. **Teste com usuários:** Feedback de estudantes
5. **Ajustes finais:** Correções baseadas no feedback

## Exemplo Completo de Implementação

### Módulo: História da Ásia
```typescript
const asiaModule = {
  title: 'História da Ásia',
  description: 'Civilizações milenares, impérios e transformações do continente asiático.',
  icon: 'Globe',
  color: 'red',
  order: 14,
  lessons: [
    {
      title: 'China Antiga: Das Dinastias ao Confucionismo',
      content: `# China Antiga: Das Dinastias ao Confucionismo

## As Primeiras Dinastias
A China possui uma das civilizações mais antigas...

## O Confucionismo
Confúcio (551-479 a.C.) desenvolveu um sistema filosófico...

## A Dinastia Qin
Qin Shi Huang unificou a China...

## A Dinastia Han
Período de ouro da civilização chinesa...`,
      duration: 25,
      order: 1,
      quiz: {
        questions: [
          {
            question: `(ENEM 2018) A filosofia confuciana...`,
            options: '["opção A", "opção B", "opção C", "opção D"]',
            answer: 2,
            explanation: 'Explicação da resposta correta...',
            order: 1
          }
        ]
      }
    }
  ]
};
```

## Conclusão

Seguir esses templates garante:
- **Consistência:** Padrão uniforme em todo o conteúdo
- **Qualidade:** Conteúdo revisado e validado
- **Eficiência:** Processo de criação otimizado
- **Manutenção:** Facilidade de atualização e correção

**Última atualização:** 2026-03-21
**Responsável:** Equipe de Conteúdo