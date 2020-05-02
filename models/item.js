const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  redirection: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
