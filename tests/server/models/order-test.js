var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);

var sinon = require('sinon');
var expect = require('chai').expect;
var mongoose = require('mongoose');

// Require in all models.
require('../../../server/db/models');

var Order = mongoose.model('Order');
var Product = mongoose.model('Product')

describe('order model', function () {

var testProduct = new Product({
            title: 'bob',
            categories: ['bob'],
            price: 808,
            stock: 808,
            photo: 'bob.png'
        })
var createOrder = function () {
    return Order.create({
       timestamp: new Date(), 
       name: "Tom's Order",
       email: "tom@tom.tom",
       shippingAddress: "Tom's awesome pad",
       items:[{
        product: testProduct,
        title: "this title",
        price: 23.43,
        quantity: 1
       }],
       subtotal: 26.86,
       orderNumber: 1,
       shippingDate: new Date(),
       deliveryDate: new Date()
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
            createOrder().then(function () {
                return Order.find().exec();
            }).then(function (orders) {
                expect(orders.length).to.equal(1);
                done();
            });
        });
    });

    describe('Order Schema', function () {

            it('should require a timestamp', function (done) {
               createOrder().then(function(order) {
                order.timestamp = null;
                order.save()
                .then(function (success) { 
                    console.log("something went wrong if u see this...");
                }, function (err) {
                    console.log('something went right if u see this! yayy!');
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });
                });

             it('should require name', function (done) {
               createOrder().then(function(order) {
                order.name = null;
                order.save()
                .then(function (success) { 
                    console.log("something went wrong if u see this...");
                }, function (err) {
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });
                });

            it('should require email', function (done) {
               createOrder().then(function(order) {
                order.email = null;
                order.save()
                .then(function (success) { 
                    console.log("something went wrong if u see this...");
                }, function (err) {
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });
                });

            it('should require shippingAddress', function (done) {
               createOrder().then(function(order) {
                order.shippingAddress = null;
                order.save()
                .then(function (success) { 
                    console.log("something went wrong if u see this...");
                }, function (err) {
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });
                });

            it('should require subtotal', function (done) {
               createOrder().then(function(order) {
                order.subtotal = null;
                order.save()
                .then(function (success) { 
                    console.log("something went wrong if u see this...");
                }, function (err) {
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });
                });

            it('should require orderNumber', function (done) {
               createOrder().then(function(order) {
                order.orderNumber = null;
                order.save()
                .then(function (success) { 
                    console.log("something went wrong if u see this...");
                }, function (err) {
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });
                });

            it('should require shippingDate', function (done) {
               createOrder().then(function(order) {
                order.shippingDate = null;
                order.save()
                .then(function (success) { 
                    console.log("something went wrong if u see this...");
                }, function (err) {
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });
                });

            it('should require shippingDate', function (done) {
               createOrder().then(function(order) {
                order.shippingDate = null;
                order.save()
                .then(function (success) { 
                    console.log("something went wrong if u see this...");
                }, function (err) {
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });
                });

               it('should require deliveryDate', function (done) {
               createOrder().then(function(order) {
                order.shippingDate = null;
                order.save()
                .then(function (success) { 
                    console.log("something went wrong if u see this...");
                }, function (err) {
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });
                });

            it('timestamp, shipping date, deliveryDate date instances', function (done) {
                createOrder().then(function (order) {
                    expect(order.timestamp instanceof Date).to.equal(true);
                    expect(order.shippingDate instanceof Date).to.equal(true);
                    expect(order.deliveryDate instanceof Date).to.equal(true);
                    done();
                });
                });

            it('name and email should be of type string', function (done) {
                createOrder().then(function (order) {
                  expect(typeof order.name).to.equal('string');
                  expect(typeof order.email).to.equal('string');
                    done();
                });
                });
    });


});