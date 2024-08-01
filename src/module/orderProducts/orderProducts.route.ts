import express from "express";

import validateRequest from "../../middleware/validateRequest";
import { OrdersValidation } from "./orderProducts.validation";
import { OrdersControllers } from "./orderProducts.controllers";

const router = express.Router();

router.post(
  "/",
  validateRequest(OrdersValidation.userOrderSchema),
  OrdersControllers.createOrders
);

export const OrdersRoutes = router;
