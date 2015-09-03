// assign a variable to a npm library
var http = require('http');

// http library create a server and listen for requests and responses
http.createServer(function(request, response){

  response.writeHead(200);  //status message 200 ok
  response.write('holy shit I just built a server');  //send data to server
  response.end();  // stop sending


}).listen(5000);

console.log('My server is running biotch');
