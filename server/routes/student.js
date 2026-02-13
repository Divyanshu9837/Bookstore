import express from 'express'
import {Student} from '../models/Student.js'
import bcrypt from 'bcrypt'
const router = express.Router()


router.post("/register",async(req,res)=>{
    try{
            const {username,password,roll,grade} = req.body;
            const student = await Student.findOne({username})
            if(student){
                return res.json({message:"student already registered"})
            }
            const hashedPassword = await bcrypt.hash(password,10)
            const newStudent = new Student({
                username,
                password:hashedPassword,
                roll:roll,
                grade:grade
            })
            await newStudent.save()
            return res.json({register:true
            })

    }catch(err){ 
        return res.json({message:err.message})
    }
})


export {router as StudentRouter}