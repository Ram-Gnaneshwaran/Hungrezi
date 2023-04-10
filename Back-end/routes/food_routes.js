//Import Packages
const router = require('express').Router();
const express = require('express');

//Import Model
let Food = require('../models/food_model');

//Find All Food
router.route('/').get((req, res) => {
    Food.find()
        .then(food => res.json(food))
        .catch(err => res.status(400).json('Error: '+ err));
});

//Create Food
router.route('/add').post((req, res) => {
    const restaurantId = req.body.restId;
    const name = req.body.name;
    const price = req.body.price;
    const description = req.body.description;
    const img = req.body.img;
    const category = req.body.category;
    const status = req.body.status;
    const veg = req.body.veg;
    
    const newFood = new Food({restaurantId, name, price,description,img, category, status, veg});

    newFood.save()
        .then(()=> {res.json('Food Added!')})
        .catch(err => res.status(400).json('Error: '+ err));
});

//Findby Food ID
router.route('/:id').get((req, res) => {
    Food.findById(req.params.id)
        .then(food => {
            if (!food) {
                // no food found, do sth
                res.status(400).json('Food not Found!')
            }
            if(food) { 
                res.json(food);
            }
        })
        .catch(err => res.status(400).json('Error: '+ err));
});

//Update by ID
router.route('/update/:id').post((req,res) => {
    Food.findByIdAndUpdate(req.params.id,
         {
            restaurantId : req.body.restId,
            name : req.body.name,
            price : req.body.price,
            description : req.body.description,
            img : req.body.img,
            category : req.body.category,
            status : req.body.status,
            veg : req.body.veg,
            
         })
         .then(food => {
            if (!food) {
                // no food found, do sth
                res.status(400).json('Food not Found!')
            }
            if(food) { 
                res.json("Food Updated!");
            }
        })
        .catch(err => res.status(400).json('Error: '+ err));
})

//Delete by ID
router.route('/:id').delete((req,res) => {
    Food.findByIdAndDelete(req.params.id)
        .then(food => {
            if (!food) {
                // no food found, do sth
                res.status(400).json('Food not Found!')
            }
            if(food) { 
                res.json("Food Deleted!");
            }
        })
        .catch(err => res.status(400).json('Error: '+ err));
})
//Findby Name
router.route('/search').post((req, res) => {
    Food.findOne({
        name : req.body.name,
    }, function (err, food) {
        if (err) { res.status(400).json('Error Retrieveing Data: '+ err) }
        if (!food) {
            // no food found, do sth
            res.status(400).json('Food not Found!')
        }
        if(food) { 
            res.json(food)
        }
    })
        
});

//Findby Id
router.route('/foodid').post((req, res) => {
    Food.findOne({
        _id : req.body.id,
    }, function (err, food) {
        if (err) { res.status(400).json('Error Retrieveing Data: '+ err) }
        if (!food) {
            // no food found, do sth
            res.status(400).json('Food not Found!')
        }
        if(food) { 
            res.json(food)
        }
    })
        
});


module.exports = router;