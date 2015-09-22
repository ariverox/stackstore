var router = require('express').Router();
//var stripeSecret = require("../../../env/production.js").STRIPE.secret;


// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_mvPr55DEzDAflKPOkGoP86CP");

// Using Express




router.post('/', function(request, response) {
    console.log("REQ.BODY", request.body)
        // Get the credit card details submitted by the form
    var stripeToken = request.body.token;

    stripe.charges.create({
        amount: 1000, // amount in cents, again
        currency: "usd",
        source: stripeToken,
        description: "Example charge"
    }, function(err) {
        if (err && err.type === 'StripeCardError') {
            // The card has been declined
        }
    }).then(function(charges) {
        console.log(charges)
        response.json(charges.id);
    });
});


module.exports = router;
