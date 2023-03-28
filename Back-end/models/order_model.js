const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    restaurantId: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    items: [{ 
        fname: String, 
        quantity: Number,
     }],
    totalPrice: {
        type: Number,
        required: true,
    },
    orderStatus: {
        type: Boolean,
        required: true,
    },
}, {
    timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;