"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workControllers = void 0;
const work_service_1 = require("./work.service");
const createWork = async (req, res) => {
    const { user_id, title, description, completed, due_date, hobby } = req.body;
    try {
        const result = await work_service_1.workServices.workCreate(user_id, title, description, completed, due_date, hobby);
        res.status(201).json({
            success: true,
            message: "works created successfully",
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
const getWork = async (req, res) => {
    try {
        const result = await work_service_1.workServices.getWork();
        res.status(200).json({
            success: true,
            message: "works retrieved successfully",
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
const getSingleWork = async (req, res) => {
    try {
        const result = await work_service_1.workServices.getSingleWork(req.params.id);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "works not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "works fetched successfully",
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
const updateWork = async (req, res) => {
    const { title, description, completed, due_date, hobby } = req.body;
    try {
        const result = await work_service_1.workServices.updateWork(title, description, completed, due_date, hobby, req.params.id);
        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "works not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "works updated successfully",
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
const deleteWork = async (req, res) => {
    try {
        const result = await work_service_1.workServices.deleteWork(req.params.id);
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: "works not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "works deleted successfully",
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
exports.workControllers = {
    createWork,
    getWork,
    getSingleWork,
    updateWork,
    deleteWork
};
