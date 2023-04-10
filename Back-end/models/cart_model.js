const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    cartItems: [
        { 
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            productName: {
                type: String,
            },
            
            productDesc: {
                type: String,
            },
            productImg: {
                type: String,
            },
            quantity: {
                type: Number,
            },
            price: {
                type: Number,
            },
        }
    ],


}, {
    timestamps: true,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;