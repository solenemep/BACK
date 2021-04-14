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

const main = async () => {
  try {
    /*
    asyncTask(1, 10, true)
    asyncTask(2, 5, true)
    asyncTask(3, 0.5, true)
    asyncTask(4, 1, true)
    */

    let data = await Promise.all([
      asyncTask(1, 10, true),
      asyncTask(2, 5, true),
      asyncTask(3, 0.5, true),
      asyncTask(4, 1, true),
    ])
    console.log(`results: ${data}`) // data is an array
  } catch (e) {
    console.error(e.message)
  }
}

main()