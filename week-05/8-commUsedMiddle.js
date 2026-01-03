//externalmiddle ware


const express = require('express');
const app = express();

const bodyParser = require("body-parser");



// Use express.json() middleware to parse JSON bodies


// app.use(express.json());


// or
app.use(bodyParser.json());  //also works

app.get("/" , function(req , res){
     res.send("hi");
})

//data  will come in body
app.post("/sum", function (req, res) {
    console.log(req.body); //undefines is no middle ware used
    
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    
    res.json({
        ans: a + b,
    });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});