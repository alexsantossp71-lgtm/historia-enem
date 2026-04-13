const fs = require('fs');
const path = require('path');

const paths = {
    index: 'content/data/lessonsIndex.json',
    dataFolder: 'content/data/',
    template: 'aulas/lesson-template.html',
    outputFolder: 'aulas/'
};

async function build() {
    console.log('🚀 Iniciando build final do HistóriaENEM...');

    try {
        const lessonsIndex = JSON.parse(fs.readFileSync(paths.index, 'utf8'));
        const template = fs.readFileSync(paths.template, 'utf8');
        const lessons = lessonsIndex.filter(l => l.category !== 'Outras Matérias');

        if (!fs.existsSync(paths.outputFolder)) fs.mkdirSync(paths.outputFolder, { recursive: true });

        // 1. Generate All Lesson Pages
        lessons.forEach((meta, index) => {
            const lessonJsonPath = path.join(paths.dataFolder, `${meta.id}.json`);
            if (!fs.existsSync(lessonJsonPath)) return;
            const lessonData = JSON.parse(fs.readFileSync(lessonJsonPath, 'utf8'));
            const nextLesson = lessons[index + 1];

            let sectionsHtml = '';
            (lessonData.sections || []).forEach(sec => {
                const imgHtml = (sec.image && sec.image.url) ? `<div class="my-10 hero-img-wrap"><img src="../${sec.image.url}" alt="${sec.image.alt || ''}" class="w-full"></div>` : '';
                sectionsHtml += `<section class="mb-20"><h3 class="text-2xl font-bold text-indigo-950 outfit mb-6">${sec.title || ''}</h3><p class="text-lg text-gray-600 leading-relaxed mb-6">${sec.content || ''}</p>${imgHtml}</section>`;
            });

            let themeClass = 'theme-brasil';
            if (meta.category.includes('Geral')) themeClass = 'theme-geral';

            let supportTextsHtml = '';
            if (lessonData.support_texts && lessonData.support_texts.length > 0) {
                lessonData.support_texts.forEach(st => {
                    const paragraphs = (st.paragraphs || []).map(p => `<p>${p}</p>`).join('');
                    supportTextsHtml += `
                    <div class="support-text-box animate-fade-in shadow-sm border-l-4 border-theme-main bg-theme-light/30 p-8 rounded-r-2xl my-12">
                        <h4 class="text-theme-main font-black outfit text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                             <div class="w-2 h-2 rounded-full bg-theme-main"></div> TEXTO DE APOIO
                        </h4>
                        <div class="prose prose-indigo max-w-none text-gray-700 leading-relaxed space-y-4 mb-6 italic">
                            ${paragraphs}
                        </div>
                        <div class="text-[10px] font-bold text-gray-400 uppercase tracking-tighter border-t border-gray-100 pt-4">
                            Fonte: ${st.source}
                        </div>
                    </div>`;
                });
            }

            let topicsNavHtml = '';
            (lessonData.sections || []).forEach((sec, i) => {
                topicsNavHtml += `<li><a href="#section-${i}" class="text-sm text-gray-500 hover:text-theme-main transition-colors flex items-center gap-2 font-medium"><div class="w-1.5 h-1.5 rounded-full bg-gray-200"></div> ${sec.title}</a></li>`;
            });

            let quizHtml = '';
            (lessonData.quiz || []).forEach((q, i) => {
                const options = (q.options || []).map((opt, oi) => `
                    <div class="p-4 rounded-xl border border-gray-100 bg-white hover:border-theme-main transition-all cursor-pointer group">
                        <div class="flex items-center gap-3">
                            <span class="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-[10px] font-bold text-gray-400 group-hover:bg-theme-main group-hover:text-white transition-colors">${String.fromCharCode(65 + oi)}</span>
                            <span class="text-sm text-gray-600">${opt}</span>
                        </div>
                    </div>`).join('');
                
                quizHtml += `
                <div class="mb-12 last:mb-0">
                    <div class="flex items-center gap-2 mb-4">
                        <span class="text-[10px] font-black uppercase tracking-widest text-theme-main bg-theme-light px-2 py-1 rounded">Questão ${i + 1}</span>
                        <span class="text-[9px] font-bold text-gray-400 uppercase tracking-widest">${q.source || 'ENEM'}</span>
                    </div>
                    <p class="text-lg font-bold text-indigo-950 mb-6 leading-snug">${q.question}</p>
                    <div class="grid grid-cols-1 gap-3">
                        ${options}
                    </div>
                </div>`;
            });

            let gamesHtml = '';
            let finalModalsHtml = '';
            if (lessonData.games) {
                let dashboardHtml = `<div class="bg-indigo-50/50 p-8 rounded-[2rem] border border-indigo-100 shadow-inner mt-12 mb-12">
                    <h3 class="text-2xl font-black outfit text-indigo-950 mb-2">Arcade Histórico</h4>
                    <p class="text-sm text-gray-600 mb-8">Escolha um dos jogos abaixo para fixar o aprendizado deste módulo:</p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">`;
                
                let modalsHtml = '';
                
                // Helper to create Modal Wrapper
                const buildModal = (id, content) => `
                <div id="${id}" class="fixed inset-0 bg-indigo-950/90 z-[9999] hidden items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
                   <div class="bg-white rounded-[2rem] shadow-2xl w-11/12 max-w-3xl max-h-[80vh] overflow-y-auto relative p-6 md:p-10 border border-emerald-100 dark-scrollbar" style="overscroll-behavior: contain;">
                       <button onclick="document.getElementById('${id}').classList.replace('flex','hidden')" class="absolute top-4 right-4 text-gray-400 hover:text-rose-500 transition-colors z-[1000] bg-gray-100 hover:bg-rose-50 rounded-full w-10 h-10 flex items-center justify-center"><i class="fas fa-times text-xl"></i></button>
                       ${content}
                   </div>
                </div>`;

                if (quizHtml !== '') {
                    dashboardHtml += `
                    <div onclick="document.getElementById('modal_quiz').classList.replace('hidden','flex')" class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all cursor-pointer text-center group">
                        <div class="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-slate-100 transition-colors">
                            <i class="fas fa-tasks text-2xl text-slate-600"></i>
                        </div>
                        <h5 class="font-bold text-indigo-950 text-sm">Quiz Exame</h5>
                    </div>`;
                    
                    let completeQuizHtml = `<h4 class="text-2xl font-black text-indigo-950 outfit mb-6 flex items-center justify-center gap-3"><i class="fas fa-question-circle text-theme-main"></i> Simulado Oficial</h4><div id="quiz-container">${quizHtml}</div>`;
                    modalsHtml += buildModal('modal_quiz', completeQuizHtml);
                }

                if (lessonData.games.flashcards && lessonData.games.flashcards.length > 0) {
                    dashboardHtml += `
                    <div onclick="document.getElementById('modal_flashcards').classList.replace('hidden','flex')" class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all cursor-pointer text-center group">
                        <div class="w-16 h-16 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                            <i class="fas fa-layer-group text-2xl text-emerald-600"></i>
                        </div>
                        <h5 class="font-bold text-indigo-950 text-sm">Flashcards</h5>
                    </div>`;
                    
                    let flashcardsHtml = `<h4 class="text-2xl font-black outfit text-theme-main mb-8 text-center"><i class="fas fa-layer-group mr-2"></i> Flashcards de Revisão</h4><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;
                    lessonData.games.flashcards.forEach((f) => {
                        flashcardsHtml += `
                        <div class="group h-56 [perspective:1000px] cursor-pointer">
                            <div class="relative h-full w-full rounded-2xl shadow-sm border border-gray-200 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                                <div class="absolute inset-0 flex items-center justify-center p-8 bg-gray-50 rounded-2xl [backface-visibility:hidden]">
                                    <p class="text-base font-bold text-indigo-950 text-center leading-relaxed">${f.front}</p>
                                    <div class="absolute bottom-4 text-[10px] text-gray-400 uppercase font-black tracking-widest"><i class="fas fa-hand-pointer mr-1"></i> Passe o mouse</div>
                                </div>
                                <div class="absolute inset-0 h-full w-full rounded-2xl bg-indigo-950 text-white p-8 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto custom-scrollbar flex items-center justify-center shadow-xl border-2 border-theme-main/30">
                                    <p class="text-sm font-medium leading-relaxed">${f.back}</p>
                                </div>
                            </div>
                        </div>`;
                    });
                    flashcardsHtml += `</div>`;
                    modalsHtml += buildModal('modal_flashcards', flashcardsHtml);
                }

                if (lessonData.games.true_false && lessonData.games.true_false.length > 0) {
                    dashboardHtml += `
                    <div onclick="document.getElementById('modal_tf').classList.replace('hidden','flex')" class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all cursor-pointer text-center group">
                        <div class="w-16 h-16 mx-auto bg-rose-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
                            <i class="fas fa-check-double text-2xl text-rose-600"></i>
                        </div>
                        <h5 class="font-bold text-indigo-950 text-sm">Mitos vs Verdades</h5>
                    </div>`;

                    let tfHtml = `<h4 class="text-2xl font-black outfit text-theme-main mb-8 text-center"><i class="fas fa-check-double mr-2"></i> Mitos e Verdades</h4><div class="space-y-6">`;
                    lessonData.games.true_false.forEach((tf, idx) => {
                        let uniqId = `tf_${index}_${idx}`;
                        tfHtml += `
                        <div class="relative bg-gray-50 rounded-2xl border border-gray-200 p-8 shadow-sm transition-all overflow-hidden" id="${uniqId}">
                            <p class="text-base font-bold text-indigo-950 mb-6 text-center leading-relaxed">"${tf.statement}"</p>
                            <div class="flex gap-4 justify-center" id="btns_${uniqId}">
                                <button onclick="document.getElementById('feedback_${uniqId}').classList.remove('hidden'); document.getElementById('btns_${uniqId}').classList.add('hidden')" class="w-32 py-4 rounded-xl bg-emerald-500 text-white font-black text-xs uppercase tracking-widest hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/30">Verdade</button>
                                <button onclick="document.getElementById('feedback_${uniqId}').classList.remove('hidden'); document.getElementById('btns_${uniqId}').classList.add('hidden')" class="w-32 py-4 rounded-xl bg-rose-500 text-white font-black text-xs uppercase tracking-widest hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/30">Mito</button>
                            </div>
                            <div id="feedback_${uniqId}" class="hidden mt-6 pt-6 border-t ${tf.is_true ? 'border-emerald-200' : 'border-rose-200'} animate-fade-in text-center">
                                <p class="text-xs font-black ${tf.is_true ? 'text-emerald-600' : 'text-rose-600'} mb-3 uppercase tracking-widest"><i class="fas ${tf.is_true ? 'fa-check-circle' : 'fa-times-circle'} mr-1 text-base"></i> A AFIRMAÇÃO É ${tf.is_true ? 'VERDADE' : 'UM MITO'}</p>
                                <p class="text-sm text-gray-700 leading-relaxed">${tf.explanation}</p>
                            </div>
                        </div>`;
                    });
                    tfHtml += `</div>`;
                    modalsHtml += buildModal('modal_tf', tfHtml);
                }

                if (lessonData.games.timeline && lessonData.games.timeline.length > 0) {
                    dashboardHtml += `
                    <div onclick="document.getElementById('modal_timeline').classList.replace('hidden','flex')" class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all cursor-pointer text-center group">
                        <div class="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                            <i class="fas fa-stream text-2xl text-blue-600"></i>
                        </div>
                        <h5 class="font-bold text-indigo-950 text-sm">Linha do Tempo</h5>
                    </div>`;

                    let uniqIdTl = `tl_${index}`;
                    let timelineHtml = `<h4 class="text-2xl font-black outfit text-theme-main mb-4 text-center"><i class="fas fa-stream mr-2"></i> Ordenação Histórica</h4>
                    <p class="text-center text-xs md:text-sm text-gray-500 mb-8 tracking-widest uppercase font-bold">Toque nos eventos na ordem cronológica correta</p>
                    
                    <div class="flex flex-col md:flex-row gap-8">
                        <div class="flex-1">
                            <h5 class="text-xs font-black text-indigo-950 uppercase tracking-widest mb-4 border-b pb-2"><i class="fas fa-list-ul mr-2"></i> Eventos Desordenados</h5>
                            <div class="space-y-3" id="pool_${uniqIdTl}">`;
                    
                    let tlCards = [...lessonData.games.timeline];
                    // Shuffle
                    for(let i = tlCards.length - 1; i > 0; i--){
                        const j = Math.floor(Math.random()*(i+1));
                        [tlCards[i], tlCards[j]] = [tlCards[j], tlCards[i]];
                    }

                    tlCards.forEach((t) => {
                        timelineHtml += `
                                <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group" data-order="${t.order}" onclick="moveTimelineCard('${uniqIdTl}', this, ${lessonData.games.timeline.length})">
                                    <div class="flex items-center">
                                        <div class="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors"><i class="fas fa-hand-pointer"></i></div>
                                        <p class="text-xs md:text-sm font-bold text-indigo-950 flex-1 leading-snug">${t.event}</p>
                                    </div>
                                </div>`;
                    });

                    timelineHtml += `
                            </div>
                        </div>
                        
                        <div class="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-inner">
                            <h5 class="text-xs font-black text-emerald-600 uppercase tracking-widest mb-6"><i class="fas fa-history mr-2"></i> Linha do Tempo</h5>
                            <div class="relative border-l-2 border-gray-300 ml-4 space-y-6" id="slots_${uniqIdTl}">
                                <!-- Empty states -->
                                ${lessonData.games.timeline.map((t, i) => `
                                <div class="relative pl-6 slot-empty" id="slot_${uniqIdTl}_${i+1}" data-expected="${i+1}">
                                    <div class="absolute w-4 h-4 rounded-full bg-gray-300 -left-[9px] top-1 shadow-[0_0_0_4px_#f9fafb]"></div>
                                    <div class="border-2 border-dashed border-gray-300 rounded-xl h-12 flex items-center justify-center text-gray-400 text-xs font-bold uppercase tracking-widest">Passo ${i+1}</div>
                                </div>`).join('')}
                            </div>
                            
                            <div id="feedback_${uniqIdTl}" class="mt-8 text-center hidden animate-fade-in">
                                <div class="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4"><i class="fas fa-check text-3xl text-emerald-600"></i></div>
                                <h3 class="text-indigo-950 font-black text-xl uppercase tracking-widest mb-2">Perfeito!</h3>
                                <p class="text-gray-500 text-xs">A cronologia está exata.</p>
                                <button onclick="resetTimeline('${uniqIdTl}')" class="mt-4 text-theme-main text-xs font-bold uppercase tracking-widest hover:underline">Vou tentar novamente</button>
                            </div>
                        </div>
                    </div>`;

                    modalsHtml += buildModal('modal_timeline', timelineHtml);
                }

                if (lessonData.games.memory && lessonData.games.memory.length > 0) {
                    dashboardHtml += `
                    <div onclick="document.getElementById('modal_memory').classList.replace('hidden','flex')" class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all cursor-pointer text-center group">
                        <div class="w-16 h-16 mx-auto bg-purple-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                            <i class="fas fa-puzzle-piece text-2xl text-purple-600"></i>
                        </div>
                        <h5 class="font-bold text-indigo-950 text-sm">Jogo da Memória</h5>
                    </div>`;

                    let memoryHtml = `<h4 class="text-2xl font-black outfit text-theme-main mb-4 text-center"><i class="fas fa-puzzle-piece mr-2"></i> Associações</h4>
                    <p class="text-center text-sm text-gray-500 mb-8">Encontre os pares corretos virando as cartas.</p>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">`;
                    
                    let cards = [];
                    lessonData.games.memory.forEach((m, idx) => {
                        cards.push({ id: idx, text: m.concept });
                        cards.push({ id: idx, text: m.match });
                    });
                    for (let i = cards.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [cards[i], cards[j]] = [cards[j], cards[i]];
                    }

                    cards.forEach((c) => {
                        memoryHtml += `
                        <div class="h-36 [perspective:1000px] cursor-pointer" data-pair="${c.id}" onclick="flipMemory(this)">
                            <div class="relative h-full w-full rounded-2xl shadow-sm border border-gray-200 transition-all duration-300 [transform-style:preserve-3d] mem-inner">
                                <div class="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 rounded-2xl [backface-visibility:hidden] hover:bg-gray-100 transition-colors">
                                    <i class="fas fa-brain text-purple-200 text-3xl mb-2"></i>
                                    <span class="text-[9px] font-bold tracking-widest uppercase text-gray-400">Virar</span>
                                </div>
                                <div class="absolute inset-0 h-full w-full rounded-2xl bg-indigo-950 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center border-4 border-theme-main/50">
                                    <p class="text-[10px] sm:text-xs font-bold text-center text-white leading-snug">${c.text}</p>
                                </div>
                            </div>
                        </div>`;
                    });
                    memoryHtml += `</div>
                    <!-- The globally shared JS handles flipMemory. Ensure we inject it only once or locally as needed! -->
                    `;
                    modalsHtml += buildModal('modal_memory', memoryHtml);
                }

                if (lessonData.games.wordsearch && lessonData.games.wordsearch.secret_word) {
                    let w = lessonData.games.wordsearch;
                    dashboardHtml += `
                    <div onclick="document.getElementById('modal_word').classList.replace('hidden','flex')" class="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 hover:border-emerald-300 transition-all cursor-pointer text-center group">
                        <div class="w-16 h-16 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                            <i class="fas fa-font text-2xl text-amber-600"></i>
                        </div>
                        <h5 class="font-bold text-indigo-950 text-sm">Palavra Oculta</h5>
                    </div>`;

                    let uniqId = `ws_${index}`;
                    let wordsearchHtml = `<h4 class="text-2xl font-black outfit text-theme-main mb-8 text-center"><i class="fas fa-font mr-2"></i> Termo Histórico Oculto</h4>
                    <div class="bg-indigo-950 rounded-[2rem] p-8 md:p-12 text-center shadow-2xl relative overflow-hidden group">
                        <div class="absolute -top-10 -right-10 w-40 h-40 bg-theme-main/10 rounded-full group-hover:scale-[2] transition-transform duration-1000 ease-in-out"></div>
                        <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-500/10 rounded-full group-hover:scale-[2] transition-transform duration-1000 ease-in-out"></div>
                        <div class="relative z-10 flex flex-col items-center">
                            <i class="fas fa-search text-white/20 text-4xl mb-4"></i>
                            <p class="text-white/80 text-xs md:text-sm font-bold uppercase tracking-widest mb-8 border border-white/20 px-6 py-2 rounded-full backdrop-blur-sm">Dica: ${w.hint}</p>
                            
                            <label class="relative block cursor-text w-full">
                                <input type="text" id="word_input_${uniqId}" class="absolute opacity-0 inset-0 w-full h-full cursor-text z-20" oninput="updateWordGame('${uniqId}', this.value, '${w.secret_word}')" autocomplete="off" autocorrect="off" autocapitalize="characters" spellcheck="false" maxlength="${w.secret_word.replace(/ /g, '').length}">
                                
                                <div class="flex flex-wrap justify-center gap-2 md:gap-3 mb-4" id="word_blocks_${uniqId}">
                                    ${w.secret_word.split('').map(l => l === ' ' ? '<div class="w-4 md:w-6"></div>' : '<div class="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center text-white/20 font-black text-xl md:text-2xl border border-white/10 shadow-inner word-block transition-all">_</div>').join('')}
                                </div>
                            </label>
                            
                            <p class="text-white/50 text-[10px] md:text-xs mb-8 tracking-widest"><i class="fas fa-keyboard mr-1"></i> Toque nas caixas e digite pelo teclado</p>
                            
                            <button id="btn_reveal_${uniqId}" onclick="revealWordGame('${uniqId}', '${w.secret_word}')" class="bg-white/10 text-white/70 px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-white/20 transition-colors border border-white/10 shadow-sm">Revelar Resposta</button>
                            
                            <div id="wd_${uniqId}" class="blur-md opacity-0 pointer-events-none transition-all duration-700 ease-out absolute inset-0 flex flex-col items-center justify-center bg-indigo-950/95 rounded-[2rem] z-30">
                                <span id="span_wd_${uniqId}" class="bg-emerald-500 text-white px-8 py-3 rounded-xl font-black text-lg md:text-2xl tracking-widest shadow-[0_0_40px_rgba(16,185,129,0.5)] border-2 border-emerald-400 transform scale-110 mb-4">${w.secret_word}</span>
                                <p class="text-white text-xs uppercase font-bold tracking-widest" id="msg_${uniqId}">Mistério Revelado</p>
                                <button onclick="document.getElementById('wd_${uniqId}').classList.add('opacity-0', 'pointer-events-none', 'blur-md'); document.getElementById('wd_${uniqId}').classList.remove('opacity-100', 'pointer-events-auto');" class="mt-8 px-6 py-2 border border-white/30 rounded-full text-white/70 hover:bg-white/10 text-xs">Tentar Novamente</button>
                            </div>
                        </div>
                    </div>`;
                    modalsHtml += buildModal('modal_word', wordsearchHtml);
                }

                dashboardHtml += `</div>
                </div>`; // Close games dashboard area
                
                // Inject the Global Javascript for the Memory Game safely into gamesHtml
                let globalMemoryJS = `<script>
                    if (typeof memFlipped === 'undefined') {
                        var memFlipped = [];
                        window.flipMemory = function(el) {
                            if(el.classList.contains('matched') || memFlipped.length >= 2 || memFlipped.includes(el)) return;
                            el.querySelector('.mem-inner').style.transform = 'rotateY(180deg)';
                            memFlipped.push(el);
                            if(memFlipped.length === 2) {
                                setTimeout(() => {
                                    if(memFlipped[0].dataset.pair === memFlipped[1].dataset.pair) {
                                        memFlipped.forEach(c => { 
                                            c.classList.add('matched'); 
                                            c.querySelector('.mem-inner').classList.replace('border-theme-main/50', 'border-emerald-500'); 
                                            c.querySelector('.mem-inner').classList.replace('bg-indigo-950', 'bg-emerald-900'); 
                                        });
                                    } else {
                                        memFlipped.forEach(c => c.querySelector('.mem-inner').style.transform = 'rotateY(0deg)');
                                    }
                                    memFlipped = [];
                                }, 1000);
                            }
                        }
                    }
                    
                    if (typeof updateWordGame === 'undefined') {
                        window.removeAccents = function(str) {
                            return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                        };

                        window.updateWordGame = function(uniqId, value, secret) {
                            let cleanSecret = secret.replace(/ /g, '');
                            let blocks = document.querySelectorAll('#word_blocks_' + uniqId + ' .word-block');
                            let valArr = value.split('');
                            
                            blocks.forEach((b, i) => {
                                if(valArr[i]) {
                                    b.innerHTML = valArr[i].toUpperCase();
                                    b.classList.remove('text-white/20', 'bg-white/5');
                                    b.classList.add('text-white', 'bg-white/20', 'border-white/50');
                                } else {
                                    b.innerHTML = '_';
                                    b.classList.add('text-white/20', 'bg-white/5');
                                    b.classList.remove('text-white', 'bg-white/20', 'border-white/50');
                                }
                            });

                            if(window.removeAccents(value) === window.removeAccents(cleanSecret)) {
                                document.getElementById('msg_' + uniqId).innerHTML = "EXCELENTE! ENIGMA DECIFRADO!";
                                revealWordGame(uniqId, secret);
                            }
                        };

                        window.revealWordGame = function(uniqId, secret) {
                            if(secret) document.getElementById('span_wd_' + uniqId).innerHTML = secret;
                            let overlay = document.getElementById('wd_' + uniqId);
                            overlay.classList.remove('blur-md', 'opacity-0', 'pointer-events-none');
                            overlay.classList.add('opacity-100', 'pointer-events-auto');
                        };

                        window.moveTimelineCard = function(uniqId, el, total) {
                            let slots = document.querySelectorAll('#slots_' + uniqId + ' .slot-empty');
                            if (slots.length === 0) return;
                        
                            let nextSlot = slots[0];
                            let expectedOrder = parseInt(nextSlot.dataset.expected);
                            let cardOrder = parseInt(el.dataset.order);
                        
                            if (expectedOrder === cardOrder) {
                                el.removeAttribute('onclick');
                                el.classList.remove('hover:border-blue-400', 'cursor-pointer');
                                el.classList.add('border-emerald-400', 'bg-emerald-50', 'shadow-md');
                                
                                let circleBg = el.querySelector('.bg-blue-50');
                                let circleIcon = el.querySelector('.text-blue-600');
                                let icon = el.querySelector('i');
                                if (icon) {
                                    icon.classList.remove('fa-hand-pointer');
                                    icon.classList.add('fa-check');
                                    if(circleBg) circleBg.classList.replace('bg-blue-50', 'bg-emerald-100');
                                    if(circleIcon) circleIcon.classList.replace('text-blue-600', 'text-emerald-600');
                                }
                        
                                nextSlot.innerHTML = '<div class="absolute w-4 h-4 rounded-full bg-emerald-500 -left-[9px] top-6 shadow-[0_0_0_4px_#f9fafb]"></div>';
                                nextSlot.appendChild(el);
                                nextSlot.classList.remove('slot-empty');
                        
                                if (document.querySelectorAll('#slots_' + uniqId + ' .slot-empty').length === 0) {
                                    document.getElementById('feedback_' + uniqId).classList.remove('hidden');
                                }
                            } else {
                                el.style.transition = "transform 0.1s";
                                el.style.transform = "translateX(10px)";
                                el.classList.add('border-rose-400', 'bg-rose-50');
                                setTimeout(() => {
                                    el.style.transform = "translateX(-10px)";
                                    setTimeout(() => {
                                        el.style.transform = "translateX(0)";
                                        el.classList.remove('border-rose-400', 'bg-rose-50');
                                    }, 100);
                                }, 100);
                            }
                        };
                        
                        window.resetTimeline = function(uniqId) {
                            window.location.reload();
                        };
                    }
                </script>`;

                if (modalsHtml !== '') {
                    gamesHtml = dashboardHtml;
                    finalModalsHtml = modalsHtml + globalMemoryJS;
                }
            }

            let html = template
                .replace(/{{TITLE}}/g, (lessonData.metadata && lessonData.metadata.title) || meta.title)
                .replace(/{{PERIOD}}/g, (lessonData.metadata && lessonData.metadata.period) || meta.period)
                .replace(/{{CATEGORY}}/g, (lessonData.metadata && lessonData.metadata.area) || meta.category)
                .replace(/{{HERO_IMAGE}}/g, (lessonData.thumbnail && lessonData.thumbnail.url) || meta.thumbnail || '')
                .replace(/{{INTRO}}/g, lessonData.intro || '')
                .replace(/{{THEORY_CONTENT}}/g, lessonData.theory_content || '')
                .replace(/{{SECTIONS_HTML}}/g, sectionsHtml)
                .replace(/{{SUPPORT_TEXTS_HTML}}/g, supportTextsHtml)
                .replace(/{{TOPICS_NAV}}/g, topicsNavHtml)
                .replace(/{{QUIZ_HTML}}/g, quizHtml)
                .replace(/{{GAMES_HTML}}/g, gamesHtml)
                .replace(/{{MODALS_HTML}}/g, finalModalsHtml)
                .replace(/{{THEME_CLASS}}/g, themeClass)
                .replace(/{{NEXT_URL}}/g, nextLesson ? `${nextLesson.id}.html` : 'Indice_aulas.html')
                .replace(/{{NEXT_TITLE}}/g, nextLesson ? nextLesson.title : 'Voltar ao Índice')
                .replace(/{{HIDE_NEXT}}/g, '');

            fs.writeFileSync(path.join(paths.outputFolder, `${meta.id}.html`), html);
        });

        // 2. Generate Static Index Page
        console.log('📑 Gerando Índice de Aulas com Filtros Estáticos...');
        const indexTemplate = fs.readFileSync('aulas/Indice_aulas.html', 'utf8');
        
        const gridHtml = lessons.map(l => {
            let classes = ['group', 'animate-fade-in'];
            
            // Lógica de Categorização e Temas
            if (l.category.includes('Brasil')) {
                classes.push('theme-brasil');
                if (l.id.includes('vargas') || l.id.includes('republica') || l.id.includes('ditadura') || l.id.includes('contemporaneo')) {
                    classes.push('theme-contemporanea');
                }
            } else if (l.id.includes('roma') || l.id.includes('grecia') || l.id.includes('egito') || l.id.includes('antiga')) {
                classes.push('theme-antiga');
            } else {
                classes.push('theme-geral');
            }

            const classString = classes.join(' ');

            return `<div class="${classString}"><div class="glass-card p-0 flex flex-col h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"><div class="h-56 overflow-hidden relative card-img-hover"><img src="../${l.thumbnail}" alt="${l.title}" class="w-full h-full object-cover transition-all duration-700"><div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div></div><div class="p-8 flex flex-col flex-grow"><h3 class="text-xl font-extrabold outfit text-indigo-950 mb-3 group-hover:text-theme-main transition-colors leading-tight">${l.title}</h3><div class="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between"><div class="flex text-amber-400 text-[9px]">${'<i class="fas fa-star pr-0.5"></i>'.repeat(l.relevance)}</div><a href="${l.id}.html" class="emerald-btn py-2 px-6 text-[10px] uppercase theme-button shadow-none">Estudar Aula</a></div></div></div></div>`;
        }).join('');

        const finalIndexHtml = indexTemplate
            .replace(/<div id="lesson-grid"[\s\S]*?<\/div>/, `<div id="lesson-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">${gridHtml}</div>`)
            .replace('<!-- FILTER_SCRIPT_PLACEHOLDER -->', `
            <script>
                function filter(category) {
                    console.log('Filtrando por:', category);
                    const cards = document.querySelectorAll('#lesson-grid > div');
                    const buttons = document.querySelectorAll('.filter-btn');
                    
                    // Atualizar estados dos botões
                    buttons.forEach(btn => {
                        const targetId = 'btn-' + category.toLowerCase().replace(' ', '-');
                        if(btn.id === targetId) {
                            btn.classList.add('bg-indigo-950', 'text-white', 'shadow-xl', 'scale-105');
                            btn.classList.remove('bg-white', 'text-gray-500', 'border-gray-100');
                        } else {
                            btn.classList.remove('bg-indigo-950', 'text-white', 'shadow-xl', 'scale-105');
                            btn.classList.add('bg-white', 'text-gray-500', 'border-gray-100');
                        }
                    });

                    // Filtrar cards
                    cards.forEach(card => {
                        if (category === 'TODAS') {
                            card.style.display = 'block';
                        } else {
                            const theme = 'theme-' + category.toLowerCase().replace(' ', '-');
                            // Se o card tem a classe do tema OU se for Brasil e for contemporâneo
                            let isMatch = card.classList.contains(theme);
                            card.style.display = isMatch ? 'block' : 'none';
                        }
                    });
                }
                // Inicializar filtros
                filter('TODAS');
            </script>`);

        fs.writeFileSync('aulas/Indice_aulas.html', finalIndexHtml);
        console.log('✅ Build Concluído! Filtros restaurados e funcionais.');
    } catch (err) { console.error('❌ Erro:', err); }
}

build();
