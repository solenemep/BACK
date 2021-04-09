const axios = require('axios')
const fsPromises = require('fs/promises')

const wget = async () => {
  try {
    const response = await axios.get('http://lanacion.com.ar')
    await fsPromises.writeFile('/users/solenepettier/desktop/BACK/exo-async-0/index.html', response.data)
    const stats = await fsPromises.stat('/users/solenepettier/desktop/BACK/exo-async-0/index.html')
    console.log(stats)
  } catch (e) {
    console.log(e.message)
  }
}

wget()