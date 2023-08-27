const express = require("express")
const path = require("path")

let host ="localhost"
const port = 8000

const app = express()

app.listen(port , ()=> {
    console.log("lisning on port " + port+ " " + host + "");
})
app.get("/", (req, res)=>{
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.send("<h1> Hello, Node.js!</h1>");
})