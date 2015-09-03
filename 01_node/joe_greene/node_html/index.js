var http = require('http');
var fs = require('fs'); // this allows us to read and write files/ file system access!

var html = fs.readFileSync('./index.html');
// var html = '<html><body><h1>hello, friends</h1></body></html>';

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write(html);
  response.end();
}).listen(5000);

  console.log('HTML server on port 5000');
