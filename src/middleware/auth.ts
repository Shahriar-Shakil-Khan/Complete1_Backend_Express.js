//Higher order function return korbe fuction k

import { NextFunction, Request, Response } from "express";
import config from "../config";
import jwt, { JwtPayload } from 'jsonwebtoken';

const auth = () => {
    return async(req:Request, res:Response, next: NextFunction )=>{
       try{

         const token = req.headers.authorization;
        if(!token){
            return res.status(500).json({message: "You are not allowed"})
        }
        const decode =jwt.verify(token, config.jwtSecret as string )
        console.log(decode)
        req.user = decode as JwtPayload;
        next();

       }catch(err :any){
          res.status(500).json({
              success: false,
              message: err.message
          })
       }
    }
}



export default auth;