module.exports = function(router, User, bcrypt){
	router.get((req, res) => {
	
    User.find((err, users) => {
      res.json(users);
    });  
      
	});
  router.post((req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
      if(err) res.send(err);
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if(err) res.send(err);
        console.log(hash);
        User.update({username: req.body.username}, {password: hash}, (err) => {
          if(err) res.send(err);
          res.json({
            result: "Success!"
          });
        });
      });
    });
  });
}