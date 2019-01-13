//Exrpessjs is a JavaScript Function, designed to be passed 
//to node's HTTP servers as a callback to handle requests
//Import Express to App
var app = require('express')();

//transfer data over the Hyper Text Transfer Protocol (HTTP).
//Import HTTP 
//The HTTP module can create an HTTP server that 
//listens to server ports and gives a response back to the client.
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});