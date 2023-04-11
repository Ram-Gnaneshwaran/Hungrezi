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
        if (error) return res.json({ "Error 1 ": error });
        if (cart) {
            console.log("Cart Exists");
            //Cart Exists
            const prod = req.body.cartItems[0];
            const item = cart.cartItems.find(c => c.product == prod.product);
            
            if (item) {
                console.log("Item already added");
                Cart.findOneAndUpdate({ "user": req.body.user, "cartItems.product": prod.product }, {
                    "$set": {
                        "cartItems.$": {
                            ...prod,
                            quantity: item.quantity + prod.quantity}
                    }
                }).exec((error, _cart) => {
                    if (error) return res.json({ "Error 2 ": error });
                    if (_cart) {
                        return res.json({ cart: _cart });
                    }
                })
            }
            else {
                console.log("Item not added");
                Cart.findOneAndUpdate({ user: req.body.user }, {
                    "$push": {
                        "cartItems": req.body.cartItems,
                    },
                }).exec((error, _cart) => {
                    if (error) return res.json({"Error 6 ": error });
                    if (_cart) {
                        return res.json({ cart: _cart });
                    }
                });
            }
            
        } 
        else {
            //No Cart Exists
            console.log("No Cart Exists");
            const user = req.body.user;
            const cartItems = req.body.cartItems;
            const newCart = new Cart({user, cartItems});
            newCart.save()
                .then(()=> {res.json(newCart)})
                .catch(err => res.json('Error 4: '+ err));
        }
    });
});


//Findby User ID
router.route('/').post((req, res) => {
    Cart.findOne({
        user : req.body.user,
    }, function (err, user) {
        if (err) { res.json('Error Retrieveing Data: '+ err) }
        if (!user) {
            // no user found, do sth
            res.json('User not Found! ')
        }
        if(user) { 
            res.json(user)
        }
    })
});


module.exports = router;