"use strict"

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done')
    }, 4000)
})

p1.then(val => {
    console.log(val)
}, val => console.log('rejected: ' + val))

console.log('see this is async code')