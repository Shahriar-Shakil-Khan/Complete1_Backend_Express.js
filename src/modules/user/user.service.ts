import { pool } from "../../config/db";

const createUser = async (name: string, email : string, age :number, phone: string, address: string, hobby: string)=>{
    const result = await pool.query(
        `INSERT INTO users(name, email, age, phone, address, hobby)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *`,
        [name, email, age, phone, address, hobby]
        );

        return result;
}

const getUser = async ()=>{
     const result = await pool.query(`SELECT * FROM users`);
     return result;
}


const getSingleUser = async (id: string)=>{
    const result = await pool.query(
      `SELECT * FROM users WHERE id=$1`,[id]
    );
     return result;
}

const userUpdate = async(name:string, email:string, age:number, phone:string, address:string, hobby:string, id:string)=>{
    const result=await pool.query(
      `UPDATE users 
       SET name=$1, email=$2, age=$3, phone=$4, address=$5, hobby=$6
       WHERE id=$7
       RETURNING *`,
      [name, email, age, phone, address, hobby, id]
    );
    return result;
}

const userDelete = async(id:string)=>{
    const result = await pool.query(
      `DELETE FROM users WHERE id=$1`,
      [id]
    );
    return result;
}


export const userServices ={
    createUser,
    getUser,
    getSingleUser,
    userUpdate,
    userDelete,
    
}