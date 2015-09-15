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

router.get('/', function(req,res){
  console.log("dada")
  res.sendFile(indexHTMLPath)
  // User.find().then(function(users){
  //   res.send(users)
  // })
})

module.exports = router