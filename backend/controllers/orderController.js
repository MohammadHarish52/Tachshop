import asyncHandler from "../middleware/asyncHandler.js";
import order from "../models/orderModels.js";
import Order from "../models/orderModels.js";

// @desc   create new order
// @route  POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems: orderItems.map((x) => ({
        ...x,
        product: x._id,
        _id: undefined,
      })),
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createOrder = await order.save();
    //res.json(createOrder);
    res.status(201).json(createOrder);
  }
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
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

// @desc   ge order by id
// @route  GET /api/orders/:id
// @access Private
const getMyOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findOne(req.params.id).populate(
    "user",
    "name",
    "email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
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
