//map filter  => helper fn
//  arrow => another way for fn

const { log } = require("console");

// arrow  fn

function  sum(a, b){
  return a+b;
}

// const sum = (a,b) =>{
//   return a+b;
// }

// console.log(sum(1 , 4));

/*
app.get("/", (req, res) => {
})

app.get("/", funciton (req, res) {
})


*/


// map and filter 
//    arr *2  -->new  arr
// [1,2,3,4] ----->[2,4,6,8]

const arr = [1,2,3,4];
const newArr = [];
for(let i = 0 ;i<arr.length ;i++){
   newArr.push(arr[i]*2);
}
// console.log(newArr);




// arr.map() JavaScript ka ek built-in array method hai jo array ke har element par ek function run karta hai aur ek naya array return karta hai..

function transform(i){
  return i * 2;
}
const ans = arr.map(transform);

// ----------------------------------------------------------------------------------------------------------------------
// console.log(ans);

// or

let aArr = arr.map(function(i) {
    return i * 2 ;
});

const result = arr.map(num => num * 2);


// console.log(aArr); 


//filter
// srr.filter() array ke har element ko check karta hai,
// aur sirf wahi elements return karta hai jinke liye callback true kare.

// returns new array
// ✔ Original array unchanged
// ✔ callback must return true / false

//giver an arry  give all even value from it

  const arrH = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0){
        
     
    arrH.push(
       arr[i]
    );
     }
  }

// console.log(arrH);

//filter
 
//logic

function filterLogic(n){
  if(n % 2 == 0){
    return true;
  }else{
    return false;
  }
}

let anss = arr.filter(filterLogic);
// or 
let anss2 = arr.filter(function(n){
  // if(n % 2 == 0){
  //   return true;
  // }else{
  //   return false;
  // }
  return n % 2 == 0;
});

// console.log(anss2);

let name =["harsh" , "hitesh" ,"rogit" , "mohit" , "henry"  ,"ashe"]

let anss3 = name.filter(function(n){
   return n.startsWith("h");
});

console.log(anss3);


// 💯 Final Summary
// map = har value ko change karo
// filter = jo pasand ho sirf unko rakho