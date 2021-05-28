const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const property = new Schema(
  {
  ID : Number,
  CODE : { type: String, default: null },
  NAME : { type: String, default: null }
  },
  { collection: "Property" }
)

module.exports = mongoose.model("Property", property);