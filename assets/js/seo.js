/**
 * seo.js
 * Generates JSON-LD structured data for a lesson. This module provides a public API used by the application to inject SEO metadata.
 */

/**
 * Render SEO JSON-LD script tag for a given lesson.
 * @param {object} lesson - Lesson data containing metadata and intro.
 * @returns {string} - HTML script tag with JSON-LD.
 */
function renderSeo(lesson) {
  if (!lesson || !lesson.metadata) return '';
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: lesson.metadata.title,
    description: lesson.intro,
    provider: {
      '@type': 'Organization',
      name: 'História ENEM',
      url: 'https://example.com'
    },
    educationalLevel: 'Ensino Médio',
    about: lesson.metadata.tags,
    timeRequired: 'PT1H'
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

// Expose globally for other scripts (only in browser)
if (typeof window !== 'undefined') {
  window.renderSeo = renderSeo;
}
