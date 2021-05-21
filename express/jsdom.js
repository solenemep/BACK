const jsdom = require('jsdom')
const { JSDOM } = require('jsdom')
const axios = require('axios')

/*
app.get('/wiki/:word', async (req, res) => {
  try {
    const word = req.params.word
    const response = await axios.get(`https://en.wikipedia.org/wiki/${word}`)
    res.send(response.data)
  } catch (e) {
    res.send(e.message)
  }
})
*/

const main = async () => {
  try {
    const response = await axios.get('https://en.wikipedia.org/wiki/Fravia')
    const dom = new JSDOM(response.data)
    const titleTag = dom.window.document.querySelector('title')
    const aTag = dom.window.document.querySelectorAll('a')
    for (const link of aTag) {
      console.log(link.href)
    }
    const imgTag = dom.window.document.querySelectorAll('img')
    console.log(titleTag.textContent)
    console.log(aTag.length)
    console.log(imgTag.length)
    const data = { title: titleTag.textContent, aTag: aTag.length, imgTag: imgTag.length }
    console.log(JSON.stringify(data))
  } catch (e) {
    throw console.log(e.message)
  }
}
main()