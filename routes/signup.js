exports.view = function(req, res, db) {
  //console.log(loginData);

  	var user_name 	= req.body.usernamesignup;
	var pass_word 	= req.body.passwordsignup;
  var email = req.body.emailsignup;
  var crypto = require('crypto');
  pass_word = crypto.createHash('md5').update(pass_word).digest("hex");
	//var hash = md5(pass_word);
	console.log(user_name);
  console.log(email);
	console.log(pass_word);


    	db.query('INSERT INTO signup (user_name) VALUES ("'+ user_name + '")', function (error, results, fields) {
    		db.query('INSERT INTO signup (hash) VALUES ("'+ crypto + '")', function (error, results, fields) {
    		});
    	});


  	res.redirect('/home');
};
