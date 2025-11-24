// cors - Cross origin resource sharing

//by defaulot cros req are block in node js :

// but for a particual front and to backed how to do it ?

// Q  node js backen server for sum endpoint.
//html file that hits backend server using fetch api.

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

//  <!-- hosting front end anf backend at same origin domain no cros req  -->

//app.use(cors()); //req allowed form any  front end domain

/*
app.use(cors(
  {domains : ["http://172.20.10.2:3000/9-cros"]}
)); //restrict certain domain allowed
*/

app.get("/", function (req, res) {
  console.log(__dirname + "/public/9-cros.html");

  res.sendFile(__dirname + "/public/9-cros.html");
});

app.post("/sum", function (req, res) {
  // console.log(req.name);
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  console.log(a + b);

  res.json({
    ans: a + b,
  });
});

app.listen(3000);
