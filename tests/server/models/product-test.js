var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);

var sinon = require('sinon');
var expect = require('chai').expect;
var mongoose = require('mongoose');

// Require in all models.
require('../../../server/db/models');

var Product = mongoose.model('Product');


describe('Product model', function () {

var createProduct = function () {
    return Product.create({ 
        title: 'bob',
        categories: ['bob'],
        price: 808,
        stock: 808,
        photo: 'bob.png' 
    });
};

    beforeEach('Establish DB connection', function (done) {
        if (mongoose.connection.db) return done();
        mongoose.connect(dbURI, done);
    });

    afterEach('Clear test database', function (done) {
        clearDB(done);
    });
    describe('on creation', function() {

        beforeEach(function() {
        });
        afterEach(function() {

        });

        it('should add to the total inventory', function(done) {
            createProduct().then(function(product) {
                return Product.find().exec();
            }).then(function(products) {
                expect(products.length).to.equal(1);
                done();
            });
        });
    });

    describe('Product Schema', function () {

            it('should require title', function (done) {
                Product.create({
                    stock: 34
                }).then(function() {
                    console.log("something went wrong if u see this...")
                }, function (err) {
                    console.log('something went right if u see this! yayy!');
                    expect(err.message).to.equal('Product validation failed');
                    done();
                });
                });

            it('should require stock', function (done) {
                Product.create({
                    title: "Tasty Goodness"
                }).then(function() {
                }, function (err) {
                    expect(err.message).to.equal('Product validation failed');
                    done();
                });
                });

            it('title should be a string, stock should be a number', function (done) {
                createProduct().then(function (product) {
                    expect(typeof product.title).to.equal('string');
                    expect(typeof product.stock).to.equal('number');
                    done();
                });
                });
             it('should have a default photo', function (done) {
                Product.create({
                    title: "Joe Pudding",
                    stock: 33
                }).then(function (product) {
                    expect(product.photo).to.exist
                    done();
                });
                });
    });
        // describe('quantity', function () { 
        //     it('should require qty (stock)', function (done) {
        //         var product = new Product({
        //             title: "Delicious whatsit"
        //         });
        //         product.save().then(null, function (err, savedProduct) {
        //             expect( err.message ).to.equal( 'Validation failed');
        //         });
        //             done();
        //         });
        //     })
        // })
});