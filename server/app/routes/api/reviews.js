var router =require('express').Router()
var mongoose = require('mongoose')
var Review = mongoose.model('Review')
var path = require('path')
var User = mongoose.model('User')
var Product = mongoose.model('Product')


//admin only - list of users

// router.param('reviewId', function(req, res, next, reviewId){
// 	Review.findById(reviewId).populate({
// 		path: product
// 	})

// 	{

// 		if(!review) throw new Error('no review found');
// 		else {
// 			req.review = user;
// 			next();
// 		}
// 	}).then(null, next)
// }

router.param('id', function(req, res, next, id){
    Review.findById(id).exec().then(function(review){
        if(!review) throw new Error('no review found');
        else {
            req.review= review;
            next();
        }
    }).then(null, next)
})






router.get('/', function(req,res, next){
  Review.find().then(function(reviews){
		res.send(reviews);
	}).then(null,next);
});


router.get('/:id', function(req,res, next){
    res.json(req.review)
})

router.post('/', function (req, res, next) {
     {
      return new Error('too short')
    }

    Review.create(req.body)
    .then(function (review) {
     	res.status(201).json(review);
    })
    .then(null, next);
});


router.put("/:id", function (req, res, next) {
    for (var key in req.body) {
        req.review[key] = req.body[key];
    }

    return req.review.save()
    .then(function (edit) {
        res.status(203).json(edit)
    }).then(null, next);

});

router.delete("/:id", function(req,res,next){
    req.review.remove()
        .then(function () {
            res.status(204).end();
        })
        .then(null, next);

})

// Get all reviews for a certain product
router.get('/product/:productId', function(req, res, next) {
    var productId = req.params.productId;
    Review.find({product: productId})
    .populate('user product').exec()
    .then(function(reviews) {
        if (reviews.length) return res.send(reviews);
        else return Product.findById(productId);
    })
    .then(function(product) {
        if (product) res.send([]);
        else {
            res.status(404);
            throw new Error('ProductId ' + productId + ' not found');
        }
    })
    .then(null, next);
})

// Get all reviews by a certain user
router.get('/user/:userId', function(req, res, next) {
    var userId = req.params.userId;
    Review.find({user: userId})
    .populate('user product').exec()
    .then(function(reviews) {
        if (reviews.length) return res.send(reviews);
        else return User.findById(userId);
    })
    .then(function(user) {
        if (user) res.send([]);
        else {
            res.status(404);
            throw new Error('UserId ' + userId + ' not found');
        }
    })
    .then(null, next);
})






module.exports = router;
