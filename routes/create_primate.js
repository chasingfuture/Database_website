//! Params: fileName, date, species, infantName, timedue
//! DB fields: file_name, recorded_date, species, infant_name, time_due
exports.view = function(req, res, db) {
	var video_name 		= req.body.fileName;
	var date_record     = req.body.date;
	var individual_id = req.body.infantId;
	var individual_name = req.body.infantName;
	var video_description = req.body.video_description;
    var start_time 	    = date_record + ' ' + req.body.startTime;
    var activity 	= req.body.activity;
    var variation 	= req.body.variation;
    var end_time	= date_record + ' ' + req.body.endTime;
    var partner 	= req.body.partner;
    var comment 	= req.body.comment;

    //! TODO: cjeck if the infantId is 0 or not, if so, create a new row in the individual table first
    if (individual_id == 0) {
    	db.query('INSERT INTO individual (individual_name) VALUES ("'+ individual_name + '")', function (error, results, fields) {
    		individual_id = results.insertId;
    		console.log(error);
    		db.query('INSERT INTO video (video_name, date_record, individual_id, video_description) VALUES ("'+ video_name +'", "'+ date_record + '", "'+  individual_id + '", "' + video_description + '")', function (error, results, fields) 		{
				console.log(error);
				db.query('INSERT INTO activity (start_time, activity, variation, end_time, partner, comment, individual_id, video_id) VALUES ("'+ start_time +'", "'+ activity +'", "'+ variation +'", "'+ end_time +'", "'+ partner +'", "'+ comment  +  '", "' + individual_id + '", "' +  results.insertId + '")', function (error, results, fields) {
					console.log(error);
				});
			});
    	});
	}
	else {
	//! TODO: escape input
	db.query('INSERT INTO video (video_name, date_record, individual_id, video_description) VALUES ("'+ video_name +'", "'+ date_record + '", "'+  individual_id + '", "' + video_description + '")', function (error, results, fields) {
		console.log(individual_id);
		console.log(error);
		console.log(results.insertId);
		db.query('INSERT INTO activity (start_time, activity, variation, end_time, partner, comment, individual_id, video_id) VALUES ("'+ start_time +'", "'+ activity +'", "'+ variation +'", "'+ end_time +'", "'+ partner +'", "'+ comment  +  '", "' + individual_id + '", "' +  results.insertId + '")', function (error, results, fields) {
			console.log(error);
		});
		//	db.query('INSERT INTO primates (file_name, recorded_date, species, infant_name, time_due) VALUES ("'+ file_name +'", "'+ recorded_date +'", "'+ species +'", "'+ infant_name +'", "'+ time_due +'")', function (error, results, fields){} 
        //! TODO: check error

	});
	}

	res.redirect('/home');
};
