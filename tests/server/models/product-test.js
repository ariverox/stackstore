var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);

var sinon = require('sinon');
var expect = require('chai').expect;
var mongoose = require('mongoose');

// Require in all models.
require('../../../server/db/models');

var Product = mongoose.model('Product');


describe('Product model', function () {

    beforeEach('Establish DB connection', function (done) {
        if (mongoose.connection.db) return done();
        mongoose.connect(dbURI, done);
    });

    afterEach('Clear test database', function (done) {
        clearDB(done);
    });

    it('should exist', function () {
        expect(Product).to.be.a('function');
    });

    describe('on creation', function() {
    	var createProduct = function () {
    	    return Product.create({ 
    	    	title: 'bob',
    	    	categories: ['bob'],
    	    	price: 808,
    	    	stock: 808,
				photo: 'bob.png' 
    	    });
    	};

    	beforeEach(function() {

    	});
    	afterEach(function() {

    	});

    	it('should add to the total inventory', function(done) {
    		createProduct().then(function(product) {
    			return Product.find().exec()
    		}).then(function(products) {
    			expect(products.length).to.be.equal(1);
    			done();
    		});
    	});
    });











});