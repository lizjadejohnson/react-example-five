const Food = require('../models/Food')

// -----Get ALL Foods (GET):
const fetchAllFoods = async (req, res) => {

    //1. Get all foods from the DB:
    const foods = await Food.find();

    //2. Send the notes back as a response:
    res.json({foods: foods})
};

// -----Get ALL Foods by Subtype e.g. Desserts, Entrees, etc. (GET):
const fetchFoodsBySubtype = async (req, res) => {
    const subtype = req.params.subtype; // Get the subtype from the request params
    const foods = await Food.find({ subtype: subtype }); // Find foods with the specified subtype
    res.json({ foods: foods }); // Send the foods back as a response
};

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
    fetchFoodsBySubtype,
}