var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('primates', {
    id:            { type: 'int', primaryKey: true },
    name:          'string',
    recorded_date: 'date',
    species:       'string',
    infant_name:   'string',
    time_due:      'datetime'
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('primates', callback);
};
