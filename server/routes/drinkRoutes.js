const express = require('express');
const drinkController = require('../controllers/drinkController');

const router = express.Router();

//DRINK ROUTES:
// -----Get ALL Drinks (GET):
router.get("/", drinkController.fetchAllDrinks)

// -----Get ALL by specific subtype (GET):
router.get("/subtype/:subtype", drinkController.fetchDrinksBySubtype);

// -----Get specific Drink by ID (GET):
router.get("/:id", drinkController.fetchDrink)

module.exports = router;
