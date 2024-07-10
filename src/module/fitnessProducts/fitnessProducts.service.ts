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
// const updateProductByIdInDB = async (
//   id: string,
//   updateData: UpdatePhoneData
// ) => {
//   try {
//     const updatedResult = await Phones.updateOne(
//       { _id: id },
//       { $set: updateData }
//     );

//     if (updatedResult.matchedCount === 0) {
//       throw new Error("No phone found with the provided ID");
//     }

    // Fetch the updated document
//     const updatedPhone = await Phones.findById(id).lean();

//     if (!updatedPhone) {
//       throw new Error("Failed to fetch the updated phone");
//     }

//     return updatedPhone;
//   } catch (error) {
//     console.error("Error updating phone data:", error);
//     throw error;
//   }
// };

// Delete product
// const deleteProductFromDB = async (id: string) => {
//   const result = await Phones.deleteOne({ _id: id });
//   return result;
// };

export const ProductsServices = {
  createProductsInDB,
  getAllOrSearchProductsFromDB,
  getSingleProductFromDB,
//   updateProductByIdInDB,
//   deleteProductFromDB,
};
