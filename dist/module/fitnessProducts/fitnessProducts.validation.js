"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const zod_1 = require("zod");
const createProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        image: zod_1.z.string(),
        price: zod_1.z.number().positive(),
        quantity: zod_1.z.number().int().nonnegative(),
        rating: zod_1.z.number().min(0).max(5),
        description: zod_1.z.string(),
        category: zod_1.z.string()
    })
});
exports.productValidation = {
    createProductValidationSchema,
};
