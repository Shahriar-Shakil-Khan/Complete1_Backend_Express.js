"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workServices = void 0;
const db_1 = require("../../config/db");
const workCreate = async (user_id, title, description, completed, due_date, hobby) => {
    const result = await db_1.pool.query(`INSERT INTO works(user_id, title, description, completed, due_date, hobby)
           VALUES($1, $2, $3, $4, $5, $6)
           RETURNING *`, [user_id, title, description, completed, due_date, hobby]);
    return result;
};
const getWork = async () => {
    const result = await db_1.pool.query(`SELECT * FROM works`);
    return result;
};
const getSingleWork = async (id) => {
    const result = await db_1.pool.query(`SELECT * FROM works WHERE id=$1`, [id]);
    return result;
};
const updateWork = async (title, description, completed, due_date, hobby, id) => {
    const result = await db_1.pool.query(`UPDATE works 
       SET title=$1, description=$2, completed=$3, due_date=$4, hobby=$5
       WHERE id=$6
       RETURNING *`, [title, description, completed, due_date, hobby, id]);
    return result;
};
const deleteWork = async (id) => {
    const result = await db_1.pool.query(`DELETE FROM works WHERE id=$1`, [id]);
    return result;
};
exports.workServices = {
    workCreate,
    getWork,
    getSingleWork,
    updateWork,
    deleteWork,
};
