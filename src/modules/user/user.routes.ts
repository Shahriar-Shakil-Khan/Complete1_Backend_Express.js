import express, { Request, Response } from "express"
import { pool } from "../../config/db";
const router = express.Router()

router.post("/", async (req: Request, res: Response) => {
  const { name, email, age, phone, address, hobby } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO users(name, email, age, phone, address, hobby)
       VALUES($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [name, email, age, phone, address, hobby]
    );

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
})

export const userRoutes = router;