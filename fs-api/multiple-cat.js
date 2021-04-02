const fs = require('fs')
const chalk = require('chalk')

// Vérifier la commande
if (process.argv.length < 3) {
  console.log(chalk.blue('usage: node multiplecat.js file1 file2 ...'))
  process.exit(1)
}

for (i = 2; i < process.argv.length; i++) {

  // Vérifier que les fichiers existent
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

  // Lire les fichiers
  let text = fs.readFileSync(process.argv[i], 'utf-8')
  console.log(text)
}