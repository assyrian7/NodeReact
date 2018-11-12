var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var morgan = require('morgan')
var http = require('http').Server(app)
var flash = require('connect-flash')
var io = require('socket.io')(http)

var port = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(morgan('dev'))
app.use('/socketio', express.static('socketio'))
app.use(flash())
app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render('index.ejs')
})

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg)
	})
})

http.listen(port, function(){
	console.log('Server listening on PORT: ' + port)
})