var router =require('express').Router()
var mongoose = require('mongoose')

var Order = mongoose.model('Order')

function isUser() {

}

function isAdmin() {

}




router.param('id', function(req, res, next, id){

    Order.findById(id).populate('user items').exec().then(function(order){
        if(!order) throw new Error('no user found');
        else {
            req.order = order;
            next();
        }
    }).then(null, next)
})

//admin route

router.get('/', function(req,res, next){
  if(!req.user.isAdmin) return



    Order.find().populate('user items').exec()
        .then(orders => res.send(orders))
        .then(null,next)
})

router.get('/:id', function(req,res, next){
    // check to see if req session is the user
    console.log(req.user._id , "AAAA", req.order.user._id)
    if(!(req.user._id.toString() === req.order.user._id.toString() || req.user.isAdmin)) return;
    console.log("made it to this point")

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
    if(!req.user.isAdmin) return



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
  if(!req.user.isAdmin) return


    req.order.remove()
        .then(function () {
            res.status(204).end();
        })
        .then(null, next);

})


module.exports = router
