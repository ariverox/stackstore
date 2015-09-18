var router =require('express').Router()
var mongoose = require('mongoose')

var Order = mongoose.model('Order')

router.param('id', function(req, res, next, id){
    Order.findById(id).populate('user items')exec().then(function(order){
        if(!order) throw new Error('no user found');
        else {
            req.order = order;
            next();
        }
    }).then(null, next)
})



router.get('/', function(req,res, next){

    Order.find().populate('user items').exec()
        .then(books => res.send(books))
        .then(null,next)
})

router.get('/:id', function(req,res, next){
    res.send(req.order)
})

router.post('/', function(req,res, next){
    Order.create(req.body)
        .then(function (order) {
            res.status(201).json(order);
        })
        .then(null, next);

})

router.put('/:id', function(req,res, next){

    for (var k in req.body) {
        req.book[k] = req.body[k];
    }
    return req.order.save()
        .then(function (savedOrder) {
            res.json(savedOrder);
        })
        .then(null, next);

})

router.delete('/:id', function(req,res, next){
    req.order.remove()
        .then(function () {
            res.status(204).end();
        })
        .then(null, next);

})
