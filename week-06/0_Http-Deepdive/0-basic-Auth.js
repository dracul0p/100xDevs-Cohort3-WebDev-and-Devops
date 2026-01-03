const express = require("express");
const app = express();
app.use(express.json()); //to parse jason data // body will bw undefine without this in post req

const users = [];

// Create a function to generate a token for the user
function generateToken() {
  // Create an array of options for the token
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  // Create a variable to store the token
  let token = "";

  // Loop through the options array and generate a token
  for (let i = 0; i < 32; i++) {
    // Add a random character from the options array to the token
    token += options[Math.floor(Math.random() * options.length)];
  }

  // Return the token
  return token;
}

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
    const token = generateToken();
    foundUser.token = token;

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
  const token = req.headers["token"];

  if (!token) {
    res.json({
      message: "Token is missing!",
    });
  }

  const foundUser = users.find((user) => user.token === token);

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

  // console.log("hi");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
