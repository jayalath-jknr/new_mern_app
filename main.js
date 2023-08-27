
// import * as Maths from './math.mjs';
const express = require("express")
const path = require("path")

let host ="localhost"
const port = 8000

// console.log(hello , name1);
// Maths.add(4,5)

//how to read a file using fs module
// fs.writeFile("myFile.txt", name1, (err) => { 
//     //utf8 is the encoding  format  of the file   
//     if (err) console.error(err)
//     // console.log(data);
// })           
// //how to read a file using fs module
// fs.readFile("myFile.txt", "utf8", (err, content) => { 
//     //utf8 is the encoding  format  of the file  
//     console.log(content) 
//     if (err) console.error(err)
//     // console.log(data);
// }) 

// using http module
// const requestListner = function(req, res){
//     if (req.method === 'GET') {
//         if (req.url === '/') {
//           res.writeHead(200, {'Content-Type': 'text/plain'});
//           res.end('Hello, Node.js!\n');
//         } else if (req.url === '/about') {
//           res.writeHead(200, {'Content-Type': 'text/plain'});
//           res.end('About Page\n');
//         } else {
//           res.writeHead(404, {'Content-Type': 'text/plain'});
//           res.end('Not Found\n');
//         }
//       } else {
//         res.writeHead(405, {'Content-Type': 'text/plain'});
//         res.end('Method Not Allowed\n');
//       }


    
    
// }   

// const server =http.createServer(requestListner)

// server.listen(port, host, ()=>{
//     console.log(`Server started in port http://${host}${port}`)
// })



//express

const app = express()

app.listen(port , ()=> {
    console.log("lisning on port " + port+ " " + host + "");
})

app.get("/", (req, res)=>{
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    res.send("<h1> Hello, Node.js!</h1>");
})
app.get("/json", (req, res)=>{
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    let data = {name: "name1", age: 23}
    res.json(data);
})
app.get("/file", (req, res)=>{
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    const filePath = path.join(__dirname, "myFile.txt");
    res.sendFile(filePath);
})
app.get("/not-found", (req, res) => {
    res.status(404).send("Not Found");
  });
  
  app.get("/server-error", (req, res) => {
    res.status(500).send("Internal Server Error");
  });
app.post("/user/", (req, res)=>{
    console.log("post")
})

app.put("/user/$id", (req, res)=>{
    console.log("post")
})
app.delete("/user/$id", (req, res)=>{
    console.log("delete")
})

//lodash is like numpy for python
//
