import express from 'express'
import {Admin} from '../models/Admin.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const router = express.Router()

router.post("/login",async(req,res)=>{
    
    try{
    const {username,password,role} = req.body;
    if(role == "admin"){
        const admin = await Admin.findOne({username})
        if(!admin){
            return res.json({message:"admin not registered"})
        }
        const validPassword = await bcrypt.compare(password,admin.password) 
        if(!validPassword){
            return res.json({message: "wrong password"})
        }
        const token = jwt.sign({username:admin.username, role:"admin"},process.env.Admin_key)
        res.cookie("token",token,{httpOnly:true,secure:true})
        return res.json({login:true,role:"admin"})
    }
    else if (role === "student") {
      return res.json({ message: "Student login pending" });
    }else{
         return res.json({ message: "Invalid role" });

    }
    } catch(err){
        return res.json({message:err.message})
    }
}) 

export {router as AdminRouter}