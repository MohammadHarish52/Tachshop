import express from "express";
import {
  getMyOrders,
  getMyOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getorders,
  addOrderItems,
} from "../controllers/orderController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems).get(protect, admin, getorders);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, getMyOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
