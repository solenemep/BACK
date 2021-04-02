const readlineSync = require('readline-sync')

const userName = readlineSync.question('May I have your name? ')
const userSurname = readlineSync.question('May I have your surname? ')
const ageStr = readlineSync.question('May i have your age? ')
const age = Number(ageStr)

if (age >= 18) {
  console.log(`${userName} ${userSurname}, you can vote`)
} else {
  console.log(`Sorry, ${userName} ${userSurname}, you can not vote`)
}