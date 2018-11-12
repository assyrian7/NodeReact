var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {
		type: String,
		unique: true
	},
	password: {
		type: String
	},
	avatarUrl: {
		type: String
	},
	avatarFd: {
		type: String
	}
});

module.exports = mongoose.model('user', userSchema);