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

const app = express()

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views') //builds mustache app

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// static paths to public below
app.use(express.static(path.join(__dirname, 'public')));

// session below
app.use(session({
  secret: 'secret',
  saveUnitialized: true,
  resave: true
}));


//passport below:
app.use(passport.initialize());
app.use(passport.session());

// express validator below:
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

//app routes below
app.use('/', routes);
app.use('/users', users);



//=============== Password Bcrypt gear ============================//
const bcrypt = require('bcrypt')
const hash = bcrypt.hashSync(password, 8)

//********* Routes Below **********//

//===== When you enter localhost:3000 - redirects to login ======//
app.get('/', req, res) => {
  res.redirect('/login');
}
app.get('/login') {
  res.render('login');
}
}

//=============== Going to language view============================//
app.get('/language',function(req, res) => {
  function languagePull()
  res.render('language');
})

//=============== Going to tags view ===============================//
app.get('/tags', function(req, res) => {
  function tagsPull()
  res.render('tags');
})

//============== Going to viewOne ==================================//
app.get('/viewOne', function(req, res) => {
  function individual()
  res.render('viewOne');
})

//================ Going to homepage to View All ====================//
app.get('/home', function(req, res) => {
  function getAll()
  res.render('home');
}

//================ posting a new Snippet ============================//
app.post('/newSnippet', (req, res) => {
  createSnip(req.body).then(function() {
    res.send("it worked");
  })
})


app.listen(3000, function () {
  console.log('locked and loaded captain!')
})
