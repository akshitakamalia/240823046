const express = require("express");
const Router = express.Router();
const crud_controller = require("./crud_controller");
const {
  createValidator,
  updateValidator,
  validate,
} = require("./crud_validation");

Router.get("/index", crud_controller.index);
Router.get("/show/:id", crud_controller.show);
Router.post("/store", (req, res, next) => {
  const result = validate(createValidator, req.body);

  if (!result.success) {
    return res.status(400).json({ status: "error", errors: result.errors });
  }

  crud_controller.store(req, res, next);
});
Router.put("/update/:id", crud_controller.update);
Router.delete("/delete/:id", crud_controller.delete);

module.exports = Router;