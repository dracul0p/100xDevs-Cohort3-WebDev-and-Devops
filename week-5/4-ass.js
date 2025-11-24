// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

const express = require("express");
const app = express();

// Middleware function
function requestLogger(req, res, next) {
  const timestamp = new Date().toISOString();

  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.originalUrl}`);
  console.log(`Time: ${timestamp}`);
  console.log("-------------------------------");

  next(); // move to next middleware/route
}

// Use the middleware
app.use(requestLogger);

// Example routes
app.get("/", (req, res) => {
  // res.send("Hi there!");
  res.json({
    Method: req.method,
    url: req.originalUrl,
  });
});

app.post("/", (req, res) => {
  res.send("Hello!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
