var http = require('http')

var server = http.createServer(function(request, response) {
	response.writeHead(200, { 'Content-Typte' : 'text/plain'})
	response.end('hello')
})

server.listen( 9001)