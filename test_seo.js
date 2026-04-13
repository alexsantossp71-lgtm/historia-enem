const { readFileSync } = require('fs');
const { renderSeo } = require('./assets/js/seo.js');
const lesson = JSON.parse(readFileSync('./content/data/brasil-colonia.json','utf8'));
console.log(renderSeo(lesson));
