module.exports = function(router){
	router.get((req, res) => {
		res.render('index.ejs');
	});
}
