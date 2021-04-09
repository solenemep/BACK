const fsPromises = require('fs/promises')

const toUpperCase = async () => {
  try {
    let txt1 = await fsPromises.readFile('/users/solenepettier/desktop/BACK/exo-async-0/hello.txt', 'utf-8')
    txt1 = txt1.toUpperCase()
    await fsPromises.writeFile('/users/solenepettier/desktop/BACK/exo-async-0/hello.txt', txt1)
  } catch (e) {
    console.log(e.message)
  }
}
toUpperCase()