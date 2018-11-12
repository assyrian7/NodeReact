module.exports = function(router, User){
	router.get((req, res) => {
		var username = req.params.username;
		User.findOne({username: username}, (err, user) => {
			if(err) res.send(err);
			res.json(user);
		});
	});
}