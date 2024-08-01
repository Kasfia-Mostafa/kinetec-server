import { z } from "zod";

// Define the UserOrder schema with Zod
export const userOrderSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zipCode: z.string().min(1, "Zip code is required"),
    payment: z.string().nonempty("Payment is required"),
  }),
});

export const OrdersValidation = {
  userOrderSchema,
};
