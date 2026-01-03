// https://expressjs.com/en/guide/using-middleware.html

// https://bold-flax-21a.notion.site/Middleware-via-examples-1a125f71564980b8844ac8fb632b954a

// import express module using require function and store it in express variable

const express = require("express");

// create an express application using express function
const app = express();

// app.use(isOldEnoughMiddleware);    //every route will  use this middle ware if they are below
   
function isOldEnough(age) {
  if (age >= 14) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughMiddleware(req, res, next) {
   const age = req.query.age;
    if (age > 14) {
        next();
    } else {
        res.status(411).json({
            message: "Sorry!, your age is not enough to ride yet",
        });
    }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
    res.json({
      msg: "You have successfully ridden the ride 1",
    });
  
});

app.get("/ride2",isOldEnoughMiddleware , function (req, res) {
    res.json({
      msg: "You have successfully ridden the ride 2",
    });
  
});

app.listen(3000);
