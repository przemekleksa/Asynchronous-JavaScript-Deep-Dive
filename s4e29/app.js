"use strict"

let prom = new Promise((resolve, reject) => {
    setTimeout( () => {
        reject('Done')
    }, 4000)
})

prom.then(val => console.log(val), val => console.log("rejected: " + val))

console.log("see this is asynch code")

let setTimeoutP = time => {
    return new Promise((res,rej) =>{
        if(isNaN(time)) {
            rej('a number is required')
        }
        setTimeout(res, time)
    })
}

setTimeoutP(2000)
.then(()=>{
    console.log("Done")
})
.catch(err => {
    console.error(err)
})