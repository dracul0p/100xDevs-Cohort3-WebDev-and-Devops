const express = require("express");

const bcrypt = require("bcrypt");
// const saltRounds = 10;

const { UserModel, TodoModel } = require("./db");

const { auth, JWT_SECRET } = require("./auth");

const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const { z } = require("zod");

mongoose.connect(
  "mongodb+srv://Asheesh2025:l2tpFhnnYCHI3dhV@cluster0.etwnv86.mongodb.net/todo-app"
);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  //input validation

  //user should not send nothing extra other than this
  // so describe this in zod object
  // req.body{
  //   email : string,
  //   password : string,
  //   name : string
  // }

  const requireBody = z.object({
    email: z.string().min(3).max(100).email(), // email is must be a string, min 3 characters, max 100 characters, and must be a valid email
    password: z.string().min(3).max(100), 
    name: z.string().min(3).max(100), 
  });

   // const parseDataWithSuccess1 = requireBody.parse(req.body);
   //through error if data is not correct we have to use try catch
   
    // Parse the request body using the requireBody.safeParse() method to validate the data format
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    /*
     safe parse return you a object
     with folowing things :
      {
     sucess : ture  | false,
     data :{},
     errors:[]
     }

    */

    // If the data format is incorrect, send an error message to the client
    if (!parseDataWithSuccess.success) {
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }


  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  // hash(password + salt) & store hash and slt in db.

  //hash password
  const hashedPassword = await bcrypt.hash(password, 5);

  // console.log(hashedPassword);

  await UserModel.create({
    email: email,
    //insert in db hashed (password + salt)
    password: hashedPassword,
    name: name,
  });

  res.json({
    message: "You are signed up",
  });
});

// app.post("/signup", async function (req, res) {
//   const email = req.body.email;
//   const password = req.body.password;
//   const name = req.body.name;

//   let errorThrown = false;

//   try {
//     // hash(password + salt) & store hash and slt in db.

//     //hash password
//     const hashedPassword = await bcrypt.hash(password, 5);

//     // console.log(hashedPassword);

//     await UserModel.create({
//       email: email,
//       //insert in db hashed (password + salt)
//       password: hashedPassword,
//       name: name,
//     });
//   } catch (err) {
//     // console.log("Error while putting in db");
//     res.json({
//       message: "user alrady exist use  a diif email",
//     });
//     errorThrown = true;
//   }
//   if (!errorThrown) {
//     res.json({
//       message: "You are signed up",
//     });
//   }
// });

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });

  if (!response) {
    return res.status(403).json({
      msg: "user not found",
    });
    return;
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  //   console.log(passwordMatch);  //returns a promise

  if (passwordMatch) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect creds",
    });
  }
});

app.post("/todo", auth, async function (req, res) {
  const userId = req.userId;
  const title = req.body.title;
  const done = req.body.done;

  await TodoModel.create({
    userId,
    title,
    done,
  });

  res.json({
    message: "Todo created",
  });
});

app.get("/todos", auth, async function (req, res) {
  const userId = req.userId;

  const todos = await TodoModel.find({
    userId,
  });

  res.json({
    todos,
  });
});

app.listen(3000);
