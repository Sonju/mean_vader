var http = require('http');

var server = http.createServer(function(req, res) {
	console.log(arguments);
	res.writeHead(200);
	res.write('<html><h1>Boogers</h1><p>nononononononononononononononononononononononononononononononononononononononononononononononononononononononononononononononononononono</p></html>');
	res.end();
});

server.listen(3000);
console.log('A server is listening on port 3000.');