let asyncFunction = function() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve('asyncFunction has resolved.')
        }, 4000)
    })
}

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('asyncFunction2 is done.')
        }, 3000)
    })
}

let promise = asyncFunction()

promise
.then(function(val) {
    console.log('Yeah ' + val)
    return asyncFunction2()
})
.then(function(val){
    console.log('Yeah, second promise ' + val)
})
.catch(function(err){
    console.log("error: " + err)
})

let joke = document.querySelector('.joke')

fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
		"x-rapidapi-key": "31cdd90282mshfc9b086a3c9e334p1e99f6jsn4c446447751f",
		"accept": "application/json"
	}
})
.then(response => {
    return response.json()
})
.then(data =>{
    return data.value
})
.then(joke => {
    document.querySelector('.joke').textContent = joke
})
.catch(err => {
	console.log(err);
});

console.log("the code is Asynchornous")

