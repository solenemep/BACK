// Verifier qu'il y a bien 1 argument a passer à notre programme
if (process.argv.length !== 3) {
  console.log('usage: node sayMyName.js name')
  process.exit(1)
}

const name = process.argv[2]
console.log(`My name is ${name}`)
