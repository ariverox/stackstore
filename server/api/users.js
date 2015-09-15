var router =require('express').Router()
var User = require('../db/models/user.model')


//admin only - list of users
router.get('/api/users', function(req,res){
  User.find().then(function(users){
    res.send(users)
  })
})

//user page, specifc user, differnt for the user, other users and admin

router.get('/api/users/:id', function(req,res){
  var id = req.params.id;
  User.findById(id).then(function(user){
    res.send(user);
  });


});






module.exports = router
