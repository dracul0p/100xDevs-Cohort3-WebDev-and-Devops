// function sum(a,b){
//   return a+b;

// }

// let ans = sum(5,1);
// console.log(ans);

const fs = require('fs');
const data = fs.readFile('a.txt', 'utf-8'); //asynchronous
const data2 = fs.readFileSync('b.txt', 'utf-8');  //synchronous
console.log(data);
console.log(data2);


