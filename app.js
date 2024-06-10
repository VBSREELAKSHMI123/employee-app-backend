const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const employee = require("./models/employee")

const app = express()
app.use(cors())


app.post("/",(req,res)=>{
    res.send("hello")
})

app.listen(8080,()=>{
    console.log("server started")
})