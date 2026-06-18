// Record let’s you give a cleaner type to objects.

// create obj in ts
interface User {
  id: string;
  name: string;
}

// is called an index signature.
// "This object can have any string as a key, and the value must be a User."


// giving types to obj--------------------------->
type Users = { [key: string]: User };

const users: Users = {

  'abc123': {
     id: 'abc123',
      name: 'John Doe'
     },
  'xyz789': { 
    id: 'xyz789', 
    name: 'Jane Doe' 
  },

};


// or

// record :gives cleaner types to objs.

// interface User {
//   id: string;
//   name: string;
// }

type Userss = Record<string, User>;

const userss : Userss = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(userss['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

userss['abc124'] = {id :'abc124' , name :"goku"}

console.log(userss);
userss['abc124'].id = "234ccc";
console.log(userss);
console.log(userss['abc124'].id);





