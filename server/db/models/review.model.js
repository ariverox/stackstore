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
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }
})

module.exports = mongoose.model('Reviews', ReviewSchema);
