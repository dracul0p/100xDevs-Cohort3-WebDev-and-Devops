// The async and await syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain

// async/await is essentially syntactic sugar on top of Promises. 

//no call back hell , no promise chaining 
//almost looks like sync code

/*

//syntaxtic sugar
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function solve() {
	await setTimeoutPromisified(1000);
	console.log("hi");
	await setTimeoutPromisified(3000);
	console.log("hello");
	await setTimeoutPromisified(5000);
	console.log("hi there");
}

solve();

*/

//read file | promisified version |async await => 

// import fs module
const fs = require("fs");


//defining async fn
function readFileAsync() {
    return new Promise(function (resolve) {
        fs.readFile("abc.txt", "utf-8", function (err, data) {
            resolve(data);
        });
    });
}

async function solve() {
    let data = await readFileAsync(3000);
    console.log(data);
}

solve();

//fetch promisified
