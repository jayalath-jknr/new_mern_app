const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//connect to mongodb
mongoose.connect("mongodb://localhost:27017/express", {
    useNewUrlParser:true
    useUnifiedTopology:true
})
