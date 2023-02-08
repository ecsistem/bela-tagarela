const fs = require('fs');
const path = require('path');
const inputDirectory = 'figuras';
const outputFile = 'imageCards.json';
const results = [];
fs.readdirSync(inputDirectory).forEach(category => {
  const categoryPath = path.join(inputDirectory, category);
  fs.readdirSync(categoryPath).forEach(file => {
    const fileName = path.parse(file).name
    results.push({
      image: `/figuras/${category}/${file}`,
      text: fileName.toLowerCase(),
      name: fileName.toLowerCase(),
      category: category.toLowerCase()
    });
  });
});
fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
console.log(`Arquivo JSON gerado com sucesso: ${outputFile}`);