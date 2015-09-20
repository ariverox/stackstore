var path = require('path');
var devConfigPath = path.join(__dirname, './development.js');
var productionConfigPath = path.join(__dirname, './production.js');

if (process.env.NODE_ENV === 'production') {
    module.exports = require(productionConfigPath);
} else {
    module.exports = require(devConfigPath);
}

// var stripe = require("stripe")("sk_test_mvPr55DEzDAflKPOkGoP86CP");

// // (Assuming you're using express - expressjs.com)
// // Get the credit card details submitted by the form
// var stripeToken = request.body.stripeToken;

// var charge = stripe.charges.create({
//   amount: 1000, // amount in cents, again
//   currency: "usd",
//   source: stripeToken,
//   description: "Example charge"
// }, function(err, charge) {
//   if (err && err.type === 'StripeCardError') {
//     // The card has been declined
//   }
// });




