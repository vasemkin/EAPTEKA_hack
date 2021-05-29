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
          names : { type: Array, default : [] },
          status : { type: String, default: 'PENDING' },
          edited : {
            isEdited : { type: Boolean, default: false },
            newData : { type: Array, default: [] }
          }
        }
      ]
    },
    { collection: "User" }
  );

module.exports = mongoose.model("User", user);