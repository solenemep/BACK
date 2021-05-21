const fsPromises = require('fs/promises')

const fastCopy = async (src, dst) => {
  try {
    const response = await fsPromises.readFile(src)
    await fsPromises.appendFile(dst, response)
  } catch (e) {
    throw e
  }
}

const main = async () => {
  try {
    const src = '/users/solenepettier/desktop/BACK/exo-async-1/src'
    const dst = await fsPromises.mkdir('/users/solenepettier/desktop/BACK/exo-async-1/dst')

    const files = await fsPromises.readdir(src)

    let promises = []

    for (const file of files) {
      promises.push(fastCopy(file, dst))
    }

    Promise.all(promises)

    /*
        const response = await fsPromises.readFile(src)
        await fsPromises.appendFile(dst, response)
      } catch (e) {
        throw e
      }
    }
    
    const main = async () => {
      try {
        const src1 = '/users/solenepettier/desktop/BACK/exo-async-1/src1.txt'
        const src2 = '/users/solenepettier/desktop/BACK/exo-async-1/src2.txt'
        const dst = '/users/solenepettier/desktop/BACK/exo-async-1/dst.txt'
    
        fastCopy(src1, dst)
        fastCopy(src2, dst)
        */


  } catch (e) {
    throw console.error(`main: ${e.message}`)
  }
}

main()