module.exports = function(router, User){
	router.get((req, res) => {
		res.render('login.ejs', {note: req.flash('loginMessage')});
	});
	router.post((req, res) => {
		var username = req.body.username;
		User.findOne({username: username}, (err, user) => {
			if(err) res.status(500).send(err);
			else if(!user) res.render('login.ejs', {note: req.flash('loginMessage', 'User doesn\'t exit')}); 
			require('bcrypt').compare(req.body.password, user.password, (err, result) => {
				if(err) res.status(500).send(err);
				else if(!result){
					console.log('Wrong Password');
					res.json(null);
				}
				else res.json(user);
			})
		})
	})
}
