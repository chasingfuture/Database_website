//! Module dependencies.
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var app = express();

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
app.get('/', index.view);
var home = require('./routes/home');
app.get('/home', home.view);
var chimps = require('./routes/chimps');
app.get('/chimps', chimps.view);
var human = require('./routes/human');
app.get('/human', human.view);
var dogs = require('./routes/dogs');
app.get('/dogs', dogs.view);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

