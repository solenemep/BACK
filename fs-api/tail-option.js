const fs = require('fs')
const chalk = require('chalk')
const { display } = require('./functions')

// Vérifier la commande
if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log(chalk.blue('usage: node tail.js (-n) (nb-lines) file'))
  process.exit(1)
}
// SI PAS D'OPTION
if (process.argv.length === 3) {
  require('./tail')
}
// SI OPTION
if (process.argv.length === 5) {
  // Vérifier que le fichier existe
  if (!fs.existsSync(process.argv[4])) {
    console.log(chalk.blue(`error : the path ${process.argv[4]} does not exist.`))
    process.exit(1)
  }
  // Vérifier qu'il s'agit d'un fichier
  const stats = fs.statSync(process.argv[4])
  if (!stats.isFile()) {
    console.log(chalk.blue(`error : ${process.argv[4]} is not a file.`))
    process.exit(1)
  }
  // Vérifier que l'option est valide
  if (process.argv[2] !== '-n') {
    console.log(chalk.blue('usage: node tail.js -n nb-lines file'))
    process.exit(1)
  }
  // Vérifier que le paramètre est un nombre
  const nb = Number(process.argv[3])
  if (isNaN(nb)) {
    console.log(chalk.blue(`error : ${process.argv[3]} is not a number`))
    process.exit(1)
  }
  display(process.argv[4], nb)
}