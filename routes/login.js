exports.view = function(req, res, db) {
	var user_name 	= req.body.username;
	var pass_word 	= req.body.password;
	console.log("user_name_new");
	console.log(pass_word);
	res.redirect('/home');
};
