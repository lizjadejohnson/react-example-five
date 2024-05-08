const express = require('express');
const foodController = require('../controllers/foodController');


const router = express.Router();


//FOOD ROUTES:
// -----Get ALL Foods (GET):
router.get("/", foodController.fetchAllFoods)

// -----Get specific Food by ID (GET):
router.get("/:id", foodController.fetchFood)

module.exports = router;