var MAINAPP = (function(nsp) {
    "use strict";

    // let posts = [],
    //     comments = [],
    //     todos = [];

    /*
    This IIFE is the start of an application. The first thing we want to do is download all the posts, comments and todos so that we can work with them. Add the code in order to do that. Also, make sure that you add the posts, comments and todos to the MAINAPP variable so they are accessible outside this function (e.g. nsp.posts = posts & return nsp). Because the code is asynchronous, you will need to consider the best way to do that.
    */
   let url = "https://jsonplaceholder.typicode.com/"

    let p = fetch(url + 'posts')
    .then(response1 => response1.json())
    

    let c = fetch(url + 'comments')
    .then(response2 => response2.json())
    

    let t = fetch(url + 'todos' + '/')
    .then(response3 => response3.json())
   

    Promise.all([p, c, t])
        .then(data => {
            nsp.posts = data[0]
            nsp.comments = data[1]
            nsp.todos = data[2]
            console.log(nsp.posts, nsp.comments, nsp.todos)
        })
        .catch(err => console.log('Error: ' + err))
 
    // Promise.race([p, c, t])
    //     .then(msg => {
    //         console.log(msg)
    //     })
   
    
    //public
    // nsp.posts = posts;
    // nsp.comments = comments;
    // nsp.todos = todos
    return nsp;
})(MAINAPP || {});