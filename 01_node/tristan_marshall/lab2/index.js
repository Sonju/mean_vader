var http = require("http");
var fs = require("fs");

var json = fs.readFileSync('./turtles.json');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(json);
  response.end();
}).listen(5000);

console.log('the server is ready!');
