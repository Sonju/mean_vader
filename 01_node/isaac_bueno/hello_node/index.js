//what this mean-- assign a variable to an NPM library
//requiring the library
var http = require('http');
//because servers take in requests and responses.....
//http library: create a server, and listen for requests and responses
http.createServer(function(request, response) {
  response.writeHead(200); //status message 200 ok
  response.write('holy virgin mary, i just built a server!') // send data to server
  response.end(); //stop sending
}).listen(5000);//localhost 5000
console.log('my server is running :)');
