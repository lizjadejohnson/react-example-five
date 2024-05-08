const mongoose = require('mongoose');

// Schema for the foods collection
const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subtype: {
        type: String,
        required: true
        // 'Appetizer', 'Entree', 'Dessert', 'Side Dish' - Example types
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Model for the drinks collection
const Food = mongoose.model('Food', foodSchema);

module.exports = Food;