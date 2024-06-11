const mongoose = require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "rollno":{type:String,required:true},
        "admnno":{type:String,required:true},
        "college":{type:String,required:true}
    }
)

let studentmodel=mongoose.model("students",schema);
module.exports={studentmodel}
