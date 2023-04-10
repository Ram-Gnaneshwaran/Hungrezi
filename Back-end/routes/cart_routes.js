//Import Packages
const router = require('express').Router();
const express = require('express');

//Import Model
let Cart = require('../models/cart_model');

//Create Order
router.route('/add').post((req, res) => {

    Cart.findOne({
        user: req.body.user,
        })
        .exec((error, cart) => {
        if (error) return res.status(400).json({ "Error 1 ": error });
        if (cart) {
            if(cart.cartItems.length === 0) {
                Cart.findOneAndUpdate({ user: req.body.user }, {
                    "$push": {
                        "cartItems": req.body.cartItems,
                    },
                }).exec((error, _cart) => {
                    if (error) return res.status(400).json({"Error 6 ": error });
                    if (_cart) {
                        return res.status(201).json({ cart: _cart });
                    }
                });
            }
            else {

            const products = req.body.cartItems;
            const isItemAdded = cart.cartItems;   
            isItemAdded.forEach((item) => {
                products.forEach((prod) => {
                    if (item.product == prod.product) {
                        console.log("Item already added");
                        Cart.findOneAndUpdate({ "user": req.body.user, "cartItems.product": prod.product }, {
                            "$set": {
                                "cartItems.$": {
                                    ...prod,
                                    quantity: item.quantity + prod.quantity}
                            }
                        }).exec((error, _cart) => {
                            if (error) return res.status(400).json({ "Error 2 ": error });
                            if (_cart) {
                                return res.status(201).json({ cart: _cart });
                            }
                        })
                    } else {
                        console.log("Item not added");
                        Cart.findOneAndUpdate({ user: req.body.user }, {
                            "$push": {
                                "cartItems": req.body.cartItems,
                            },
                        }).exec((error, _cart) => {
                            if (error) return res.status(400).json({"Error 3 ": error });
                            if (_cart) {
                                return res.status(201).json({ cart: _cart });
                            }
                        });
                    }
                });
                
            });
            
            }
        } 
        else {
            const user = req.body.user;
            const cartItems = req.body.cartItems;
            const newCart = new Cart({user, cartItems});
            newCart.save()
                .then(()=> {res.json(newCart)})
                .catch(err => res.status(400).json('Error 4: '+ err));
        }
    });
});

//Findby User ID
router.route('/').post((req, res) => {
    Cart.findOne({
        user : req.body.user,
    }, function (err, user) {
        if (err) { res.status(400).json('Error Retrieveing Data: '+ err) }
        if (!user) {
            // no user found, do sth
            res.status(400).json('User not Found! ')
        }
        if(user) { 
            res.json(user)
        }
    })
        
        
});


module.exports = router;