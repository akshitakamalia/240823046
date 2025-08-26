const express = require("express")
const Router=express.Router();
const{ 
    createValidator,
    updateValidator,
    validate,
}= require("./StudentVelidation.js");
const StudentController=require("./StudentController")
// const{
//     index,
//     show,
//     store,
//     update,
//     destroy,
// }=require("./StudentController.js")

Router.get("/",StudentController.index)
Router.get("/show/:id",StudentController.show)
Router.post("/store", (req, res, next) => {
const result = validate(createValidator, req.body);

  if (!result.success) {
    return res.status(400).json({ status: "error", errors: result.errors });
  }

  StudentController.store(req, res, next);
});
Router.put("/update/:id",(req, res, next) => {
    const result = validate(updateValidator, req.body);
    
      if (!result.success) {
        return res.status(400).json({ status: "error", errors: result.errors });
      }
    
      StudentController.store(req, res, next);
    });
Router.delete("/delete/:id",StudentController.destroy)

module.exports=Router;
