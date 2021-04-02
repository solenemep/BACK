// Notre fonction ShowStars
const showStars = (nbStars, sign, reverse) => {
  if (reverse) {
    for (let i = nbStars; i >= 1; i -= 1) {
      console.log(sign.repeat(i))
    }
  } else {
    for (let i = 1; i <= nbStars; i += 1) {
      console.log(sign.repeat(i))
    }
  }
}
let reverse = false

// On accepte une commande à 2 arguments ou 3 arguments (le dernier étant '-r')
if (!(process.argv.length === 4 || process.argv.length === 5 && process.argv[4] === '-r')) {
  console.log('usage : node pyramid-r.js number sign || node pyramid-r.js number sign -r')
  process.exit(1)
}

// Verifier que le premier argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

// Si il y a 3 arguments et que le dernier argument est -r
if (process.argv[4] === '-r') {
  reverse = true
}


const nbStars = Number(process.argv[2])
const sign = process.argv[3]
showStars(nbStars, sign, reverse)