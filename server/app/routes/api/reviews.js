var router =require('express').Router()
var mongoose = require('mongoose')
var Review = mongoose.model('Review')
var path = require('path')
var User = mongoose.model('User')


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
        if(!review) throw new Error('no user found');
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

    Review.create(req.body)
    .then(function (review) {
     	res.status(201).json(review)
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






module.exports = router
