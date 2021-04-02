// Verifier qu'il y a bien 1 argument a passer à notre programme
if (process.argv.length !== 3) {
  console.log('usage: node guessNumber.js number')
  process.exit(1)
}

// Verifier que le premier argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}
const userSecret = process.argv[2]

const readlineSync = require('readline-sync')

let isRunning = true

while (isRunning) {
  const userGuess = readlineSync.question('Guess the number : ')
  const guess = Number(userGuess)
  const secret = Number(userSecret)
  if (!isNaN(guess) && guess < secret) {
    console.log('Too small!')
  } else if (!isNaN(guess) && guess > secret) {
    console.log('Too big!')
  } else if (!isNaN(guess) && guess === secret) {
    console.log('You win')
    isRunning = false
  } else {
    console.log("Please insert a number")
  }
}
