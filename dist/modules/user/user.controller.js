"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const createUser = async (req, res) => {
    try {
        const result = await user_service_1.userServices.createUser(req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: result.rows[0],
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
const getUser = async (req, res) => {
    try {
        const result = await user_service_1.userServices.getUser();
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.rows,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
const getSingleUser = async (req, res) => {
    try {
        const result = await user_service_1.userServices.getSingleUser(req.params.id);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: result.rows[0],
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
const userUpdate = async (req, res) => {
    const { name, email, age, phone, address, hobby } = req.body;
    try {
        const result = await user_service_1.userServices.userUpdate(name, email, age, phone, address, hobby, req.params.id);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: result.rows[0],
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
const userDelete = async (req, res) => {
    try {
        const result = await user_service_1.userServices.userDelete(req.params.id);
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: null,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
exports.userControllers = {
    createUser,
    getUser,
    getSingleUser,
    userUpdate,
    userDelete,
};
