const chalk = require('chalk')
// Vérifier la commande
if (process.argv.length !== 3) {
  console.log(chalk.blue('usage: node echo.js name'))
  process.exit(1)
}
console.log(`Hello ${process.argv[2]} !`)
