var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/snippetdb') // model 2
mongoose.Promise = require('bluebird')

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();







function tagsPull(tag) {
  return snippets.find({ 'tags': tag }).catch(function (err) {
    console.log(err)
  })
}

function languagePull(language) {
  return snippets.find({ 'language': language }).catch(function (err) {
    console.log(err)
}

function individual(name) {
  return snippets.find({ 'name': name }).catch(function (err) {
    console.log(err)
})

function getAll() {
  return db.snippets.find()
  })
}

// ========= crud below ==========//

function createSnip() {

}




function del(){
  Snippet.deleteOne({_id})
}
