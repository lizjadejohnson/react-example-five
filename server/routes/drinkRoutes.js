const express = require('express');
const drinkController = require('../controllers/drinkController');

const router = express.Router();

//DRINK ROUTES:
// -----Get ALL Drinks (GET):
router.get("/", drinkController.fetchAllDrinks)

// -----Get specific Drink by ID (GET):
router.get("/:id", drinkController.fetchDrink)

module.exports = router;
