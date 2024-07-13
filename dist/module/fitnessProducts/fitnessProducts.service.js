"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsServices = void 0;
const fitnessProducts_model_1 = require("./fitnessProducts.model");
const createProductsInDB = (productsData) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(productsData)
    const result = yield fitnessProducts_model_1.Products.create(productsData);
    return result;
});
const getAllOrSearchProductsFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const regexPattern = new RegExp(searchTerm, "i");
        return fitnessProducts_model_1.Products.find({
            $or: [
                { name: { $regex: regexPattern } },
                { description: { $regex: regexPattern } },
                { tags: { $regex: regexPattern } },
            ],
        });
    }
    return fitnessProducts_model_1.Products.find();
});
const getSingleProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fitnessProducts_model_1.Products.findById(id);
    return result;
});
//  Update product info
const updateProductByIdInDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Update the product with the provided ID
        const updatedResult = yield fitnessProducts_model_1.Products.updateOne({ _id: id }, { $set: updateData });
        // Check if a product with the given ID was found and updated
        if (updatedResult.matchedCount === 0) {
            throw new Error("No products found with the provided ID");
        }
        // Fetch the updated document
        const updatedProduct = yield fitnessProducts_model_1.Products.findById(id).lean();
        if (!updatedProduct) {
            throw new Error("Failed to fetch the updated product");
        }
        return updatedProduct;
    }
    catch (error) {
        console.error("Error updating product data:", error);
        throw error;
    }
});
// Delete product
const deleteProductFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fitnessProducts_model_1.Products.deleteOne({ _id: id });
    return result;
});
exports.ProductsServices = {
    createProductsInDB,
    getAllOrSearchProductsFromDB,
    getSingleProductFromDB,
    updateProductByIdInDB,
    deleteProductFromDB,
};
