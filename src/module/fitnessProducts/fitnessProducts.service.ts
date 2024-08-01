import { TProducts } from "./fitnessProducts.interface";
import { Products } from "./fitnessProducts.model";

const createProductsInDB = async (productsData: TProducts) => {
  // console.log(productsData)
  const result = await Products.create(productsData);
  return result;
};

const getAllOrSearchProductsFromDB = async (searchTerm?: string) => {
  if (searchTerm) {
    const regexPattern = new RegExp(searchTerm, "i");
    return Products.find({
      $or: [
        { name: { $regex: regexPattern } },
        { description: { $regex: regexPattern } },
        { tags: { $regex: regexPattern } },
      ],
    });
  }
  return Products.find();
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Products.findById(id);
  return result;
};

//  Update product info
const updateProductByIdInDB = async (id: string, updateData: TProducts) => {
  try {
    // Update the product with the provided ID
    const updatedResult = await Products.updateOne(
      { _id: id },
      { $set: updateData }
    );

    // Check if a product with the given ID was found and updated
    if (updatedResult.matchedCount === 0) {
      throw new Error("No products found with the provided ID");
    }

    // Fetch the updated document
    const updatedProduct = await Products.findById(id).lean();

    if (!updatedProduct) {
      throw new Error("Failed to fetch the updated product");
    }

    return updatedProduct;
  } catch (error) {
    console.error("Error updating product data:", error);
    throw error;
  }
};

// Delete product
const deleteProductFromDB = async (id: string) => {
  const result = await Products.deleteOne({ _id: id });
  return result;
};

export const ProductsServices = {
  createProductsInDB,
  getAllOrSearchProductsFromDB,
  getSingleProductFromDB,
  updateProductByIdInDB,
  deleteProductFromDB,
};
