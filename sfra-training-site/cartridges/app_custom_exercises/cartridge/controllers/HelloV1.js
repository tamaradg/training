'use strict';

//require the server module
const server = require('server');
//define the route using the server.get method and Start function
	server.get("Start", function (req,res,next) {
     res.print("<h1>Hello World</h1>");
     next();
  })
	//print Hello World using h1 tags directly to the response

	//execute the next function to notify the server that you're done with a step

//call server.exports() to register all functions
module.exports = server.exports();
