/* ASYNCHRONOUS PROGRAMMING */

// DEMO 1: Naive use of asynchronous code returns

function fetchData() { setTimeout(() => 'Data fetched!', 1000);}
console.log(fetchData()); // undefined, since fetchData() hasn't returned anything yet

/* CALLBACKS 
By passing in functions that will be executed once the asynchronous code has finished, we can handle the data when it is returned.
This function we pass in is called a callback function. 
We are essentially saying, "Once you're done, run this."
*/

// DEMO 2.a: Callback

function greetingCallback(callback) { 
    console.log('Hello'); 
    callback(); 
}

greetingCallback(() => { console.log('Goodbye!'); });

// DEMO 2.b: success/failure callback

function useCallback(success, failure) { 
    console.log('Performing operation...');
    
    const err = false;
    if (!err) {
        success();
    } else {
        failure();
    }
}

function successCallback() {
    console.log('Operation sucessful!');
}

function failureCallback() {
    console.log('Operation failed!');
}

useCallback(successCallback, failureCallback); 
// Or we can use an anonymous function
// useCallback(() => { console.log('Operation sucessful!'); }, () => { console.log('Operation failed!'); });

// DEMO 2.c: Callback Hell

function first(callback) {
    console.log('First');
    setTimeout(callback, 1000);
}

function second(callback) {
    console.log('Second');
    setTimeout(callback, 1000);
}

function third(callback) {
    console.log('Third');
    setTimeout(callback, 1000);
}

function fourth(callback) {
    console.log('Fourth');
    setTimeout(callback, 1000); 
}

// This is an example of callback hell
first(() => {
    second(() => {
        third(() => {
            fourth(() => {
                console.log('Done!');
            });
        });
    });
});

// PROMISES
// Promises are a way to handle asynchronous code in JavaScript, and are a more elegant solution than callbacks.
// It is essentially an object that we attach callbacks to, instead of passing them as arguments.

// DEMO 3.a: Handling Promises
const data = fetch('https://jsonplaceholder.typicode.com/posts');

data.then(response => {
    console.log(response);
}
).catch(error => {
    console.log(error);
});