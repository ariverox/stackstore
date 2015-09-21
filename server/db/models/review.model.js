var mongoose = require('mongoose');

var Review = new mongoose.Schema({
  rating: {
    type: Number
  },
  text: {
    type: String,
    validate: [validator, 'invalid review length']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  timestamp: {
    type: Date
  }
});



function validator (v) {
  return (v.length > 20 && v.length < 400);
};





module.exports = mongoose.model('Review', Review);

