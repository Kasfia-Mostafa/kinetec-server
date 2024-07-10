import { Router } from "express";
import { UserRoutes } from "../module/users/user.route";
import { ProductsRoutes } from "../module/fitnessProducts/fitnessProducts.route";


const router = Router();

const modulesRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/products",
    route: ProductsRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
