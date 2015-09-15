'use strict';

var router = require('express').Router();
var Product = require('../db/models/product.model');

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


// get all products, or all products filtered by one or more optional queries
router.get('/api/products', function(req, res) {
	Product.find(req.query).then(function(products) {
		res.send(products);
	})
})

//get a specific product by product ID
router.get('/api/products/:id', function(req, res) {
	Product.findById(req.params.id).then(function(product) {
		res.send(product);
	})
})



module.exports = router;