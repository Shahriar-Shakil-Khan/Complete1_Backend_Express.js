import { pool } from "../../config/db"

const workCreate = async(user_id:number, title:string, description:string, completed:boolean, due_date:string, hobby:string)=>{
    const result = await pool.query(
          `INSERT INTO works(user_id, title, description, completed, due_date, hobby)
           VALUES($1, $2, $3, $4, $5, $6)
           RETURNING *`,
          [user_id, title, description, completed, due_date, hobby]
        );
        return result;

}


export const workServices = {
    workCreate,
}