/*
Take a moment and analyze this code. What would it take to make it asynchronous using setTimeout? Try a few things and see how they work.
*/

let students = [
    {name: "Mary", score: 90, school:"East"},
    {name: "James", score: 100, school:"East"},
    {name: "Steve", score: 40, school:"East"},
    {name: "Gabe", score: 90, school:"West"},
    {name: "Rachel", score: 85, school:"East"},
    {name: "Rochelle", score: 95, school:"West"},
    {name: "Lynett", score: 75, school:"East"},
]

let processStudents = function(data, callback) {
    for (let index = 0; index < data.length; index++) {
        if (data[index].school.toLowerCase() === "east"){
            if (typeof callback === 'function'){
                callback(data[index])
            }
        }
    }
}


console.log('Before determineTotal')
// processStudents(students, function(obj){
//     if(obj.score > 60) {
//         console.log(obj.name + ' passed.')
//     }
// })

let determineTotal = function() {
    let total = 0,
        count = 0
    
    processStudents(students, function(obj) {
        total = total + obj.score
        count++
    })
    console.log("Total score: " + total + ' - Total Count: ' + count)
}

setTimeout(determineTotal, 3000)
// determineTotal()
console.log("End of code.")