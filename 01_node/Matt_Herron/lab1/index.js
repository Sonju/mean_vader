var http = require('http');
var fs = require('fs');

var json = fs.readFileSync('./people.json');

http.createServer(function(request, response) {
	response.writeHead(200);
	response.write(json);
	response.end();
}).listen(5000);
console.log('Your people server is running');
