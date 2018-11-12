var express = require('express');
var flash = require('connect-flash');
	
var app = express();
var session = require('express-session')

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(flash())
app.use(session({secret: 'Hello'}))

app.get('/', (req, res) => {
	//res.sendFile(__dirname + '/index.html');
	res.render('index.ejs', {message: req.flash('messagelog')});
})

app.post('/', (req, res) => {
	req.flash('messagelog', 'Hey')
	res.redirect('/')
})

app.listen('3000', '127.0.0.1', function(){
	console.log("Server listening on PORT: 3000");
})