interface User {
  id: number;
  name: string;
  email: string;
  age :string;
  createdAt: Date;
  password:String;
}

//when we do data base call the data return is of a type 
// e.g :  User.findOne({where :{email :"god"}})

// const user : User = {

// }

// update use:
// problem : every arg should not have more than 5 or 6 arg so merge them together
// function updateUser(name :string , age :number , password : string){
//   //hit the database to update the user

// }

//wrong:----->

// interface updatedProp{
//   name: string,
//   age :number ,
//   password : string
// }
// is this goob but if  i waht to change type of age here we need to change in 2 places

// so do this 

// this is not new just subset of above User interface
//using User interface and pulling some properties here

// Create a new type that only picks specific properties (id, name, age) from the User interface
type UpdatedProp = Pick<User, 'name' | 'age' | 'email'>;

function updateUser(updatedProp : UpdatedProp){
  //hit the database to update the user

}


const displayUserProfile = (user: UpdatedProp) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};