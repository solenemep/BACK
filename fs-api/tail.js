const fs = require('fs')
const chalk = require('chalk')
const { display } = require('./functions')

// Vérifier la commande
if (process.argv.length !== 3) {
  console.log(chalk.blue('usage: node tail.js file'))
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

display(process.argv[2], 10)