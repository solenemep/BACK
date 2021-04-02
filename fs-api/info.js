const fs = require('fs')

// Vérifier la commande
if (process.argv.length !== 3) {
  console.log('usage: node info.js file.txt')
  process.exit(1)
}

// Vérifier que le fichier existe
if (!fs.existsSync(process.argv[2])) {
  console.log(`error : the path ${process.argv[2]} does not exist.`)
  process.exit(1)
}

// Vérifier qu'il s'agit d'un fichier
const stats = fs.statSync(process.argv[2])
if (!stats.isFile()) {
  console.log(`error : ${process.argv[2]} is not a file.`)
  process.exit(1)
}

let info = fs.statSync(process.argv[2])
console.log(info)
