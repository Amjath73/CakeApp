const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { cakemodel } = require("./models/cake")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://amjath:itsArkingtime7@cluster0.n01k0zd.mongodb.net/cakeDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let cake = new cakemodel(input)
    console.log(cake)
    cake.save()
    res.json({ "status": "success" })
})

app.get("/view", (req, res) => {
    cakemodel.find().then(
        (data) => {
            res.json(data)
    }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

app.post("/search", (req, res) => {
    let input = req.body
   cakemodel.find(input).then(
        (data) => { res.json(data) }
    ).catch(
        (error) => {
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
   cakemodel.findByIdAndDelete(input._id).then(
        (response)=>{
        res.json({"status":"success"})
        }
    ).catch(
        (error)=>
            {
                res.json({"status":"error"})
            }
    )
})

app.listen(8081, ()=>{
    console.log("server started")

})