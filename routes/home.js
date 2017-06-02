//! DB fields: file_name, recorded_date, species, infant_name, time_due
exports.view = function(req, res, db) {
	//! TODO: escape input
	//! TODO: fix insert of recorded_date & time_due is broken

	db.query('SELECT i.individual_name, i.species, TIMESTAMPDIFF(MONTH,i.individual_birthday,v.date_record) AS age, a.activity, a.variation, a.partner, a.comment FROM video as v,individual as i, activity as a where i.id = v.individual_id and i.id = a.individual_id', function (error, results, fields) {
		console.log(results);
		console.log(error);
		//! TODO: check error
		res.render('home', { 'data': results });
	});
};

