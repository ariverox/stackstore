var dbURI = 'mongodb://localhost:27017/testingDB';
var clearDB = require('mocha-mongoose')(dbURI);

var sinon = require('sinon');
var expect = require('chai').expect;
var mongoose = require('mongoose');

// Require in all models.
require('../../../server/db/models');

var Review = mongoose.model('Review');


describe('Review model', function () {

var createReview = function () {
    return Review.create({ 
        rating: 5,
        text: "this was a really great product, i liked it a whole lot!"
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

        it('adding review should add to the total reviews', function(done) {
            createReview().then(function(review) {
                return Review.find().exec();
            }).then(function(reviews) {
                expect(reviews.length).to.equal(1);
                done();
            });
        });
    });

    describe('Review Schema', function () {

            it('should have fields review as number and text as string', function (done) {
                createReview().then(function (review) {
                    console.log(review)
                    expect(typeof review.text).to.equal('string');
                    expect(typeof review.rating).to.equal('number');
                    done();
                });
                });

               it('should not allow reviews less than 20 characters', function (done) {
                Review.create({text: "was good, i guess"}).then(function (review) {
                   console.log("should not hit this.")
                }, function (err) {
                    console.log("should definitely hit this", err)
                    expect(err).to.exist;
                    done();
                });
                });

                it('should not allow reviews greater than 400 characters', function (done) {
                Review.create({text: "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"}).then(function (review) {
                   console.log("should not hit this.")
                }, function (err) {
                    console.log("should definitely hit this", err)
                    expect(err).to.exist;
                    done();
                });
                });
             //        console.log(product);
             //        expect(product.reviews).to.exist
             //        done();
             //    });
             //    });
             //  it('should have a default photo', function (done) {
             //    Product.create({
             //        title: "Joe Pudding",
             //        stock: 33
             //    }).then(function (product) {
             //        console.log(product);
             //        expect(!!product.photo).to.equal(true);
             //        done();
             //    });
             //    });

    });
});