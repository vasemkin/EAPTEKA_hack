const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const basket = new Schema(
    {
        ORDER_ID: Number,
        PRODUCT_ID: Number,
        QANTITY: Number,
        PRICE: Number,
        DETAIL_PAGE_URL: String
    },
    { collection: "Basket" }
  )
  
module.exports = mongoose.model("Basket", basket);