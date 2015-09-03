var http	=	require('http'),
		fs		=	require('fs');

http.createServer(function(req, res) {
	fs.readFile('./data.json', 'utf8', function(err, data) {
		res.writeHead(200);
		res.write(data);	
		res.end();
	});
}).listen(3000);