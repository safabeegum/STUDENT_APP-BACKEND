// import packages
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const student=require("./models/students")

//call functions
const app=express()
app.use(cors())

//API functions
app.get("/",(req,res) => {
    res.send("Hello")
})

app.post("/contact",(req,res) => {
    res.send("Welcome to my Contact Page")
})


app.post("/add",(req,res) => {
    res.send("Add Page")
})
app.listen(8080,() => {
    console.log("server started")
})