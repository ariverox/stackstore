'use strict';
var mongoose = require('mongoose');

var Product = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	categories: {
		type: [String]
	},
	price: {
		type: Number
	},
	stock: {
		type: Number,
		required: true
	},
	reviews: {
		type: [Object]
	},
	image: {
		type: String
	}
})

module.exports = mongoose.model('Product', Product);