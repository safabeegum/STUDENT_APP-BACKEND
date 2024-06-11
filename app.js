// import packages
const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {studentmodel}=require("./models/student")


//call functions
const app=express()
app.use(cors())
app.use(express.json())

//mongodb connection
mongoose.connect("mongodb+srv://safabeegum:mongodb24@cluster0.pbzbbey.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")

//API functions
app.get("/",(req,res) => {
    res.send("Hello")
})

app.post("/add",(req,res) => {
    let input=req.body      //read input
    // console.log(input)          //to check input is crct
    let student=new studentmodel(input)
    student.save()
    res.json({status:"success"})            //to see API response
})

app.post("/search",(req,res) => {
    res.send("Search Page")
})

app.post("/delete",(req,res) => {
    res.send("Delete Page")
})

app.get("/view",(req,res) => {
    studentmodel.find().then(           //promise
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})




app.listen(8081,() => {
    console.log("server started")
})