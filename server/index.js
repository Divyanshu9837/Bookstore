import express from 'express';
import dotenv from 'dotenv';
import './db.js';
import cors from "cors"
import cookieParser from 'cookie-parser';
import  {AdminRouter} from './routes/auth.js';
import {StudentRouter} from './routes/student.js'
import {BookRouter} from './routes/book.js'
import {Book} from './models/Book.js';
import {Student} from './models/Student.js';
import {Admin} from './models/Admin.js';

const app = express();
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieParser());
dotenv.config();
app.use("/auth",AdminRouter)
app.use("/student",StudentRouter)
app.use("/book",BookRouter)
app.get("/dashboard",async(req,res) =>{

    try {
        const book = await Book.countDocuments();
        const students = await Student.countDocuments();
        const admin = await Admin.countDocuments();
        return res.json({
            success:true,book,students,admin
        })
    } catch (error) {
        res.status(500).json({success:false,message:"Error fetching dashboard data"})
    }
})

app.listen(process.env.PORT,() =>{
    console.log("Server is running on port ");
})