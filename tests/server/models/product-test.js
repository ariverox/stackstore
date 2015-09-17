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
                expect(products.length).to.be.equal
                done();
            });
        });
    });

<<<<<<< HEAD
=======
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

>>>>>>> e3cafa65ff551f152ccfe2fc3b81aeb1e15c548c
    describe('Product Schema', function () {

        it('should require title', function (done) {
            var product = new Product({
                stock: 54
            });
            product.save().then(function() {
                console.log('sdgfsdhf');
            }, function (err) {
                expect( err.message ).to.equal( 'Validation Failed' );
<<<<<<< HEAD
            });
                done();
=======
                done();
            });
>>>>>>> e3cafa65ff551f152ccfe2fc3b81aeb1e15c548c
        });
        it('should require qty (stock)', function (done) {
            var product = new Product({
                title: "Delicious whatsit"
            });
            product.save().then(null, function (err, savedProduct) {
                expect( err.message ).to.equal( 'Validation failed');
<<<<<<< HEAD
            });
                done();
=======
                done();
            });
>>>>>>> e3cafa65ff551f152ccfe2fc3b81aeb1e15c548c
        });
    });
//     // describe('Products Schema', function () {

//     //     it('should require name', function (done) {
//     //         var product = new Product({
//     //             stock: 54
//     //         });
//     //         product.save(function (err, savedProduct) {
//     //             expect( err.message ).to.equal( 'Validation Failed' );
//     //             done();
//     //         });
//     //     });
//     //     it('should require qty (stock)', function (done) {
//     //         var product = new Product({
//     //             name: "Delicious whatsit"
//     //         });
//     //         product.save(function (err, savedProduct) {
//     //             expect( err.message ).to.equal( 'Validation failed');
//     //             done();
//     //         });
//     //     });
//     // });














});