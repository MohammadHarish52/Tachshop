import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import User from "../models/userModel.js";

// protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // read the jwt from the cookie
  token = req.cookies.jwt;
  console.log(res.cookies);
  console.log("Token:", token); // Add this line to log the token
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      console.log("user authenticated", req.user);
      next();
    } catch (error) {
      console.log("token error", error);
      res.status(401);
      throw new Error("Not logged in or token is expired!");
    }
  } else {
    res.status(401);
    throw new Error("Not authorised  ,no token");
  }
});

// Admin middleware
const admin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorised as Admin");
  }
};

export { protect, admin };
