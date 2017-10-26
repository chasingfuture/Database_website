var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
	  db.createTable('signup', {
    id: { type: 'int', primaryKey: true },
    username: 'string',
    email: 'string',
    password: 'string'
  }, callback);
  callback();
};

exports.down = function(db, callback) {
	  db.dropTable('signup', callback);
  callback();
};
