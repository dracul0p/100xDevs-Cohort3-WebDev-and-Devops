/*

function setTimeOutPromisified(duration){
   return new Promise(function(resolve){
        setTimeout(resolve , duration); //alwasy reslove some callback never fail
   })
}

function callback(){
  console.log("5 sec after");
  
}

setTimeOutPromisified(1000).then(callback)
*/

/*
Q: Write code that
logs hi after 1 second
logs hello 3 seconds after step 1
logs hello there 5 seconds after step 2
*/

/*

// call back hell => one async call after another
//ugly code
setTimeout(function () {
  console.log("hi");

  setTimeout(function () {
    console.log("hello");
    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);

// same as above escape from call back hell
// function to print hello there
function step3Done() {
  console.log("hello there");
}

// function to print hello after 3 seconds and call step3Done after 5 seconds
function step2Done() {
  console.log("hello");

  // call step3Done after 5 seconds
  setTimeout(step3Done, 5000);
}

// function to print hi after 1 second and call step2Done after 3 seconds
function step1Done() {
  console.log("hi");

  // call step2Done after 3 seconds
  setTimeout(step2Done, 3000);
}

// call step1Done after 1 second
setTimeout(step1Done, 1000);


*/

/*

//promisified version of (callback hell) but be call it (then hell)  
//  same one inside anotherindentations
//here we can argue call  back are  better then promises to handel call back hell extra code
//

function setTimeOutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

setTimeOutPromisified(1000).then(function callback() {
  console.log("hi");
  setTimeOutPromisified(3000).then(function callback() {
    console.log("hello");
    setTimeOutPromisified(5000).then(function callback() {
      console.log("5 sec after");
    });
  });
});




// fix  for then hell => using functiions outsides but it is bd

// 1.define functions outisde as above
function setTimeOutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

function callback3() {
  console.log("hi 5sec");
  setTimeOutPromisified(5000).then(callback2);
}

function callback2() {
  console.log("hi 3sec");
  setTimeOutPromisified(3000).then(callback3);
}


function callback1() {
  console.log("hi");
  setTimeOutPromisified(1000).then(callback2);
}


setTimeOutPromisified(1000).then(callback1);
*/

// cant use fn outside  | using anynomus functions




// IMP
//getting rid of CALLBACK HELL
//PROMISE CHAINING  -----------------------------------> 

// WHEN U KNOW U ARE CALLING A FN WITH .THEN HAS ANOTHER PROMISE CALL INSIDE WE CAN CHAIN CALL LIKE THIS. get rid of then chaining |unnecessary indentation
function setTimeOutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}


 //returns a promise 

// setTimeOutPromisified(1000)
//   .then(function callback() {
//     console.log("hi");
//     return setTimeOutPromisified(3000);
//   })                                      


//using promise chaining
 
setTimeOutPromisified(1000)
  .then(function callback() {
    console.log("hi");
    return setTimeOutPromisified(3000);
  })
  .then(function callback() {
    console.log("hello");
    return setTimeOutPromisified(5000);
  })
  .then(function callback() {
    console.log("5 sec after");
  });


  //when promise is returned you can call .then on it.this is promise chaining.



