import { Request } from "express";
import mongoose from "mongoose";
declare global{
    namespace Express{
        interface Request{
            userId?:Types.ObjectId,
            username?:String
        }
    }
}

export {};