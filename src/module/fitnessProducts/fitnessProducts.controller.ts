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

// const updateCarService = catchAsync(async (req, res) => {
//   const { carId } = req.params;
//   const result = await CarServices.updateCarServiceIntoDB(carId, req.body);

//   res.status(200).json({
//     success: true,
//     message: "Car service updated successfully!",
//     data: result,
//   });
// });

export const ProductsControllers = {
  createProducts,
  getAllOrSearchedProducts,
  getSingleProduct,
  //   updateCarService,
};
