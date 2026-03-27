//notes :  https://projects.100xdevs.com/tracks/6SbPPXGkG8QKFOTW9BmL/ts-1

let x :number = 1 ;
// x="ass";  // error
console.log(x);


//types is ts : number , string , any  -->
//avoid using any 

// let firstName : string = "asheesh";

function greetings( firstName : string | number){
  console.log("hellow" , firstName);
  
}

greetings( "asheesh" );

function sum(a: number  , b :number){
   console.log(a+b);
   
}

sum(6 ,4);

//return type is being infured
function isLegal(age:number) : boolean{
  if(age >= 18){
    return true;
  }else{
    return false;
  }
}
// let ans : boolean = isLegal(50)

//it directly nows type due to type script compiler ifers return type.

let ans  = isLegal(50)
// ans ="ad"  //error
console.log(ans);





function sumN(a: string  , b :number){
 return a + b;
   
}

let curr = sumN("6" , 4);  //64

console.log(curr);

// fun to another fn as input : and type of argument.
/*
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("hi there");
})

function delayedCall1(fn: () => number) {
    setTimeout(fn, 1000);
}

delayedCall1(function() {
  console.log("fn ");
  return 1;
})

// console.log(
//   fn
// );



function delayedCall1(fn: (() => number) | ((a:number) => number) ) {
    setTimeout(fn, 1000);
}

function abc() {
  console.log("fn ");
  return 1;
}

delayedCall1(abc);


function delayedCall1(fn: (a:string) => void ) {
    setTimeout(() => fn("asheesh"), 1000);
}

function greet(name : string) {
  console.log("hello " + name );
  
}

delayedCall1(greet);
*/

const greet = (name: string) => `Hello, ${name}!`;

console.log(greet("Asheesh"));

//-------------------------->

function goodi(user :{
  name:string,
  age:number
}){
   console.log("hello " + user.name);
}
goodi({
    name: "Gaurav",  // User's name
    age: 22,         // User's age
});

let user :  {
    name: string;
    age: number;
}
 = {
    name: "aurav",  // User's name
    age: 2,  
}

goodi(user);

type UserType = {
  firstname : string ,
  lastname : string ,
   age : number
}

interface UserTypeI {
  firstname : string ,
  lastname : string ,
   age : number
}

let user1 : UserType = {
    firstname: "aurav",  // User's name
    lastname:"rana" ,
    age: 2,  
}

let user2 : UserTypeI = {
    firstname: "aurav",  // User's name
    lastname:"rana" ,
    age: 2,  
}

fn2(user1);
fn3(user2);

function fn2(user : UserType){
  console.log(user.firstname);
  console.log(user.lastname);

  
}


function fn3(user : UserTypeI){
  console.log(user.firstname);
  console.log(user.lastname);

  
}