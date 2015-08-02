var http = require('http');
var server = http.createServer();
var port = 80;

server.listen(port, '127.0.0.1');

console.log('Server is running on port:', port);

server.on('request', function(req, res) {
    res.end('It works!');
});