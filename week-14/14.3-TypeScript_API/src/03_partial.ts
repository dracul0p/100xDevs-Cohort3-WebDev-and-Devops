// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

//all valuse shoul be presen in this one but
// type UpdatePropss = Pick<User, 'name' | 'age' | 'email'>



//crealing optional value but if any value type change we have to change value at 2 places

// type UpdateProps = {
//    email?:string;
//    age?:string;
// }

// or 

// pick values u need 
type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

// so use this to creat optional values
type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}

//will not give error with partial valjue
updateUser({
  name :"gool"
})

