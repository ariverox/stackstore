	'use strict';
	var mongoose = require('mongoose');



	var Transaction= new mongoose.Schema({
	  timestamp: {
	    type: Number,
	    required: true
	  },
	  user: {
	    type: mongoose.Schema.Types.ObjectId,
	    ref: 'User'
	  },

		shippingAddress: {
			type: String
		},
	  items: {
			products: [{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Products',
				required: true
			}],
			quantity: {
				type: Number
			},
			price: {
				type: String
			}
	  },
	  due: {
	    type: Number,
	    required: true
	  },
	  subtotal: {
	    type: Number
	  }
	});

	Transaction.statics.products = function(){
		this.items.products.forEach(function(product){
			product.populate().exec().then(function(product){
				return product.title;
			})
		})
	}



	module.exports = mongoose.model('Transaction', Transaction);
