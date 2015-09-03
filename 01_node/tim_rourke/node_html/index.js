var http = require('http');
var fs = require('fs');

var html = fs.readFileSync('./index.html');

http.createServer(function(req, res) {
	console.log(req.params);
	res.writeHead(200);
	res.write(html);
	res.end();	
}).listen(3000);