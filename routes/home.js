//! DB fields: file_name, recorded_date, species, infant_name, time_due
exports.view = function(req, res, db) {
	//! TODO: escape input
	//! TODO: fix insert of recorded_date & time_due is broken
	db.query('SELECT * from activity LEFT JOIN individual ON activity.indivisual_id = individual.id', function (error, results, fields) {
		console.log(results);
		//! TODO: check error
		res.render('home', { 'primates': results });
	});
};

