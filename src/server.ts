import express, { NextFunction, Request, Response } from "express";

import config from "./config";
import initDB, { pool } from "./config/db";

const app = express();
const port = config.port;


app.use(express.json());



initDB().catch((err) => {
  console.error("DB init failed:", err);
  process.exit(1);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next Level Developers md. shahriar shakil!");
});


// ================= USERS CRUD =================

// Create User
app.post("/users", async (req: Request, res: Response) => {
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
});

