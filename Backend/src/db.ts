import mongoose, { model, Schema } from "mongoose";

import dotenv from 'dotenv'
dotenv.config({path:".env"})

mongoose.connect(process.env.MongoDB_URL || "");

// mongoose.connect(process.env.MongoDB_URL!); If we are 100% sure that process.env.MongoDB_URL is a string and exists then we can use this syntax.

//defining user schema -- skeleton
// then defining the model 

const UserSchema = new Schema({
    username: {type:String, unique:true,required:true},
    password: {type:String,required:true}
})

export const UserModel = model("user",UserSchema);


//defining the Tag schema
const TagSchema = new Schema({
    title:{type: String, required:true}
})

export const TagModel = model("Tag",TagSchema);


//defining the content schema and model
const contentTypes = ['image','audio','video','article']
const ContentSchema = new Schema({
    title:{type: String, required:true},                            //title of the content
    link:{type: String, required:true},                             //url
    type:{type: String, enum:contentTypes, required:true},          // document|tweet|video
    tags:[{type:mongoose.Types.ObjectId,ref:'Tag'}],                //['productivity','news',...]
    userId:{type:mongoose.Types.ObjectId,ref:'user',required:true}
})

export const ContentModel = model("content",ContentSchema);

//defining link schema 
const linkSchema = new Schema({
    token:{type:String,required:true},
    userId:{type:mongoose.Types.ObjectId, ref:'user',required:true},
    Permissions:String
})

export const linkModel = model('link',linkSchema);