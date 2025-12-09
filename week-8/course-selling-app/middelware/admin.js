const jwt = require("jsonwebtoken");

const { JWT_ADMIN_SECRET } = require("../config");
/*
function middelware(passsword) {
  return function (req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, password);
    if (decoded) {
      req.userId = decoded.id;
      next();
    } else {
      res.status(403).json({
        message: "You are not signed in",
      });
    }
  };
}
  // using single middle ware function for admin and user
  
 middleware(JWT_ADMIN_SECRET);
 middleware(JWT_USER_SECRET);
*/

function adminMiddleware(req, res, next) {
  try {
    const token = req.headers.token;
    const response = jwt.verify(token, JWT_ADMIN_SECRET);

    if (response) {
      req.adminId = response.id;
      next();
    } else {
      res.status(403).json({
        message: "Incorrect creds",
      });
    }
  } catch (err) {
    res.status(403).json({ msg: "Invalid token", error: err.message });
  }
}

module.exports = {
  adminMiddleware,
};
