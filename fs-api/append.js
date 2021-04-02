const fs = require('fs')
const chalk = require('chalk')

let tab = []
let posSrc = process.argv.length - 1

// Vérifier la commande
if (process.argv.length < 3) {
  console.log(chalk.blue('usage: node append.js source-file1 source-file2 ... destination-file'))
  process.exit(1)
}

for (i = 2; i < process.argv.length - 1; i++) {
  // Vérifier que les fichiers sources existent
  if (!fs.existsSync(process.argv[i])) {
    console.log(chalk.blue(`error : the path ${process.argv[i]} does not exist.`))
    process.exit(1)
  }

  // Vérifier qu'il s'agit de fichiers
  const stats = fs.statSync(process.argv[i])
  if (!stats.isFile()) {
    console.log(chalk.blue(`error : ${process.argv[i]} is not a file.`))
    process.exit(1)
  }

  // Lire les fichiers source
  tab.push(fs.readFileSync(process.argv[i], 'utf-8'))
}
// console.log(tab)

// Vérifier que le fichier destination existe
if (!fs.existsSync(process.argv[posSrc])) {
  console.log(chalk.blue(`error : the path ${process.argv[posSrc]} does not exist.`))
  process.exit(1)
}

// Vérifier qu'il s'agit d'un fichier
const stats = fs.statSync(process.argv[posSrc])
if (!stats.isFile()) {
  console.log(chalk.blue(`error : ${process.argv[posSrc]} is not a file.`))
  process.exit(1)
}

// Coller les fichiers dans la destination
for (const el of tab) {
  fs.appendFileSync((process.argv[posSrc]), el)
}