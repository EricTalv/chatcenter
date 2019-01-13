//Exrpessjs is a JavaScript Function, designed to be passed 
//to node's HTTP servers as a callback to handle requests.
//Express initializes app to be a function handler 
//that you can supply to an HTTP server.
var app = require('express')();

//transfer data over the Hyper Text Transfer Protocol (HTTP).
//Import HTTP 
//The HTTP module can create an HTTP server that 
//listens to server ports and gives a response back to the client.
var http = require('http').Server(app);

//Socket.IO is a library that enables real-time, bidirectional 
//and event-based communication between the browser and the server
//nitialize a new instance of socket.io by passing the http (the HTTP server) object
var io = require('socket.io')(http);

//We define a route handler / that gets called when we hit our website home.
//the route handlers job is to map the route data and call the desired HttpHandler. 
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//listen on the connection event for incoming 
//sockets, and I log it to the console.
io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  //Fetch message and display in console
   socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

//We make the http server listen on port 3000.
http.listen(3000, function(){
  console.log('listening on *:3000');
});

