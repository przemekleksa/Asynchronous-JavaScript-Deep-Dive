"use strict"

console.log('before fetch')


//my code
// fetch("https://swapi.dev/api/people/1")
// .then(response => {
//     console.log(response)
//     return response.json()
// })
// .then(data => {
//     console.log(data)
//     return data
// })
// .then(data => {
//     console.log(data.name)
//     return data
// })
// .then(data => {
//     console.log(data.height + " " + data.hair_color)
// })
// .then(data => {
//     console.log(data.films[1])
// })


const swapi = num => {
    let url = "https://swapi.dev/api/people/"
    fetch(url  + num)
    .then(data => data.json())
    .then(obj =>{ 
        console.log(obj)
        return fetch(obj.homeworld)
    })
    .then(hwdata => hwdata.json())
    .then(hwobj =>{
        console.log(hwobj)
    })
    .catch(err => {
        console.log('Error: ' + err)
    })
}

swapi(1)
swapi(Math.floor(Math.random()*10))

// console.log(Math.floor(Math.random()*10))

console.log('after fetch')