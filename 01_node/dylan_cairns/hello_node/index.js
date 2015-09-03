//assign variable to NPM library 
var http = require('http');

//http library: create a server and listen for requests
//and responses 
http.createServer(function(request, response) {
	response.writeHead(200); //status message 200 OK 
	response.write('D\'oh!'); // send data to server
	response.end(); // stop sending 
}).listen(5000);

console.log('server\'s running...'); 