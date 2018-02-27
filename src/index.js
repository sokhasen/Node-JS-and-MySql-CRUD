const express = require('express'); 
const app = require('./configs/server');
/**
* config router api
*/
const routes = require('./routes/api');
routes(app);

/**
* handling 404 route note found
*/
app.get('*', function(req, res){
  res.status(404).json({
  	code: 404,
  	message: "URI NOT FOUND"
  });
  res.end();
});

/**
* create port server localhost:3000
*/
app.listen(app.get('port'), () => {
	console.log('Server host on =>  localhost:'+app.get('port'));
});