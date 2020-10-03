import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
// import navigation from "./navigation";

//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
//document.getElementById("jokes").innerHTML = allJokes.join("");

// // Solution 1
// document.getElementById('1').innerHTML = 'TEST11111111111111';

// // Solution 2
// document.getElementById('2').innerHTML = 'TEST2222222222222222';

// First assignment - Jokes

 document.getElementById("btn_Joke").addEventListener("click", function() {
    const jokeID = document.getElementById("inp_Joke").value;
    document.getElementById("txt_Joke").innerHTML = jokes.getJokeById(jokeID);
});

document.getElementById("btn_JokeIns").addEventListener("click", function() {
    const jokeInsert = document.getElementById("inp_JokeIns").value;
    jokes.addJoke(jokeInsert);
});

// Second assignment 1-4 - Quotes

document.getElementById("btn_Quotes").addEventListener("click", function() {

    
 fetch('https://studypoints.info/jokes/api/jokes/period/hour')
 .then(function(response) {
   return response.json();
 })
 .then(function(data) {
   console.log(data.id);
   document.getElementById("quotes").innerHTML = data.joke;
});


});

// Second assignment 5
/*
By monitoring the network tab we are able to see that the qoute is updated every hour and therefor the quote gets a new ID.
It is possible because the only way to overcome the same-origin policy is to ensure that the requested resource from other 
origins includes the right HTTP headers such as Access-Control-Allow-Origin. In our case it is set with the wildcard * which means all.

Note to self:

Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web 
application running at one origin, access to selected resources from a different origin.


Ajax short for Asynchronous JavaScript and XML  is a set of web development techniques using many web technologies on 
the client side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from 
a server asynchronously (in the background) without interfering with the display and behaviour of the existing page. 
By decoupling the data interchange layer from the presentation layer, Ajax allows web pages and, 
by extension, web applications, to change content dynamically without the need to reload the entire page.

The same-origin policy is a critical security mechanism that restricts how a document or script loaded from one origin 
can interact with a resource from another origin. It helps isolate 
potentially malicious documents, reducing possible attack vectors.
*/

// Second assignment 6
function getQuote(){
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.id);
        document.getElementById("div_QuoteHour").innerText = data.joke;
    });
}
//runs it once
getQuote();
//Runs it after 3,6mio ms (1h)
setInterval(getQuote, 3600000);

// Third assignment 

document.getElementById("north").addEventListener("click", function() {
   document.getElementById("compass").innerHTML = "North";
});

document.getElementById("south").addEventListener("click", function() {
    document.getElementById("compass").innerHTML = "South";
});

document.getElementById("west").addEventListener("click", function() {
    document.getElementById("compass").innerHTML = "West";
});

document.getElementById("east").addEventListener("click", function() {
    document.getElementById("compass").innerHTML = "East";
});