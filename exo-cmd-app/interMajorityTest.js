
// Verifier qu'il y a bien 1 argument a passer à notre programme
if (process.argv.length !== 3) {
  console.log('usage: node interMajorityTest.js number')
  process.exit(1)
}

// Verifier que le premier argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

const readlineSync = require('readline-sync')

const majority = process.argv[2]
let userName = ''
let userSurname = ''
let ageStr = ''
let isRunning = true

while (isRunning) {
  while (userName.length === 0) {
    userName = readlineSync.question('May I have your name? ')
    if (userName.length === 0) {
      console.log('Please enter a name')
      continue
    }
  }
  while (userSurname.length === 0) {
    userSurname = readlineSync.question('May I have your surname? ')
    if (userSurname.length === 0) {
      console.log('Please enter a surname')
      continue
    }
  }
  while (ageStr.length === 0) {
    ageStr = readlineSync.question('May i have your age? ')
    if (ageStr.length === 0) {
      console.log('Please enter an age')
      continue
    }
  }

  const age = Number(ageStr)

  if (age >= majority) {
    console.log(`${userName} ${userSurname}, you can vote`)
  } else {
    console.log(`Sorry, ${userName} ${userSurname}, you can not vote`)
  }

  if (readlineSync.keyInYNStrict('Do you want to check other voter ? ')) {
    // 'Y' key was pressed.
    isRunning = true
    userName = ''
    userSurname = ''
    ageStr = ''
  } else {
    // 'N' key was pressded.
    isRunning = false
  }
}
