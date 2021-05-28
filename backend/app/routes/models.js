const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema(
  {
    uuid : String,
    type : String,
    prescriptions : Array
  },
  { collection: "User" }
);

const prescription = new Schema({
  drugs : Array,
  uuid : String,
  description : String,
  doctor_id : String 
  },
  { collection : "Prescription" }
)

module.exports = mongoose.model("User", user);
module.exports = mongoose.model("Prescription", prescription);