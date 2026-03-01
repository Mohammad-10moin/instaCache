import type { NextFunction,Request,Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";


export const userMiddleware =(req:Request,res:Response,next:NextFunction)=>{
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header!,process.env.jwt_secret!) as JwtPayload;
    if(decoded){
        req.userId = decoded.id;
        next();
    }else{
        res.status(403).json({
            msg:"you are not logged in"
        })
    }
}