const { readFileSync } = require('fs');
const { renderSeo, renderBreadcrumb, SITE_URL } = require('./assets/js/seo.js');

const lesson = JSON.parse(readFileSync('./content/data/brasil-colonia.json', 'utf8'));

let ok = true;
function check(name, cond) {
  console.log((cond ? '✅' : '❌') + ' ' + name);
  if (!cond) ok = false;
}

const seo = renderSeo(lesson);
console.log(seo);
console.log('');
check('JSON-LD Course gerado', /"@type":"Course"/.test(seo));
check('Não usa example.com' , !seo.includes('https://example.com'));
check('Contém URL da aula', /"url":"https:\/\/historiaenem\.example\.com\/aulas\/brasil-colonia\.html"/.test(seo));
check('Contém inLanguage pt-BR', seo.includes('"inLanguage":"pt-BR"'));
check('Contém courseMode online', seo.includes('"courseMode":"online"'));

const bc = renderBreadcrumb('brasil-colonia', 'Brasil Colônia');
console.log('');
console.log(bc);
check('Breadcrumb gerado', /"@type":"BreadcrumbList"/.test(bc));
check('Breadcrumb 3 itens', (/"position":\d+/g.exec(bc)) !== null && bc.match(/"position":/g).length === 3);

check('SITE_URL exportado', SITE_URL === 'https://historiaenem.example.com');

if (!ok) process.exit(1);
console.log('\n✅ SEO Tests Passed');