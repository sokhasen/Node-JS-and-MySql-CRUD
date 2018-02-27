'use strict'

/**
*   api router 
*/
module.exports = ( app ) => {
	// use AnimalController
	var AnimalController = require('../controllers/AnimalController');
 	app.route('/').get((req, res) => {
 		res.send(`
 			<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8">
				<meta http-equiv="X-UA-Compatible" content="IE=edge">
				<title>ROUTE LIST</title> 
			</head>
			<body>
				<table width="60%" border="1" cellpadding="10px" style="border-collapse: collapse; text-align:justify">
			  		<tr>
			  			<th>METHOD</th>
			  			<th>URI</th>
			  			<th>ACTION</th>
			  			<th>CONTROLLER</th>
			  			<th>MIDDLEWARE</th>
			  		</tr>
			  		<tr>
			  			<td>GET</td>
			  			<td>/</td>
			  			<td></td>
			  			<td></td>
			  			<td>cors</td>
			  		</tr>

			  		<tr>
			  			<td>GET</td>
			  			<td>/api/v1/animals</td>
			  			<td>animals.get</td>
			  			<td>AnimalController.get</td>
			  			<td>cors</td>
			  		</tr>

			  		<tr>
			  			<td>GET</td>
			  			<td>/api/v1/animals/:id</td>
			  			<td>animals.show</td>
			  			<td>AnimalController.show</td>
			  			<td>cors</td>
			  		</tr>
					
					<tr>
			  			<td>POST</td>
			  			<td>/api/v1/animals</td>
			  			<td>animals.post</td>
			  			<td>AnimalController.create</td>
			  			<td>cors</td>
			  		</tr>

			  		<tr>
			  			<td>PUT</td>
			  			<td>/api/v1/animals/:id</td>
			  			<td>animals.update</td>
			  			<td>AnimalController.update</td>
			  			<td>cors</td>
			  		</tr>

			  		<tr>
			  			<td>DELETE</td>
			  			<td>/api/v1/animals/:id</td>
			  			<td>animals.delete</td>
			  			<td>AnimalController.delete</td>
			  			<td>cors</td>
			  		</tr>
			  	</table>
			</body>
			</html>
 		`);
 	});
	/**
	*    group animals router
	*  @method get(callback) : @params(get) : @response Objects[] : @function get object list from server
	*  	@method post(callback) : @params(create) : @response Object  : @function create a new object input to server
	*/
	app.route('/api/v1/animals')
		.get(AnimalController.getList)
		.post(AnimalController.create);

	/**
	*    group animals router  required  @param id 
	*  @method put(callback) : @params(update) : @response Objects : @function update old object  in server
	*  	@method delete(callback) : @params(delete) : @response Object : @function remove a object  from server
	*	@method get(callback) : @params(show) : @response Object  : @function get single object  from server
	*/
	app.route('/api/v1/animals/:id')
		.put(AnimalController.update)
		.delete(AnimalController.delete)
		.get(AnimalController.show);
}
