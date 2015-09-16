var router =require('express').Router()
var Review = require('../../../db/models/review.model')
var path = require('path')
var indexHTMLPath = path.join(__dirname, '..','views','index.html')

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

router.get('/', function(req,res, next){
  User.find().then(function(reviews){
		res.send(reviews);
		next();
	});
})


router.get('/:id', function(req,res, next){
	var id = req.params.id
  User.findById(id).then(function(review){
		res.send(review)
		next()
	})
})

router.post('/', function (req, res, next) {
    Review.create(req.body)
    .then(function (user) {
     	res.status(201).json(user)
    })
    .then(null, next);
});


router.put("/:id", function (req, res, next) {
    for (var key in req.body) {
        req.user[key] = req.body[key];
    }
    req.user.save()
    .then(function (edit) {
        res.status(203).json(edit)
    }).then(null, next);
});




router.use(function(err,req,res,next){
	err.status = res.status || 500
	res.status.send()
})


module.exports = router
