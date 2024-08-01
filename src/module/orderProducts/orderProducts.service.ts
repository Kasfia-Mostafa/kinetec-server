import { UserOrders } from "./orderProducts.interface";
import { Orders } from "./orderProducts.model";

const createOrdersInDB = async (ordersData: UserOrders) => {
  // console.log(productsData)
  const result = await Orders.create(ordersData);
  return result;
};

export const ordersServices = {
  createOrdersInDB,
};
