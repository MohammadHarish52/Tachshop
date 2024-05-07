import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

// @desc auth User
// @route POST/api/users
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check if user exists and the password
  const user = await User.findOne({ email });
  console.log(user);
  res.send(user);

  //   if (user && (await user.matchPassword(password))) {
  //     const token = jwt.sign({ userId: user._Id }, process.env.JWT_SECRET, {
  //       expiresIn: "30d",
  //     });

  //     //set jwt as http only cookie
  //     res.cookie("jwt", token, {
  //       httpOnly: true,
  //       secure: process.env.NODE_ENV !== "development",
  //       sameSize: "strict",
  //       maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  //     });

  //     res.json({
  //       _id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       isAdmin: user.isAdmin,
  //     });
  //   } else {
  //     res.status(401);
  //     throw new Error("Invalid credentials");
  //   }
});

// @desc register User
// @route POST/api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc Logout User/clear cookie
// @route GEt /api/users/logout
// @access private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout user");
});

// @desc Get user profile
// @route POST /api/users/profile
// @access private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc update user profile
// @route GET /api/users/profile
// @access private

const updateUserProfile = asyncHandler(async (req, res, next) => {
  res.send("update user profile");
});

// @desc get users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});
// @desc get users by id
// @route GET /api/users
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get users by id");
});

// @desc delete users
// @route GET /api/users/:id
// @access Private
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});
// @desc update users
// @route PUT /api/users/:id
// @access Private
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});
export {
  getUsers,
  getUserById,
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUser,
  updateUser,
};
