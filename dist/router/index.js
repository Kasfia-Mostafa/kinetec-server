"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fitnessProducts_route_1 = require("../module/fitnessProducts/fitnessProducts.route");
const orderProducts_route_1 = require("../module/orderProducts/orderProducts.route");
const router = (0, express_1.Router)();
const modulesRoutes = [
    {
        path: "/products",
        route: fitnessProducts_route_1.ProductsRoutes,
    },
    {
        path: "/orders",
        route: orderProducts_route_1.OrdersRoutes,
    },
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
