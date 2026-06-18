// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

const user  =
{
  name :"amsks",
    age:21
}

user.name ="asdad";
console.log(user.name);

const a = [1,2,3];
a[0] = 3;
console.log(a);

// delacred a const array and obj yet we are able to change them 

const name = "bob";
console.log(name);

// name = "vov"  cant reaasign value to const.
console.log();

// we can assign array and obj values.
// reason : alway can update internal values of obj or array
// we are not changing refrance of a

//  wrong ressign above obj and arr 
// a = []
// user ={}


// read only
// inforce no  internal  or external properties cannot be changed.

// readonly : makes internal cont
type Men =  {
  readonly name :string,
  readonly age :string
}

const men : Men = {
  name : 'John',
  age :'25',

}

//above syntax looks ugel use readonly again and again use this , equivalent to above 
//making complete obj read only
const men1 : Readonly<Men> = {
  name : 'John',
  age :'25',
}

//men.name ="asss";   //cant assign read only property

interface Config {
 endpoint: string;
  apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: 'https://api.example.com',
  apiKey: 'abcdef123456',
};

// config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.















