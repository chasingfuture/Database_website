var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	db.createTable('individual', {
		id:       { type: 'int', primaryKey: true, autoIncrement: true },
    	individual_name:     'string', 
    	individual_birthday: 'date',
    	species:      		 'string',
    	indivisual_description:   'string',

  	}, function () {
		db.createTable('video', {
		id:       { type: 'int', primaryKey: true, autoIncrement: true },
	    video_name:        'string',
	    data_record:       'date',
	    indivisual_id:   { type: 'int', unsigned: true, length: 10, notNull: true,
        	foreignKey:  {
          		name: 'indivisual_id_fk',
          		table: 'indivisual',
          		rules: {
            		onDelete: 'CASCADE',
          		},
          		mapping: 'id'
             }
        },
	    video_description: 'string'
	  }, function () {

	    db.createTable('activity', {
	    id:            { type: 'int', primaryKey: true, autoIncrement: true },
	    start_time:   'datetime',
	    activity:   'string',
	    variation:   'string',
	    end_time:   'datetime',
	    partner:   'string',
	    comment:   'string',
	    indivisual_id:   { type: 'int', unsigned: true, length: 10, notNull: true,
        	foreignKey:  {
          		name: 'indivisual_id_fk',
          		table: 'indivisual',
          		rules: {
            		onDelete: 'CASCADE',
          		},
          		mapping: 'id'
             }
         },
	    video_id:   { type: 'int', unsigned: true, length: 10, notNull: true,
        	foreignKey:  {
          		name: 'video_id_fk',
          		table: 'video',
          		rules: {
            		onDelete: 'CASCADE',
          		},
          		mapping: 'id'
             }
         },
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