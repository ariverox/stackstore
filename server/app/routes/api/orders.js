var router =require('express').Router()
var mongoose = require('mongoose')
var Order = mongoose.model('Order')

var nodemailer = require('nodemailer');


function isUser() {

}

function isAdmin() {

}

// See your keys here https://dashboard.stripe.com/account/apikeys

// (Assuming you're using express - expressjs.com)
// Get the credit card details submitted by the form

router.param('id', function(req, res, next, id){

    Order.findById(id).populate('user items').exec().then(function(order){
        if(!order) throw new Error('no user found');
        else {
            req.order = order;
            next();
        }
    }).then(null, next)
})


router.get('/', function(req,res, next){
    if(!req.user.isAdmin) return;

    Order.find().populate('user items').exec()
        .then(orders => res.send(orders))
        .then(null,next)
})

router.get('/:id', function(req,res, next){
    // check to see if req session is the user
    if(!(req.user._id.toString() === req.order.user._id.toString() || req.user.isAdmin)) return;
    res.send(req.order)

})




router.post('/', function(req,res, next){
    console.log('were here', req.body)
    Order.create(req.body)
    .then(function (order) {
        console.log('req.body.email:',req.body.email);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'thisistherealsnackstore@gmail.com',
                pass: 'stackstore'
            }
        });
        transporter.sendMail({
            from: 'do-not-reply@thisistherealsnackstore.com',
            to: req.body.email,
            subject: 'Your order (#'+req.body.orderNumber+') has been shipped.',
            html: '<p>'+req.body.name+',</p><p>Thank you for shopping at Snackstore!</p><p><a href="http://bit.ly/1c9vo1S">Link to online receipt</a></p>'
        });
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
