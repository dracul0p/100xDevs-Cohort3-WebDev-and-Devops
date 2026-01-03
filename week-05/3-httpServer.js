
const express = require("express");

const app = express();

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);  //string to integer
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});


//http://localhost:3000/sum/1/3

app.get("/sum/:firstArg/:secArg", function(req, res) {
    const a = parseInt(req.params.firstArg);  //string to integer
    const b = parseInt(req.params.secArg);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);