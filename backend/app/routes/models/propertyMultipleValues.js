const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertyMultipleValues = new Schema({
    IBLOCK_ELEMENT_ID: Number,
    IBLOCK_PROPERTY_ID: String,
    VALUE: Number,
    VALUE_ENUM: String,
    VALUE_NUM: Number,
    DESCRIPTION: String
    },
    { collection: "PropertyMultipleValues" }
);

module.exports = mongoose.model("PropertyMultipleValues", propertyMultipleValues);