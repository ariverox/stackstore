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




router.post('/', function(request, response, next) {
	console.log("REQ.BODY", request.body)
	// Get the credit card details submitted by the form
	var stripeToken = request.body.stripeToken;

		var charge = stripe.charges.create({
		  amount: 1000, // amount in cents, again
		  currency: "usd",
		  source: stripeToken,
		  description: "Example charge"
		}, function(err, charge) {
		  if (err && err.type === 'StripeCardError') {
		    // The card has been declined
		  }
		}).then(null,next);
	});
	 

module.exports = router;