const moviePlanets = movieNum => {
    let url = 'https://swapi.dev/api/films/'
    $.getJSON(url + movieNum + '/')
    .then(response => {
        console.log(response.title)
        response.planets.forEach(planet => {
            $.getJSON(planet)
            .then(response => console.log(response.name))
            .catch(err => console.log('Couldnt retrive planet' + err))
        })
        
    })
    .catch(err => console.log('Couldnt retrive films: ' + err))
}

moviePlanets(3)