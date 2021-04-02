const fs = require('fs')
const chalk = require('chalk')

// Vérifier la commande
if (process.argv.length !== 4) {
  console.log(chalk.blue('usage: node cp.js source-file destination-file'))
  process.exit(1)
}

// Vérifier que le fichier à copier existe
if (!fs.existsSync(process.argv[2])) {
  console.log(chalk.blue(`error : the path ${process.argv[2]} does not exist.`))
  process.exit(1)
}

// Vérifier qu'il s'agit d'un fichier
const statsrc = fs.statSync(process.argv[2])
if (!statsrc.isFile()) {
  console.log(chalk.blue(`error : ${process.argv[2]} is not a file.`))
  process.exit(1)
}

// Vérifier que le fichier dans lequel on copie existe
if (!fs.existsSync(process.argv[3])) {
  console.log(chalk.blue(`error : the path ${process.argv[3]} does not exist.`))
  process.exit(1)
}

// Vérifier qu'il s'agit d'un fichier
const statdst = fs.statSync(process.argv[3])
if (!statdst.isFile()) {
  console.log(chalk.blue(`error : ${process.argv[3]} is not a file.`))
  process.exit(1)
}

const copy = fs.readFileSync(process.argv[2])
fs.writeFileSync(process.argv[3], copy)