import express from "express"
import bodyParser from "body-parser"
import userRouter from "./router/users.js"
import mongoose from 'mongoose'

const dbURI='mongodb+srv://lib:123@cluster0.9jwi9.mongodb.net/library1?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
 .then(
     (result)=>{
         console.log("connected to database")
         server.listen(PORT)
         console.log("server started successfully")
     }
 )
 .catch(
     (err)=>{
         console.log(err)
     }
 )
const server=express()
const PORT=9999
server.use(bodyParser.json())

server.get("/",(req,res)=> res.send("welcome to my library"))
server.use("/user",userRouter)

