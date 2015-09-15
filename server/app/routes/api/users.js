var router =require('express').Router()
var User = require('../../../db/models/user.model')
var path = require('path')
var indexHTMLPath = path.join(__dirname, '..','views','index.html')
//admin only - list of users
router.get('/', function(req,res){
  console.log("dada")
  res.sendFile(indexHTMLPath)
  // User.find().then(function(users){
  //   res.send(users)
  // })
})

//user page, specifc user, differnt for the user, other users and admin

router.get('/api/users/:id', function(req,res){
  var id = req.params.id;
  User.findById(id).then(function(user){
    res.send(user);
  });


});






module.exports = router
