const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const JWT_SECRET = "asheesh";

app.use(express.json());

const users = [];

function logger (req, res,next){            //yeh ek logger middleware bnay jo bta raha hai like which req is coming to the server..aur yeh hamare terminal pe btayega ki kaunsa req aa rha hai 
    // console.log(req.method + " - Request came !") 
    console.log(req.method, req.url);
    next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  // console.log(__dirname); //current directory
  
});

app.post("/signup" ,logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find((user) => user.username === username);

  if (foundUser) {
    return res.json({
      msg: "you are signed up already",
    });
  }

  users.push({
    username,
    password,
  });

  res.json({
    msg: "you are signed up",
  });

  console.log(users);
});

app.post("/signin",logger, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // const foundUser = users.find((user) => user.username === username);

  // or

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password === password) {
      foundUser = users[i];
    }
  }


  if (!foundUser) {
    res.json({
      msg: "user dosent exist",
    });
    return;
  } else {
    const token = jwt.sign({username : foundUser.username }, JWT_SECRET); ///payload , password

    // res.header("jwt", token); //sending header in response
    // res.header("random", "asheesh");

    res.json({
      token,
      msg: "signed in",
    });
  }

  // console.log(req.method, req.url);

});

function auth(req, res, next) {
  //extract token
  const token = req.headers.token;
  console.log(token);

  
  if (!token) {
    res.json({
      message: "Token is missing!",
    });
  }

  //check token correct or not
  const decodedInformation = jwt.verify(token, JWT_SECRET);

  // const decodeData = jwt.decode(token);   //security vernability we have to verify the token no decode

  const username = decodedInformation.username;

  console.log(decodedInformation);
  console.log(username);

  if (username) {
    req.username = username;  
    next();
  } else {
    res.json({
      message: "you are not logged in!",
    });
  }
}

app.get("/me",logger, auth, function (req, res) {
  

  const foundUser = users.find(
    (user) => user.username === req.username
  );

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    // Send a response to the client that the token is invalid
    res.json({
      message: "user not found",
    });
  }

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
