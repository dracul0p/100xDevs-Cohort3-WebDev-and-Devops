const Router = require("express").Router;
const { adminMiddleware } = require("../middelware/admin");
const { adminModel, courseModel } = require("../db");

const adminRouter = Router();
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const { JWT_ADMIN_SECRET } = require("../config");

// Create a new course
adminRouter.post("/signup", async (req, res) => {
  try {
    // console.log("REQ BODY:", req.body); // check what Express sees
    const { email, password, firstname, lastname } = req.body;

    // console.log(email);

    if (!email || !password || !firstname || !lastname) {
      return res.status(400).json({ msg: "Missing parameters" });
    }

    const oldAdmin = await adminModel.findOne({ email });
    if (oldAdmin) {
      return res.status(409).json({ msg: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newAdmin = await adminModel.create({
      email,
      password: hashedPassword,
      firstname,
      lastname,
    });

    res.status(201).json({
      msg: "Admin signed up successfully",
      // newAdmin,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: err.message });
  }
});

adminRouter.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      return res.status(400).json({ msg: "Missing email or password" });
    }

    const admin = await adminModel.findOne({ email });

    if (!admin) {
      return res.status(404).json({ msg: "Admin not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Invalid password" });
    }

    console.log(JWT_ADMIN_SECRET);

    const token = jwt.sign({ id: admin._id }, JWT_ADMIN_SECRET, {
      expiresIn: "1h",
    });

    //  console.log(token);

    return res.status(200).json({
      token,
      msg: "Admin signed in successfully",
      // admin,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Internal server error", error: err.message });
  }
});

//create a  new course
adminRouter.post("/course", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;

  const { title, description, price, imageUrl } = req.body;

  const course = await courseModel.create({
    title,
    description,
    price,
    imageUrl,
    creatorId: adminId,
  });

  res.json({ msg: "Course created successfully", courseId: course._id });
});

//update exixting course  || change price and image of course or content.
adminRouter.put("/course", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;

  const { title, description, price, imageUrl, courseId } = req.body;

  const course = await courseModel.updateOne(
    {
      _id: courseId,
      creatorId: adminId,
    },
    {
      title,
      description,
      price,
      imageUrl,
    }
  );

  res.json({ msg: "Course updated successfully", course });
});

//get all courses i have created
adminRouter.get("/course/bulk", adminMiddleware, async (req, res) => {
  const adminId = req.adminId;

  const course = await courseModel.find({
    creatorId: adminId,
  });

  res.json({ msg: "All courses created by admin", courses: course });
});

module.exports = {
  adminRouter: adminRouter,
};
