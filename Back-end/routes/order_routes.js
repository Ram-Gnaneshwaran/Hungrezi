//Import Packages
const router = require('express').Router();
const express = require('express');

//Import Model
let Order = require('../models/order_model');

//Find All Order
router.route('/').get((req, res) => {
    Order.find()
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error1: '+ err));
});

//Create Order
router.route('/add').post((req, res) => {
    const restaurantId = req.body.restId;
    const user = req.body.user;
    const items = 
        [{
            fname : req.body.fname,
            quantity :  req.body.quantity
        }]
    ;
    const totalPrice = req.body.totalPrice ;
    const orderStatus = req.body.orderStatus;
    
    const newOrder = new Order({restaurantId, user, items,totalPrice, orderStatus});

    newOrder.save()
        .then(()=> {res.json('Order Added!')})
        .catch(err => res.status(400).json('Error: '+ err)); 
});

// //Findby Order ID
// router.route('/:id').get((req, res) => {
//     Order.findById(req.params.id)
//         .then(Order => {
//             if (!Order) {
//                 // no Order found, do sth
//                 res.status(400).json('Order not Found!')
//             }
//             if(Order) { 
//                 res.json(Order);
//             }
//         })
//         .catch(err => res.status(400).json('Error: '+ err));
// });

// //Update by ID
// router.route('/update/:id').post((req,res) => {
//     Order.findByIdAndUpdate(req.params.id,
//          {
//             restaurantId : req.body.restId,
//             name : req.body.name,
//             price : req.body.price,
//             description : req.body.description,
//             img : req.body.img,
//             category : req.body.category,
//             status : req.body.status,
//             veg : req.body.veg,
            
//          })
//          .then(Order => {
//             if (!Order) {
//                 // no Order found, do sth
//                 res.status(400).json('Order not Found!')
//             }
//             if(Order) { 
//                 res.json("Order Updated!");
//             }
//         })
//         .catch(err => res.status(400).json('Error: '+ err));
// })

//Delete by ID
router.route('/:id').delete((req,res) => {
    Order.findByIdAndDelete(req.params.id)
        .then(order => {
            if (!order) {
                // no Order found, do sth
                res.status(400).json('Order not Found!')
            }
            if(order) { 
                res.json("Order Deleted!");
            }
        })
        .catch(err => res.status(400).json('Error: '+ err));
})
// //Findby Name
// router.route('/search').post((req, res) => {
//     Order.findOne({
//         name : req.body.name,
//     }, function (err, Order) {
//         if (err) { res.status(400).json('Error Retrieveing Data: '+ err) }
//         if (!Order) {
//             // no Order found, do sth
//             res.status(400).json('Order not Found!')
//         }
//         if(Order) { 
//             res.json(Order)
//         }
//     })
        
// });


module.exports = router;