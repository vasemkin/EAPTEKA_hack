const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userModel = new Schema(
  {
    uuid : String,
    type : String
  },
  { collection: "User" }
);

module.exports = mongoose.model("User", userModel);