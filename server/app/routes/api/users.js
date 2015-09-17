var router =require('express').Router()

var User = require('../../../db/models/user.model')
var path = require('path')

//admin only - list of users

router.param('id', function(req, res, next, id){
	User.findById(id).exec().then(function(user){
		if(!user) throw new Error('no user found');
		else {
			req.thisUser = user;
			next();
		}
	}).then(null, next)
})

router.get('/', function(req,res, next){
  User.find().exec().
	then(function(users){
		res.send(users);
	}).then(null,next);
})


router.get('/:id', function(req,res, next){
	res.json(req.thisUser)
})


router.post('/', function(req,res,next){
    User.create(req.body).then(function (user) {
        res.status(201).json(user)
    }).then(null, next);

})

router.put('/:id', function(req,res,next){
    for (var k in req.body) {
        req.thisUser[k] = req.body[k];
    }
    return req.users.save()
        .then(function (savedUser) {
            res.json(savedUser);
        })
        .then(null, next);

})

router.delete('/:id', function(req,res,next){
    req.users.remove()
        .then(function () {
            res.status(204).end();
        })
        .then(null, next);

})







module.exports = router
