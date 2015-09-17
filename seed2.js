var chance = require('chance')(123),
  _ = require('lodash'),
  Promise = require('bluebird');

var mongoose = require('mongoose')
var db = mongoose.connect("mongodb://localhost:27017/stackstore").connection;
db.on('open', function() {
  console.log('Database connection successfully opened');
});

db.on('error', function(err) {
  console.error('Database connection error', err);
});





var User = require('./server/db/models/user.model');
var Product = require('./server/db/models/product.model');
var Review = require('./server/db/models/review.model');
var connectToDb = require('./server/db');


var numUsers = 100;
var numStories = 500;

var emails = chance.unique(chance.email, numUsers);

function randPhoto() {
  var g = chance.pick(['men', 'women']);
  var n = chance.natural({
    min: 0,
    max: 96
  });
  return 'http://api.randomuser.me/portraits/thumb/' + g + '/' + n + '.jpg'
}

function randUser() {
  return new User({
    name: [chance.first(), chance.last()].join(' '),
    photo: randPhoto(),
    phone: chance.phone(),
    email: emails.pop(),
    password: chance.word(),
    isAdmin: chance.weighted([true, false], [5, 95])
  });
}

function generateAll() {
  var users = _.times(numUsers, randUser);
  users.push(new User({
    name: 'Zeke Nierenberg',
    photo: 'http://media.licdn.com/media/p/5/005/0ac/184/16505c6.jpg',
    phone: '(510) 295-5523',
    email: 'zeke@zeke.zeke',
    password: '123',
    isAdmin: true
  }));
  users.push(new User({
    name: 'Omri Bernstein',
    photo: 'http://i.zemanta.com/278070129_80_80.jpg',
    phone: '(781) 854-8854',
    email: 'omri@zeke.zeke',
    password: '123'
  }));
  var products = [];

  // products.push(new Product({
  //   title: 'Tasty Crunch',
  //   categories: ['chocolate'],
  //   price: 3,
  //   stock: 99
  // }))

  // products.push(new Product({
  //     title: 'Spicy Crunch',
  //     categories: ['chocolate'],
  //     price: 4,
  //     stock: 20
  //   }))

  var products = [
    new Product({ title: 'topkek', categories: ['kek'], price: 6, stock: 1337, country: 'Turkey', photo: 'https://img.4plebs.org/boards/s4s/image/1390/37/1390378588723.jpg' }),
    new Product({ title: 'Tasty Crunch', categories: ['chocolate', 'candy'], price: 3, stock: 99 }),
    new Product({ title: 'Spicy Crunch', categories: ['chocolate', 'candy'], price: 4, stock: 20 }),
    new Product({ title: 'Nongshim Shrimp Crackers', categories: ['crackers'], price: 3, stock: 41, country: 'South Korea', photo: 'http://static.caloriecount.about.com/images/medium/nong-shim-shrimp-crackers-33551.jpg' }),
    new Product({ title: 'Kinoko no Yama', categories: ['chocolate', 'cookie'], price: 3, stock: 80, country: 'Japan', photo: 'http://www.koamart.com/images/2873_enlarged[1].gif' }),
    new Product({ title: 'Giga Pudding', categories: ['pudding', 'toy'], price: 30, stock: 15, country: 'Japan', photo: 'http://thumbnail.image.rakuten.co.jp/@0_mall/bassano/cabinet/img55686633.jpg' }),
    new Product({ title: 'Everlasting Gobstoppers', categories: ['candy', 'wonka'], country: 'United Kingdom', price: 6, stock: 37 }),
    new Product({ title: 'blah', categories: ['strawberry'], country: 'Germany', price: 10, stock: 15 }),
    new Product({ title: 'bleh', categories: ['coconut'], country: 'Nigeria', price: 11, stock: 8 }),
    new Product({ title: 'asdf', categories: ['cheese'], country: 'Peru', price: 12, stock: 24 }),
    new Product({ title: 'Hash Brownies', categories: ['chocolate', 'baked'], price: 4.20, stock: 0, country: 'Netherlands', photo: 'http://releaf.co/wp-content/uploads/2012/01/brwn.jpg' }),
    new Product({ title: 'Nongshim Shrimp Crackers', categories: ['crackers'], price: 3, stock: 41, country: 'south_korea', photo: 'http://static.caloriecount.about.com/images/medium/nong-shim-shrimp-crackers-33551.jpg' }),
    new Product({ title: 'Kinoko no Yama', categories: ['chocolate', 'cookie'], price: 3, stock: 80, country: 'japan', photo: 'http://www.koamart.com/images/2873_enlarged[1].gif' }),
    new Product({ title: 'Giga Pudding', categories: ['pudding', 'toy'], price: 30, stock: 15, country: 'japan', photo: 'http://thumbnail.image.rakuten.co.jp/@0_mall/bassano/cabinet/img55686633.jpg' }),
    new Product({ title: 'Everlasting Gobstoppers', categories: ['candy', 'wonka'], country: 'uk', price: 6, stock: 37 }),
    new Product({ title: 'blah', categories: ['strawberry'], country: 'germany', price: 10, stock: 15 }),
    new Product({ title: 'blaah', categories: ['coconut'], country: 'nigeria', price: 11, stock: 8 }),
    new Product({ title: 'asdf', categories: ['cheese'], country: 'peru', price: 12, stock: 24 }),
    new Product({ title: 'Hash Brownies', categories: ['chocolate', 'baked'], price: 4.20, stock: 0, country: 'netherlands', photo: 'http://releaf.co/wp-content/uploads/2012/01/brwn.jpg' }),
    new Product({ title: 'Shrimp Crackers', categories: ['crackers', 'korean'], price: 3, stock: 41 }),
    new Product({ title: 'Kinoko no Yama', categories: ['chocolate', 'cookie', 'japanese'], price: 3, stock: 80 }),
    new Product({ title: 'Giga Pudding', categories: ['pudding', 'toy', 'japanese'], price: 30, stock: 15 }),
    new Product({ title: 'Everlasting Gobstoppers', categories: ['candy', 'wonka', 'uk'], price: 6, stock: 37 }),
    new Product({ title: 'blah', categories: ['strawberry', 'german'], price: 10, stock: 15 }),
    new Product({ title: 'bleh', categories: ['coconut', 'nigerian'], price: 11, stock: 8 }),
    new Product({ title: 'asdf', categories: ['cheese', 'peruvian'], price: 12, stock: 24 }),
    new Product({ title: 'Hash Brownies', categories: ['chocolate', 'baked', 'dutch'], price: 30, stock: 0 })
  ]

  var reviews;

  var reviews = [
      new Review ({
        text: "this ruined my day",
        rating: 1
      }),
      new Review ({
        text: "Totally worth the money",
        rating: 5
        
      }),

      new Review ({
        text: "this is great!",
        rating: 4
      }),

      new Review ({
        text: "This snack is all that I live for",
        rating: 4

      }),

      new Review ({
        text: ".,",
        rating: 3
        
      })
  ]

    return users.concat(products).concat(reviews)
}




function seed() {
  var docs = generateAll();
  return Promise.map(docs, function(doc) {
    return doc.save();
  });
}


db.drop = Promise.promisify(db.db.dropDatabase.bind(db.db));

db.on('open', function() {
  db.drop()
    .then(function() {
      return seed();
    })
    .then(function() {
      console.log('Seeding successful');
    }, function(err) {
      console.error('Error while seeding');
      console.error(err.stack);
    })
    .then(function() {
      process.exit();
    });
});
