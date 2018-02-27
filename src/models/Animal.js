const mysql = require('mysql');
const config = require('../configs/enviroment');

const connection = mysql.createConnection(config.mysql);

let Animal = {};
Animal.getList = ( callback ) => {
	let sql = `SELECT * FROM dogs WHERE is_deleted = 0`;
	if (connection) {
		connection.query(sql, (err, animals) => {
			if (err) {
				throw  err
			}
			else {
				callback(null, animals);
			}
		});
	}
};

Animal.show = ( dogId, callback ) => {
	let sql = `SELECT * FROM dogs WHERE id = ${dogId} AND is_deleted = 0 LIMIT 1`;
	if (connection) {
		connection.query(sql, (err, animal) => {
			if (err) {
				throw  err
			}
			else {
				callback(null, animal);
			}
		});
	}
};

Animal.create = ( animal,  callback ) => {
	let sql = `INSERT INTO dogs SET ?`;
	if (connection) {
		connection.query(sql, animal, (err, animals) => {
			if (err) {
				throw  err
			}
			else {
				callback(null, {
					insertId: animals.insertId,
				});
			}
		});
	}
};
Animal.update = ( animal,  callback ) => {
	let sql = `UPDATE dogs SET 
		name = ${ connection.escape(animal.name)},
		color = ${ connection.escape(animal.color)}
		WHERE id = ${ connection.escape(animal.id)}`;
	if (connection) {
		connection.query(sql, (err, result) => {
			if (err) {
				throw  err
			}
			else {
				callback(null, result);
			}
		});
	}
};

Animal.delete = ( id,  callback ) => {
	let sql = `UPDATE dogs SET 
		is_deleted = ${true}
		WHERE id = ${ connection.escape(id)}`;
	if (connection) {
		connection.query(sql, (err, result) => {
			if (err) {
				throw  err
			}
			else {
				callback(null, result);
			}
		});
	}
};
module.exports = Animal;


