"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const orderProducts_validation_1 = require("./orderProducts.validation");
const orderProducts_controllers_1 = require("./orderProducts.controllers");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(orderProducts_validation_1.OrdersValidation.userOrderSchema), orderProducts_controllers_1.OrdersControllers.createOrders);
exports.OrdersRoutes = router;
