let logCall = function() {
    console.log("logCall was called back.")
}

setTimeout(logCall, 2000)

setTimeout(function(){
    console.log('The function was called back.')
}, 3000)

let btn = document.querySelector('#item1')

btn.addEventListener('click', function(e){
    console.log('The button was clicked.')
})

