import { Schema, model } from "mongoose";
import {  UserOrders } from "./orderProducts.interface";

// Define the UserOrderProfile schema
const userOrderSchema = new Schema<UserOrders>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    address: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },
    zipCode: { type: String, required: true, trim: true },
    payment: { type: String , required: true,trim: true },
  },
  { timestamps: true }
); 

// Create the UserOrderProfile model

export const Orders = model<UserOrders>("Orders", userOrderSchema);
