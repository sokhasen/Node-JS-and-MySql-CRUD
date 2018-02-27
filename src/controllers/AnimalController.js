const Animal = require('../models/Animal');

exports.getList = (req, res) => {
	Animal.getList( ( err, data ) => {
			res.status(200).json(data);
	});
}

exports.show = (req, res) => {
	let dogId = req.params.id;
	Animal.show(dogId, (err, dog) => {
		if( dog.length ) {
			res.status(200).json({
				message: 'Animal Found',
				success: true,
				code: 200,
				dog: dog[0]
			});
		}
		else {
			res.status(404).json({
				message: 'Animal Found',
				success: false,
				code: 404,
				dog: null
			});
		}
		
	})
}

exports.create = (req, res) => {

	let animal = {
		name : req.body.name,
		color: req.body.color
	};

	Animal.create(animal, (err, animal) => {
		res.status(200).json({
			message: 'Animal have created',
			success: true,
			code: 200,
			dog: animal
		});
	});
}

exports.update = (req, res) => {
	let animal = {
		id: req.params.id,
		name: req.body.name,
		color: req.body.color
	}
	Animal.update(animal, (err, result) => {
		if(result.affectedRows && result.changedRows) {
			res.json({
				message: 'Animal have Update',
				success: true,
				code: 200,
				dog: animal
			});
		}
		else {
			res.json({
				message: 'Animal have been nothing to change',
				success: true,
				code: 200,
				dog: animal
			});
		}
		
	});
}

exports.delete = (req, res) => {
	let dogId = req.params.id;
	Animal.delete(dogId, (err, result ) => {
		if (result.affectedRows) {
			res.json(result);
		}
	})
}