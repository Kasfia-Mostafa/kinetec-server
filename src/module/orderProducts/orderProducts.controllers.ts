import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import { ordersServices } from "./orderProducts.service";

const createOrders = catchAsync(async (req, res) => {
  const result = await ordersServices.createOrdersInDB(req.body);

  // console.log(result)
  res.status(200).json({
    success: true,
    statusCode: httpStatus.OK,
    message: "Order created successfully",
    data: result,
  });
});


export const OrdersControllers = {
  createOrders,
};
