const fs = require('fs')
const chalk = require('chalk')
const { lineCount, wordCount, charCount } = require('./functions')

// Vérifier la commande
if (process.argv.length !== 3 && process.argv.length !== 4) {
  console.log(chalk.blue('usage: node wc-option.js (-op) file'))
  process.exit(1)
}
// SI PAS D'OPTION
if (process.argv.length === 3) {
  require('./wc')
}
// SI OPTION
if (process.argv.length === 4) {
  // Vérifier que le fichier existe
  if (!fs.existsSync(process.argv[3])) {
    console.log(chalk.blue(`error : the path ${process.argv[3]} does not exist.`))
    process.exit(1)
  }

  // Vérifier qu'il s'agit d'un fichier
  const stats = fs.statSync(process.argv[3])
  if (!stats.isFile()) {
    console.log(chalk.blue(`error : ${process.argv[3]} is not a file.`))
    process.exit(1)
  }

  switch (process.argv[2]) {
    case '-l':
      console.log(lineCount(process.argv[3]))
      break
    case '-c':
      console.log(wordCount(process.argv[3]))
      break
    case '-w':
      console.log(charCount(process.argv[3]))
      break
    default:
      console.log(chalk.blue(`error : ${process.argv[2]} is not a valid option. Please choose between '-l', '-c', '-w'.`))
  }

}