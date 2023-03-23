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
    const category = req.body.category;
    const status = req.body.status;
    const img = req.body.img;
    const newFood = new Food({restaurantId, name, category, status, img});

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
            name : req.body.name,
            category : req.body.category,
            restaurantId : req.body.restId,
            status : req.body.status,
            img : req.body.img
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


module.exports = router;