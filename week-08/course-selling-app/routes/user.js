// const express = require("express");
// const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userMiddleware } = require("../middelware/user");
const { purchaseModel, courseModel } = require("../db");

const { JWT_USER_SECRET } = require("../config");

const { Router } = require("express");

const userRouter = Router();

const { userModel } = require("../db");

userRouter.post("/signup", async (req, res) => {
  //console.log("REQ BODY:", req.body); // check what Express sees
  const { email, password, firstname, lastname } = req.body;

  // console.log(email);

  if (!email || !password || !firstname || !lastname) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ msg: "User email already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new userModel({
    email,
    password: hashedPassword,
    firstname,
    lastname,
  });

  await newUser.save();

  res.status(201).json({
    msg: "User signed up successfully",
    // user: newUser,
  });
});

userRouter.post("/signin", async (req, res) => {
  // console.log("REQ BODY:", req.body); // check what Express sees
  const { email, password } = req.body;
  // console.log(email);
  if (!email || !password) {
    return res.status(400).json({ msg: "Email and password are required" });
  }

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    return res
      .status(404)
      .json({ msg: "User not found or email does not exist" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ msg: "Invalid password" });
  }

  const token = jwt.sign({ id: user._id }, JWT_USER_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    msg: "User signed in successfully",
    token,
  });
});

// all user purchased courses
userRouter.get("/purchases", userMiddleware, async (req, res) => {
  const userId = req.userId;

  const purchases = await purchaseModel.find({ userId });

  // console.log(purchases); //array of objects

  // let purchasedCourseIds = [];
  // for (let i = 0; i <= purchases.length; i++) {
  //   purchasedCourseIds.push(purchases[i].courseId);
  // }

  // const courseData1 = await courseModel.find({
  //   _id: { $in: purchasedCourseIds },
  // });

  const courseData = await courseModel.find({
    _id: { $in: purchases.map((x) => x.courseId) },
  });

  res.json({
    purchases: purchases,

    courseData,

    msg: "User purchased courses now",
  });
});

module.exports = {
  userRouter: userRouter,
};

/*
function userRoutes(app) {
  app.post("/signup", (req, res) => {
    const { email, password, name } = req.body;

    console.log(email);

    res.json({
      msg: "User signed up successfully",
    });
  });

  app.post("/signin", (req, res) => {
    const { username, password } = req.body;
  });

  // all user purchased courses
  app.get("/purchases", (req, res) => {
    res.json({
      msg: "User purchased courses",
    });
  });
}


module.exports = {
  userRoutes: userRoutes,
};

*/
