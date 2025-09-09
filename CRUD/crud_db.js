const mongoose = require("mongoose");

const crud_dbSchema = new mongoose.Schema({
  title: String,
  artist: String,
  category: String,
  album: String,
  url: String,
  photo: String,
  year: Number,
});

const crud_db = mongoose.model("crud_db", crud_dbSchema);

module.exports = crud_db;