var mongoose = require('mongoose')

var ReviewSchema = new mongoose.Schema({
  rating: {
    type: Number
  },
  text: {
    type: String,
    required: true,
    min: 120,
    max: 500
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  }
})

module.exports = mongoose.model('Reviews', ReviewSchema);
