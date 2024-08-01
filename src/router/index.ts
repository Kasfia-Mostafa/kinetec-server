import { Router } from "express";

import { ProductsRoutes } from "../module/fitnessProducts/fitnessProducts.route";
import { OrdersRoutes } from "../module/orderProducts/orderProducts.route";

const router = Router();

const modulesRoutes = [
  {
    path: "/products",
    route: ProductsRoutes,
  },
  {
    path: "/orders",
    route: OrdersRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
