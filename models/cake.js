const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "cakename":{type:String,required:true},
        "caketype":{type:String,required:true},
        "image":{type:String,required:true},
        "address":{type:String,required:true},
        "price":{type:String,required:true}
    }
)

let cakemodel=mongoose.model("cakes",schema);
module.exports={cakemodel}