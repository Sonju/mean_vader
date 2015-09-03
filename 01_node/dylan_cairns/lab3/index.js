var http = require('http');
var fs = require('fs');

var json = fs.readFileSync('./turtle.json');

http.createServer(function(request, response) {
	response.writeHead(200);
	response.write(json);
	response.end();
}).listen(5000);

var notice = 'port 5000'; 
var space = '';
for (i in notice) {
	console.log(space + notice[i]); 
	space += ' '; 
}; 