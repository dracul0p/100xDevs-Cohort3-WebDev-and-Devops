//inmemory hospital : assignment

import express from "express";

const app = express();
app.use(express.json());
let user = [
  {
    name: "john",
    kidneys: [
      {
        healthy: true,
      },
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  let johnKidneys = user[0].kidneys;
  let noOfKidneys = johnKidneys.length;
  let HealthyKidneysCount = 0;
  for (let i = 0; i < noOfKidneys; i++) {
    if (johnKidneys[i].healthy) {
      HealthyKidneysCount += 1;
    }
  }
  const unHealthyKidneysCount = noOfKidneys - HealthyKidneysCount;

  res.json({
    noOfKidneys,
    HealthyKidneysCount,
    unHealthyKidneysCount,
  });
});

//data send in body
// more  NO OF KIDNEYS add : ADDING DATa
app.post("/", function (req, res) {
  // console.log(req.body);

  const isHealthy = req.body.healthy;

  user[0].kidneys.push({
    healthy: isHealthy,
  });

  res.json({
    msg: "done!",
  });
});

//updating  unhelthy to healthy
app.put("/", function (req, res) {
  
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthy = true;
  }
  res.json({});
});


// removing all unhelathy kidneys
app.delete("/", function (req, res) {
  
  //  const newkidneys = [];
  //  for(let i = 0; i<user[0].kidneys.length; i++){
  //      if(user[0].kidneys[i].healthy){
  //         newkidneys.push({
  //           healthy :true
  //         });
  //      }
  //  }

  //if no unhelthy kidney send 411 . we will no remove.so why send request
  // at lest 1 unhelathy kidney  else return  411
  if (atLeastOneUnhelathyKidney()) {
    const newkidneys = user[0].kidneys.filter((value) => value.healthy == true);

    user[0].kidneys = newkidneys;
    res.json({ msg : "removed"});

  }else{
    res.status(411).json({
       msg :"you have no bad kidneys"
    });

  }

});

function atLeastOneUnhelathyKidney() {
  let atLeastOneUnhealthyKidney = false;
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (!user[0].kidneys[i].healthy) {
      atLeastOneUnhealthyKidney = true;
    }
  }
  return atLeastOneUnhealthyKidney;
}

app.listen(3000);
