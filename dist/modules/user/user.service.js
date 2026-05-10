"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const db_1 = require("../../config/db");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createUser = async (payload) => {
    const { name, email, age, phone, address, hobby, password, role } = payload;
    const hashedPass = await bcryptjs_1.default.hash(password, 10);
    const result = await db_1.pool.query(`INSERT INTO users(name, email, age, phone, address, hobby, password, role)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING *`, [name, email, age, phone, address, hobby, hashedPass, role]);
    return result;
};
const getUser = async () => {
    const result = await db_1.pool.query(`SELECT * FROM users`);
    return result;
};
const getSingleUser = async (id) => {
    const result = await db_1.pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
    return result;
};
const userUpdate = async (name, email, age, phone, address, hobby, id) => {
    const result = await db_1.pool.query(`UPDATE users 
       SET name=$1, email=$2, age=$3, phone=$4, address=$5, hobby=$6
       WHERE id=$7
       RETURNING *`, [name, email, age, phone, address, hobby, id]);
    return result;
};
const userDelete = async (id) => {
    const result = await db_1.pool.query(`DELETE FROM users WHERE id=$1`, [id]);
    return result;
};
exports.userServices = {
    createUser,
    getUser,
    getSingleUser,
    userUpdate,
    userDelete,
};
