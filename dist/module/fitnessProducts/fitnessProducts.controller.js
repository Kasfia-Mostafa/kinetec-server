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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const fitnessProducts_service_1 = require("./fitnessProducts.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const createProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fitnessProducts_service_1.ProductsServices.createProductsInDB(req.body);
    // console.log(result)
    res.status(200).json({
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Product created successfully",
        data: result,
    });
}));
const getAllOrSearchedProducts = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield fitnessProducts_service_1.ProductsServices.getAllOrSearchProductsFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Products retrieved successfully",
        data: result,
    });
}));
const getSingleProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield fitnessProducts_service_1.ProductsServices.getSingleProductFromDB(productId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Product retrieved successfully",
        data: result,
    });
}));
const updateProductService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield fitnessProducts_service_1.ProductsServices.updateProductByIdInDB(productId, req.body);
    res.status(200).json({
        success: true,
        message: "Product updated successfully!",
        data: result,
    });
}));
const deleteProduct = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield fitnessProducts_service_1.ProductsServices.deleteProductFromDB(productId);
    if (result.deletedCount === 0) {
        return res.status(http_status_1.default.NOT_FOUND).json({
            success: false,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Product not found",
        });
    }
    res.status(http_status_1.default.NO_CONTENT).json({
        success: true,
        statusCode: http_status_1.default.NO_CONTENT,
        message: "Product deleted successfully",
    });
}));
exports.ProductsControllers = {
    createProducts,
    getAllOrSearchedProducts,
    getSingleProduct,
    updateProductService,
    deleteProduct,
};
