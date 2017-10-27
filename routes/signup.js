exports.view = function(req, res, db) {

  var user_name 	= req.body.usernamesignup;
	var pass_word 	= req.body.passwordsignup;
  var email = req.body.emailsignup;
  var crypto = require('crypto');
  pass_word = crypto.createHash('md5').update(pass_word).digest("hex");

  console.log('sign up pgae');
	console.log(user_name);
  console.log(email);
	console.log(pass_word);

  // email info to admin
  /////
  /*
  var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',   // need an email accoun to send email from this website
    pass: 'yourpassword'
  }
});


var inText =  'username: ' + user_name + 'useremail: ' + email + 'password:' + pass_word;

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',       // lab admin email account  ccl@gmail.com
  subject: 'Sending Email using Node.js',
  text: inText
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
  //////
  //////
  // email info to admin
  */

  db.query('INSERT INTO signup (username, email, password) VALUES ("'+ user_name +'", "'+ email + '", "'+  pass_word +  '")', function (error, results, fields) {
    console.log(error);
  });


 


  	res.redirect('/home');
};
