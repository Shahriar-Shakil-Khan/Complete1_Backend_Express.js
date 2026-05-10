import express, { Request, Response } from "express"
import { pool } from "../../config/db";
import { userControllers } from "./user.controller";
import logger from "../../middleware/logger";
import auth from "../../middleware/auth";
const router = express.Router();

//app.use("/user",userRootes)

router.post("/", userControllers.createUser );

router.get("/",logger , auth("admin") , userControllers.getUser);

router.get("/:id", auth("admin", "user") ,userControllers.getSingleUser);

router.put("/:id", userControllers.userUpdate);

router.delete("/:id", userControllers.userDelete);



export const userRoutes = router;