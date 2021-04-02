const fs = require('fs')
const chalk = require('chalk')
/*
const { existsSync } = require('fs')
*/

// Vérifier la commande
if (process.argv.length !== 3) {
  console.log(chalk.blue('usage: node countVowel.js file.txt'))
  process.exit(1)
}

// Vérifier que le fichier existe
if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.blue(`error : the path ${process.argv[2]} does not exist.`))
  process.exit(1)
}

// Lire le fichier
let text = fs.readFileSync(process.argv[2], 'utf-8')

text = text.toLowerCase()

let nbA = 0
let nbE = 0
let nbI = 0
let nbO = 0
let nbU = 0
let nbY = 0

for (let i = 0; i < text.length; ++i) {
  if (
    text[i] === 'e' ||
    text[i] === 'é' ||
    text[i] === 'è' ||
    text[i] === 'ê'
  ) {
    ++nbE
  } else if (text[i] === 'a') {
    ++nbA
  } else if (text[i] === 'i') {
    ++nbI
  } else if (text[i] === 'o') {
    ++nbO
  } else if (text[i] === 'u') {
    ++nbU
  } else if (text[i] === 'y') {
    ++nbY
  }
}

console.log(chalk.rgb(255, 89, 0)(`nb E: ${nbE}`))
console.log(chalk.rgb(251, 191, 0)(`nb A: ${nbA}`))
console.log(chalk.rgb(246, 195, 0)(`nb I: ${nbI}`))
console.log(chalk.rgb(195, 246, 0)(`nb O: ${nbO}`))
console.log(chalk.rgb(191, 251, 0)(`nb U: ${nbU}`))
console.log(chalk.rgb(89, 255, 0)(`nb Y: ${nbY}`))