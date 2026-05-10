"use strict";
// //Higher order function return korbe fuction k
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({
                    success: false,
                    message: "You are not authorized",
                });
            }
            const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtSecret);
            req.user = decoded;
            // role checking
            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden Access",
                });
            }
            next();
        }
        catch (err) {
            return res.status(401).json({
                success: false,
                message: err.message,
            });
        }
    };
};
exports.default = auth;
