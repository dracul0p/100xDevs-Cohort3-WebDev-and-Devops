const express = require("express");
const { userMiddleware } = require("../middelware/user");
const { purchaseModel, courseModel } = require("../db");
const courseRouter = express.Router();

//buy a course | purchase 1 course
courseRouter.post("/purchase", userMiddleware, async (req, res) => {
  const userId = req.userId;
  const courseId = req.body.courseId;

  // check if already purchased
  const alreadyPurchased = await purchaseModel.findOne({ userId, courseId });

  if (alreadyPurchased) {
    return res.status(409).json({
      msg: "Course already purchased",
    });
  }

  const purchase = await purchaseModel.create({
    userId,
    courseId,
  });

  //you would extract user to pay money
  res.json({
    msg: "User purchased course",
  });
});

//see what courses exists and without login || all courses in db or in website
courseRouter.get("/preview", async (req, res) => {
  const courses = await courseModel.find({});

  res.json({
    courses: courses,
    msg: "all cources fetched",
  });
});

module.exports = {
  courseRouter: courseRouter,
};

/*
function courseRoutes(app) {
  //user purchase course  : buy course
  app.post("/course/purchase", (req, res) => {
    //you would extract user to pay money
    res.json({
      msg: "User purchased course",
    });
  });

  app.get("/cources", (req, res) => {
    res.json({
      msg: "all cources fetched",
    });
  });
}

module.exports = {
  courseRoutes : courseRoutes

}

*/
