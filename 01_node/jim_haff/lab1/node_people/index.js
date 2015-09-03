var http = require('http');
var fs = require('fs');

var json = fs.readFileSync('./data.json')

http.createServer(function(request, response){

  response.writeHead(200);
  response.write(json);
  response.end();

}).listen(5000);

console.log('server is running')
