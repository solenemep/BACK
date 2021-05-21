const { axios } = require('axios')
const express = require('express')
const app = express()

const IP_LOOPBACK = 'localhost'
const IP_LOCAL = 'localhost' // my local ip on my network
const PORT = 3000

const asyncTask = (id, timeout, willFulFilled) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (willFulFilled === true) {
        // ce console.log simule un side effect
        console.log(`Log: task${id} done after ${timeout} seconds`)
        // la valeur de retour est contenu dans le resolve
        resolve(`result from task${id}`)
      } else {
        reject(new Error(`faillure from task${id}`))
      }
    }, timeout * 1000)
  })
}

// GET sur la racine
app.get('/', (req, res) => {
  //nous recupérons l'ip source de la requête
  res.send(`Welcome ${req.ip} to my first express app.`)
})

// POST sur la racine
app.post('/', (req, res) => {
  res.send("Sorry we don't post requests yet.")
})

// GET sur '/hello'
app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

// GET sur '/hello/sofiane'
app.get('/hello/sofiane', (req, res) => {
  res.send('Hello Sofiane!')
})

// GET sur '/hello/franck'
app.get('/hello/:firstName', (req, res) => {
  res.send(`Hello ${req.params.firstName}`)
})

// GET avec async
app.get('/hello/timebomb/:seconds/', async (req, res) => {
  await asyncTask(1, req.params.seconds, true)
  res.send(`Boom after ${req.params.seconds}`)
})

// GET avec axios
app.get('/people/:ID/', async (req, res) => {
  try {
    const ID = req.params.ID
    const response = await axios.get(`https://swapi.dev/api/people/${ID}`)
    res.send(response.data)
  } catch (e) {
    res.send('Oops')
  }
})

app.get('/calc/add/:op1/:op2', (req, res) => {
  const op1 = req.params.op1
  const op2 = req.params.op2
  const result = { op: 'add', op1: op1, op2: op2, res: op1 + op2 }
  res.type('application/json')
  res.send(JSON.stringify(result))
})

// start the server
app.listen(PORT, IP_LOCAL, () => {
  console.log(`Example app listening at http://${IP_LOCAL}:${PORT}`)
})