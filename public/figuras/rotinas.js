const fs = require('fs');
const path = require('path');
const outputFile = 'rotinas.json';
const results = [];
  const categoryPath = "Rotinas"
  if (!fs.existsSync(categoryPath)) {
    console.error(`O diretório "${categoryPath}" não foi encontrado.`)
    return;
  }
  fs.readdirSync(categoryPath).forEach(file => {
    const fileName = path.parse(file).name
    results.push({
      image: `/figuras/${categoryPath}/${file}`,
      text: fileName,
      name: fileName,
      category: categoryPath
    });
  });
fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
console.log(`Arquivo JSON gerado com sucesso: ${outputFile}`);