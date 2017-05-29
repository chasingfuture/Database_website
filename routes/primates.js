exports.view = function(req, res, db) {
	db.query('SELECT individual_name, individual_birthday from individual', function (error, results, fields) {
		res.render('primates', { 'infant': results });
	});
};
