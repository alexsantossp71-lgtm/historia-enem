const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, 'content', 'data');
const indexPath = path.join(dataDir, 'lessonsIndex.json');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json') && f !== 'lessonsIndex.json');

function deriveCategory(slug, metadata) {
  const subj = (metadata.subject || '') + ' ' + slug.toLowerCase();
  if (/vargas|brasil|colonia|imperio|regencia|republica|ditadura|farroupilha|aboli|escra|independencia-brasil|populismo|dutra|janio|goulart|jk|jucelino|lula|collor|itamar|dilma|temer|redemocratizacao/.test(subj)) {
    return 'História do Brasil';
  }
  if (/hist[óo]ria|^geral/.test(subj)) return 'História Geral';
  return 'Outras Matérias';
}

function bestThumb(lesson) {
  const t = lesson.thumbnail;
  if (!t) return null;
  if (typeof t === 'string') return t;
  if (t && t.url) return t.url;
  return null;
}

let prev = {};
const START_YEAR_OVERRIDES = {
  'era-vargas-clt': 1943,
  'era-vargas-constituicao-34': 1934,
  'era-vargas-dip-propaganda': 1939,
  'model-lesson': 1500
};
if (fs.existsSync(indexPath)) {
  try { prev = JSON.parse(fs.readFileSync(indexPath, 'utf8')).reduce((o, l) => { o[l.id] = l; return o; }, {}); } catch (e) { prev = {}; }
}

const lessons = files.map(f => {
  const slug = f.replace('.json', '');
  const content = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));
  const { metadata } = content;
  const old = prev[slug] || {};
  return {
    id: slug,
    title: metadata.title,
    period: metadata.period,
    startYear: old.startYear || metadata.startYear || START_YEAR_OVERRIDES[slug] || 0,
    tags: metadata.tags || [],
    relevance: metadata.relevance || 0,
    category: old.category || (metadata.category || '') || deriveCategory(slug, metadata),
    thumbnail: old.thumbnail || bestThumb(content),
    icon: old.icon || metadata.icon || '📜'
  };
});

lessons.sort((a, b) => (a.startYear || 0) - (b.startYear || 0));

fs.writeFileSync(indexPath, JSON.stringify(lessons, null, 2), 'utf8');
console.log('Generated lessonsIndex.json with', lessons.length, 'entries');