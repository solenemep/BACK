/*const readlineSync = require('readline-sync')

let note = 0
let question = ['Question 1: Le C++ est un:',
  'Question 2: TypeScript est une évolution de Javascript',
  'Question 3: Lire les cours avant de faire les exercices est inutile:',
  'Question 4: react.js a été developpé par Google:',
  'Question 5: Ethereum est une blockchain publique:']
let qcm = [
  ['1: langage', '2: compilateur'],
  ['1: Vrai', '2: Faux'],
  ['1: Vrai', '2: Faux'],
  ['1: Vrai', '2: Faux'],
  ['1: Vrai', '2: Faux'],
]

console.log(question[0])
console.log(qcm[0][0])
console.log(qcm[0][1])

let isRunning1 = true
while (isRunning1) {
  const userAnswer1 = readlineSync.question('You can answer : ')
  const answer1 = Number(userAnswer1)
  if (answer1 === 1) {
    note++
    // Passer à la question suivante
    isRunning1 = false
  } else if (answer1 === 2) {
    // Passer à la question suivante
    isRunning1 = false
  } else {
    console.log('Please select 1 or 2')
  }
}

console.log(question[1])
console.log(qcm[1][0])
console.log(qcm[1][1])

let isRunning2 = true
while (isRunning2) {
  const userAnswer2 = readlineSync.question('You can answer : ')
  const answer2 = Number(userAnswer2)
  if (answer2 === 1) {
    note++
    // Passer à la question suivante
    isRunning2 = false
  } else if (answer2 === 2) {
    // Passer à la question suivante
    isRunning2 = false
  } else {
    console.log('Please select 1 or 2')
  }
}

console.log(question[2])
console.log(qcm[2][0])
console.log(qcm[2][1])

let isRunning3 = true
while (isRunning3) {
  const userAnswer3 = readlineSync.question('You can answer : ')
  const answer3 = Number(userAnswer3)
  if (answer3 === 2) {
    note++
    // Passer à la question suivante
    isRunning3 = false
  } else if (answer3 === 1) {
    // Passer à la question suivante
    isRunning3 = false
  } else {
    console.log('Please select 1 or 2')
  }
}

console.log(question[3])
console.log(qcm[3][0])
console.log(qcm[3][1])

let isRunning4 = true
while (isRunning4) {
  const userAnswer4 = readlineSync.question('You can answer : ')
  const answer4 = Number(userAnswer4)
  if (answer4 === 2) {
    note++
    // Passer à la question suivante
    isRunning4 = false
  } else if (answer4 === 1) {
    // Passer à la question suivante
    isRunning4 = false
  } else {
    console.log('Please select 1 or 2')
  }
}

console.log(question[4])
console.log(qcm[4][0])
console.log(qcm[4][1])

let isRunning5 = true
while (isRunning5) {
  const userAnswer5 = readlineSync.question('You can answer : ')
  const answer5 = Number(userAnswer5)
  if (answer5 === 1) {
    note++
    // Passer à la question suivante
    isRunning5 = false
  } else if (answer5 === 2) {
    // Passer à la question suivante
    isRunning5 = false
  } else {
    console.log('Please select 1 or 2')
  }
}

console.log(`Your final note is : ${note} / 5`)*/

// Autre méthode plus synthétique 
const readlineSync = require('readline-sync')

let note = 0
let qcm = [
  ['Question 1: Le C++ est un:', '1: langage', '2: compilateur', 1, 2],
  ['Question 2: TypeScript est une évolution de Javascript', '1: Vrai', '2: Faux', 1, 2],
  ['Question 3: Lire les cours avant de faire les exercices est inutile:', '1: Vrai', '2: Faux', 2, 1],
  ['Question 4: react.js a été developpé par Google:', '1: Vrai', '2: Faux', 2, 1],
  ['Question 5: Ethereum est une blockchain publique:', '1: Vrai', '2: Faux', 1, 2]
]
for (i = 0; i < qcm.length; i++) {
  console.log(qcm[i][0])
  console.log(qcm[i][1])
  console.log(qcm[i][2])

  let isRunning = true
  while (isRunning) {
    const userAnswer = readlineSync.question('You can answer : ')
    const answer = Number(userAnswer)
    if (answer === qcm[i][3]) {
      note++
      // Passer à la question suivante
      isRunning = false
    } else if (answer === qcm[i][4]) {
      // Passer à la question suivante
      isRunning = false
    } else {
      console.log('Please select 1 or 2')
    }
  }
}

console.log(`Your final note is : ${note} / 5`)