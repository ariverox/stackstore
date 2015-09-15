var router =require('express').Router()
<<<<<<< HEAD:server/api/users.js
var User = require('./db/models/user.model')


=======
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
>>>>>>> 615eacc45e4d71889587ef0a734212b04886fba2:server/app/routes/api/users.js

