import express from "express";
import jwt from "jsonwebtoken";
import { contentModel, linkmodel, userModel } from "./db.js";
import { userMiddleware } from "./middleware.js";
import { nanoid } from "nanoid";
import { randomhash } from "./utils.js";
const app = express();
app.use(express.json());

app.post("/signup",async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    await userModel.create({
        username:username,
        password:password
    })

    res.json({
        msg:"user signed up"
    })
})

app.post("/signin",async(req,res)=>{
    const username=req.body.username;
    const password = req.body.password;

    const founduser= await userModel.findOne({
        username:username
    })
    
    const secretkey=process.env.jwt_secret!;
    if(founduser){
        const token=jwt.sign({id:founduser._id},secretkey);
        res.json({
            msg:"user signed in",
            token:token
        })
    }else{
        res.status(403).json({
            msg:"incorrect credentials"
        })
    }
    
})

app.post("/addContent",userMiddleware,async(req,res)=>{
    const title = req.body.title;
    const type = req.body.type;
    const link = req.body.link;
    const id = req.userId;
    await contentModel.create({
        title:title,
        type:type,
        link:link,
        userid:id
    })
    res.json({
        msg:"content added"
    })
})

app.get("/content",userMiddleware,async(req,res)=>{
    // const title = req.body.title;
    const id = req.userId;
    const content=await contentModel.find({
        userid:id
    })
    if(content){
        res.json(
            content
        )
    }else{
        res.json({
            msg:"no content found"
        })
    }
})

app.delete("/content",userMiddleware,async(req,res)=>{
    const title = req.body.title;
    const contentfound=await contentModel.findOne({
        title:title
    })
    if(contentfound){
        await contentModel.deleteOne({
            title:title
        })
        res.json({
            msg:"content deleted"
        })
    }else{
        res.json({
            msg:"no such content found"
        })
    }
})

app.post("/share",userMiddleware,async(req,res)=>{
    const share = req.body.share;
    if(share){
        const randomlink = nanoid(10);
        await linkmodel.create({
            // hash:randomhash(10),
            hash:randomlink,
            userid:req.userId
        })
        res.json({
            link:randomlink
        })
    }else{
        await linkmodel.deleteOne({
            userid:req.userId
        })
    }
})

app.get("/brain/:sharelink",async(req,res)=>{
    const hash = req.params.sharelink;
    const linkfound = await linkmodel.findOne({
        hash:hash
    })
    if(linkfound){
        const content = await contentModel.find({
            userid:linkfound.userid!
        })
        res.json({
            content
        })
    }else{
        res.json({
            msg:"no such link found"
        })
    }
})

app.listen(3000);