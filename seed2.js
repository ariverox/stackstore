var chance = require('chance')(123),
	_ = require('lodash'),
	Promise = require('bluebird');

var db = require('./server/db/index');
var User = require('./server/db/models/user.model');
var connectToDb = require('./server/db');


var numUsers = 100;
var numStories = 500;

var emails = chance.unique(chance.email, numUsers);

function randPhoto () {
	var g = chance.pick(['men', 'women']);
	var n = chance.natural({
		min: 0,
		max: 96
	});
	return 'http://api.randomuser.me/portraits/thumb/' + g + '/' + n + '.jpg'
}
function randUser () {
	return new User({
		name: [chance.first(), chance.last()].join(' '),
		photo: randPhoto(),
		phone: chance.phone(),
		email: emails.pop(),
		password: chance.word(),
		isAdmin: chance.weighted([true, false], [5, 95])
	});
}

function generateAll () {
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
	return users;
}

function seed () {
	var docs = generateAll();
	return Promise.map(docs, function (doc) {
		return doc.save();
	});
}

connectToDb.then(function () {
    User.findAsync({}).then(function (users) {
        if (users.length === 0) {
            return seedUsers();
        } else {
            console.log(chalk.magenta('Seems to already be user data, exiting!'));
            process.kill(0);
        }
    }).then(function () {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch(function (err) {
        console.error(err);
        process.kill(1);
    });
});
