const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://akshitakamalia_db_user:ankit0511@akshitamca17.kex7gzg.mongodb.net/mca17",{
   
})
const studentSchema=new mongoose.Schema({
    name:String,
    department:String,
    startYear:Number,
    endYear:Number,
    address:String
})

const Student=mongoose.model("Student",studentSchema)

console.log("MogoDB connected successfully")

const student=new Student({
    name:"Akshita dhokiya",
    department:"Computer Science",
    startYear:2020,
    endYear:2024,
    enrollment:123654,
    address:"atmiya university , rajkot"
})

student
   .save()
   .then(()=>{
       console.log("student saved successfully")
   })
   .catch((error)=>{
       console.error("Error saving student:",error)
   })