import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dburl = process.env.Mongo_URL!;
mongoose.connect(dburl);


import {Schema , model} from "mongoose";
const UserSchema=new Schema({
    username: {type:String, unique:true},
    password: String
});

export const userModel = model("User",UserSchema);