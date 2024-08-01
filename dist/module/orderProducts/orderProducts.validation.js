"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersValidation = exports.userOrderSchema = void 0;
const zod_1 = require("zod");
// Define the UserOrder schema with Zod
exports.userOrderSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        email: zod_1.z
            .string()
            .email("Invalid email address")
            .min(1, "Email is required"),
        address: zod_1.z.string().min(1, "Address is required"),
        city: zod_1.z.string().min(1, "City is required"),
        state: zod_1.z.string().min(1, "State is required"),
        zipCode: zod_1.z.string().min(1, "Zip code is required"),
        payment: zod_1.z.string().nonempty("Payment is required"),
    }),
});
exports.OrdersValidation = {
    userOrderSchema: exports.userOrderSchema,
};
