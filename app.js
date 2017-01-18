//! Module dependencies.
var express     = require('express');
var http        = require('http');
var path        = require('path');
var handlebars  = require('express3-handlebars')
var app         = express();
var mysql       = require('mysql');

//! Create connection to database
var connection = mysql.createConnection({
  host     : 'localhost',
  port     : 8889,
  user     : 'root',
  password : 'root',
  database : 'database_website'
});
connection.connect();

//! all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//! development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}



//! Add routes here
//! for example: app.get('/', index.view);
var index = require('./routes/index');
app.get('/', function (req, res) { index.view(req, res, connection) } );

var login = require('./routes/login');
app.post('/', function (req, res) { login.view(req, res, connection) } );

var home = require('./routes/home');
app.get('/home', function (req, res) { home.view(req, res, connection) } );

var primates = require('./routes/primates');
app.get('/primates', function (req, res) { primates.view(req, res, connection) } );

var human = require('./routes/human');
app.get('/human', function (req, res) { human.view(req, res, connection) } );

var dogs = require('./routes/dogs');
app.get('/dogs', function (req, res) { dogs.view(req, res, connection) } );

var signup = require('./routes/signup');
app.get('/signup', function (req, res) { signup.view(req, res, connection) } );

var create_primate = require('./routes/create_primate');
app.post('/create_primate', function (req, res) { create_primate.view(req, res, connection) } );



//! Run server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
