//  assign a variable to an NPM library
var http = require('http');

// http library: create a server, and listen for requests
// and responses
http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('your request has been noted mortal');
  response.end();
}).listen(5000);

console.log('My server is running :)');
