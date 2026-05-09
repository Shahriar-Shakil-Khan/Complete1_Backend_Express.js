import { Request, Response } from "express";
import { pool } from "../../config/db";
import { workServices } from "./work.service";

const createWork = async (req: Request, res: Response) => {
  const { user_id, title, description, completed, due_date, hobby } = req.body;

  try {
    const result = await workServices.workCreate(user_id, title, description, completed, due_date, hobby)

    res.status(201).json({
      success: true,
      message: "works created successfully",
      data: result.rows[0],
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}

export const workControllers ={
    createWork,
}