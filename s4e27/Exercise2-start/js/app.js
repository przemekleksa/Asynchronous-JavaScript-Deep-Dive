var MAINAPP = (function(nsp) {
    "use strict";

    // let posts = [],
    //     comments = [],
    //     todos = [];

    /*
    This IIFE is the start of an application. The first thing we want to do is download all the posts, comments and todos so that we can work with them. Add the code in order to do that. Also, make sure that you add the posts, comments and todos to the MAINAPP variable so they are accessible outside this function (e.g. nsp.posts = posts & return nsp). Because the code is asynchronous, you will need to consider the best way to do that.
    */
   let url = "https://jsonplaceholder.typicode.com/"

    fetch(url + 'posts')
    .then(response1 => response1.json())
    .then(posts => {
        console.log(posts)
        nsp.posts = posts
    })
    .catch(err => console.log('Cant retrive posts: ' + err))

    fetch(url + 'comments')
    .then(response2 => response2.json())
    .then(comments =>  {
        console.log(comments)
        nsp.comments = comments
    })
    .catch(err => console.log('Cant retrive comments: ' + err))

    fetch(url + 'todos' + '/')
    .then(response3 => response3.json())
    .then(todos => {
        console.log(todos)
        nsp.todos = todos
        console.log("end")
    })
    .catch(err => console.log('Cant retrive todos: ' + err))

  
   
    
    //public
    // nsp.posts = posts;
    // nsp.comments = comments;
    // nsp.todos = todos
    return nsp;
})(MAINAPP || {});