// var express = require('express');
// var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io').listen(server);

// server.listen(process.env.PORT || 3000);
// console.log('Server Running');

// app.get('/', function(req, res){
// 	res.sendFile(_dirname + '/index.html');
// });

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

users = [];
connections = [];

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});

io.sockets.on('connection', function(socket){
	connections.push(socket);
	console.log('Connected: %s sockets connected', connections.length);

	// Disconnect
	socket.on('disconnect', function(data) {
		
		connections.splice(connections.indexOf(socket), 1);
		console.log('Disconnected: %s sockets connected', connections.length);
	});

	// Send Message
	socket.on('send message', function(data) {
		console.log(data);
		io.sockets.emit('new message', {msg: data});
	});

});