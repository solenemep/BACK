// Notre fonction ShowStars
const showStars = (nbStars, sign) => {
  for (let i = 1; i <= nbStars; i += 1) {
    console.log(sign.repeat(i))
  }
}


// Verifier qu'il y a bien 2 arguments a passer à notre programme
if (process.argv.length !== 4) {
  console.log('usage: node pyramid.js number sign')
  process.exit(1)
}

// Verifier que le premier argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number.`)
  process.exit(1)
}

// Nous somme OK, il n'y a qu'un seul argument et c'est un nombre.
const nbStars = Number(process.argv[2])
const sign = process.argv[3]
showStars(nbStars, sign)

