//! Params: fileName, date, species, infantName, timedue
//! DB fields: file_name, recorded_date, species, infant_name, time_due
exports.view = function(req, res, db) {
	var file_name 		= req.body.fileName;
	var recorded_date = req.body.date;
	var species 			= req.body.species;
	var infant_name 	= req.body.infantName;
	//var time_due 			= req.body.timedue;
    var start_time 	    = req.body.startTime;
    var activity 	= req.body.activity;
    var variation 	= req.body.variation;
    var end_time	= req.body.endTime;
    var partner 	= req.body.partner;
    var comment 	= req.body.comment;

	//! TODO: escape input
	//! TODO: fix insert of recorded_date & time_due is broken
	db.query('INSERT INTO primates (file_name, recorded_date, species, infant_name, start_time, activity, variation, end_time, partner, comment) VALUES ("'+ file_name +'", "'+ recorded_date +'", "'+ species +'", "'+ infant_name +'", "'+ start_time +'", "'+ activity +'", "'+ variation +'", "'+ end_time +'", "'+ partner +'", "'+ comment + '")', function (error, results, fields) {
		//	db.query('INSERT INTO primates (file_name, recorded_date, species, infant_name, time_due) VALUES ("'+ file_name +'", "'+ recorded_date +'", "'+ species +'", "'+ infant_name +'", "'+ time_due +'")', function (error, results, fields){} 
        //! TODO: check error
		res.redirect('/home');
	});
};
