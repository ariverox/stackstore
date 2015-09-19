'use strict';
var mongoose = require('mongoose');

var Product = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
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
	reviews: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Review'
	}],
	photo: {
		type: String,
		default: '/images/bacon.jpg'
	},
	country: {
		type: String
	},
	description: {
		type: String
	}
});

module.exports = mongoose.model('Product', Product);