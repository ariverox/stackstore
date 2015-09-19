var mongoose = require('mongoose')

var Review = new mongoose.Schema({
  rating: {
    type: Number
  },
  text: {
    type: String,
    min: 120,
    max: 500
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
})

module.exports = mongoose.model('Review', Review);
