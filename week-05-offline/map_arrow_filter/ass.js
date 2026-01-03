// Here is a custom map function (your own implementation) that takes two inputs:

// arr (array)
// callback (function)
// and returns a new transformed array — just like built-in map().

let arr = [1, 2, 3, 4];

function iMap(arr, callback) {
  const arrr = [];
  for (let i = 0; i < arr.length; i++) {
    arrr.push(callback(arr[i]));
  }
  return arrr;
}

function callback(val) {
  return val * 2;
}

const arrAns = iMap(arr, callback);


console.log(arrAns);
