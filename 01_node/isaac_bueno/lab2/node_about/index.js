var http = require('http'); //creates a library for http
var fs = require('fs'); //library for filesystem

var json = fs.readFileSync('./index.html');
http.createServer(function(req, res){
  res.writeHead(200);
  res.write(json);
  res.end();
}).listen(5000);
////console messge to let us know it is running
console.log('api server is ready');
