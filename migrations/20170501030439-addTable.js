var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('indivisual', {
    indivisual_id:            { type: 'int', primaryKey: true, autoIncrement: true },
    indivisual_name:     'string',
    indivisual_birthday: 'date',
    species:       'string',
    indivisual_discription:   'string',
  }, function () {

		db.createTable('video', {
	    video_id:            { type: 'int', primaryKey: true, autoIncrement: true },
	    video_name:        'string',
	    video_discription: 'string',
	    data_record:       'date',
	    indivisual_id:     'int',
	    video_discription: 'string'
	  }, function () {

	    db.createTable('activity', {
	    activity_id:            { type: 'int', primaryKey: true, autoIncrement: true },
	    start_time:   'datetime',
	    activity:   'string',
	    variation:   'string',
	    end_time:   'datetime',
	    partner:   'string',
	    comment:   'string',
	    indivisual_id:  'int',
	    video_id:   'int'
	  }, callback);
	});
  });

};

exports.down = function(db, callback) {
    db.dropTable('indivisual', function () {
    	db.dropTable('video', function () {
		    db.dropTable('activity', callback);
    	});
    });
};
