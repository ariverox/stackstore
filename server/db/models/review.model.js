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
  transaction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Transaction'
  }
})

module.exports = mongoose.model('Reviews', ReviewSchema);
