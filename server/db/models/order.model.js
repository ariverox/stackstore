'use strict';
var mongoose = require('mongoose');



var Order = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  shippingAddress: {
    type: String,
    required: true
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  subtotal: {
    type: Number,
    required: true
  },
  orderNumber: {
    type: Number,
    required: true
  },
  shippingDate: {
    type: Date,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: true
  }
});

Order.statics.products = function() {
  this.items.product.forEach(function(product) {
    product.populate().exec().then(function(product) {
      return product.title;
    });
  });
};



module.exports = mongoose.model('Order', Order);
