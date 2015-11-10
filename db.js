var mysql = require('mysql');

var dbPool = mysql.createPool({
	connectionLimit : 10,
	host: '127.0.0.1',
	user: 'root',
	password: 'test',
	database: 'ua-collector',
	multipleStatements: true
});

module.exports = dbPool;