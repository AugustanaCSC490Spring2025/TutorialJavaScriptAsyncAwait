// Full tutorial for asynchronous programming in JavaScript with callbacks, promises and async/await.

/* ASYNCHRONOUS PROGRAMMING 
JavaScript is a single-threaded programming language, and so can only execute one line of code at a time.
With JS alone, if we were to perform any interaction with a webpage (e.g., click a button), then the whole page would stop until the interaction is resolved. 

*/

let fetchData = () => { setTimeout(() => { console.log('Data fetched!') }, 2000) } // Simulating fetching some data. 

fetchData();
console.log('Hi!'); 

// "Hi!" will be logged before 'Data fetched!', because the fetchData function is asynchronous.
// This can be an issue in some cases, such as when later code depends on the data fetched by the asynchronous function.

/* CALLBACKS
Callbacks are what we call functions that we pass as arguments to other functions.
Callbacks are a common way to handle asynchronous code in JavaScript, since we can call the callback inside the "outer" function to ensure it runs after. 
Here is the same function as before, but now using a callback: */

function useCallback(callback) {            // pass in the name of callback function with no parentheses
    console.log('First!'); 
    callback()   
}

function foo() {
    console.log('Hi!');
}

function secondFunction() {
    console.log('Second!');
}

useCallback(secondFunction); // This will log 'Data fetched!' first, then 'Hi!'

// This can get really ugly when you have multiple asynchronous functions that depend on each other, as you have to nest all of them.
// Here is an example of nested callbacks, what is lovingly called "callback hell": 

// function callbackHell() {
//     setTimeout(() => {
//         console.log('First function done!');
//         setTimeout(() => {
//             console.log('Second function done!');
//             setTimeout(() => {
//                 console.log('Third function done!');
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }

// PROMISES
// Promises are a newer feature in JavaScript that provide a cleaner way to handle asynchronous code.

const examplePromise = fetch('https://jsonplaceholder.typicode.com/posts/1'); // fetch is a built-in function that returns a promise

examplePromise.then(() => {})   // then is a method that takes a callback function as an argument, which will run when the promise is resolved.
    .then(() => {})             // you can chain these together to run multiple functions in order.
    .catch();                   // catch is a method that takes a callback function as an argument, which will run when the promise is rejected.
