const fs = require('fs')
const chalk = require('chalk')
/*
const { mkdirSync } = require('fs')
const { rmdirSync } = require('fs')
const { readdirSync } = require('fs')
*/

// Vérifier qu'il y a bien 2 arguments a passer à notre programme
if (process.argv.length !== 4) {
  console.log('usage: node directory.js function directory')
  process.exit(1)
}
let dirName = process.argv[3]

switch (process.argv[2]) {
  // MKDIR
  case 'mkdir':
    // Verifier que le dossier n'existe pas déjà
    if (fs.existsSync(process.argv[3])) {
      console.log(chalk.blue(`error : the directory ${process.argv[3]} already exists.`))
      process.exit(1)
    }
    fs.mkdirSync(`${dirName}`)
    break
  // RMDIR
  case 'rmdir':
    // Vérifier l'existence du dossier
    if (!fs.existsSync(process.argv[3])) {
      console.log(chalk.blue(`error : the directory ${process.argv[3]} does not exist.`))
      process.exit(1)
    }
    fs.rmdirSync(`${dirName}`)
    break
  // LS
  case 'ls':
    // Vérifier l'existence du dossier
    if (!fs.existsSync(process.argv[3])) {
      console.log(chalk.blue(`error : the directory ${process.argv[3]} does not exist.`))
      process.exit(1)
    }
    console.log(fs.readdirSync(`${dirName}`))
    break

}