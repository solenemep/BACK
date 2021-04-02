const fs = require('fs')
const chalk = require('chalk')
const { lineCount, wordCount, charCount } = require('./functions')

// Vérifier la commande
if (process.argv.length !== 3) {
  console.log(chalk.blue('usage: node wc.js file'))
  process.exit(1)
}

// Vérifier que le fichier existe
if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.blue(`error : the path ${process.argv[2]} does not exist.`))
  process.exit(1)
}

// Vérifier qu'il s'agit d'un fichier
const stats = fs.statSync(process.argv[2])
if (!stats.isFile()) {
  console.log(chalk.blue(`error : ${process.argv[2]} is not a file.`))
  process.exit(1)
}

// Afficher les données
console.log(lineCount(process.argv[2]))
console.log(wordCount(process.argv[2]))
console.log(charCount(process.argv[2]))