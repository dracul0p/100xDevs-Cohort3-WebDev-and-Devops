// https://projects.100xdevs.com/tracks/6SbPPXGkG8QKFOTW9BmL/ts-6

//interfaces and types --------------------------------------->
// Define an interface for the User object with specific fields and data types.
interface Users {
    name: string; 
    age: number; 
    address: { // Nested object for the user's address.
        city: string; 
        country: string; 
        pincode: number; 
    };
}

// Note:
// All the properties defined in the interface are mandatory. 
// You cannot skip any property when creating a user object unless marked as optional. 
// For making properties optional, refer to the third code example in the repository.

// Creating a user object that matches the defined interface structure.
let user: Users = {
    name: "Rohan Dev", 
    age: 23, 
    address: { 
        city: "Panagarh", 
        country: "India", 
        pincode: 713148 
    }
};

function isLegal(user: Users) {
  return user.age > 18;
}

// isLegal(user); // true+  
console.log(isLegal(user)); // true

// Checking if the user's age is greater than 18 to determine adulthood.
if (user.age > 18) {
    console.log("User is an adult!");
}


//Optional Parameters

// Define an interface for the User object with specific fields and data types.
interface Users1 {
    name: string; 
    age: number; 
    address?: { // Optional property for the user's address
        city: string; 
        country: string; 
        pincode: number; 
    };
}


// Creating a user object that matches the defined interface structure.
let user1: Users1 = {
    name: "Rohan Dev", 
    age: 23, 
    address: { 
        city: "Panagarh",
        country: "India",
        pincode: 713148
    }
};

let user2: Users1 = {
   name: "Dev", 
    age: 23
}

// Creating another user object without the optional address field.
// if option filedd is include  should include its all fiels complete other wise dont
let user3: Users1 = {
    name: "Abc", 
    age: 23,

    // Since 'address' is optional, it is not included here.
    // However, if 'address' is included, all fields (city, country, pincode) must be specified.
    
    // Example of an invalid structure:
    // address: {
    //     pincode: 123456 // Missing 'city' and 'country' fields, so this would throw an error.
}


// To make individual fields of 'address' optional, you need to mark each field with '?'.
// For example: address?: { city?: string; country?: string; pincode?: number; }




//Repeating Parameters ---------------------------->


// interface Users3 {
//     name: string; 
//     age: number; 
//     address : {
//         city: string; 
//         country: string; 
//         pincode: number; 
//     };
// }

// interface Office {
//   address: { 
//         city: string; 
//         country: string; 
//         pincode: number; 
//   };
// }


interface Address{
   city: string; 
  country: string; 
    pincode: number; 
    houseNumber: number;
}



interface Users3 {
    name: string; 
    age: number; 
    address : Address;
}

interface Office {
   address : Address;
}


// Define an interface named People to enforce a specific structure for objects
interface People{
    name: string;
    age: number;
    // greet(): string, // greet is a normal function that returns a string value
    greet: () => string, // greet is a arrow function that returns a string value

}

// Create an object named 'person' that adheres to the People interface
let person: People = {
    name: "Rohan Dev",
    age: 23,
    // Define the greet function, which returns a greeting message
    greet: () => {
        return "Hi " + person.name; // Concatenate "Hi" with the person's name
    }
};


// Call the greet function on the 'person' object and log the output to the console
console.log(person.greet());


//with interface we can create obj  or a class can implement which can late be use to creat object 


// creting a class that implements the People interface

class Manager implements People {
  name: string;
  age: number;
  greet: () => string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.greet = () => {
      return "Hi " + this.name;
    };
  }
}

// Create an instance of the Manager class

const people = new Manager("Rohan Dev", 30);
console.log(people.age);



//extends class :------------------------------------------------->

class Shape{
  a: number;
  constructor(a:number){ 
     this.a = a ;
  }
   area(){
    console.log("Area of shape");
   }
}

class Rectangle extends Shape{
  width : number ;
  height : number ;
  constructor(width : number , height : number){
    super(1); // calling the constructor of the parent class (Shape) to initialize any properties or perform setup defined in the Shape class.
    this.width = width ;
    this.height = height ;

  }
}
const r = new Rectangle(2,3); 
r.area(); // Area of shape
//area no defined in rectangle class but we can call it because of inheritance

// ---------------------------------------------->
interface UserNew{
  name: string;
  age: number;
  isLegal: () => boolean;
}

//follow blue print to create a class that implements the UserNew interface


class ManagerNew implements UserNew {
  name: string;
  age: number;
  isLegal: () => boolean;
 
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.isLegal = () => {
      return this.age > 18;
    }
   
  }
}

const m = new ManagerNew("aoooooooo", 70);
console.log(m.name); // aoooooooo
console.log(m.age); // 30
console.log(m.isLegal()); // true

                                          //  ^
// why implementing interface ----------------|  
// 1. It provides a clear contract for what properties and methods an object should have, ensuring consistency across different implementations.

class God extends ManagerNew{
  constructor(name: string, age: number) {
    super(name, age); // Call the constructor of the parent class (ManagerNew) to initialize properties
  }
}


// or you can just do this without creating a class
// no oops property 
let userNew: UserNew = {
  name: "nooob",
  age: 23,
  isLegal() {
    return userNew.age > 18;
  }
}



















