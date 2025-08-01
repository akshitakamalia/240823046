const express=require("express");
const StudentRouter=require("./StudentRoute.js");

const app =express();
const PORT = 80;
app.use(express.json());
app.use("/student",StudentRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}/`);
});


