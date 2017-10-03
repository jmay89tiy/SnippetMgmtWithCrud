var express = require('express');
var router = express.router();
var User = require("../models/user");

//get register view
router.get('/register', function(req, res){
  res.render('register');
});


//get login
router.get('/login', function(req, res){
  res.render('login');
});

//post route
router.post('/login', function(req, res){
  var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;

  console.log(name)
});

var = newUser = new User({
  name: name,
  email: email,
  username: username,
  password: password
})

module.exports = router;
