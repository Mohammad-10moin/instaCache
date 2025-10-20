import mongoose, { model, Schema } from "mongoose";

import dotenv from 'dotenv'
dotenv.config({path:".env"})

mongoose.connect(process.env.MongoDB_URL || "");

// mongoose.connect(process.env.MongoDB_URL!); If we are 100% sure that process.env.MongoDB_URL is a string and exists then we can use this syntax.

const UserSchema = new Schema({
    username: {type:String, unique:true},
    password: String
})

export const UserModel = model("user",UserSchema);