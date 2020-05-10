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
    let url = "https://swapi.dev/api/people" + num
    fetch(url)
}


console.log('after fetch')