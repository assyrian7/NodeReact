
module.exports = function(router, User, bcrypt){	
	router.post((req, res) => {
		var username = req.body.username;
		User.findOne({username: username}, function(err, user){
			if(err) console.log(err);
			else if(user) res.status(500).send('User already exists');
			bcrypt.genSalt(10, function(err, salt) {
	    		bcrypt.hash(req.body.password, salt, function(err, hash) {
	        		var newUser = new User({
						username: username,
						password: hash
					});
					newUser.save(function(err){
						if(err) console.log(err);
						else console.log("Success!");
					});
					req.session.user = newUser;
					res.render('profile.ejs'); 
	    		});
			});
		});
	});
}