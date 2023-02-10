const fs = require('fs');
const path = require('path');
const outputFile = 'LayoutCard.json';
const results = [];
  fs.readdirSync("grades").forEach(file => {
    const fileName = path.parse(file).name
    results.push({
      image: `/grades/${file}`,
      text: fileName,
      width: 4,
      height: 4
    });
  });
fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
console.log(`Arquivo JSON gerado com sucesso: ${outputFile}`);