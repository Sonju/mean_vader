// Assign variable to NPM library
var http = require('http');

// http library: create server, and listen for requests and responses
http.createServer(function(request, response) {
  response.writeHead(200); // Status message 200 ok
  response.write('HOLY F I JUST BUILT A SERVER');
  response.end();
}).listen(5000);

console.log('Servers running :)');
