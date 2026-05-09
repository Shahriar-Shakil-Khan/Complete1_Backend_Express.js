import express, { Request, Response } from "express"
import { workControllers } from "./work.controller";
const router = express.Router();

router.post("/", workControllers.createWork );

export const workRoutes = router;