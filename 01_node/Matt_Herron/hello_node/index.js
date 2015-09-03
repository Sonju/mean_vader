//assign a variable to an npm library
var http = require('http');

// http library http has a method for creating a server
http.createServer(function(request, response) {
	response.writeHead(200); //this is the status 200 rHTTP response
	response.write('Holy #$& I just wrote a server in Node!');
	response.end();
}).listen(5000);

console.log('My server is running...');