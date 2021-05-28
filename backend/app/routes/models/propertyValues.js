const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const propertyValues = new Schema({
  IBLOCK_ELEMENT_ID: Number,
  PROPERTY_276: { type: String, default: null },
  PROPERTY_429: { type: String, default: null },
  PROPERTY_326: { type: String, default: null },
  PROPERTY_574: { type: String, default: null },
  PROPERTY_265: { type: String, default: null },
  PROPERTY_284: { type: String, default: null },
  PROPERTY_541: { type: String, default: null },
  PROPERTY_542: { type: String, default: null },
  PROPERTY_343: { type: String, default: null },
  PROPERTY_428: { type: String, default: null },
  PROPERTY_274: { type: String, default: null },
  PROPERTY_263: { type: Number, default: 0.00},
  PROPERTY_264: { type: String, default: null },
  PROPERTY_594: { type: String, default: null },
  PROPERTY_344: { type: String, default: null },
  PROPERTY_483: { type: Number, default: 0.00},
  PROPERTY_536: { type: String, default: null },
  PROPERTY_540: { type: String, default: null },
  PROPERTY_356: { type: String, default: null },
  PROPERTY_567: { type: String, default: null },
  PROPERTY_332: { type: String, default: null },
  PROPERTY_283: { type: String, default: null }
  },
  { collection: "PropertyValues" }
);

module.exports = mongoose.model("PropertyValues", propertyValues);