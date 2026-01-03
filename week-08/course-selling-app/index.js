require("dotenv").config();
// const { log } = require("console");
const express = require("express");
const mongoose = require("mongoose");

const { courseRouter } = require("./routes/course");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");

// const {courseModel} = require("./db");

// const {courseRoutes} = require("./routes/course");
// const {userRoutes} = require("./routes/user");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (to read JSON request body)
app.use(express.json());

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);

// courseRoutes(app);
// userRoutes(app);

// Home route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});


async function startServer() {
  await mongoose.connect(process.env.MONGO_URI);
  // Start server
  console.log("Connected to MongoDB ✔");
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}
startServer();
