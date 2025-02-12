import express from "express";
import { productValidation } from "./fitnessProducts.validation";
import { ProductsControllers } from "./fitnessProducts.controller";
import validateRequest from "../../middleware/validateRequest";

const router = express.Router();

router.post(
  "/",
  validateRequest(productValidation.createProductValidationSchema),
  ProductsControllers.createProducts
);

router.get("/", ProductsControllers.getAllOrSearchedProducts);
router.get("/:productId", ProductsControllers.getSingleProduct);
router.delete("/:productId", ProductsControllers.deleteProduct);
router.put('/:productId', ProductsControllers.updateProductService);

export const ProductsRoutes = router;
