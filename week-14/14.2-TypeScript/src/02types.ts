
// Very similar to interfaces , types let you aggregate data together.

// interface User {
// 	name : string;
// 	age: number
// }


// cant implement a type  in class


type UserC = {
   name: string;
	age: number
}

function isLegal(user: UserC) : boolean {
   return user.age > 18;
}


// type let u do unions and intersections

// 1. Union  ->
// a union can have either 1 or either other or both of the types vlaues


type GoodUser ={
  name :string,
  gift : string
} 

type BadUser ={
   name :string,
   ip:string
}

type UserType = GoodUser | BadUser ;

const user1 : UserType = {
  name : "harsh",
  gift : "car",
  ip : "123"
}


// 2. Intersection
// What if you want to create a type that has every property of multiple types/ interfaces
type Employee = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};



let e : Employee ={
  name : "harsh",
  startDate : new Date()
}
let m : Manager = {
  name : "rahul",
  department : "software developer"
}

console.log(e);
console.log(m);

type TeamLead = Employee & Manager;

// all propety  of employee and manager should be there in teamlead --------------->
const t: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer"
};
console.log(t);


// create  type user and admin :
// create a fn that takes either a user or admin or an  admin as an input and returns a string saying "welcome , [name]




// ------------------------>
// Arrays in typescript :  

// the ! is called the non-null assertion operator.

// It tells TypeScript:

// Trust me, this value is not null or undefined.
function maxNo(a: number[]): number {
  let max = -10000000;

  for (let i = 1; i < a.length; i++) {
    if (a[i]! > max) {
      max = a[i]!;
    }
  }

  return max;
}
console.log(maxNo([12, 34, 50])); // 50


interface Address{
  city : string;
  pincode : number
}

interface User {
  name : string;
  age : number;
  address : Address[];

  // address : {
  //   city : string;
  //   pincode : string
  // }[]
}

let user : User = {
  name : "harsh",
  age : 23,
  address : []
}
console.log(user);

// create a fn that takes an array of users and returns an array of full names of users whose age is greater than 18
interface UserN {
  firstName : string;
  lastName : string;
  age: number;
}


// function getFullName(userN: UserN[])  {
//   return userN.filter( u => u.age > 18)
// }

function getFullName(userN: UserN[])  {
  let userArr : UserN[] = [];
  for(let i = 0 ; i < userN.length ; i++){
    if(userN[i]!.age > 18){
      userArr.push(userN[i]!);
    }
  }
  return userArr;
}

console.log(getFullName([{
  firstName : "harsh",
  lastName : "singh",
  age : 23
} , {
  firstName : "rahul",
  lastName : "sharma",
  age : 17
} , {
  firstName : "harkirat",
  lastName : "singh",
  age : 19
} , {
  firstName : "ash",
  lastName : "kumar",
  age : 50
}]));
