import httpStatus from "http-status";
import { ProductsServices } from "./fitnessProducts.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createProducts = catchAsync(async (req, res) => {
  const result = await ProductsServices.createProductsInDB(req.body);
  // console.log(result)
  res.status(200).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Product created successfully",
    data: result,
  });
});

const getAllOrSearchedProducts = catchAsync(async (req, res) => {
  const result = await ProductsServices.getAllOrSearchProductsFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully",
    data: result,
  });
});

const getSingleProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductsServices.getSingleProductFromDB(productId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product retrieved successfully",
    data: result,
  });
});

const updateProductService = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductsServices.updateProductByIdInDB(productId, req.body);

  res.status(200).json({
    success: true,
    message: "Product updated successfully!",
    data: result,
  });
});

const deleteProduct = catchAsync(async (req, res) => {
  const { productId } = req.params;
  const result = await ProductsServices.deleteProductFromDB(productId);
  
  if (result.deletedCount === 0) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      statusCode: httpStatus.NOT_FOUND,
      message: "Product not found",
    });
  }
  res.status(httpStatus.NO_CONTENT).json({
    success: true,
    statusCode: httpStatus.NO_CONTENT,
    message: "Product deleted successfully",
  });
});

export const ProductsControllers = {
  createProducts,
  getAllOrSearchedProducts,
  getSingleProduct,
    updateProductService,
  deleteProduct
};
