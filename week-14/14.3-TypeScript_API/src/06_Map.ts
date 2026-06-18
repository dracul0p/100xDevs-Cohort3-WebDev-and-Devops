// maps gives you an even fancier way to deal with objects. Very similar to Maps in C++

// just another way to create key value payers.

type Users = Record<string , {age: number ; name:string}>;

const users :Users = {
   'abc123': { age: 10, name: 'John Doe' },
  'xyz789': { age: 30, name: 'Jane Doe' },
}

console.log(users['abc123']);


// map:------------------------------->
const usersMap = new Map();
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

console.log(usersMap.get('abc123')); 
console.log(usersMap);


interface User {
  id: string;
  name: string;
}

// specifying types
const usersMapp = new Map<string, User>();

// Add users to the map using .set
usersMapp.set('bb', { id: 'abc123', name: 'John Doe' });
usersMapp.set('aa', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMapp); // Output: { id: 'abc123', name: 'John Doe' }

