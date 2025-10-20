import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { UserModel } from "./db.js";

const app = express();
app.use(express.json());

const jwtpswd="password";

app.post("/signup",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try{
        await UserModel.create({
            username:username,
            password:password
        })
    
        res.json({
            message:"User Signed UP"
        })
    }catch(e){
        res.status(411).json({
            message:"user already exists"
        })
    }
})

app.post("/signin",async(req,res)=>{
    const username= req.body.username;
    const password=req.body.password;

    const existinguser=await UserModel.findOne({
        username,
        password
    })

    if(existinguser){
        const token = jwt.sign({
            id: existinguser._id
        },jwtpswd);

        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
})

app.post("/content",(req,res)=>{

})

app.get("/content",(req,res)=>{

})

app.post("/brain/share",(req,res)=>{

})

app.get("/brain/:sharelink",(req,res)=>{

})

app.listen(3000);