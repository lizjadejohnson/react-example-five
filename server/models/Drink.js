const mongoose = require('mongoose');

// Schema for the drinks collection
const drinkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subtype: {
        type: String,
        required: true
        // 'Alcoholic', 'Non-Alcoholic' - Example types
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
const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;