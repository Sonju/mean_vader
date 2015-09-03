// assign a variable to an NPM library
var http = require('http');
var fs = require('fs');  // file system access!

var html = fs.readFileSync('./index.html');

// http library: create a server, and listen for requests
// and responses
http.createServer(function(request, response) {
  response.writeHead(200); // status message 200 ok
  response.write(html); // send data to server
  response.end(); // sotp sending
}).listen(5000);

console.log('My server is running. :)');
