const Drink = require('../models/Drink')

// -----Get ALL Drinks (GET):
const fetchAllDrinks = async (req, res) => {

    //1. Get all Drinks from the DB:
    const drinks = await Drink.find();

    //2. Send the notes back as a response:
    res.json({drinks: drinks})
}

// -----Get A Drink (GET):
const fetchDrink = async (req, res) => {

    //1. Get our ID off the URL:
    const drinkID = req.params.id

    //1. Get 1 drink item from the DB:
    const drink = await Drink.findById(foodID);

    //2. Send the notes back as a response:
    res.json({drink: drink})
}

module.exports = {
    fetchAllDrinks,
    fetchDrink,
}