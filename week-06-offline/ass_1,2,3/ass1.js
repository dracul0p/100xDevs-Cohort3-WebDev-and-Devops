// Assignment #1 - Write a function that takes in a username and password and returns a JWT token with the username encoded.
// Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here

const jwt = require("jsonwebtoken");
const zod = require("zod");
const JWT_SECRET = "supersecret123";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username , password){

  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  
  if(!usernameResponse.success || !passwordResponse.success){
     return null;
  }


  let token = jwt.sign({username} , JWT_SECRET);
  return token;


}

// # Assignment #2 - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise

function decodeJwt(token) {


    // decode the jwt token
    const decoded = jwt.decode(token); 

    // if the jwt token is decoded then return true otherwise return false
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

// # Assignment #3 - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise

function verifyJwt(token){
    

   try {
        // verify the jwt token with the secret key
        const verified = jwt.verify(token, JWT_SECRET);

        // if the jwt token is verified then return true
        return true;
    } catch (error) {
        // if the jwt token is not verified then return false
        return false;
    }
}




const token = signJwt("asheeshrawat48@gmail.com" , "password123");

console.log("Generated Token | sign:", token); //sign

console.log("Generated Token:", token);

// decode test
console.log("Decode:", decodeJwt(token));

// verify test
console.log("Verify:", verifyJwt(token));