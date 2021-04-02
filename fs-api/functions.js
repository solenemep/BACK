const { readFileSync } = require('fs')

// Fonctions pour tail.js et tail-option.js
const display = (file, nb) => {
  const tab = readFileSync(file).toString().split(/\n/g)
  for (i = tab.length - nb; i < tab.length; i++) {
    console.log(tab[i])
  }
}

// Fonctions pour wc.js et wc-option.js
const lineCount = (file) => {
  const txt = readFileSync(file).toString()
  return nbLine = txt.split(/\n/g).length
}
const wordCount = (file) => {
  const txt = readFileSync(file).toString()
  return nbWord = txt.replace(/\n/g, ' ').split(' ').length
}
const charCount = (file) => {
  const txt = readFileSync(file).toString()
  return nbChar = txt.split('').length
}

exports.display = display
exports.lineCount = lineCount
exports.wordCount = wordCount
exports.charCount = charCount
