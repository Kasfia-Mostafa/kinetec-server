import { Schema, model } from 'mongoose';
import { TProducts } from './fitnessProducts.interface';


// Define the Product schema
const productsSchema = new Schema<TProducts>({
    name: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 0 },
    rating: { type: Number, required: true, min: 0, max: 5 },
    description: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true }
});

// Create the Product model
export const Products = model<TProducts>('Products', productsSchema);
