//Import Express framework module
var express = require('express');
//Initialize express Object
var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use("/static", express.static('./static/'));

function createName() {
    var minNumber = 1;
    var maxNumber = 300;node
    var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    var newName = "ID" + randomNumber;
    return newName;
}

//Arrays to store users and connections
users = [];
connections = [];

io.on('connection', function(socket) {
    //Assign connection a new username
    users.push(createName());
    //Add connection to Connections array
    connections.push(socket);
    //Console Log Connected sockets
    console.log('Connected: %s sockets connected', connections.length);

    var newUserID = users[connections.length - 1];

    //Write to clients that a user has connected
    io.emit('connected', {
        time: new Date().toLocaleTimeString() + " " + newUserID + " user connected",
        sockets: connections.length,
        username: newUserID
    });
    //When a User has Disconnected
    socket.on('disconnect', function(data) {
        //Remove connection from Connections Array
        connections.splice(connections.indexOf(socket), 1);
        //Console Log Connected Sockets
        console.log('Disconnected: %s sockets connected', connections.length);
        //Write to clients that a user has Disconnected
        io.emit('disconnected', {
            time: new Date().toLocaleTimeString() + " " + newUserID + " user disconnected",
            sockets: connections.length,
            username: newUserID
        });
    });

    //Retriev and send client Data/messages
    socket.on('chat', function(data) {
        //Send client data
        io.emit('chat', data);
        console.log(data);
    });

    //Check if user is typing 


    //Check if user stopped typing 


});

//We make the http server listen on port 3000.
http.listen(3000, function() {
    console.log('listening on *:3000');
});