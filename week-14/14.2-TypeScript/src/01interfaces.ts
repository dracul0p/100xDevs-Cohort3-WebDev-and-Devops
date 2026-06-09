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


/*

// Defining an interface 'Human' with properties and methods that any implementing class must follow
interface Human {
    name: string;  // Property to store the name of the human
    age: number;   // Property to store the age of the human
    greet: () => string;  // Method to return a greeting message
    isLegal: () => boolean;  // Method to check if the person is of legal age (18+)
}

// Creating a 'Manager' class that implements the 'Human' interface
class Manager implements Human {
    
    // If 'Human' interface is implemented, we must define the properties 'name' and 'age'
    // 'phone' is an additional property, specific to the Manager class
    // name : string;
    // age:number;
    phone: number;  // Additional property for storing phone number

    // Method-1: Defining the constructor to initialize 'name', 'age', and 'phone'
    // In this method, the 'name' and 'age' are passed through constructor parameters and 
    // 'phone' is assigned a default value
    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    //     this.phone = 1234567890; // Assigning a default value to phone
    // }

    // Method-2: A shorthand method of writing the constructor using public modifiers
    // Here, 'name' and 'age' are directly defined as public properties in the constructor
    // Hence, 'this' keyword is not needed to access them
    constructor(public name: string, public age: number) {
        this.phone = 123456789;  // Assigning a default value to 'phone' property
    }

    // Method to return a greeting message using the 'name' property - no need to write use function infront of any method present inside class 
    greet = () => {
        return "Hello " + this.name;  // Concatenating "Hello" with the name
    }

    // Method to check if the 'age' is greater than or equal to 18 to determine legal age
    isLegal() {
        return this.age >= 18;  // Returns true if age is 18 or more, false otherwise
    }
}

// Creating an instance of the Manager class
let manager = new Manager("Rohan Dev Singh", 23);  // Passing values for 'name' and 'age'

console.log(manager);  // Displaying the entire manager object

console.log(manager.age);  // Displaying the 'age' property of the manager object

// Calling the greet method and storing its return value in 'managerGreet'
let managerGreet = manager.greet(); 
console.log(managerGreet);  // Displaying the greeting message

console.log(manager.isLegal);  // Displaying the 'isLegal' method reference without calling it
*/





// interface vs abstract class ----------------------------->
//implementing abstract class is simlar to implementing interface but with some extra features like we can have normal function in abstract class which is not possible in interface(only declaration) and we can also have constructor in abstract class which is not possible in interface

// Create an abstract class User with a name property, abstract greet function, and a hello function
abstract class User {
    // Define a name property of type string
    name: string;

    // Define a constructor that takes in a name parameter and assigns it to the name property
    constructor(name: string) {
        this.name = name;
    }

    // Define an abstract greet function that returns a string value
    abstract greet(): string;

    // default implementaion of fn  
    hello(): void {
        console.log("Hello Everyone");        
    }
}

// any class that  extends a class with abstract method should implement the abstract method

// Create a class Employee that extends the User class
class Employee1 extends User {
    // Define a name property of type string
    name: string;

    // Define an age property of type number
    age: number;

    // Define a constructor that takes in a name and age parameter 
    constructor(name: string, age: number) {
        // Call the super method and pass in the name parameter
        super(name);

        // Assign the name parameter to the name property
        this.name = name;
        // Assign the age parameter to the age property
        this.age = age;
    }

    greet(): string {
        return "Heyyyy " + this.name;
    }
}
























