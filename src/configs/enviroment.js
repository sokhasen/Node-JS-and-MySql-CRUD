// const mysql = require('mysql');

// module.exports = () => {
//   return mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'dota2'
//   });
// }

const config = {
	mysql : {
	    host: 'localhost',
	    user: 'root',
	    password: 'root',
	    database: 'animals'
	  }
};

module.exports = config;