const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CartSchema = new Schema ({
    userId : {type: String},
    products: [
        {productId:{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {type: Number},
    price: {type:Number},
    name: {type: String},
    images: {type: Array},

}
],
    totalAmount: {type: Number}
})


module.exports = mongoose.model("Cart", CartSchema);