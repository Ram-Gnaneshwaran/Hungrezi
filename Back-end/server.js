// Import Packages
const express = require('express'); //Framework for APIs
const cors = require('cors'); //Provides Express Middleware
const mongoose = require('mongoose');//Mongoose for Mapping to MongoDB

//Import Router
const userRoutes = require('./routes/user_routes');
const foodRoutes = require('./routes/food_routes');

//Dotenv - For Connection
require('dotenv').config();

//Initialise App
const app = express();
const port = process.env.PORT || 9000;

//Middlewares
app.use(cors());
app.use(express.json());

//Connecting to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", false);// Remove Warning 
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("MongoDB has been connected successfully!");
})

//Routes - Separate Routing
app.use('/users', userRoutes );
app.use('/food', foodRoutes );

//Start Server on Port
app.listen(port,() => {
    console.log(`Server Running on Port : ${port} `);
})

