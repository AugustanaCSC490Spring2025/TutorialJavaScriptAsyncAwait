// I have commented such that all of the demo code wont run. If you want to run something in particular, uncomment the respective function call.

// CALLBACKS
// Syncronous Callbacks
// const myFunction = (callback) => { console.log('First'); callback(); }


// Asynchronous Callbacks
const myFunction = (callback) => {  // pass in a function with no parentheses as callback
    setTimeout(() => {
        console.log('First');
        callback();                 // can treat it as a normal function to call when you want it.
    }, 1000)
}
//myFunction(() => console.log('Second'));

// Examples

// setTimeout(() => { console.log('This will run after 2 seconds!'); }, 2000);
// document.getElementById('btn').addEventListener("click", () => console.log("button clicked!)")); // This one wont work, since it's not connected to the DOM in any way

//setTimeout callback Hell
function callbackHell() {
    setTimeout(() => {
        console.log('This will run after 2 seconds!');
        setTimeout(() => {
            console.log('This will run after 4 seconds!');
            setTimeout(() => {
                console.log('This will run after 6 seconds!');
            }, 2000);
        }, 2000);
    }, 2000); // Only 3 deep, and its already kind of hard to follow
}
//callbackHell();

// PROMISES
// Handling Promises

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())                                  // The .then() method waits for resolve() to be called in the Promise, and then it runs this callback function
//     .then(data => console.log(data))                                    
//     .catch(error => console.log(error));                                // The .catch() method waits for reject() to be called in the Promise, and then it runs this callback function. can catch errors from all chained promises before it.

// Creating a Promise

const myPromise = new Promise((resolve, reject) => { 
    // This anonymous function in the promise, called the executor, determines whether or not the promise is resolved or rejected
    // It will do this based on the async code you are promising to run (e.g., your fetch fails for some reason).
    const isSuccessful = true;              // Simulating this response with a simple boolean. Change this if you want it to reject. 
    if (isSuccessful) {
        resolve('Success!');        // The resolve() method is called when the promise is successful
    } else {
        reject('Failure!');         // The reject() method is called when the promise fails
    }
});

// ASYNC/AWAIT
async function fetchPost() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
}
// fetchPost();

// Promise.all
async function fetchTwoPostsSlow(id1,id2) {
    try {
        const response1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id1}`);
        const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${id2}`);
        const data1 = await response1.json();
        const data2 = await response2.json();
        console.log(data1);
        console.log(data2);
    }
    catch (error) {
        console.log(error);
    }
}
//fetchTwoPostsSlow(1,2);

async function fetchTwoPostsFaster(id1,id2) {
    try {
        const resonse1 = fetch(`https://jsonplaceholder.typicode.com/posts/${id1}`);
        const response2 = fetch(`https://jsonplaceholder.typicode.com/posts/${id2}`);
        const responses = await Promise.all([resonse1, response2]);
        const data = await Promise.all([responses[0].json(), responses[1].json()]);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
//fetchTwoPostsFaster(1,2);