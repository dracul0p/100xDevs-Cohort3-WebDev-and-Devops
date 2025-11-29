const express = require("express");
const app = express();
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "asheesh123";

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Asheesh2025:l2tpFhnnYCHI3dhV@cluster0.etwnv86.mongodb.net/todo-app"
);

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

function authMiddleware(req, res, next) {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.status(403).json({
        msg: "Token missing",
      });
    }

    const decodetoken = jwt.verify(token, JWT_SECRET);

    req.userId = decodetoken.id;
    next();
  } catch (error) {
    return res.status(403).json({
      msg: "Unauthorized access or wrong token",
    });
  }
}

// Public Routes

app.post("/signup", async function (req, res) {
  const { email, password, name } = req.body;

  await UserModel.create({
    email: email,
    password: password,
    name: name,
  });

  res.json({
    msg: "you Signup successfully",
  });
});

app.post("/signin", async function (req, res) {
  // res.json({ msg: "signin route" });

  console.log("Received body:", req.body);

  const { email, password } = req.body;

  const user = await UserModel.findOne({
    email: email,
    password: password,
  });

  console.log("user data in db :" + user);

  if (user) {
    // console.log(user._id.toString());

    const token = jwt.sign({ id: user._id.toString() }, JWT_SECRET);

    res.json({
      msg: "you Signin successfully",
      token: token,
    });
  } else {
    res.status(403).json({
      msg: "Invalid credentials",
    });
  }
});

// Protected Routes
//create todo
app.post("/todo", authMiddleware, async function (req, res) {
  console.log("Todo Body:", req.body);

  const userId = req.userId;

  const title = req.body.title;

  await TodoModel.create({
    title: title,
    userId: userId,
  });
 
  res.json({
    userId: userId,
    msg: "Todo created successfully",
  });
});

//get todos
app.get("/todos", authMiddleware, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId: userId,
  });

  res.json({
    todos: todos,
  });
});


// app.get("/users", async function (req, res) {
//   try {
//     const users = await UserModel.find(); // fetch all users

//     res.json({
//       users: users,
//     });
//   } catch (err) {
//     res.status(500).json({
//       msg: "Error fetching users",
//       error: err.message,
//     });
//   }
// });


app.listen(3000, () => {
  console.log("Server running on port 3000");
});
