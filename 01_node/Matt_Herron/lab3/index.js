var http = require('http');
var fs = require('fs');

var turtles = fs.readFileSync('./turtles.json');

http.createServer(function(request, response) {
	response.writeHead(200);
	response.write(turtles);
	response.end();
}).listen(5000);
console.log('These turltles are done dude!!!');