var router = require('express').Router();
var stripeSecret = require("../../../env/production.js").STRIPE.secret;
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
var Promise = require('bluebird');
var _ = require('lodash');


// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_mvPr55DEzDAflKPOkGoP86CP");

// Using Express


router.post('/', function(req, res, next) {
	console.log(stripe)
	console.log("REQ.BODY", req.body)
	// Get the credit card details submitted by the form
	var stripeToken = req.body.stripeToken;
	console.log(stripeToken)
	var userId = req.body.userId;

	var order = new Order();
	
	// console.log(address);

	var charge = stripe.charges.create({
	  amount: total, // amount in cents, again
	  currency: "usd",
	  source: stripeToken,
	}, function(err, charge) {
		console.log(charge)
		if(charge == null){
			res.send("please add to cart")
		}
	  else if (err && err.type === 'StripeCardError') {
	    // The card has been declined
	    res.send("card is declined");
	  }
	}).then(function(id){
	  			var purchasedProduct = new Order();
	  			purchasedProduct = req.body
	  			purchasedProduct.stripeID = id;
	  			purchasedProduct.save();
	 	  	}).then(null, next);
	 

	  })

module.exports = router;