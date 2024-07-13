"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = require("mongoose");
// Define the Product schema
const productsSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 0 },
    rating: { type: Number, required: true, min: 0, max: 5 },
    description: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true }
});
// Create the Product model
exports.Products = (0, mongoose_1.model)('Products', productsSchema);
