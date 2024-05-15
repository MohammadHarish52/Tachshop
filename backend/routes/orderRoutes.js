// router.route("/").post(registerUser).get(protect, admin, getUsers);
// router.post("/logout", logoutUser);
// router.post("/auth", authUser);
// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);
// router
//   .route(":id")
//   .delete(protect, admin, deleteUser)
//   .get(protect, admin, getUserById)
//   .put(protect, admin, updateUser);

// export default router;

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

router.route("/").get(protect, admin, getorders).post(protect, addOrderItems);
router.route("/mine").get(protect, getMyOrders);
router.route("/:id").get(protect, admin, getMyOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

export default router;
