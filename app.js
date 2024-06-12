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



app.listen(8081, ()=>{
    console.log("server started")

})