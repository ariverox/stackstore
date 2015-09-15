	'use strict';
var mongoose = require('mongoose');

var Transaction = new mongoose.Schema({
	timestamp: {
		type: Number,
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId, ref: 'User'
	},
	details: {
		type: [Object],
		required: true
	},
	due: {
		type: Number,
		required: true
	},
	subtotal: {
		type: Number 
	}
})

module.exports = mongoose.model('Transaction', Transaction);