import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { ContentModel, linkModel, UserModel } from "./db.js";
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

app.post("/brain/share",userMiddleware,async(req,res)=>{
    // @ts-ignore
    const userId = req.userId;

    const crypto = await import('crypto');
    const token = crypto.randomBytes(16).toString('hex');

    const link = await linkModel.create({
        token:token,
        userId:userId,
        Permissions:'read'
    })
    const baseUrl = process.env.BASE_URL || "http://localhost:3000";
    const shareLinkUrl = `${baseUrl}/brain/${token}`;

    if(link){
        res.status(200).json({
            msg: "Brain shared successfully"
        })
    }
    else{
        res.status(403).json({
            msg:"user not verified"
        })
    }
})

app.get("/brain/:sharelink",async(req,res)=>{
    const token = req.params.sharelink;
    const sharedcontent = await linkModel.findOne({token})

    if(!sharedcontent){
        res.status(403).json({
            msg: "Invalid sharelink"
        })
    }

    const content = await ContentModel.find({userId:sharedcontent?.userId});
    if(content){
        res.json({
        msg: "Success",
        content
      });
    }
    else{
        res.json({
            msg:"No content found"
        })
    }
})

app.delete("/content",userMiddleware,async(req,res)=>{
    // @ts-ignore
    const user = req.userId;
    const contentid = req.body.contentId;
    const contentdeleted= await ContentModel.deleteMany({
        contentid,
        userId:user
    })
    if(contentdeleted){
        res.status(200).json({
            msg: "content deleted successfully"
        })
    }
    else{
        res.status(403).json({
            msg: "no such content found"
        })
    }
})
app.listen(3000);