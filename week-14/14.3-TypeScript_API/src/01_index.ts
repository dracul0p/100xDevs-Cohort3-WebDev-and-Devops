const message: string = "Hello TypeScript";

console.log(message);
// prerequisits ---------------------------------------------->
interface User {
  name: string;
  age: number;
}

function sumOfAge(user1: User, user2: User) {
  return user1.age + user2.age;
}

const result = sumOfAge(
  {
    name: "harkirat",
    age: 20
  },
  {
    name: "raman",
    age: 21
  }
);

console.log(result); // 41


