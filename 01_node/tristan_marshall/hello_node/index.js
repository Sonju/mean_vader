// Assign a variable to an NPM (Node Package Manager) library
var http = require('http');

// http library: create a server. and listen for requests and responses
//servers take in requests and responses
http.createServer(function(request, response) {
  response.writeHead(200); // status message 200 okay
  response.write('Server built'); // send data to server
  response.end(); // stop sending
}).listen(5000); // pick a port (localhost:5000)

console.log('The server is running');
