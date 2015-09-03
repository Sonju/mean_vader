var http = require('http');
var fs = require('fs');

var indexView = fs.readFileSync('./index.html');

http.createServer(function (request, response) {
  response.writeHead(200);
  response.write(indexView);
  response.end();
}).listen(5000);

console.log('Listening on 5000');
