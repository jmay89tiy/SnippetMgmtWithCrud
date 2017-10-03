var express = require('express');
var router = express.router();

//get homepage

router.get('/', function(req, res){
  res.render('index');
});

module.exports = router;
