const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const user = new Schema(
    {
      uuid : String,
      password : String,
      type : String,
      prescriptions : [
        {
          prescription_id : { type: String, default : null },
          status : { type: String, default: 'PENDING' }
        }
      ]
    },
    { collection: "User" }
  );

module.exports = mongoose.model("User", user);