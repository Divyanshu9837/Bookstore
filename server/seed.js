import express from 'express'
import bcrypt from 'bcrypt'
import {Admin} from './models/Admin.js'
import './db.js'

async function AdminAccount() {
    try{
        const adminCount = await Admin.countDocuments()
        if(adminCount === 0){
            const hashedPassword = await bcrypt.hash('adminPassword', 10)
            const newAdmin = new Admin({
                username: 'admin',
                password: hashedPassword,
            })
            await newAdmin.save()
            console.log('Admin account created')
        } else{
            console.log('Admin account already exists')
        }   
    
}
catch(err){
    console.log("err")
}
}

 AdminAccount()