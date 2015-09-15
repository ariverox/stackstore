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
	reviews: {
		type: [Object]
	},
	photo: {
		type: String,
		default: '/images/bacon.jpg'
	},
	country: {
		type: String
	}
})

module.exports = mongoose.model('Product', Product);