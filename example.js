var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World! ce3cae57312985bbe62c7801942a066c1f0e70db');
}).listen(8080);


