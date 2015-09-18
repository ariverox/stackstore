
'use strict';

var router = require('express').Router();
var mongoose = require('mongoose')
var Product = mongoose.model('Product')

router.param('id', function(req, res, next, id){
	Product.findById(id).exec().then(function(product){
		if(!product) throw new Error('no review found');
		else {
			req.product = product;
			next();
		}
	}).then(null, next)
})





// get all products, or all products filtered by one or more optional queries
router.get('/', function(req, res) {
	Product.find().then(function(products) {
		res.send(products);
	})
})

//get a specific product by product ID

router.get('/:id', function(req, res) {
	Product.findById(req.params.id).then(function(product) {
		res.send(product);
	})
})





router.get('/:id', function(req,res, next){
	res.json(req.review)
})

router.post('/', function (req, res, next) {

	Product.create(req.body)
		.then(function (product) {
			res.status(201).json(product)
		})
		.then(null, next);
});


router.put("/:id", function (req, res, next) {
	for (var key in req.body) {
		req.product[key] = req.body[key];
	}

	return req.product.save()
		.then(function (edit) {
			res.status(203).json(edit)
		}).then(null, next);

});

router.delete("/:id", function(req,res,next){
	req.product.remove()
		.then(function () {
			res.status(204).end();
		})
		.then(null, next);

})






module.exports = router;
