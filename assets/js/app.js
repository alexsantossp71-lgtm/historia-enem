/* ==========================================================================
   HistóriaENEM — app.js (compartilhado por todas as páginas)
   Tema, busca, progresso, leitura, quiz e modais.
   ========================================================================== */
(function () {
  'use strict';

  var STORE = 'hestory_v1';
  var THEME_KEY = 'hestory_theme';

  /* ----------------------------------------------------------------------
     Armazenamento de progresso (localStorage)
     ---------------------------------------------------------------------- */
  function readStore() {
    try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; }
  }
  function writeStore(d) {
    try { localStorage.setItem(STORE, JSON.stringify(d)); } catch (e) {}
  }
  /**
   * Registra progresso de uma aula.
   * shape: { id, score, total, answered, done }
   */
  function saveLessonProgress(id, patch) {
    var db = readStore();
    var cur = db[id] || {};
    db[id] = Object.assign({}, cur, patch);
    writeStore(db);
    return db[id];
  }
  function getLessonProgress(id) {
    var db = readStore();
    return db[id] || null;
  }
  function allProgress() {
    return readStore();
  }

  /* ----------------------------------------------------------------------
     Tema (dark mode)
     ---------------------------------------------------------------------- */
  function applyTheme(t) {
    if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      var icon = btn.querySelector('i, svg');
      if (icon) {
        icon.className = (t === 'dark') ? 'fas fa-sun' : 'fas fa-moon';
      }
      btn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
      btn.setAttribute('aria-label', t === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
    });
  }
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (prefersDark ? 'dark' : 'light'));
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        applyTheme(isDark ? 'light' : 'dark');
      });
    });
  }

  /* ----------------------------------------------------------------------
     Busca + filtros (página de índice)
     Cards devem ter data-title, data-tags, data-era, data-period, data-id
     ---------------------------------------------------------------------- */
  function initSearch() {
    var input = document.getElementById('hs-search');
    var pills = document.querySelectorAll('.pill[data-filter]');
    var grid = document.getElementById('lesson-grid');
    if (!input || !grid) return;
    var params = new URLSearchParams(window.location.search);
    var state = { q: params.get('q') || '', era: params.get('era') || 'TODAS', doneOnly: false };

    if (state.era !== 'TODAS') {
      pills.forEach(function (b) {
        b.classList.remove('active');
        if (b.getAttribute('data-filter') === state.era) b.classList.add('active');
      });
    }
    input.value = state.q;

    function matches(l) {
      var ok = true;
      if (state.era !== 'TODAS') {
        var eras = (l.getAttribute('data-eras') || '').split(' ');
        if (!l.classList.contains('theme-' + state.era) && eras.indexOf(state.era) === -1) ok = false;
      }
      if (ok && state.doneOnly) {
        ok = l.classList.contains('done');
      }
      if (ok && state.q) {
        var hay = [
          l.getAttribute('data-title'),
          l.getAttribute('data-period'),
          l.getAttribute('data-tags'),
          l.getAttribute('data-id')
        ].join(' ').toLowerCase();
        ok = hay.indexOf(state.q.toLowerCase()) !== -1;
      }
      return ok;
    }

    function apply() {
      var cards = Array.prototype.slice.call(grid.children);
      var shown = 0;
      cards.forEach(function (c) {
        var on = matches(c);
        c.style.display = on ? '' : 'none';
        if (on) shown++;
      });
      var counter = document.getElementById('hs-count');
      if (counter) counter.textContent = shown + ' de ' + cards.length + ' aulas';
      var empty = document.getElementById('hs-empty');
      if (empty) empty.style.display = shown === 0 ? 'block' : 'none';
    }

    input.addEventListener('input', function () {
      state.q = input.value.trim();
      apply();
    });

    pills.forEach(function (btn) {
      btn.addEventListener('click', function () {
        pills.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        if (btn.hasAttribute('data-filter')) {
          state.era = btn.getAttribute('data-filter');
          state.doneOnly = false;
        } else if (btn.getAttribute('data-done') === '1') {
          state.era = 'TODAS';
          state.doneOnly = true;
        }
        apply();
      });
    });

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cards.forEach(function (c) { c.style.display = ''; });
    }
    apply();
    input.dispatchEvent(new Event('input'));
  }

  /* ----------------------------------------------------------------------
     Progresso nos cards do índice
     ---------------------------------------------------------------------- */
  function paintProgressOnCards() {
    var db = allProgress();
    document.querySelectorAll('.lesson-card[data-id]').forEach(function (card) {
      var p = db[card.getAttribute('data-id')];
      if (!p) return;
      if (p.done) card.classList.add('done');
      var probe = card.querySelector('.pb-fill');
      if (probe && p.total) {
        probe.style.width = Math.round((p.answered || 0) / p.total * 100) + '%';
      }
    });
    var total = document.querySelectorAll('.lesson-card[data-id]').length;
    var done = document.querySelectorAll('.lesson-card[data-id].done').length;
    document.querySelectorAll('[data-progress-total]').forEach(function (el) {
      el.textContent = done + ' de ' + total + ' concluídas';
    });
    var bar = document.getElementById('hs-progress-fill');
    if (bar && total) bar.style.width = Math.round(done / total * 100) + '%';
  }

  /* ----------------------------------------------------------------------
     Barra de progresso de leitura (página de aula)
     ---------------------------------------------------------------------- */
  function initReadProgress() {
    var bar = document.getElementById('read-progress-bar');
    if (!bar) return;
    function update() {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var p = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = p + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ----------------------------------------------------------------------
     TOC ativo (página de aula)
     ---------------------------------------------------------------------- */
  function initToc() {
    var links = document.querySelectorAll('.toc-list a[href^="#"]');
    if (!links.length) return;
    var sections = Array.prototype.map.call(links, function (a) {
      return document.querySelector(a.getAttribute('href'));
    }).filter(Boolean);

    function onScroll() {
      var pos = window.pageYOffset + 120;
      var current = sections[0];
      sections.forEach(function (s) {
        if (s.offsetTop <= pos) current = s;
      });
      links.forEach(function (a) {
        a.classList.toggle('active', a.getAttribute('href') === '#' + (current ? current.id : ''));
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ----------------------------------------------------------------------
     Modais
     ---------------------------------------------------------------------- */
  function openModal(id) {
    var m = document.getElementById(id);
    if (m) {
      m.classList.add('open');
      document.body.style.overflow = 'hidden';
      var first = m.querySelector('button, input, a');
      if (first) setTimeout(function () { first.focus(); }, 60);
    }
  }
  function closeModal(id) {
    var m = document.getElementById(id);
    if (m) {
      m.classList.remove('open');
      document.body.style.overflow = '';
    }
  }
  function initModals() {
    document.querySelectorAll('[data-open-modal]').forEach(function (el) {
      el.addEventListener('click', function () { openModal(el.getAttribute('data-open-modal')); });
    });
    document.querySelectorAll('.modal-bg').forEach(function (m) {
      m.addEventListener('click', function (e) {
        if (e.target === m) closeModal(m.id);
      });
      var close = m.querySelector('.modal-close');
      if (close) close.addEventListener('click', function () { closeModal(m.id); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-bg.open').forEach(function (m) { closeModal(m.id); });
      }
    });
  }

  /* ----------------------------------------------------------------------
     Quiz — handler compartilhado para HTML gerado pelo build
     Contracto por questão:
       <div class="quiz-item" data-qid="..." data-total="5">
         <button class="quiz-opt" data-index="0" data-correct="1|0">
         <div class="quiz-feedback">
   ---------------------------------------------------------------------- */
  function initQuiz() {
    var lsKey = 'hestory_quiz_' + (document.body.getAttribute('data-lesson') || 'x');
    var perLesson = {};
    try { perLesson = JSON.parse(localStorage.getItem(lsKey)) || {}; } catch (e) {}

    function persist() {
      try { localStorage.setItem(lsKey, JSON.stringify(perLesson)); } catch (e) {}
    }
    function isAnswered(k) {
      return perLesson[k] !== undefined && perLesson[k] !== null;
    }
    function compute(qitem) {
      var total = parseInt(qitem.getAttribute('data-total') || '0', 10) || 0;
      var answered = 0, score = 0;
      for (var k in perLesson) {
        if (!perLesson.hasOwnProperty(k)) continue;
        if (!isAnswered(k)) continue;
        answered++;
        var rec = perLesson[k];
        if (rec && (rec.c === true || rec.c === 'true')) score++;
      }
      var qid = qitem.getAttribute('data-qid');
      return { total: total, answered: answered, score: score, qid: qid };
    }
    function payout(qitem) {
      var c = compute(qitem);
      // Barra
      var bar = qitem.querySelector('.pb-fill');
      if (bar && c.total) bar.style.width = Math.round(c.answered / c.total * 100) + '%';
      var n = qitem.querySelector('.quiz-score-n');
      if (n) n.textContent = c.answered + '/' + c.total;
      // Concluído automaticamente quando todas respondidas
      if (c.total && c.answered === c.total) {
        saveLessonProgress(document.body.getAttribute('data-lesson'), { done: true, total: c.total, answered: c.total, score: c.score });
        var doneEl = qitem.querySelector('.quiz-done-msg');
        if (doneEl) doneEl.style.display = 'block';
        var resultEl = document.getElementById('quiz-result-final');
        if (resultEl) {
          var p = Math.round(c.score / c.total * 100);
          resultEl.style.display = 'block';
          var sc = resultEl.querySelector('.score');
          if (sc) sc.textContent = p + '%';
          var msg = resultEl.querySelector('.score-msg');
          if (msg) {
            msg.textContent = p >= 80 ? 'Excelente! Você dominou este período.' :
                              p >= 50 ? 'Bom! Revise os destaques para fixar.' : 'Continue praticando — o caminho é a repetição.';
          }
        }
      }
      var counter = document.getElementById('hs-quiz-counter');
      if (counter) counter.textContent = c.answered + '/' + c.total + ' respondidas';
      // Sidebar da página de aula
      var sideBar = document.getElementById('hs-side-progress');
      if (sideBar && c.total) sideBar.style.width = Math.round(c.answered / c.total * 100) + '%';
    }

    function showFeedback(qitem, correct) {
      var fb = qitem.querySelector('.quiz-feedback');
      if (!fb) return;
      fb.style.display = 'block';
      fb.classList.toggle('ok', correct);
      fb.classList.toggle('bad', !correct);
    }

    document.querySelectorAll('.quiz-item').forEach(function (qitem) {
      var qid = qitem.getAttribute('data-qid');
      qitem.querySelectorAll('.quiz-opt').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = btn.getAttribute('data-index');
          var correct = btn.getAttribute('data-correct') === '1';
          if (isAnswered(qid)) return; // já respondida
          perLesson[qid] = { c: correct, i: parseInt(idx, 10) };
          persist();

          var opts = qitem.querySelectorAll('.quiz-opt');
          opts.forEach(function (o) {
            o.disabled = true;
            if (o.getAttribute('data-correct') === '1') o.classList.add('correct');
            else o.classList.add('dim');
          });
          if (!correct) btn.classList.add('wrong');
          btn.classList.add('selected');

          showFeedback(qitem, correct);
          payout(qitem);
        });
      });
      // Restaura estado salvo
      if (isAnswered(qid)) {
        var rec = perLesson[qid];
        var chosenIdx = rec && typeof rec.i === 'number' ? rec.i : -1;
        qitem.querySelectorAll('.quiz-opt').forEach(function (o) {
          o.disabled = true;
          if (o.getAttribute('data-correct') === '1') o.classList.add('correct');
          else o.classList.add('dim');
          if (chosenIdx !== -1 && parseInt(o.getAttribute('data-index'), 10) === chosenIdx) {
            o.classList.add('selected');
            if (!(rec.c === true || rec.c === 'true')) o.classList.add('wrong');
          }
        });
        showFeedback(qitem, rec.c === true || rec.c === 'true');
      }
      // Handler explicito para botão "ver resultado"
      var reveal = qitem.querySelector('[data-reveal-feedback]');
      if (reveal) reveal.addEventListener('click', function () {
        var fb = qitem.querySelector('.quiz-feedback');
        if (fb) fb.style.display = 'block';
        var opts = qitem.querySelectorAll('.quiz-opt');
        opts.forEach(function (o) {
          if (o.getAttribute('data-correct') === '1') o.classList.add('correct');
        });
      });
    });
    document.querySelectorAll('.quiz-item').forEach(payout);
  }

  /* ----------------------------------------------------------------------
     Botão "concluir aula" (manual)
     ---------------------------------------------------------------------- */
  function initLessonComplete() {
    var btn = document.getElementById('hs-mark-done');
    var lesson = document.body.getAttribute('data-lesson');
    if (!btn || !lesson) return;
    function paint() {
      var p = getLessonProgress(lesson);
      var done = !!(p && p.done);
      btn.classList.toggle('done', done);
      btn.querySelector('[data-txt-done], b') && (btn.innerHTML = done
        ? '<i class="fas fa-check-circle"></i> Concluída'
        : '<i class="fas fa-circle-check"></i> Concluir aula');
    }
    btn.addEventListener('click', function () {
      var p = getLessonProgress(lesson) || {};
      saveLessonProgress(lesson, { done: !p.done });
      paint();
    });
    paint();
  }

  /* ----------------------------------------------------------------------
     Jogos — Flashcards
     .flash-card > .flash-inner > .front + .back
     ---------------------------------------------------------------------- */
  function initFlashcards() {
    document.querySelectorAll('.flash-card').forEach(function (card) {
      card.addEventListener('click', function () { card.classList.toggle('flipped'); });
    });
  }

  /* ----------------------------------------------------------------------
     Jogos — Verdadeiro ou Falso
     .tf-card com botões .tf-btn[data-tf]
     ---------------------------------------------------------------------- */
  function initTrueFalse() {
    document.querySelectorAll('.tf-card').forEach(function (card) {
      var expected = card.getAttribute('data-answer') === '1';
      var btns = card.querySelectorAll('.tf-btn');
      var feedback = card.querySelector('.tf-feedback');
      btns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var chosen = btn.getAttribute('data-tf') === '1';
          var correct = (chosen === expected);
          btns.forEach(function (b) { b.disabled = true; });
          if (chosen) {
            btn.classList.add('correct');
            if (!correct) btn.classList.add('wrong');
          }
          if (feedback) {
            feedback.style.display = 'block';
            feedback.classList.toggle('ok', correct);
            feedback.classList.toggle('bad', !correct);
          }
          if (document.body.getAttribute('data-lesson')) {
            saveLessonProgress(document.body.getAttribute('data-lesson'), { done: true });
          }
        });
      });
    });
  }

  /* ----------------------------------------------------------------------
     Jogos — Jogo da memória
     <div class="mem-card" data-pair="id"> > .mem-inner
     ---------------------------------------------------------------------- */
  function initMemory() {
    var flipped = [];
    var lock = false;
    document.querySelectorAll('.mem-card').forEach(function (card) {
      card.addEventListener('click', function () {
        if (lock) return;
        if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
        card.classList.add('flipped');
        flipped.push(card);
        if (flipped.length === 2) {
          lock = true;
          var a = flipped[0], b = flipped[1];
          setTimeout(function () {
            if (a.getAttribute('data-pair') === b.getAttribute('data-pair')) {
              a.classList.add('matched'); b.classList.add('matched');
              var all = document.querySelectorAll('.mem-card');
              var done = Array.prototype.every.call(all, function (c) { return c.classList.contains('matched'); });
              if (done && document.body.getAttribute('data-lesson')) {
                saveLessonProgress(document.body.getAttribute('data-lesson'), { done: true });
              }
            } else {
              a.classList.remove('flipped'); b.classList.remove('flipped');
            }
            flipped = [];
            lock = false;
          }, 800);
        }
      });
    });
  }

  /* ----------------------------------------------------------------------
     Jogos — Linha do tempo (ordenação)
     .tl-card[data-order]  /  .tl-slot[data-expected]
     ---------------------------------------------------------------------- */
  function initTimeline() {
    var boards = document.querySelectorAll('[data-timeline-board]');
    boards.forEach(function (board) {
      var id = board.getAttribute('data-id');
      var pool = board.querySelector('[data-pool]');
      var slots = board.querySelectorAll('[data-slots] .tl-slot');
      var total = board.querySelectorAll('.tl-card').length;
      board.querySelectorAll('.tl-card').forEach(function (card) {
        card.addEventListener('click', function () {
          var empty = board.querySelector('[data-slots] .tl-slot:not(.filled)');
          if (!empty) return;
          var expected = parseInt(empty.getAttribute('data-expected'), 10);
          var order = parseInt(card.getAttribute('data-order'), 10);
          if (expected === order) {
            card.classList.add('placed');
            card.setAttribute('data-placed', '1');
            empty.classList.add('filled');
            empty.innerHTML = '<div style="font-size:.85rem;font-weight:700;color:var(--ink)">' + card.textContent.trim() + '</div>';
            card.remove();
            var remaining = board.querySelectorAll('.tl-card').length;
            if (remaining === 0) {
              var ok = board.querySelector('[data-feedback]');
              if (ok) ok.style.display = 'block';
              if (document.body.getAttribute('data-lesson')) {
                saveLessonProgress(document.body.getAttribute('data-lesson'), { done: true });
              }
            }
          } else {
            card.classList.add('shake');
            setTimeout(function () { card.classList.remove('shake'); }, 500);
          }
        });
      });
    });
  }

  /* ----------------------------------------------------------------------
     Jogos — Palavra oculta
     .word-block (índices via data-letter) + input #word_input_*
     ---------------------------------------------------------------------- */
  function initWordGame() {
    document.querySelectorAll('[data-wordgame]').forEach(function (game) {
      var id = game.getAttribute('data-id');
      var secret = (game.getAttribute('data-secret') || '').replace(/\s+/g, '').toLowerCase();
      var input = game.querySelector('input.word-input');
      var blocks = game.querySelectorAll('[data-letters] .word-block');
      function clean(s) { return s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
      function draw(val) {
        var arr = (val || '').split('');
        blocks.forEach(function (b, i) {
          if (arr[i]) {
            b.textContent = arr[i].toUpperCase();
            b.classList.add('filled');
          } else {
            b.textContent = '';
            b.classList.remove('filled');
          }
        });
      }
      function check(val) {
        if (clean(val.trim()) === clean(secret)) win();
      }
      function win() {
        var overlay = game.querySelector('[data-overlay]');
        if (overlay) overlay.style.display = 'flex';
        if (document.body.getAttribute('data-lesson')) {
          saveLessonProgress(document.body.getAttribute('data-lesson'), { done: true });
        }
      }
      if (input) {
        input.addEventListener('input', function () { draw(input.value); check(input.value); });
        blocks.forEach(function (b) {
          b.addEventListener('click', function () { input.focus(); });
        });
      }
      var revealBtn = game.querySelector('[data-reveal]');
      if (revealBtn) revealBtn.addEventListener('click', function () {
        draw(secret); win();
      });
      var againBtn = game.querySelector('[data-again]');
      if (againBtn) againBtn.addEventListener('click', function () {
        var overlay = game.querySelector('[data-overlay]');
        if (overlay) overlay.style.display = 'none';
        if (input) input.value = '';
        draw('');
      });
      draw('');
    });
  }

  /* ----------------------------------------------------------------------
     Truco de animação de "shake" na linha do tempo
     ---------------------------------------------------------------------- */
  var cssAnim = document.createElement('style');
  cssAnim.textContent = '.shake{animation:shake .4s var(--ease)}@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}';
  document.head.appendChild(cssAnim);

  /* ----------------------------------------------------------------------
     Exposição pública e init
     ---------------------------------------------------------------------- */
  window.HStory = {
    openModal: openModal,
    closeModal: closeModal,
    saveLessonProgress: saveLessonProgress,
    getLessonProgress: getLessonProgress,
    allProgress: allProgress
  };

  function boot() {
    initTheme();
    initReadProgress();
    initToc();
    initModals();
    initQuiz();
    initLessonComplete();
    initMemory();
    initTimeline();
    initWordGame();
    initFlashcards();
    initTrueFalse();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Página de índice: busca e progresso
  document.addEventListener('DOMContentLoaded', function () {
    initSearch();
    paintProgressOnCards();
  });
})();