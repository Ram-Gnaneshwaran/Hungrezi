const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    restaurantId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    category: {        
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    veg: {
        type: Boolean,
        required: true,
    },
    
    

}, {
    timestamps: true,
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;