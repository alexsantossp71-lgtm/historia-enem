class LessonRenderer {
  constructor() {
    this.homeView = document.getElementById('home-view');
    this.lessonView = document.getElementById('lesson-view');
    this.currentLesson = null;
    this.allLessonsHistory = [];
    this.initNavbar();
  }

  initNavbar() {
    // Make navbar links restore home view if hidden
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => this.goHome());
    });
    
    // Logo should also go home
    const logo = document.querySelector('nav a[href="index.html"]');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        this.goHome();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  goHome() {
    if (this.homeView && this.lessonView) {
      this.homeView.classList.remove('hidden');
      this.lessonView.classList.add('hidden');
      // Reset URL if needed, but keeping hash navigation
      if (typeof history !== 'undefined') {
        const url = new URL(window.location);
        url.searchParams.delete('lesson');
        history.pushState({}, '', url);
      }
    }
  }

  showLessonView() {
    if (this.homeView && this.lessonView) {
      this.homeView.classList.add('hidden');
      this.lessonView.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  /**
   * Loads a lesson from a JSON file.
   * @param {string} lessonSlug - The ID of the lesson (e.g., 'brasil-colonia')
   */
  async load(lessonSlug) {
    try {
      this.showLoading();
      this.showLessonView();
      
      if (this.allLessonsHistory.length === 0) {
        await this.fetchLessonsIndex();
      }

      const response = await fetch(`content/data/${lessonSlug}.json`);
      if (!response.ok) throw new Error('Falha ao carregar aula.');
      
      this.currentLesson = await response.json();
      this.currentLessonId = lessonSlug; // Armazena o ID original
      this.render();

      if (typeof window !== 'undefined' && window.QuizEngine) {
        this.quizEngine = new window.QuizEngine(lessonSlug);
        this.quizEngine.init(this.currentLesson.quiz);
      }
      
      // Update browser history for deep linking if not already there
      if (typeof history !== 'undefined' && lessonSlug) {
        const url = new URL(window.location);
        if (url.searchParams.get('lesson') !== lessonSlug) {
          url.searchParams.set('lesson', lessonSlug);
          history.pushState({ lesson: lessonSlug }, '', url);
        }
      }

      // Inject JSON-LD SEO markup
      if (typeof window !== 'undefined' && typeof window.renderSeo === 'function') {
        const seoScript = window.renderSeo(this.currentLesson);
        if (seoScript) {
          document.head.insertAdjacentHTML('beforeend', seoScript);
        }
      }
      this.updateMeta();
    } catch (error) {
      this.renderError(error.message);
    }
  }

  async fetchLessonsIndex() {
    try {
      const resp = await fetch('content/data/lessonsIndex.json');
      if (!resp.ok) throw new Error('Failed to load lessons index');
      const allLessons = await resp.json();
      this.allLessonsHistory = allLessons.filter(l => 
        !l.id.startsWith('matematica') && 
        !l.id.startsWith('linguagens') && 
        !l.id.startsWith('ciencias')
      );
    } catch (e) {
      console.error('Error fetching lessons index for navigation:', e);
    }
  }

  showLoading() {
    this.lessonView.innerHTML = `
      <div class="animate-fade flex justify-center py-40">
        <div class="loader">Carregando Elite...</div>
      </div>
    `;
  }

  render() {
    if (!this.currentLesson) return;

    const { metadata, intro, theory_content, support_text, sections, quiz } = this.currentLesson;

    let html = `
      <div class="animate-fade">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div class="flex items-center gap-2">
               <button onclick="app.goHome()" class="text-emerald-600 font-bold flex items-center gap-2 hover:translate-x-[-4px] transition-all">
                  <i class="fas fa-chevron-left"></i> Voltar Inicial
               </button>
               <span class="text-gray-300">|</span>
               <span class="gold-text uppercase tracking-widest text-xs font-bold">${metadata.period}</span>
            </div>
            
            <div class="flex gap-4">
               ${this.renderNavigationButtons(true)}
            </div>
          </div>
          <h1 class="text-5xl md:text-7xl font-extrabold mb-8 outfit text-indigo-950 tracking-tight leading-tight">${metadata.title}</h1>
          <p class="text-2xl text-gray-500 max-w-3xl leading-relaxed font-medium">${intro}</p>
        </header>

        <div class="grid lg:grid-cols-12 gap-12 mb-20">
          <div class="lg:col-span-8">
            <section class="glass-card mb-12 border-l-4 border-emerald-500 p-10 bg-white/80">
              <h2 class="text-3xl font-bold outfit text-indigo-950 mb-6 flex items-center gap-3">
                <i class="fas fa-book-open text-emerald-600"></i> Panorama Teórico
              </h2>
              <div class="prose prose-xl prose-slate max-w-none text-gray-700 leading-relaxed space-y-4">
                ${theory_content ? theory_content.split('\n').map(p => `<p>${p}</p>`).join('') : ''}
              </div>
            </section>

            <main class="grid gap-12">
              ${sections.map(section => this.renderSection(section)).join('')}
            </main>
          </div>

          <aside class="lg:col-span-4 sticky top-32 h-fit">
            <div class="glass-card bg-indigo-950 text-white border-white/10 shadow-2xl overflow-hidden relative">
              <div class="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl"></div>
              <h3 class="text-xl font-bold outfit mb-6 flex items-center gap-2 relative z-10">
                <i class="fas fa-bullseye text-emerald-400"></i> Foco no ENEM
              </h3>
              <p class="text-indigo-100/90 text-md leading-relaxed mb-8 relative z-10">
                ${support_text || 'Fique atento aos conceitos-chave deste período que costumam aparecer nas questões interdisciplinares.'}
              </p>
              <div class="p-4 bg-white/5 rounded-xl border border-white/10 relative z-10">
                <span class="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-2">Dificuldade Estimada</span>
                <div class="flex gap-1 text-emerald-400">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>

            <div class="mt-8 p-8 border-2 border-dashed border-indigo-100 rounded-3xl text-center">
              <span class="text-gray-400 text-sm font-medium">Continue sua Jornada</span>
              <div class="mt-4 flex flex-col gap-3">
                <a href="#quiz-area" class="text-emerald-600 font-bold hover:text-emerald-700 transition-all">Pular para Exercícios <i class="fas fa-arrow-down ml-1"></i></a>
              </div>
            </div>
          </aside>
        </div>

        <section id="quiz-area" class="mt-20 pt-20 border-t border-gray-100">
          <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-emerald-200 text-emerald-700 text-sm font-bold mb-12 shadow-sm uppercase tracking-widest">
              <i class="fas fa-brain"></i> Simulado de Elite
          </div>
          <div class="grid gap-10">
            ${quiz.map((q, idx) => this.renderQuizItem(q, idx)).join('')}
          </div>
        </section>

        <!-- Dynamic Navigation Footer -->
        <div class="mt-20 py-12 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-8">
          ${this.renderNavigationButtons()}
        </div>
      </div>
    `;

    this.lessonView.innerHTML = html;
    this.initInteractions();
  }

  renderSection(section) {
    return `
      <section class="glass-card">
        <h3 class="text-2xl mb-4 font-bold outfit text-indigo-900">${section.title}</h3>
        <div class="prose prose-slate max-w-none text-gray-700 leading-relaxed">
          ${section.content}
        </div>
        ${section.image ? `
          <figure class="mt-8 overflow-hidden rounded-2xl shadow-xl border border-white/20">
            <img src="${section.image.url}" alt="${section.image.alt}" class="w-full object-cover">
            <figcaption class="p-4 bg-white/50 text-xs text-gray-500 italic backdrop-blur-sm">${section.image.caption}</figcaption>
          </figure>
        ` : ''}
        ${section.highlight ? `
          <div class="mt-8 border-l-8 border-emerald-500 p-8 bg-gradient-to-r from-emerald-50 to-white rounded-r-2xl italic text-emerald-900 shadow-inner relative overflow-hidden">
            <div class="absolute -right-4 -top-4 text-emerald-100 text-6xl opacity-20"><i class="fas fa-quote-right"></i></div>
            <span class="relative z-10">"${section.highlight}"</span>
          </div>
        ` : ''}
      </section>
    `;
  }

  renderQuizItem(q, index) {
    return `
      <div class="glass-card quiz-item group" data-correct="${q.correctIndex}">
        <p class="font-bold text-lg mb-6 outfit text-indigo-950">${index + 1}. ${q.question}</p>
        <div class="grid gap-3">
          ${q.options.map((opt, i) => `
            <button class="quiz-opt border border-indigo-100 p-5 rounded-2xl text-left transition-all hover:border-emerald-400 hover:bg-emerald-50/30 font-medium text-indigo-900 flex items-center gap-4 group/opt" data-index="${i}">
              <span class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-sm font-bold text-indigo-400 group-hover/opt:bg-emerald-100 group-hover/opt:text-emerald-600 transition-all">${String.fromCharCode(65 + i)}</span>
              ${opt}
            </button>
          `).join('')}
        </div>
        <div class="explanation hidden mt-6 p-5 bg-emerald-50 rounded-2xl border border-emerald-100">
          <div class="flex items-center gap-2 text-emerald-700 font-bold mb-2">
            <i class="fas fa-check-circle"></i> Resposta Correta!
          </div>
          <p class="text-emerald-900 text-sm leading-relaxed">${q.explanation}</p>
        </div>
      </div>
    `;
  }

  renderNavigationButtons(isCompact = false) {
    if (!this.allLessonsHistory || this.allLessonsHistory.length === 0) return '';

    const currentIndex = this.allLessonsHistory.findIndex(l => l.id === this.currentLessonId);
    if (currentIndex === -1) return '';

    const prevLesson = this.allLessonsHistory[currentIndex - 1];
    const nextLesson = this.allLessonsHistory[currentIndex + 1];

    if (isCompact) {
      return `
        ${prevLesson ? `
          <button onclick="app.load('${prevLesson.id}')" class="text-xs font-bold uppercase tracking-widest text-indigo-900/40 hover:text-emerald-600 transition-all flex items-center gap-2">
            <i class="fas fa-arrow-left"></i> Anterior
          </button>
        ` : '<span></span>'}
        ${nextLesson ? `
          <button onclick="app.load('${nextLesson.id}')" class="text-xs font-bold uppercase tracking-widest text-indigo-900/40 hover:text-emerald-600 transition-all flex items-center gap-2">
            Próxima <i class="fas fa-arrow-right"></i>
          </button>
        ` : '<span></span>'}
      `;
    }

    return `
      <div class="w-full sm:w-1/2">
        ${prevLesson ? `
          <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Aula Anterior</span>
          <button onclick="app.load('${prevLesson.id}')" class="text-left group flex items-start gap-4">
            <div class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all">
              <i class="fas fa-arrow-left"></i>
            </div>
            <div>
              <p class="font-bold text-indigo-950 outfit group-hover:text-emerald-600 transition-colors">${prevLesson.title}</p>
            </div>
          </button>
        ` : ''}
      </div>
      
      <div class="w-full sm:w-1/2 flex justify-end text-right">
        ${nextLesson ? `
          <div>
            <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Próxima Aula</span>
            <button onclick="app.load('${nextLesson.id}')" class="text-right group flex items-start flex-row-reverse gap-4">
              <div class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all">
                <i class="fas fa-arrow-right"></i>
              </div>
              <div>
                <p class="font-bold text-indigo-950 outfit group-hover:text-emerald-600 transition-colors">${nextLesson.title}</p>
              </div>
            </button>
          </div>
        ` : ''}
      </div>
    `;
  }

  updateMeta() {
    document.title = `${this.currentLesson.metadata.title} - História ENEM`;
  }

  initInteractions() {
    document.querySelectorAll('.quiz-opt').forEach(btn => {
      btn.addEventListener('click', (e) => this.handleQuiz(e));
    });
  }

  handleQuiz(event) {
    const btn = event.currentTarget;
    const item = btn.closest('.quiz-item');
    const correctIdx = item.dataset.correct;
    const selectedIdx = btn.dataset.index;
    const explanation = item.querySelector('.explanation');
    const isCorrect = selectedIdx == correctIdx;

    if (isCorrect) {
      btn.classList.add('bg-emerald-600', 'border-emerald-600', 'text-white');
      btn.querySelector('span').classList.add('bg-emerald-500/20', 'text-white');
      explanation.classList.remove('hidden');
    } else {
      btn.classList.add('bg-rose-50', 'border-rose-200', 'text-rose-900', 'opacity-70');
      btn.querySelector('span').classList.add('bg-rose-200', 'text-rose-600');
    }

    if (this.quizEngine && typeof this.quizEngine.recordAnswer === 'function') {
      const qIdx = parseInt(selectedIdx, 10);
      this.quizEngine.recordAnswer(qIdx, isCorrect);
    }
  }

  renderError(msg) {
    this.lessonView.innerHTML = `
      <div class="text-center py-24 flex flex-col items-center">
        <div class="w-20 h-20 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center text-3xl mb-6">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <h2 class="text-2xl font-bold text-indigo-950 outfit mb-4">Ops! Encontramos um problema.</h2>
        <p class="text-gray-500 mb-8 max-w-md">${msg}</p>
        <button onclick="app.goHome()" class="emerald-btn">
          <i class="fas fa-home"></i>
          Voltar para Home
        </button>
      </div>
    `;
  }
}

window.LessonRenderer = LessonRenderer;
