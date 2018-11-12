var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var flash = require('connect-flash');
var session = require('express-session');
var isLoggedIn = require('./policies/sessionAuth');
	
mongoose.connect('mongodb://localhost/testMongo', {
	useMongoClient: true
});

var bcrypt = require('bcrypt');
var User = require('./models/user');

var app = express();
var router = express.Router();
var port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use('/public', express.static('public'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(session({secret: 'Hello World'}));

require('./routes')(router.route('/'));
require('./routes/users')(router.route('/users'), User, bcrypt);
require('./routes/login')(router.route('/login'), User);
require('./routes/signup')(router.route('/signup'), User, bcrypt);
require('./routes/selectUser')(router.route('/users/:username'), User);
require('./routes/avatar')(router.route('/users/avatar'), isLoggedIn, User);

app.use(router);

app.listen(port, '127.0.0.1', function(){
	console.log("Server listening on PORT: " + port);
})
