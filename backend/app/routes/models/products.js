const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const products = new Schema(
    {
    ID : Number,
    NAME : { type: String, default: null }
    },
    { collection: "Products" }
  )
  
module.exports = mongoose.model("Products", products);