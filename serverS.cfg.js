var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 80;

app.get('/', function(req, res){ 
  res.sendFile(__dirname + '/index.html');
 });

app.use("/static", express.static('./static/'));

server.listen(port, function() {
	console.log('listening: %s', port);
});

//Arrays to store users and connections
users = [];
connections = [];

io.on('connection', function (socket) {
	//Add connection to Connections array
	connections.push(socket);
//	Console Log Connected sockets
	console.log('Connected: %s sockets connected', connections.length);
//	Write to clients that a user has connected
  	io.emit('connected', {
		time: new Date().toLocaleTimeString() + " user connected",
		sockets: connections.length
  	});

//	When a User has Disconnected
  	socket.on('disconnect', function (data) {
//  	Remove connection from Connections Array
	   	connections.splice(connections.indexOf(socket), 1);
//	    Console Log Connected Sockets
        console.log('Disconnected: %s sockets connected', connections.length);
//     	Write to clients that a user has Disconnected
        io.emit('disconnected', {
		time: new Date().toLocaleTimeString() + " user disconnected",
		sockets: connections.length
  	});

  	});

   // Retriev Client Data
   socket.on('chat', function (data) {
   		io.emit('chat', data);
		console.log(data);
 });
});