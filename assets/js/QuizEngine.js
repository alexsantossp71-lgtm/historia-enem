/**
 * QuizEngine.js
 * Simple client‑side quiz manager: tracks answers, computes score, persists progress.
 * Usage:
 *   const engine = new QuizEngine('lesson-slug');
 *   engine.init(quizArray);
 *   // Call engine.recordAnswer(questionIdx, isCorrect) from UI handlers.
 */

class QuizEngine {
  constructor(lessonSlug) {
    this.lessonSlug = lessonSlug;
    this.answers = [];
    this.total = 0;
    this.storageKey = `quizProgress_${lessonSlug}`;
    // Load any saved progress
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try { this.answers = JSON.parse(saved); } catch (_) { this.answers = []; }
    }
  }

  /** Initialize with the quiz data array */
  init(quizArray) {
    this.total = quizArray.length;
    // Ensure answers array length matches quiz length
    if (this.answers.length !== this.total) {
      this.answers = new Array(this.total).fill(null);
    }
  }

  /** Record answer for a given index; `correct` is boolean */
  recordAnswer(idx, correct) {
    this.answers[idx] = correct;
    this._save();
    // If all answered, show result
    if (this.answers.every(a => a !== null)) {
      this.showResult();
    }
  }

  _save() {
    try { localStorage.setItem(this.storageKey, JSON.stringify(this.answers)); } catch (_) {}
  }

  /** Compute score and display a simple overlay */
  showResult() {
    const correctCount = this.answers.filter(Boolean).length;
    const percent = Math.round((correctCount / this.total) * 100);
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50';
    overlay.innerHTML = `
      <div class="bg-white rounded-xl p-8 shadow-lg max-w-sm w-full text-center">
        <h2 class="text-2xl font-bold mb-4">Resultado do Quiz</h2>
        <p class="text-lg mb-2">Acertos: ${correctCount} / ${this.total}</p>
        <p class="text-lg mb-4">Pontuação: ${percent}%</p>
        <button class="px-4 py-2 bg-emerald-600 text-white rounded" onclick="this.parentElement.parentElement.remove()">Fechar</button>
      </div>
    `;
    document.body.appendChild(overlay);
  }
}

// Expose globally for LessonRenderer integration
window.QuizEngine = QuizEngine;
