import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { ContentModel, UserModel } from "./db.js";
import { jwtpswd } from "./config.js";
import { userMiddleware } from "./middleware.js";
const app = express();
app.use(express.json());


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

app.post("/content",userMiddleware,async(req,res)=>{
    const title = req.body.title;
    const link = req.body.link;

    await ContentModel.create({
        title:title,
        link:link,
        // @ts-ignore
        userId:req.userId,
        tags: []
    })
    res.json({
        msg:"Content added"
    })
})

app.get("/content",userMiddleware,async(req,res)=>{
    // @ts-ignore
    const userId=req.userId;
    const contentfound= await ContentModel.find({
        userId:userId
    }).populate("userId","username")
    if(contentfound){
        res.json({
            contentfound
        })
    }
    else{
        res.json({
            msg:"NO content found"
        })
    }
})

app.post("/brain/share",(req,res)=>{

})

app.get("/brain/:sharelink",(req,res)=>{

})

app.listen(3000);