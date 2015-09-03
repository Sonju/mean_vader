var http = require('http');
var fs = require('fs');


var data = fs.readFileSync('./data.json');

http.createServer(function(request, response){

  response.writeHead(200);
  response.write(data);
  response.end();


}).listen(5000)
