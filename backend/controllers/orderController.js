import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModels.js";

// @desc   create new order
// @route  POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add order items");
});
// @desc  get all orders
// @route  GET /api/orders
// @access Private
const getorders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

// @desc   get logged in users  orders
// @route  GET /api/mine
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get my orders");
});

// @desc   ge order by id
// @route  GET /api/orders/:id
// @access Private
const getMyOrderById = asyncHandler(async (req, res) => {
  res.send("get order by id");
});

// @desc   update orders to paid
// @route  PUT /api/orders/:id/pay
// @access Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update order by id");
});

// @desc  update order to delivered
// @route  PUT /api/orders/:id/deliver
// @access Private
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update id of user to deliverd");
});

export {
  addOrderItems,
  getMyOrders,
  getMyOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getorders,
};
