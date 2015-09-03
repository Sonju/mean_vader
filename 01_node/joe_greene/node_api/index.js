var http = require('http'); // library for http
var fs = require('fs'); // library for filesystem

var json = fs.readFileSync('./data.json')
// file json and pull into it data json

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(json);
    response.end();

}).listen(5000);


console.log('api server is ready');
