var http = require('http');
var fs = require('fs');
var html = fs.readFileSync('./index.html');

http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(html);
  res.end();
}).listen(5000);

console.log('HTML server is on port 5000');
