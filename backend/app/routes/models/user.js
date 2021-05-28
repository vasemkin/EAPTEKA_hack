const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema(
    {
      uuid : String,
      password : String,
      type : String,
      prescriptions : Array
    },
    { collection: "User" }
  );

module.exports = mongoose.model("User", user);