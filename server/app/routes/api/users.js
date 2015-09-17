var router =require('express').Router()

var User = require('../../../db/models/user.model')
var path = require('path')
var indexHTMLPath = path.join(__dirname, '..','views','index.html')

//admin only - list of users

router.param('userID', function(req, res, next, userID){
	User.findById(userID).exec().then(function(user){
		if(!user) throw new Error('no user found');
		else {
			req.userID = user;
			console.log("user", userID)
			next();
		}
	}).then(null, next)
})



router.get('/', function(req,res, next){
  console.log("dada", req.user)
  User.find().then(function(users){
		res.send(users);
		next();
	});
})


router.get('/:userID', function(req,res,next){
  		res.send(req.userID)
})

router.post('/', function (req, res, next) {
    User.create(req.body)
    .then(function (user) {
         res.status(201).json(user)
      }).then(null, next);
});


router.put("/:userID", function (req, res, next) {
    for (var key in req.body) {
        req.userID[key] = req.body[key];
    }
    req.user.save()
    .then(function (edit) {
        res.status(203).json(edit)
    }).then(null, next);
});


router.use(function(err,req,res,next){
	err.status = res.status || 500
	res.status.send()
})


module.exports = router



