/**
 * seo.js
 * Generates JSON-LD structured data for a lesson / page.
 * Public API used by the build pipeline (build_site.js) and tests.
 */

/**
 * URL base do site. Troque pelo domínio real em produção (ex.: https://historiaenem.com.br).
 * Não usar barra final.
 */
const SITE_URL = 'https://historiaenem.example.com';

function lessonUrl(id) {
  return SITE_URL + '/aulas/' + id + '.html';
}

/**
 * Render SEO JSON-LD for a given lesson.
 * @param {object} lesson - Lesson data containing metadata and intro.
 * @returns {string} HTML script tag with JSON-LD.
 */
function renderSeo(lesson) {
  if (!lesson || !lesson.metadata) return '';
  const title = lesson.metadata.title || '';
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: title,
    description: lesson.intro,
    url: lessonUrl(lesson.metadata.id),
    inLanguage: 'pt-BR',
    provider: {
      '@type': 'Organization',
      name: 'História ENEM',
      url: SITE_URL,
      sameAs: []
    },
    educationalLevel: 'Ensino Médio',
    courseMode: 'online',
    about: lesson.metadata.tags,
    timeRequired: 'PT1H'
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

/**
 * Render BreadcrumbList JSON-LD (para páginas de aula).
 * Início > Aulas > {aula}
 * @param {string} lessonId
 * @param {string} lessonTitle
 * @returns {string}
 */
function renderBreadcrumb(lessonId, lessonTitle) {
  if (!lessonId || !lessonTitle) return '';
  const items = [
    { name: 'Início', url: SITE_URL + '/index.html' },
    { name: 'Aulas', url: SITE_URL + '/aulas/Indice_aulas.html' },
    { name: lessonTitle, url: lessonUrl(lessonId) }
  ];
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  };
  return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
}

// Expose for Node (tests / build tooling)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { renderSeo, renderBreadcrumb, SITE_URL };
}

// Expose globally for browser (harmless; pages are prebuilt)
if (typeof window !== 'undefined') {
  window.renderSeo = renderSeo;
  window.renderBreadcrumb = renderBreadcrumb;
}