"use strict"

// fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(data => data.json())
//     .then(obj => console.log(obj))


let todo = {
    completed: true,
    userId: 3,
    title: "Learn Promises"
}

fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(todo)
})
.then(response => response.json())
.then(obj => console.log(obj))
.catch(err => console.log("Unable to create todo " + err))

console.log('Other code')