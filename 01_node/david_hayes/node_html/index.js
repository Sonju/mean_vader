var http = require('http');

var html = '<html><body><h1>hello, friends</h1></body></html>'

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(html);
  response.end();
}).listen(5000);

console.log('HTML server on port 5000');
