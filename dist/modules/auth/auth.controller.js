"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authControllers = void 0;
const auth_service_1 = require("./auth.service");
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await auth_service_1.authServices.loginUser(email, password);
        res.status(200).json({
            success: true,
            message: "login successful",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
exports.authControllers = {
    loginUser
};
