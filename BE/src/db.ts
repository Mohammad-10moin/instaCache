import mongoose, { Types } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dburl = process.env.Mongo_URL!;
mongoose.connect(dburl);


import {Schema , model} from "mongoose";
import { object } from "zod";
const UserSchema=new Schema({
    username: {type:String, unique:true},
    password: String
});

export const userModel = model("User",UserSchema);

const ContentSchema = new Schema({
    title:String,
    link:String,
    type:String,
    tags:[{type:Types.ObjectId,ref:"Tag"}],
    userid:{type:Types.ObjectId,ref:"User"}
});

export const contentModel = model("content",ContentSchema);

const linkSchema = new Schema({
    hash:{type:String,unique:true},
    userid:{type:Types.ObjectId,ref:"User",unique:true}
})

export const linkmodel = model("link",linkSchema);