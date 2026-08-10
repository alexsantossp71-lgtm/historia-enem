const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname);
const IMAGES = path.join(ROOT, 'assets', 'images');
const DATA = path.join(ROOT, 'content', 'data');

const FFMPEG = 'ffmpeg';
const THUMB_WIDTH = 640;
const SECTION_WIDTH = 1024;
const QUALITY = 72;

function webp(file) {
  return file.replace(/\.png$/i, '.webp');
}

function convert(src, width) {
  const dest = webp(src);
  execFileSync(FFMPEG, [
    '-y', '-i', src,
    '-vf', `scale=-2:${Math.round(width * 9 / 16)}`,
    '-qscale', String(QUALITY),
    '-compression_level', '6',
    dest
  ], { stdio: 'ignore' });
  return dest;
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name.toLowerCase().endsWith('.png')) out.push(p);
  }
  return out;
}

const pngs = walk(IMAGES);
console.log(`Convertendo ${pngs.length} PNGs → WebP...`);

const converted = [];
for (const p of pngs) {
  const isThumb = /thumb\.png$/i.test(p);
  const dest = convert(p, isThumb ? THUMB_WIDTH : SECTION_WIDTH);
  const before = fs.statSync(p).size;
  const after = fs.statSync(dest).size;
  fs.unlinkSync(p); // remove o PNG original após conversão
  converted.push({ from: path.relative(ROOT, p), to: path.relative(ROOT, dest), before, after });
  console.log(`  ${path.basename(p)} → ${path.basename(dest)} (${Math.round(after / before * 100)}%)`);
}

// Atualiza referências .png → .webp nos JSONs de conteúdo
const jsonFiles = fs.readdirSync(DATA).filter(f => f.endsWith('.json'));
let replaced = 0;
for (const f of jsonFiles) {
  const fp = path.join(DATA, f);
  let text = fs.readFileSync(fp, 'utf8');
  const orig = text;
  text = text.replace(/\.png/gi, '.webp');
  if (text !== orig) {
    fs.writeFileSync(fp, text);
    replaced++;
  }
}
console.log(`\nJSONs atualizados: ${replaced}`);

const totalBefore = converted.reduce((s, c) => s + c.before, 0);
const totalAfter = converted.reduce((s, c) => s + c.after, 0);
console.log(`\nResumo: ${Math.round(totalBefore / 1024 / 1024)} MB → ${Math.round(totalAfter / 1024 / 1024)} MB (−${Math.round((1 - totalAfter / totalBefore) * 100)}%)`);