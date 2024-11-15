// synchronous code
console.log('start');

//Long task (task loop takes time)
for (let index = 0; index < 10000; index++) {
    console.log('index', index);
}

console.log('End');

//Aschronous code - setTimeout, fetch, and run in the backgroound, allowing other code to run
console.log('start');

//setTimout example: This code will run after the specified delay (20seconds)
setTimeout(() => {
    console.log('Task finished');
}, 20000);

console.log('End');

//promise - Represent the eventual completion (or failure) of an asynchronous operation and its resulting value

/**
 * PRomise States:
 * 1. Pending: Initial satte, outcome is unknown.
 * 2. Fulfilled:Operation is successful.
 * 3. Rejected: Operation failed
 */

// create a promise using the constructor
const checknumber = new Promise((resolve, reject) => {
// check a condition (in this case, 1 < 2)
if (1 < 2) {
    resolve('Resolve'); // if the condition is true, resolve the promise
} else {
    reject('Reject, 1 is not greater than 2');// if the condition is false, reject the promise
}
});

// Handling the promise - .then() is use for success and 
//                        .catch() is used for failure
checkNumber.then((message) => {
    console.log('then', message); // Execute if the Promise is resolved    
}).catch((error) => {
    console.log('Error', error); // Execute if the promise is rejected
});

// Function that returns a promise based on the value of the input number
function checkNumber(num) {
    return new Promise ((resolve, reject) => {
        // If the number is greater than 10, resolve the promise
        if (num > 10) {
            const data = {
                msg: 'Resolved',
                statuscode: 200,
                value: num
            };
            resolve(data); // Resolve the promise with the data object
        } else{
            reject('The number is too small'); // Reject the promise if the number is 10 or less
        }
    });
}
// Calling the checkNumbe function with the number 100
checkNumber(100).then((e) => {
    console.log(e); //Executes if the promise is resolved, logging the resolve data
}).catch((error) => {
    console.log(error); // Executes if the promise is rejected, logging the error message
});

//Example of making a Get request to fetch data from the API
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

//Fetch data from the API
fetch(apiUrl)
    .then((res) => res.json()) //convert the response to JSON format
    .then((data) => console.log('data', data)) // Log the retrived data
    .catch((error) => console.log('error',error)); // Handling any errors that occur during the fetch