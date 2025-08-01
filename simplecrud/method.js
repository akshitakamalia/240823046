const express=require("express");
const app=express();
app.use(express.json());

//index-To Get All The Data
app.get("/",(req,res)=>{
    res.send("All Student...");
});

//show-To Get a Specific Data
app.get("/show/:id",(req,res)=>{
    res.send(`One Student with ID:${req.params.id}`);
});

//store-To Add New Data
app.post("/store",(req,res)=>{
    res.send(`insert ${req.body.name}into Database`);
});

//Update-To update Existing Data
app.put("/update/:id",(req,res)=>{
    res.send(`update ${req.params.id}-${req.body.name}-${req.body.city}into Database`);
});

//delete-To delete Existing Data
app.delete("/delete/:id",(req,res)=>{
    res.send("Delete ...");
});

app.listen(80,()=>{
    console.log("server is running at http://localhost:80/");
});