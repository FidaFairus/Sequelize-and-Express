const express=require('express');
const path= require('path');
const parser=require('body-parser');

const app =express();

app.use(parser.urlencoded({extended: false}));
// app.get("/",(req,res)=>{
//     res.send("Hi from express app!");
// })
// app.use("/",(req,res, next)=>{
//     console.log("Request recieved");
//     next()
// });

// app.use("/",(req,res, next)=>{
//     console.log("Request recieved in second middleware");
//     next()
// });

app.get("/employee/create",(req,res,)=>{
    var loc =path.join(__dirname,'views','index.html')
    res.sendFile(loc)
})

app.post("/employee/create",(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

app.listen(80)