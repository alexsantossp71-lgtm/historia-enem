const fs = require('fs');
const path = require('path');
const { renderSeo, renderBreadcrumb, SITE_URL } = require('./assets/js/seo.js');

const paths = {
    index: 'content/data/lessonsIndex.json',
    dataFolder: 'content/data/',
    template: 'aulas/lesson-template.html',
    outputFolder: 'aulas/'
};

// Deterministic PRNG (mulberry32) seeded from a string so builds are reproducible.
function hashSeed(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }
    return h >>> 0;
}

function mulberry32(a) {
    return function () {
        a |= 0; a = a + 0x6D2B79F5 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

function seededShuffle(arr, seed) {
    const rnd = mulberry32(seed);
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function esc(str) {
    return String(str == null ? '' : str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function a11yIcons(html) {
    return html.replace(/<i class="(fa[^"]*)"(?![^>]*aria-hidden)/g, '<i class="$1" aria-hidden="true"');
}

// Converts inline Markdown in rich-text fields to safe HTML: **bold** -> <strong>, *italic* -> <em>.
function inlineMd(str) {
    return esc(str == null ? '' : str)
        .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
        .replace(/(^|[^*\w])\*([^*\n]+)\*(?=[^\w*]|$)/g, '$1<em>$2</em>');
}

function quizCorrect(q) {
    if (q.correctIndex !== undefined && q.correctIndex !== null) return q.correctIndex;
    if (q.correct_answer !== undefined && q.correct_answer !== null) return q.correct_answer;
    if (q.requiredIndex !== undefined && q.requiredIndex !== null) return q.requiredIndex;
    return -1;
}

// Classifica a procedência declarada no JSON sem transformar rótulos genéricos
// como "ENEM" em uma alegação de questão oficial.
function questionSource(q) {
    const raw = String(q && q.source || '').trim();
    const lower = raw.toLowerCase();
    if (/^enem\s+\d{4}\s+oficial$/i.test(raw) || /^enem\s+oficial$/i.test(raw)) {
        return { type: 'official', label: raw };
    }
    if (/simulado|modelo|adaptad/.test(lower)) {
        return { type: 'practice', label: raw || 'Simulado / modelo' };
    }
    return { type: 'authorial', label: raw ? `Autoral — referência ${raw}` : 'Autoral — estilo ENEM' };
}

// Options may carry a leading "A) " prefix that duplicates the letter badge.
function stripOptionPrefix(opt) {
    const s = String(opt == null ? '' : opt);
    if (/^[A-Ea-e][).]\s+/.test(s)) return s.replace(/^[A-Ea-e][).]\s+/, '').trim();
    return s.trim();
}

// ---- Era theming ----
function classifyEra(meta) {
    const id = (meta.id || '').toLowerCase();
    const cat = meta.category || '';
    if (cat.includes('Outras')) return 'theme-geral';
    if (cat.includes('Brasil')) {
        if (/vargas|republica|ditadura|contemporaneo/.test(id)) return 'theme-contemporanea';
        return 'theme-brasil';
    }
    if (/roma|grecia|egito|antiga|minoica|micen/.test(id)) return 'theme-antiga';
    if (/medieval|feudal|bizantino|movimento-cruzadas/.test(id)) return 'theme-medieval';
    if (/africa|mali|gana|songai/.test(id)) return 'theme-africa';
    return 'theme-geral';
}

function themeForLesson(meta) {
    const t = classifyEra(meta);
    return t.replace('theme-', '');
}

function buildModal(id, content) {
    return `
<div class="modal-bg" id="${id}" role="dialog" aria-modal="true" aria-label="Atividade interativa">
    <div class="modal-box">
        <button class="modal-close" aria-label="Fechar"><i class="fas fa-times"></i></button>
        ${content}
    </div>
</div>`;
}

function sectionHtml(sec, si, index) {
    const num = String(si + 1).padStart(2, '0');
    const callout = sec.highlight
        ? `<div class="callout"><i class="fas fa-highlighter" style="margin-right:.5rem"></i>${inlineMd(sec.highlight)}</div>`
        : '';
    const figure = (sec.image && sec.image.url)
        ? `<figure class="figure"><img src="../${sec.image.url}" alt="${esc(sec.image.alt || sec.title || '')}" loading="lazy"><figcaption>${esc(sec.image.caption || sec.title || '')}</figcaption></figure>`
        : '';
    return `
<section class="lesson-section" id="section-${si}" data-section>
    <p class="sec-num">Capítulo ${num}</p>
    <h2>${esc(sec.title || '')}</h2>
    <p class="sec-body">${inlineMd(sec.content || '')}</p>
    ${callout}
    ${figure}
</section>`;
}

function supportTextHtml(st) {
    const paragraphs = (st.paragraphs || []).map(p =>
        `<p class="prose-body" style="margin-bottom:.8rem">${inlineMd(p)}</p>`).join('');
    return `
<div class="support-text editorial-rule" style="margin-block:2.5rem">
    <span class="eyebrow"><i class="fas fa-quote-left" style="margin-right:.4rem"></i> Texto de apoio</span>
    <div style="border-left:3px solid var(--era);padding:0 0 0 1.4rem;margin-top:1rem">
        ${paragraphs}
        <p style="font-family:var(--font-label);font-size:.7rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3);margin-top:.8rem">Fonte: ${esc(st.source || '')}</p>
    </div>
</div>`;
}

function quizItemHtml(q, i, index) {
    const correct = quizCorrect(q);
    const source = questionSource(q);
    const qid = `q${index}_${i}`;
    const n = q.options ? q.options.length : 0;
    const opts = (q.options || []).map((opt, oi) => `
        <button type="button" class="quiz-opt" data-index="${oi}" data-correct="${correct === oi ? '1' : '0'}">
            <span class="opt-key">${String.fromCharCode(65 + oi)}</span>
            <span class="opt-text">${esc(stripOptionPrefix(opt))}</span>
        </button>`).join('');

    return `
<div class="quiz-item" data-qid="${qid}" data-total="${(globalQuizCount || 1)}">
    <div class="editorial-rule" style="margin-bottom:.9rem">
        <span style="font-family:var(--font-label);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--ink-3)">Questão ${String.fromCharCode(65 + i)} · ${esc(source.label)}</span>
    </div>
    <p class="quiz-q">${esc(q.question)}</p>
    <div class="quiz-opts">${opts}</div>
    <div class="quiz-feedback" style="display:none">
        <strong style="color:var(--ink)"><i class="fas fa-lightbulb" style="margin-right:.4rem;color:var(--era)"></i>Resposta correta: ${correct >= 0 ? String.fromCharCode(65 + correct) : '—'}</strong>
        <p style="margin-top:.4rem;color:var(--ink-2)">${q.explanation ? esc(q.explanation) : ''}</p>
    </div>
</div>`;
}

function flashcardsHtml(cards) {
    if (!cards || !cards.length) return '';
    const items = cards.map(f => `
        <div class="flash-card" tabindex="0" role="button" aria-label="Virar cartão">
            <div class="flash-inner">
                <div class="flash-face front"><i class="fas fa-question" style="color:var(--era);margin-bottom:.6rem"></i><strong style="font-size:.95rem">${esc(f.front)}</strong></div>
                <div class="flash-face back">${esc(f.back || '')}</div>
            </div>
        </div>`).join('');
    return `
<h3 class="display-md" style="margin-bottom:1rem"><i class="fas fa-layer-group" style="color:var(--era);margin-right:.6rem"></i>Flashcards de revisão</h3>
<p style="color:var(--ink-2);font-size:.9rem;margin-bottom:1.2rem">Toque para revelar a resposta. Repita até sair sem hesitar.</p>
<div class="flash-grid">${items}</div>`;
}

function trueFalseHtml(cards) {
    if (!cards || !cards.length) return '';
    const items = cards.map(t => `
        <div class="tf-card" data-answer="${t.is_true ? '1' : '0'}">
            <p style="font-family:var(--font-display);font-size:1.15rem;line-height:1.45;margin-bottom:1.1rem">"${esc(t.statement)}"</p>
            <div style="display:flex;justify-content:center;gap:.7rem;flex-wrap:wrap">
                <button type="button" class="tf-btn true" data-tf="1">Verdade</button>
                <button type="button" class="tf-btn false" data-tf="0">Mito</button>
            </div>
            <div class="quiz-feedback tf-feedback" style="display:none;text-align:left">
                <strong style="color:var(--ink)"><i class="fas fa-check-double" style="margin-right:.4rem;color:var(--era)"></i>${t.is_true ? 'Verdade' : 'Mito'}</strong>
                <p style="margin-top:.4rem;color:var(--ink-2)">${esc(t.explanation || '')}</p>
            </div>
        </div>`).join('');
    return `
<h3 class="display-md" style="margin-bottom:1rem"><i class="fas fa-check-double" style="color:var(--era);margin-right:.6rem"></i>Mitos e verdades</h3>
<p style="color:var(--ink-2);font-size:.9rem;margin-bottom:1.2rem">O senso comum está cheio de desinformação histórica. Separe os fatos.</p>
<div style="display:grid;gap:1rem">${items}</div>`;
}

function timelineHtml(events, index) {
    if (!events || !events.length) return '';
    const id = `tl_${index}`;
    const shuffled = seededShuffle(events, `${(globalLessonId || 'x')}-timeline`);
    const pool = shuffled.map(t => `
        <div class="tl-card" data-order="${t.order}" tabindex="0" role="button">
            <i class="fas fa-arrows-alt-v" style="color:var(--era);flex:0 0 auto"></i>
            <span>${esc(t.event)}</span>
        </div>`).join('');
    const slots = events.map((t, i) => `
        <div class="tl-slot" data-expected="${i + 1}"><span style="color:var(--ink-3);font-size:.8rem">? </span></div>`).join('');
    return `
<h3 class="display-md" style="margin-bottom:1rem"><i class="fas fa-stream" style="color:var(--era);margin-right:.6rem"></i>Linha do tempo</h3>
<p style="color:var(--ink-2);font-size:.9rem;margin-bottom:1.2rem">Clique nos eventos na ordem cronológica correta.</p>
<div data-timeline-board data-id="${id}">
    <div data-pool style="display:grid;gap:.6rem">${pool}</div>
    <div data-slots style="border-top:1px solid var(--line);margin-top:1.2rem;padding-top:1rem;display:grid;gap:.4rem">${slots}</div>
    <div data-feedback style="display:none;margin-top:1.2rem">
        <div style="border:1.5px solid color-mix(in srgb,var(--success) 40%,transparent);border-radius:var(--r-md);background:color-mix(in srgb,var(--success) 8%,var(--surface));padding:1rem;text-align:center">
            <strong style="color:var(--success)"><i class="fas fa-check-circle" style="margin-right:.4rem"></i>Cronologia perfeita!</strong>
        </div>
    </div>
</div>`;
}

function memoryHtml(cards, index) {
    if (!cards || !cards.length) return '';
    const deck = [];
    cards.forEach((m, idx) => {
        deck.push({ id: idx, text: m.concept });
        deck.push({ id: idx, text: m.match });
    });
    const shuffled = seededShuffle(deck, `${(globalLessonId || 'x')}-memory`);
    const tiles = shuffled.map(c => `
        <div class="mem-card" data-pair="${c.id}" tabindex="0" role="button" aria-label="Cartão do jogo da memória">
            <div class="mem-inner">
                <div class="mem-face front"><i class="fas fa-brain" style="color:var(--era);font-size:1.4rem"></i></div>
                <div class="mem-face back">${esc(c.text)}</div>
            </div>
        </div>`).join('');
    return `
<h3 class="display-md" style="margin-bottom:1rem"><i class="fas fa-puzzle-piece" style="color:var(--era);margin-right:.6rem"></i>Associações</h3>
<p style="color:var(--ink-2);font-size:.9rem;margin-bottom:1.2rem">Encontre os pares conceito ↔ definição.</p>
<div class="mem-grid">${tiles}</div>`;
}

function wordGameHtml(w, index) {
    if (!w || !w.secret_word) return '';
    const id = `ws_${index}`;
    const letters = w.secret_word.split('').map(l => l === ' '
        ? '<div class="word-block" style="background:transparent;border-color:transparent;pointer-events:none">&nbsp;</div>'
        : '<div class="word-block" tabindex="0">&nbsp;</div>').join('');
    return `
<h3 class="display-md" style="margin-bottom:1rem"><i class="fas fa-chess-bishop" style="color:var(--era);margin-right:.6rem"></i>Termo oculto</h3>
<p style="color:var(--ink-2);font-size:.9rem;margin-bottom:1.2rem"><strong style="color:var(--era)">Dica:</strong> ${esc(w.hint || '')}</p>
<div style="background:var(--ink);border-radius:var(--r-lg);padding:2rem 1.5rem;text-align:center" data-wordgame data-id="${id}" data-secret="${esc(w.secret_word)}">
    <div data-letters style="display:flex;justify-content:center;gap:.45rem;flex-wrap:wrap;margin-bottom:1.4rem">${letters}</div>
    <input type="text" class="word-input" autocomplete="off" autocapitalize="characters" spellcheck="false" aria-label="Digite o termo histórico" style="width:100%;max-width:280px;padding:.85rem 1rem;border-radius:100px;border:1.5px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;text-align:center;font-family:var(--font-label);letter-spacing:.2em">
    <div style="margin-top:1rem;display:flex;justify-content:center;gap:.6rem;flex-wrap:wrap">
        <button type="button" class="btn btn-ghost btn-sm" data-reveal style="color:#fff;border-color:rgba(255,255,255,.25)"><i class="fas fa-eye"></i> Revelar</button>
        <button type="button" class="btn btn-ghost btn-sm" data-again style="color:#fff;border-color:rgba(255,255,255,.25)"><i class="fas fa-rotate-right"></i> Limpar</button>
    </div>
    <div data-overlay style="display:none;margin-top:1.2rem">
        <div style="border:1.5px solid var(--era);border-radius:var(--r-md);background:var(--era-wash);padding:1rem">
            <strong style="color:var(--era-ink);font-size:1.2rem;font-family:var(--font-display)">${esc(w.secret_word)}</strong>
            <p style="color:var(--ink-2);font-size:.85rem;margin-top:.3rem">Excelente! Termo revelado.</p>
        </div>
    </div>
</div>`;
}

// Global context used by generators above (quiz count / lesson id for seeds)
let globalQuizCount = 1;
let globalLessonId = 'x';

async function build() {
    console.log('🚀 Iniciando build final do HistóriaENEM (editorial)...');

    try {
        const lessonsIndex = JSON.parse(fs.readFileSync(paths.index, 'utf8'));
        const template = fs.readFileSync(paths.template, 'utf8');
        const lessons = lessonsIndex.filter(l => l.category !== 'Outras Matérias');
        const stats = lessons.reduce((acc, meta) => {
            const file = path.join(paths.dataFolder, `${meta.id}.json`);
            if (!fs.existsSync(file)) return acc;
            const data = JSON.parse(fs.readFileSync(file, 'utf8'));
            (data.quiz || []).forEach(q => acc[questionSource(q).type]++);
            acc.questions += (data.quiz || []).length;
            acc.lessons++;
            return acc;
        }, { lessons: 0, questions: 0, official: 0, practice: 0, authorial: 0 });

        if (!fs.existsSync(paths.outputFolder)) fs.mkdirSync(paths.outputFolder, { recursive: true });

        // ---------- 1. Páginas de aula ----------
        lessons.forEach((meta, index) => {
            const lessonJsonPath = path.join(paths.dataFolder, `${meta.id}.json`);
            if (!fs.existsSync(lessonJsonPath)) return;
            const lessonData = JSON.parse(fs.readFileSync(lessonJsonPath, 'utf8'));
            const prevLesson = lessons[index - 1];
            const nextLesson = lessons[index + 1];
            globalLessonId = meta.id;
            globalQuizCount = (lessonData.quiz || []).length;

            const theme = classifyEra(meta);
            const themeName = theme.replace('theme-', '');

            // Seções
            const sectionsHtml = (lessonData.sections || []).map((sec, si) =>
                sectionHtml(sec, si, index)).join('');

            // Textos de apoio
            const supportTextsHtml = (lessonData.support_texts || []).map(st =>
                supportTextHtml(st)).join('');

            // TOC
            const tocItems = (lessonData.sections || []).map((sec, i) => `
                <li><a href="#section-${i}">${esc(sec.title || '')}</a></li>`).join('');

            // Tags
            const tags = lessonData.metadata && lessonData.metadata.tags
                ? lessonData.metadata.tags.map(t => `<span class="chip era">${esc(t)}</span>`).join(' ')
                : '';

            // Quiz
            const quizHtml = (lessonData.quiz || []).map((q, i) =>
                quizItemHtml(q, i, index)).join('');

            // Games
            let gamesHtml = '';
            let modalsHtml = '';
            const g = lessonData.games || {};

            const tiles = [];
            const modals = [];

            if (g.flashcards && g.flashcards.length) {
                tiles.push(`<button type="button" class="game-tile" data-open-modal="hs_modal_fc_${index}"><span class="tile-icon"><i class="fas fa-layer-group"></i></span><span class="tile-title">Flashcards</span></button>`);
                modals.push(buildModal(`hs_modal_fc_${index}`, flashcardsHtml(g.flashcards)));
            }
            if (g.true_false && g.true_false.length) {
                tiles.push(`<button type="button" class="game-tile" data-open-modal="hs_modal_tf_${index}"><span class="tile-icon"><i class="fas fa-check-double"></i></span><span class="tile-title">Mitos e verdades</span></button>`);
                modals.push(buildModal(`hs_modal_tf_${index}`, trueFalseHtml(g.true_false)));
            }
            if (g.timeline && g.timeline.length) {
                tiles.push(`<button type="button" class="game-tile" data-open-modal="hs_modal_tl_${index}"><span class="tile-icon"><i class="fas fa-stream"></i></span><span class="tile-title">Linha do tempo</span></button>`);
                modals.push(buildModal(`hs_modal_tl_${index}`, timelineHtml(g.timeline, index)));
            }
            if (g.memory && g.memory.length) {
                tiles.push(`<button type="button" class="game-tile" data-open-modal="hs_modal_mem_${index}"><span class="tile-icon"><i class="fas fa-puzzle-piece"></i></span><span class="tile-title">Associações</span></button>`);
                modals.push(buildModal(`hs_modal_mem_${index}`, memoryHtml(g.memory, index)));
            }
            if (g.wordsearch && g.wordsearch.secret_word) {
                tiles.push(`<button type="button" class="game-tile" data-open-modal="hs_modal_ws_${index}"><span class="tile-icon"><i class="fas fa-chess-bishop"></i></span><span class="tile-title">Termo oculto</span></button>`);
                modals.push(buildModal(`hs_modal_ws_${index}`, wordGameHtml(g.wordsearch, index)));
            }
            if (tiles.length) {
                gamesHtml = `
                <div class="section-head">
                    <span class="idx">⚡</span>
                    <div>
                        <span class="eyebrow">Arcade</span>
                        <h2 class="display-md" style="margin-top:.4rem">Atividades interativas</h2>
                    </div>
                </div>
                <div class="games-grid">${tiles.join('')}</div>`;
                modalsHtml = modals.join('');
            }

            // SEO
            const lessonTitle = (lessonData.metadata && lessonData.metadata.title) || meta.title;
            let seo = '';
            let breadcrumb = '';
            try {
              seo = renderSeo(lessonData);
              breadcrumb = renderBreadcrumb(meta.id, lessonTitle);
            } catch (e) { seo = ''; breadcrumb = ''; }

            // Navegação prev/next
            function shortTitle(t, max) {
                const base = t.split(':')[0].trim();
                if (base.length <= max) return base;
                const cut = base.slice(0, max - 1);
                const idx = cut.lastIndexOf(' ');
                return (idx > 6 ? cut.slice(0, idx) : cut) + '…';
            }
            const prevBtn = prevLesson ? `<a href="${prevLesson.id}.html" class="btn btn-ghost"><i class="fas fa-arrow-left"></i> Anterior</a>` : ' <span></span>';
            const nextBtn = nextLesson ? `<a href="${nextLesson.id}.html" class="btn btn-primary">${esc(shortTitle(nextLesson.title, 34))}<i class="fas fa-arrow-right"></i></a>` : `<a href="Indice_aulas.html" class="btn btn-primary">Concluir trilha <i class="fas fa-flag-checkered"></i></a>`;
            const navLabel = nextLesson ? 'Continue a trilha cronológica' : 'Fim da trilha';
            const floatNext = nextLesson ? `
            <a href="${nextLesson.id}.html" class="btn btn-primary" style="position:fixed;bottom:1.2rem;right:1.2rem;z-index:70;box-shadow:var(--sh-lg)">
                <i class="fas fa-arrow-right"></i> ${esc(shortTitle(nextLesson.title, 16))}
            </a>` : '';

            let html = template
                .replace(/\{\{TITLE\}\}/g, esc((lessonData.metadata && lessonData.metadata.title) || meta.title))
                .replace(/\{\{PERIOD\}\}/g, esc((lessonData.metadata && lessonData.metadata.period) || meta.period))
                .replace(/\{\{CATEGORY\}\}/g, esc((lessonData.metadata && lessonData.metadata.area) || meta.category))
                .replace(/\{\{DIFFICULTY\}\}/g, esc((lessonData.metadata && lessonData.metadata.difficulty) || 'Nível ENEM'))
                .replace(/\{\{HERO_META_EXTRA\}\}/g, `<div class="anim-in" style="animation-delay:.2s;margin-top:1.4rem;display:flex;flex-wrap:wrap;gap:.5rem">${tags}</div>`)
                .replace(/\{\{INTRO\}\}/g, esc(lessonData.intro || ''))
                .replace(/\{\{THEORY_CONTENT\}\}/g, inlineMd(lessonData.theory_content || ''))
                .replace(/\{\{SECTIONS_HTML\}\}/g, sectionsHtml)
                .replace(/\{\{SUPPORT_TEXTS_HTML\}\}/g, supportTextsHtml)
                .replace(/\{\{TOPICS_NAV\}\}/g, tocItems)
                .replace(/\{\{QUIZ_HTML\}\}/g, quizHtml)
                .replace(/\{\{GAMES_HTML\}\}/g, gamesHtml)
                .replace(/\{\{MODALS_HTML\}\}/g, modalsHtml)
                .replace(/\{\{THEME_CLASS\}\}/g, theme)
                .replace(/\{\{LESSON_ID\}\}/g, meta.id)
                .replace(/\{\{SEO_JSONLD\}\}/g, seo)
                .replace(/\{\{BREADCRUMB\}\}/g, breadcrumb)
                .replace(/\{\{CANONICAL\}\}/g, SITE_URL + '/aulas/' + meta.id + '.html')
                .replace(/\{\{DESCRIPTION\}\}/g, esc((lessonData.metadata && lessonData.metadata.title) + ' — Aula de História para o ENEM. ' + (lessonData.intro || '').slice(0, 140)))
                .replace(/\{\{NAV_LABEL\}\}/g, navLabel)
                .replace(/\{\{PREV_BTN\}\}/g, prevBtn)
                .replace(/\{\{NEXT_BTN\}\}/g, nextBtn)
                .replace(/\{\{FLOAT_NEXT\}\}/g, floatNext);

            fs.writeFileSync(path.join(paths.outputFolder, `${meta.id}.html`), a11yIcons(html));
        });

        // ---------- 2. Índice de aulas ----------
        console.log('📑 Gerando Índice Editorial com busca e progresso...');
        const indexTemplate = fs.readFileSync('aulas/Indice-template.html', 'utf8');

        const gridHtml = lessons.map(l => {
            const theme = classifyEra(l);
            const t = esc(l.tags.join(', '));
            const rel = '<span style="color:var(--era);letter-spacing:.14em">' + '★'.repeat(l.relevance || 0) + '</span>';
            const back = l.thumbnail ? `../${l.thumbnail}` : '';
            return `
<article class="lesson-card ${theme}" data-id="${esc(l.id)}" data-title="${esc(l.title)}" data-period="${esc(l.period || '')}" data-tags="${t}" data-eras="${themeName(l)}">
    <a href="${l.id}.html" class="card-media">
        ${back ? `<img src="${back}" alt="${esc(l.title)}" loading="lazy">` : ''}
        <span class="period-tag">${esc(l.period || '')}</span>
        <span class="done-badge" aria-label="Aula concluída"><i class="fas fa-check"></i></span>
    </a>
    <div class="card-body">
        <h3><a href="${l.id}.html" style="color:inherit;text-decoration:none">${esc(l.title)}</a></h3>
        <div class="card-chips">${esc((l.tags || []).slice(0, 3).join(' · ')) ? (l.tags || []).slice(0, 3).map(x => `<span class="chip">${esc(x)}</span>`).join('') : ''}</div>
        <div class="card-foot">
            <span class="relevance">${rel}</span>
            <a href="${l.id}.html" class="card-go">Estudar <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
        <div class="pb-track" style="height:5px;margin-top:.2rem"><div class="pb-fill" style="width:0%"></div></div>
    </div>
</article>`;
        }).join('');

        const finalHtml = indexTemplate.replace('{{LESSONS_GRID}}', gridHtml).replace('{{CANONICAL_IDX}}', SITE_URL + '/aulas/Indice_aulas.html');

        fs.writeFileSync('aulas/Indice_aulas.html', a11yIcons(finalHtml));

        // ---------- 3. Home, sitemap + robots ----------
        const home = fs.readFileSync('index-template.html', 'utf8')
            .replace(/\{\{LESSON_COUNT\}\}/g, String(stats.lessons))
            .replace(/\{\{QUESTION_COUNT\}\}/g, String(stats.questions))
            .replace(/\{\{OFFICIAL_COUNT\}\}/g, String(stats.official))
            .replace(/\{\{PRACTICE_COUNT\}\}/g, String(stats.practice))
            .replace(/\{\{AUTHORIAL_COUNT\}\}/g, String(stats.authorial));
        fs.writeFileSync('index.html', a11yIcons(home));
        const urls = ['/', '/como-estudar-enem.html', '/aulas/Indice_aulas.html'];
        lessons.forEach(l => urls.push('/aulas/' + l.id + '.html'));
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(u => `  <url>\n    <loc>${SITE_URL}${u}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${u === '/' ? '1.0' : u === '/aulas/Indice_aulas.html' ? '0.9' : '0.8'}</priority>\n  </url>`).join('\n')}
</urlset>`;
        fs.writeFileSync('sitemap.xml', sitemap);

        fs.writeFileSync('robots.txt', `User-agent: *
Allow: /
Disallow: /aulas/lesson-template.html
Disallow: /aulas/Indice-template.html

Sitemap: ${SITE_URL}/sitemap.xml
`);

        console.log('✅ Build Concluído! ' + stats.lessons + ' aulas e ' + stats.questions + ' questões geradas.');
        console.log('   Procedência: ' + stats.official + ' oficiais identificadas, ' + stats.practice + ' simulados/modelos, ' + stats.authorial + ' autorais.');
        console.log('   Sitemap: ' + urls.length + ' URLs.');
    } catch (err) { console.error('❌ Erro:', err); }
}

function themeName(l) {
    const t = classifyEra(l);
    return t.replace('theme-', '');
}

build();
