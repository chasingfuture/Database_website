//! Params: fileName, date, species, infantName, timedue
//! DB fields: file_name, recorded_date, species, infant_name, time_due
exports.view = function(req, res, db) {
	var video_name 		= req.body.fileName;
	var data_record     = req.body.date;
	var species 	    = req.body.species;
	var indivisual_name = req.body.infantName;
    var start_time 	    = req.body.startTime;
    var activity 	= req.body.activity;
    var variation 	= req.body.variation;
    var end_time	= req.body.endTime;
    var partner 	= req.body.partner;
    var comment 	= req.body.comment;

	//! TODO: escape input
	//! TODO: fix insert of recorded_date & time_due is broken
	db.query('INSERT INTO video (video_name, data_record) VALUES ("'+ video_name +'", "'+ data_record + '")', function (error, results, fields) {
		console.log(error);
		//	db.query('INSERT INTO primates (file_name, recorded_date, species, infant_name, time_due) VALUES ("'+ file_name +'", "'+ recorded_date +'", "'+ species +'", "'+ infant_name +'", "'+ time_due +'")', function (error, results, fields){} 
        //! TODO: check error
		res.redirect('/home');
	});
};
