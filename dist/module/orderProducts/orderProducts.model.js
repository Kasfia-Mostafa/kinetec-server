"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const mongoose_1 = require("mongoose");
// Define the UserOrderProfile schema
const userOrderSchema = new mongoose_1.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    address: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    zipCode: { type: String, required: true, trim: true },
    payment: { type: String, required: true, trim: true },
}, { timestamps: true });
// Create the UserOrderProfile model
exports.Orders = (0, mongoose_1.model)("Orders", userOrderSchema);
