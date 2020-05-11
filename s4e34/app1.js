"use strict"

let firstName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('Steven') 
        }, 4000)
    })
}

let lastName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hancock")
        }, 3000)
    })
}

let middleName = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("W.")
        }, 7000)
    })
}

Promise.all([firstName(), middleName(), lastName()])
    .then(msg => {
        console.log(msg[0] + " " + msg [1] + " " + msg[2])
    })
    .catch(err => {
        console.log(err)
    })

Promise.race([firstName(), middleName(), lastName()])
    .then(msg => {
        console.log(msg)
    })
    .catch(err => {
        console.log(err)
    })