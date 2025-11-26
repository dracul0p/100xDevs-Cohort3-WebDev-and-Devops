// jwt created by encoding

const express = require("express");
const app = express();
app.use(express.json()); //to parse jason data // body will bw undefine without this in post req


const jwt = require("jsonwebtoken"); // TO USE JWT TOKEN 

const JWT_SECRET = "ilove100xdevsliveclasses";
//jwt token req pass 


const users = [];
  


function signinHandler(req, res) {
  // console.log(req.body);
  const username = req.body.username;
  const password = req.body.password;

  // Check if the user is already signed up or not
  if (users.find((user) => user.username === username)) {
    // Send a response to the client that the user is already signed up
    return res.json({
      message: "You are already signed up!",
    });
  }

  users.push({
    username: username,
    password: password,
  });

  res.json({
    msg: "you are signed up",
  });

  console.log(users);
}

app.post("/signup", signinHandler);

app.post("/signin", (req, res) => {
  // Get the username and password from the request body
  const username = req.body.username;
  const password = req.body.password;

  // Find the user in the users array with the given username and password
  // find() returns the first element in an array that matches a condition

  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (foundUser) {

    //conver username name to jwt token using JWT_SECRET

    const token = jwt.sign({
      username: username,
    } , JWT_SECRET);
    
    //NO NEED TO STORE IN MEMORY NOW ITS STATELSS


    res.json({
      token: token,
      message: "You have signed in successfully!",
    });
  } else {
    res.status(403).send({
      message: "Invalid username or password!",
    });
  }

  console.log(users);
});

//authenticated end point
app.get("/me", (req, res) => {
  const token = req.headers["token"]; //JWT
 
  const decodedInformation = jwt.verify(token , JWT_SECRET);


   const username = decodedInformation.username ;


  if (!token) {
    res.json({
      message: "Token is missing!",
    });
  }

  const foundUser = users.find((user) => user.username === username);

  if (foundUser) {
    // Send a response to the client with the username and password of the user
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    // Send a response to the client that the token is invalid
    res.json({
      message: "Invalid token!",
    });
  }

  console.log("hi");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
