exports.view = function(req, res, db) {
	db.query('SELECT * from individual', function (error, results, fields) {
		console.log(results);
		res.render('individual', { 'profile_data': results });
	});
};
