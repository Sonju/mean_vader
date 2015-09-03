// assign a variable to an NPM library
var http = require('http');

//http library: create a server, and listen for requests and responses
http.createServer(function(request, response){
    response.writeHead(200);//status message 200 ok
    response.write('YAS SERVER QUEEN') //send data
    response.end();//stop sending
}).listen(5000);

console.log('My server is running yas queen');
