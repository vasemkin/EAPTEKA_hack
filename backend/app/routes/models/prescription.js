const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const prescription = new Schema({
  drugs : Array,
  uuid : { type: String, default: null },
  description : { type: String, default: null },
  doctor_id : { type: String, default: null } 
  },
  { collection : "Prescription" }
);

module.exports = mongoose.model("Prescription", prescription);