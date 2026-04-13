/**
 * a11y.js
 * Accessibility utilities for the História ENEM platform.
 * Provides ARIA helpers, focus management, and visible focus ring handling.
 */

/**
 * Apply ARIA label to a button or interactive element.
 * @param {HTMLElement} el - The element to label.
 * @param {string} label - The accessible label.
 */
function setAriaLabel(el, label) {
  if (el && typeof label === 'string') {
    el.setAttribute('aria-label', label);
  }
}

/**
 * Ensure focus-visible outline for keyboard navigation.
 * Adds a CSS class `focus-visible` when element receives focus via keyboard.
 */
function enableFocusVisible() {
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      document.body.classList.add('using-keyboard');
    }
  };
  const handleMouseDown = () => {
    document.body.classList.remove('using-keyboard');
  };
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('mousedown', handleMouseDown);
}

/**
 * Initialize all focus-visible handling.
 */
function initA11y() {
  enableFocusVisible();
  // Apply focus-visible style via CSS variable (defined in style.css)
  const style = document.createElement('style');
  style.textContent = `
    .using-keyboard *:focus {
      outline: 2px solid var(--secondary-gold);
      outline-offset: 2px;
    }
  `;
  document.head.appendChild(style);
}

// Auto‑init when script loads.
window.setAriaLabel = setAriaLabel;
window.enableFocusVisible = enableFocusVisible;
window.initA11y = initA11y;
initA11y();
