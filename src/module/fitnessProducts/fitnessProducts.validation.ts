import { z } from 'zod';

const createProductValidationSchema = z.object({
   body: z.object({
    name: z.string(),
    image: z.string(),
    price: z.number().positive(),
    quantity: z.number().int().nonnegative(),
    rating: z.number().min(0).max(5),
    description: z.string(),
    category: z.string()
   })
});

export const productValidation = {
    createProductValidationSchema,
  };