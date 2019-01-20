var express = require('express');

var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use("/static", express.static('./static/'));

//Arrays to store users and connections
users = [];
connections = [];

io.on('connection', function(socket) {
    //Add connection to Connections array
    connections.push(socket);
    //Console Log Connected sockets
    console.log('Connected: %s sockets connected', connections.length);
    //Write to clients that a user has connected
    io.emit('connected', {
        time: new Date().toLocaleTimeString() + " user connected",
        sockets: connections.length
    });

    //When a User has Disconnected
    socket.on('disconnect', function(data) {
        //Remove connection from Connections Array
        connections.splice(connections.indexOf(socket), 1);
        //Console Log Connected Sockets
        console.log('Disconnected: %s sockets connected', connections.length);
        //Write to clients that a user has Disconnected
        io.emit('disconnected', {
            time: new Date().toLocaleTimeString() + " user disconnected",
            sockets: connections.length
        });
    });

    //Retriev Client Data
    socket.on('chat', function(data) {
        io.emit('chat', data);
        console.log(data);
    });
});

//We make the http server listen on port 3000.
http.listen(3000, function() {
    console.log('listening on *:3000');
});