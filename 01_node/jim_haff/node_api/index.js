var http = require('http');

var fs = require('fs');  //library for filesystem

var json = fs.readFileSync('./data.json');

http.createServer(function(request, response){

  response.writeHead(200);
  response.write(json);
  response.end();


}).listen(5000);




// console message to let us know it is running
console.log('api server is ready');
