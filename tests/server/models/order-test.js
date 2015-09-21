var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);

var sinon = require('sinon');
var expect = require('chai').expect;
var mongoose = require('mongoose');

// Require in all models.
require('../../../server/db/models');

var Order = mongoose.model('Order');


describe('order model', function () {

var createOrder = function () {
    return Order.create({ 
       timestamp: 12,
       shippingAddress: "somewhere",
       items: [{thisisaproduct: "someProduct"}],
       due: 12,
       subtotal: 44.55

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
               Order.create({
                shippingAddress: "somewhere",
                items: [{thisisaproduct: "someProduct"}],
                due: 12,
                subtotal: 44.55
                })
                .then(function (success) { 
                    console.log("something went wrong if u see this...");
                }, function (err) {
                    console.log('something went right if u see this! yayy!');
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });

            it('should require due date', function (done) {
               Order.create({
                timestamp: 12,
                shippingAddress: "somewhere",
                items: [{thisisaproduct: "someProduct"}],
                subtotal: 44.55
                })
                .then(function (success) {
                }, function (err) {
                    expect(err.message).to.equal('Order validation failed');
                    done();
                });
                });

            it('timestamp, due date and subtotal should be of type number', function (done) {
                createOrder().then(function (order) {
                    expect(typeof order.timestamp).to.equal('number');
                    expect(typeof order.due).to.equal('number');
                    expect(typeof order.subtotal).to.equal('number');
                    done();
                });
                });
    });
        // describe('quantity', function () { 
        //     it('should require qty (stock)', function (done) {
        //         var order = new order({
        //             title: "Delicious whatsit"
        //         });
        //         order.save().then(null, function (err, savedorder) {
        //             expect( err.message ).to.equal( 'Validation failed');
        //         });
        //             done();
        //         });
        //     })
        // })
});