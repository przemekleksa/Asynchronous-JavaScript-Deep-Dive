console.log("the code is Asynchornous")

fetch("https://swapi.dev/api/films/1/", {
	"method": "GET",

})
.then(response => {
	console.log(response.url);
})
.catch(err => {
	console.log(err);
});


fetch("https://swapi.dev/api/films/1/")
.then(response => {
    // console.log(response)
    return response.json()
})
.then(data => {
    console.log(data)
    // document.querySelector('.movie').textContent = 'Movie ' + data.title + ' directed by ' + data.director
    return data.title
})
.then(title => {
    console.log(title)
})