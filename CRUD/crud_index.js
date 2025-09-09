const express = require("express");
const mongoose = require("mongoose");

const crud_route = require("./crud_route.js");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://akshitakamalia_db_user:ankit0511@akshitamca17.kex7gzg.mongodb.net/crud_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/crud_db", crud_route);

app.listen(PORT, () => {
  console.log("server is running : 127.0.0.1" + PORT);
});