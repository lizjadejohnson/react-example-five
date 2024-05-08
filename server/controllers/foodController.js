const Food = require('../models/Food')


// -----Get ALL Foods (GET):
const fetchAllFoods = async (req, res) => {

    //1. Get all foods from the DB:
    const foods = await Food.find();

    //2. Send the notes back as a response:
    res.json({foods: foods})
}

// -----Get A Food (GET):
const fetchFood = async (req, res) => {

    //1. Get our ID off the URL:
    const foodID = req.params.id

    //1. Get 1 food item from the DB:
    const food = await Food.findById(foodID);

    //2. Send the notes back as a response:
    res.json({food: food})
}

module.exports = {
    fetchAllFoods,
    fetchFood,
}