// get-html-size.js
const axios = require('axios')

const getHtmlSize = async (url) => {
  try {
    const response = await axios.get(url)
    return response.headers['content-length']
  } catch (e) {
    throw e
  }
}

const main = async () => {
  const url1 = 'https://en.wikipedia.org/kiki/water_on_mars' // BAD URL
  const url2 = 'https://en.wikipedia.org/wiki/Old_Red_Cracker'

  const p1 = getHtmlSize(url1)
  const p2 = getHtmlSize(url2)

  //***1 Await
  /*
  const size1 = await getHtmlSize(url1)
  console.log(`size of page ${url1}: ${size1 / 1000}KB`)

  const size2 = await getHtmlSize(url2)
  console.log(`size of page ${url2}: ${size2 / 1000}KB`)
  */

  //***2 Promise.all
  /*
  const [size1, size2] = await Promise.all([p1, p2]) // Attente de la résolution des 2 promises !!

  console.log(`size of page ${url1}: ${size1 / 1000}KB`)
  console.log(`size of page ${url2}: ${size2 / 1000}KB`)
  */

  //***3 Promise.allSettled
  const [result1, result2] = await Promise.allSettled([p1, p2])

  if (result1.status === 'fulfilled') {
    console.log(`size of page ${url1}: ${result1.value / 1000}KB`)
  } else {
    console.error(`${url1}: ${result1.reason}`)
  }
  if (result2.status === 'fulfilled') {
    console.log(`size of page ${url2}: ${result2.value / 1000}KB`)
  } else {
    console.error(`${url2}: ${result2.reason}`)
  }
}

main()