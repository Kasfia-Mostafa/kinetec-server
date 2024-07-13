"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const fitnessProducts_validation_1 = require("./fitnessProducts.validation");
const fitnessProducts_controller_1 = require("./fitnessProducts.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(fitnessProducts_validation_1.productValidation.createProductValidationSchema), fitnessProducts_controller_1.ProductsControllers.createProducts);
router.get("/", fitnessProducts_controller_1.ProductsControllers.getAllOrSearchedProducts);
router.get("/:productId", fitnessProducts_controller_1.ProductsControllers.getSingleProduct);
router.delete("/:productId", fitnessProducts_controller_1.ProductsControllers.deleteProduct);
router.put('/:productId', fitnessProducts_controller_1.ProductsControllers.updateProductService);
exports.ProductsRoutes = router;
