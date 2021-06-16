import express from "express"
import bodyParser from "body-parser"
import userRouter from "./router/users.js"

const server=express()
const PORT=9999
server.use(bodyParser.json())

server.get("/",(req,res)=> res.send("welcome to my library"))
server.use("/user",userRouter)
server.listen(PORT)