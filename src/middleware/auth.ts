// //Higher order function return korbe fuction k

import { NextFunction, Request, Response } from "express";
import config from "../config";
import jwt, { JwtPayload } from "jsonwebtoken";

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({
          success: false,
          message: "You are not authorized",
        });
      }

      const decoded = jwt.verify( token,config.jwtSecret as string) as JwtPayload;

      req.user = decoded;

      // role checking
      if (roles.length && !roles.includes(decoded.role as string)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden Access",
        });
      }

      next();
    } catch (err: any) {
      return res.status(401).json({
        success: false,
        message: err.message,
      });
    }
  };
};

export default auth;