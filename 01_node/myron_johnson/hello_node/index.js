// assign a variable to an NPM library
var http = require('http');

// http library; create a server and listen for requests and
// responses
http.createServer(function(request,response){
  response.writeHead(200); // status message 200 ok
  response.write('holy fuck I just build a server'); // send data
  response.end(); // stop sending

}).listen(8080);

console.log('My server is running :)');
