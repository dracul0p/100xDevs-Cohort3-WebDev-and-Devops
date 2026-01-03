/*
// function to print message
function callback() {
    console.log('3 Seconds have Passed!');
}


// setTimeout function to called callback function after 3 seconds
setTimeout(callback, 3000); // Output: 3 Seconds have Passed!
*/

//// Callback Based Approach
//promises based approach
 

/*
// function to wait for 3 seconds and then call resolve function
function waitFor3Sec(resolve) {
    console.log(resolve);
    
    setTimeout(resolve, 3000);
}

// function to print message
function main() {
    console.log('main is called');
}

// calling waitFor3Sec function and passing main function as argument
waitFor3Sec(main);
*/


/*
function random(resolve) { // resolve is also a function
    // resolve();
    setTimeout(resolve, 3000);
}

let p = new Promise(random); // suppose to return you something eventually 
// console.log(p);

// using the eventual value returned by promise 
function callback() {
    console.log('Promise Successed!');
}

p.then(callback);



// function to print message
function promiseCallback() {
    console.log('3 Seconds have Passed!');
}


// Promise Based Approach
// function to return promise object after 3 seconds
function setTimeOutPromisified(ms) {
    // returning promise object after 3 seconds using setTimeout function
    return new Promise(resolve => setTimeout(resolve, ms));  //object of promise class
}

// storing promise object in x variable and printing it

let x = setTimeOutPromisified(3000);
console.log(x); // Output: Promise { <pending> }   //this fn returns obj of promise class

// function to print message after 3 seconds using promise
setTimeOutPromisified(3000).then(promiseCallback); // Output: 3 Seconds have Passed!
*/



/*
//imp 

setTimeoutPromisified(3000).then(callback) //promised based
setTimeout(callback , timeout);  //callback based

//proises are systaxically superior way to handle async operation then callbacks

// promise  
function setTimeoutPromisified(ms) {
  let p =  new Promise(resolve => setTimeout(resolve, ms));   // obj of promise class
  return p;
}

function callback() {
	console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback) 



// function callback() {
// 	console.log("3 seconds have passed");
// }
// setTimeoutPromisified(3000).then(callback) 

// or 

// setTimeoutPromisified(3000).then(function() {
// 	console.log("3 seconds have passed");
// }) 

 
//promisified version of setimeout
function promiseCallback(resolve){
  setTimeout(resolve,3000);
}

promiseCallback(function(){
  console.log("hi");
  
});


// or

function promiseCallback(resolve){
  setTimeout(resolve,3000); 
  //resolve = main 
}

function main(){
  console.log("hi");
 }
promiseCallback(main);



//imp last  thing to understand
function promiseCallback(resolve){
  setTimeout(resolve,3000); 
  //resolve = main 
}



// ans  => settimeoutpromisified

function promiseCallback(resolve){
  setTimeout(resolve,3000); 
  //resolve = main 
}

function setTimeoutPromisified(){
  return new Promise(promiseCallback); 
  // returning empty obj of promise class
}

//promise says i will take one fn as input and when that functions first argument is called i will call whatever passed in then

function main(){
  console.log("hi");
 }

setTimeoutPromisified(3000).then(main) 



//eg callback vs promisified

function callback(err,  data){

}

// callback version
fs.readFile("abc.txt" ,"utf-8", callback)

//promisified version
fs.readFile("abc.txt" , "utf-8").then(callback)

*/
function random(resolve){  //function passed
    // resolve();
    setTimeout(resolve , 3000);
}

let p = new Promise(random); //function passed 

console.log(p);  //Promise { <pending> } instance of promise class currently pending . 


//using the eventual value returned by promise 
function callback(){
  console.log("promise successed!");
  
}

//
p.then(callback);

const { log } = require("console");
//suppose to return something eventually

//promis is a proxy to a eventual value

const fs = require("fs");
function readTheFile(resolve){
   fs.readFile("abc.txt" , "utf-8" , function(err , data) {
     resolve(data);
   });
}

function readFile(){
  return new Promise(readTheFile);
}

const f = readFile();

function callback(err , data){
  console.log(data);
    
}

f.then(callback)








// //promisified version of readFile
// function readTheFile(resolve){
//    fs.readFile("abc.txt" , "utf-8" , function(err , data){
//       resolve(data);
//    });
// }

// const o = new Promise(readTheFile)

// function callback(content){
//     console.log(content);
// }

// o.then(callback)