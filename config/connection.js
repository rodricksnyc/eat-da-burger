var mysql = require('mysql');

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'hacktheplanet',
//     database: 'todoagain_db'
//   });
// };


var connection = mysql.createConnection({
	host: '127.0.0.1',
	port: 3306,
	user: 'root',
	password: '',
	database: 'burgers_db'
});


connection.connect(function(err){
	if (err){
		console.log('error connecting; '+err.stack);
		return;
	}
	console.log('connect as id '+ connection.threadId);
})

module.exports = connection;
