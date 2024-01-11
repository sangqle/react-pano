export const myPromise = (condition, ...args) => {
  const promise = new Promise((resolve, reject) => {
    if (condition) {
      if (args.length !== 0) {
        resolve(...args)
      } else {
        reject('Arguments cannot be empty')
      }
    } else {
      reject('Something went wrong!!!')
    }
  })

  return promise
}
