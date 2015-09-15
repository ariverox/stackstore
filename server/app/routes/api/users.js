var router =require('express').Router()

var User = require('../../../db/models/user.model')
var path = require('path')
var indexHTMLPath = path.join(__dirname, '..','views','index.html')
//admin only - list of users

router.param('userID', function(req, res, next, userID){
	User.findById(userID).then(function(user){
		if(!user) throw new Error('no user found');
		else {
			req.user = user;
			next()
		}
	}).then(null, next)
})

router.get('/', function(req,res, next){
  console.log("dada", req.user)
  User.find().then(function(users){
		res.send(users)
		next()
	})



})


router.get('/:id', function(req,res, next){
  console.log("dada", req.user)
	var id = req.params.id
  User.findById(id).then(function(user){
		res.send(user)
		next()
	})



})




router.use(function(err,req,res,next){
	err.status = res.status || 500
	res.status.send()
})


module.exports = router
