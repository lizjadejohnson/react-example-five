require("dotenv").config()
//Allows .env

const express = require('express');

const foodRoutes = require('./routes/foodRoutes');
const drinkRoutes = require('./routes/drinkRoutes');


const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

const PORT = process.env.PORT || 5000;

const connectToDb = require("./config/connectToDb")
//Pulls Mongoose connection into main application

const cors = require("cors");

//Pull in Drink things:
const Drink = require("./models/Drink");
const drinkController = require("./controllers/drinkController.js");
app.use('/food', foodRoutes);

//Pull in Food Things:
const Food = require("./models/Food");
const foodController = require("./controllers/foodController.js");
app.use('/drink', drinkRoutes);

app.use(express.json())
//Express doesn't naturally convert our data to json

app.use(cors())

connectToDb()
//This initializes our connectToDb function




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});