import express from "express";
import jwt from "jsonwebtoken";
import { userModel } from "./db.js";
const app = express();
app.use(express.json);

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
        const token=jwt.sign(username,secretkey);
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

app.post("/addContent",(req,res)=>{

})

app.get("/content",(req,res)=>{

})

app.delete("/content",(req,res)=>{

})

app.post("/share",(req,res)=>{

})

app.get("/brain",(req,res)=>{

})

app.listen(3000);