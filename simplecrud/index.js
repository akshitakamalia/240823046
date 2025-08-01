const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello Student Wlc To MCA...")
});

app.get("/home",(req,res)=>{
    res.send("Wlc To Home Page....")
});


app.listen(80,()=>{
    console.log("server is running at http://localhost:80/");
});

