const fs = require('fs');
const path = require('path');
const dir = 'content/data';
// Mesmo filtro do build_site.js: só audita aulas publicadas (≠ Outras Matérias)
const index = JSON.parse(fs.readFileSync(path.join(dir, 'lessonsIndex.json'), 'utf8'));
const published = new Set(index.filter(l => l.category !== 'Outras Matérias').map(l => l.id));
const files = fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== 'lessonsIndex.json' && published.has(f.replace('.json', '')));
let issues = { quiz: [], games: [], content: [], schema: [], files: [], links: [] };
let stats = { total: files.length, noQuiz: 0, quizQuestions: 0, noGames: 0, gamesCount: 0 };

for (const f of files) {
    const p = path.join(dir, f);
    let d;
    try { d = JSON.parse(fs.readFileSync(p, 'utf8')); } catch(e) { issues.files.push(`${f}: JSON invalido - ${e.message}`); continue; }
    const id = d.metadata?.id || f;

    if (!d.metadata) { issues.schema.push(`${id}: sem metadata`); continue; }

    const quiz = d.quiz || [];
    if (quiz.length === 0) { stats.noQuiz++; } else { stats.quizQuestions += quiz.length; }
    quiz.forEach((q, i) => {
        const correct = (q.correctIndex !== undefined && q.correctIndex !== null) ? q.correctIndex : q.correct_answer;
        if (correct === undefined || correct === null) issues.quiz.push(`${id} q${i}: sem correctIndex/correct_answer`);
        else if (correct < 0 || correct >= (q.options?.length || 0)) issues.quiz.push(`${id} q${i}: correctIndex ${correct} fora da faixa de ${q.options?.length||0} opcoes`);
        if (!q.options || q.options.length < 4) issues.quiz.push(`${id} q${i}: apenas ${q.options?.length||0} opcoes`);
        if (!q.question || q.question.trim().length < 20) issues.quiz.push(`${id} q${i}: questao curta/invalida`);
        if ((q.options || []).length !== new Set(q.options).size) issues.quiz.push(`${id} q${i}: opcoes duplicadas`);
        const prefixed = (q.options||[]).filter(o => /^[A-E][)\.]/.test(o.trim())).length;
        if (prefixed > 0 && prefixed < (q.options||[]).length) issues.quiz.push(`${id} q${i}: prefixos de letra inconsistentes`);
    });

    const g = d.games || {};
    if (!d.games || Object.keys(g).length === 0) stats.noGames++;
    else stats.gamesCount++;
    if (g.flashcards) g.flashcards.forEach((c,i) => { if(!c.front||!c.back) issues.games.push(`${id} flashcard ${i}: sem front/back`); });
    if (g.true_false) g.true_false.forEach((t,i) => { if(!t.statement) issues.games.push(`${id} tf ${i}: sem statement`); });
    if (g.memory) g.memory.forEach((m,i) => { if(!m.concept||!m.match) issues.games.push(`${id} memory ${i}: sem concept/match`); });
    if (g.timeline) {
        const orders = g.timeline.map(t=>t.order);
        const expected = orders.slice().sort((a,b)=>a-b);
        if (JSON.stringify(orders) !== JSON.stringify(expected)) issues.games.push(`${id} timeline: ordens nao sequenciais 1..n: [${orders.join(',')}]`);
        if (g.timeline.length !== new Set(orders).size) issues.games.push(`${id} timeline: ordens duplicadas`);
        g.timeline.forEach((t,i) => { if(t.order < 1 || t.order > g.timeline.length) issues.games.push(`${id} timeline ${i}: order ${t.order} fora de 1..${g.timeline.length}`); });
    }

    const imgRefs = [];
    const jsonStr = JSON.stringify(d);
    const re = /"url"\s*:\s*"(assets\/[^"]+)"/g;
    let m;
    while ((m = re.exec(jsonStr))) imgRefs.push(m[1]);
    imgRefs.forEach(u => {
        if (!fs.existsSync(u)) issues.links.push(`${id}: imagem faltando -> ${u}`);
    });

    if (!d.intro || d.intro.length < 40) issues.content.push(`${id}: intro curta/missing`);
    if (!d.theory_content || d.theory_content.length < 200) issues.content.push(`${id}: theory_content curto/missing`);
    if (!d.sections || d.sections.length === 0) issues.content.push(`${id}: sem sections`);
    else {
        d.sections.forEach((s,i) => {
            if (!s.title) issues.content.push(`${id} section ${i}: sem titulo`);
            if (!s.content || s.content.length < 60) issues.content.push(`${id} section ${i}: conteudo curto`);
        });
    }
}

console.log('=== STATS ===');
console.log(JSON.stringify(stats, null, 2));
console.log('=== ISSUE COUNT ===');
for (const k in issues) console.log(`${k}: ${issues[k].length}`);
console.log('=== QUIZ ISSUES ===');
issues.quiz.forEach(x => console.log(' -', x));
console.log('=== GAMES ISSUES ===');
issues.games.forEach(x => console.log(' -', x));
console.log('=== CONTENT ISSUES ===');
issues.content.forEach(x => console.log(' -', x));
console.log('=== LINK ISSUES ===');
issues.links.forEach(x => console.log(' -', x));
console.log('=== FILE ISSUES ===');
issues.files.forEach(x => console.log(' -', x));