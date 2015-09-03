var http = require('http');  // library for http
var fs = require('fs'); // library for file server

var json = fs.readFileSync('./data.json');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(json);
  response.end();
}).listen(5000);

console.log('API server is up');
