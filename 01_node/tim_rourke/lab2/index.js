var http	=	require('http'),
		fs		=	require('fs');

http.createServer(function(req, res) {
	fs.readFile('./index.html', 'utf8', function(err, data) {
		if (err) throw err;
		res.writeHead(200);
		res.write(data);
		res.end()
	});
}).listen(3000);