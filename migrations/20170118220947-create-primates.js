var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('primates', {
    id:            { type: 'int', primaryKey: true, autoIncrement: true },
    file_name:     'string',
    recorded_date: 'date',
    species:       'string',
    infant_name:   'string',
    start_time:   'datetime',
    activity:   'string',
    variation:   'string',
    end_time:   'datetime',
    partner:   'string',
    comment:   'string',
  }, callback);
    
    db.createTable('login', {
    id:            { type: 'int', primaryKey: true, autoIncrement: true },
    user_name:     'string',
    password:      'string',
  }, callback);
};


exports.down = function(db, callback) {
  db.dropTable('primates', callback);
  db.dropTable('login', callback);
};
