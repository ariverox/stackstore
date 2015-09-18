
// var dbURI = 'mongodb://localhost:27017/testingDB';
// var clearDB = require('mocha-mongoose')(dbURI);

// var sinon = require('sinon');
// var expect = require('chai').expect;
// var mongoose = require('mongoose');

// // Require in all models.
// require('../../../server/db/models');

// var Product = mongoose.model('Product');

// describe('Products Model', function () {

//     beforeEach('Establish DB connection', function (done) {
//         if (mongoose.connection.db) return done();
//         mongoose.connect(dbURI, done);
//     });

//     afterEach('Clear test database', function (done) {
//         clearDB(done);
//     });

//     it('should exist', function () {
//         expect(Product).to.be.a('function');
//     });

//     describe('Products Schema', function () {

//         it('should require name', function (done) {
//             var product = new Product({
//                 stock: 54
//             });
//             product.save(function (err, savedProduct) {
//                 expect( err.message ).to.equal( 'Validation Failed' );
//             });
//                 done();
//         });
//         it('should require qty (stock)', function (done) {
//             var product = new Product({
//                 name: "Delicious whatsit"
//             });
//             product.save(function (err, savedProduct) {
//                 expect( err.message ).to.equal( 'Validation failed');
//             });
//                 done();
//         });
//     });

//     describe('addProduct function', function () {

//         it('should add a product to the db', function () {
//             Product.addProduct({
//                 name: "gummy panda",
//                 stock: 12
//             });
//             Product.findOne({name: "gummy panda"}, function (err, foundProduct) {
//                 expect( foundProduct.name ).to.equal('gummy panda');
//             });
//                 done();
//         });

//         it('should fail informatively if product exists', function () {
//             Product.addProduct({
//                 name: "gummy panda",
//                 stock: 12
//             });
//             Product.addProduct({
//                 name: "gummy panda",
//                 stock: 12
//             }, function (err, savedProduct) {
//                 expect ( err.message ).to.equal('That product already exists!');
//             });
//             done();
//         });
//     });

//      describe('removeProduct function', function () {
//         beforeEach( function () {
//             var testproduct = Product.addProduct({
//                 name: "chocolate ostrich",
//                 stock: 55
//             });
//         });

//         it('should correctly find a product by id', function () {
//             Product.removeProduct(testproduct._id, function (err, rmProduct) {
//                 expect( rmProduct._id ).to.equal(testproduct._id); 
//             });
//             done();
//         });
//         it('should fail informatively if product does not exist', function () {
//             Product.removeProduct('994b88387bbb332', function (err, rmProduct) {
//                 expect( err.message ).to.equal('product does not exist.');
//             });
//             done();
//         });

//         it('should successfully remove a product from the db', function () {
//             Product.findOne({name: "chocolate ostrich"}, function(err, product) {
//                 expect(err.message).to.equal('product does not exist.');
//             });
//         done();
//         });
//     });

//     describe('updateProduct function', function () {
//         beforeEach( function () {
//             var testproduct = Product.addProduct({
//                 name: "crunchy bear ear",
//                 stock: 32
//             });
//         });
//         it('should correctly find a product by id', function () {
//             Product.updateProduct(testproduct._id, {name: "sweet bear toe"}, function (err, upProduct) {
//                 expect( upProduct._id ).to.equal(testproduct._id);
//             });
//             done();
//         });

//         it('should correctly update that product in the db', function () {
//             Product.updateProduct(testproduct._id, {name: "sweet bear toe"}, function (err, upProduct) {
//                 expect( upProduct.name ).to.equal("sweet bear toe");
//             });
//             done();
//         });
//         it('should NOT create a new entry in the db', function () {
//             var dbSize;
//             Product.find({})
//             .then(function (all) {
//                 dbSize = all.length;
//             })
//             .then(function() {
//                 Product.updateProduct(testproduct._id, {name: "evil bear toe"});
//             })
//             .then(function() {
//                 return Product.find({});
//             })
//             .then(function (allagain) {
//                     expect(allagain.length).to.equal(dbSize);
//                     done();
//         });

//         it('should fail informatively if product does not exist', function () {
//             Product.updateProduct("9b88444dc984a48b", {stock: 33}, function (err, upProduct) {
//                 expect( err.message ).to.equal('product does not exist.');
//             });
//         });
//     });
//     });
// });
// var dbURI = 'mongodb://localhost:27017/testingDB';
// var clearDB = require('mocha-mongoose')(dbURI);

// var sinon = require('sinon');
// var expect = require('chai').expect;
// var mongoose = require('mongoose');

// // Require in all models.
// require('../../../server/db/models');

// var Product = mongoose.model('Product');

// describe('Products Model', function () {

//     beforeEach('Establish DB connection', function (done) {
//         if (mongoose.connection.db) return done();
//         mongoose.connect(dbURI, done);
//     });

//     afterEach('Clear test database', function (done) {
//         clearDB(done);
//     });

//     it('should exist', function () {
//         expect(Product).to.be.a('function');
//     });

//     describe('Products Schema', function () {

//         it('should require name', function (done) {
//             var product = new Product({
//                 stock: 54
//             });
//             product.save(function (err, savedProduct) {
//                 expect( err.message ).to.equal( 'Validation Failed' );
//                 done();
//             });
//         });
//         it('should require qty (stock)', function (done) {
//             var product = new Product({
//                 name: "Delicious whatsit"
//             });
//             product.save(function (err, savedProduct) {
//                 expect( err.message ).to.equal( 'Validation failed');
//                 done();
//             });
//         });
//     });

//     describe('addProduct function', function () {

//         it('should add a product to the db', function () {
//             Product.addProduct({
//                 name: "gummy panda",
//                 stock: 12
//             });
//             Product.findOne({name: "gummy panda"}, function (err, foundProduct) {
//                 expect( foundProduct.name ).to.equal('gummy panda');
//             });
//         });

//         it('should fail informatively if product exists', function () {
//             Product.addProduct({
//                 name: "gummy panda",
//                 stock: 12
//             });
//             Product.addProduct({
//                 name: "gummy panda",
//                 stock: 12
//             }, function (err, savedProduct) {
//                 expect ( err.message ).to.equal('That product already exists!');
//             });
//         });
//     });

//      describe('removeProduct function', function () {
//         before( function () {
//             var testproduct = Product.addProduct({
//                 name: "chocolate ostrich",
//                 stock: 55
//             });
//         });

//         it('should correctly find a product by id', function () {
//             Product.removeProduct(testproduct._id, function (err, rmProduct) {
//                 expect( rmProduct._id ).to.equal(testproduct._id); 
//             });
//         });
//         it('should fail informatively if product does not exist', function () {
//             Product.removeProduct('994b88387bbb332', function (err, rmProduct) {
//                 expect( err.message ).to.equal('product does not exist.');
//             });
//         });

//         it('should successfully remove a product from the db', function () {
//             Product.findOne({name: "chocolate ostrich"}, function(err, product) {
//                 expect(err.message).to.equal('product does not exist.');
//             });
//         });
//     });

//     describe('updateProduct function', function () {
//         beforeEach( function () {
//             var testproduct = Product.addProduct({
//                 name: "crunchy bear ear",
//                 stock: 32
//             });
//         });
//         it('should correctly find a product by id', function () {
//             Product.updateProduct(testproduct._id, {name: "sweet bear toe"}, function (err, upProduct) {
//                 expect( upProduct._id ).to.equal(testproduct._id);
//             });
//         });

//         it('should correctly update that product in the db', function () {
//             Product.updateProduct(testproduct._id, {name: "sweet bear toe"}, function (err, upProduct) {
//                 expect( upProduct.name ).to.equal("sweet bear toe");
//             });
//         });
//         it('should NOT create a new entry in the db', function () {
//             var dbSize;
//             Product.find({})
//             .then(function (all) {
//                 dbSize = all.length;
//             })
//             .then(function() {
//                 Product.updateProduct(testproduct._id, {name: "evil bear toe"});
//             })
//             .then(function() {
//                 return Product.find({});
//             })
//             .then(function (allagain) {
//                     expect(allagain.length).to.equal(dbSize);
//         });
//         it('should fail informatively if product does not exist', function () {
//             Product.updateProduct("9b88444dc984a48b", {stock: 33}, function (err, upProduct) {
//                 expect( err.message ).to.equal('product does not exist.');
//             });
//         });
//     });
//     });
// });

