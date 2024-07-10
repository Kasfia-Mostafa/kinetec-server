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
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const user_model_1 = require("../module/users/user.model");
const config_1 = __importDefault(require("../app/config"));
const AppError_1 = __importDefault(require("../Errors/AppError"));
const auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const accessToken = req.headers.authorization;
        if (!accessToken || !accessToken.startsWith("Bearer ")) {
            throw new AppError_1.default(401, "You are not authorized to access this route");
        }
        const token = accessToken.split(" ")[1];
        // if the token is sent from the client
        if (!token) {
            throw new AppError_1.default(401, "You are not authorized to access this!");
        }
        const verifiedToken = jsonwebtoken_1.default.verify(accessToken, config_1.default.jwt_access_secret);
        const { role, email } = verifiedToken;
        const user = yield user_model_1.User.isUserExistsByCustomEmail(email);
        if (!user) {
            throw new AppError_1.default(401, "User not found");
        }
        if (!requiredRoles.includes(role)) {
            throw new AppError_1.default(401, "You are not authorized to access this route");
        }
        next();
    }));
};
exports.auth = auth;
