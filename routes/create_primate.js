//! Params: fileName, date, species, infantName, timedue
//! DB fields: file_name, recorded_date, species, infant_name, time_due
exports.view = function(req, res, db) {
	var video_name 		= req.body.fileName;
	var date_record     = req.body.date;
	var individual_name = req.body.infantName;
	var video_description = req.body.video_description;
    var start_time 	    = date_record + ' ' + req.body.startTime;
    var activity 	= req.body.activity;
    var variation 	= req.body.variation;
    var end_time	= date_record + ' ' + req.body.endTime;
    var partner 	= req.body.partner;
    var comment 	= req.body.comment;

	//! TODO: escape input
	//! TODO: fix insert of recorded_date & time_due is broken
	db.query('INSERT INTO video (video_name, data_record, video_description) VALUES ("'+ video_name +'", "'+ date_record + '", "'+  video_description + '")', function (error, results, fields) {
		console.log(error);
		db.query('INSERT INTO activity (start_time, activity, variation, end_time, partner, comment) VALUES ("'+ start_time +'", "'+ activity +'", "'+ variation +'", "'+ end_time +'", "'+ partner +'", "'+ comment  + '")', function (error, results, fields) {
			console.log(error);
		});
		//	db.query('INSERT INTO primates (file_name, recorded_date, species, infant_name, time_due) VALUES ("'+ file_name +'", "'+ recorded_date +'", "'+ species +'", "'+ infant_name +'", "'+ time_due +'")', function (error, results, fields){} 
        //! TODO: check error
		res.redirect('/home');
	});
};
