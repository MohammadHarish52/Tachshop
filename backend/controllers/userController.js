import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

import generateToken from "../utils/generateToken.js";

// @desc auth User
// @route POST/api/users
// @access public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// @desc register User
// @route POST/api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("Email already exists!");
  }
  // creating a user
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Failed to create an account!");
  }
});

// @desc Logout User/clear cookie
// @route GEt /api/users/logout
// @access private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "logout successfull" });
});

// @desc Get user profile
// @route POST /api/users/profile
// @access private

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404).send("No user found");
  }
});

// @desc update user profile
// @route GET /api/users/profile
// @access private

const updateUserProfile = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAmin,
    });
  }
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
