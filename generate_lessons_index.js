const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, 'content', 'data');
const outPath = path.join(dataDir, 'lessonsIndex.json');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json') && f !== 'lessonsIndex.json');
const lessons = files.map(f => {
  const content = JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));
  const { metadata } = content;
  return {
    id: metadata.id,
    title: metadata.title,
    period: metadata.period,
    tags: metadata.tags,
    relevance: metadata.relevance || 0
  };
});
fs.writeFileSync(outPath, JSON.stringify(lessons, null, 2), 'utf8');
console.log('Generated lessonsIndex.json with', lessons.length, 'entries');
