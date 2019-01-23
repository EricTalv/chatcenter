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

//Arrays to store users and connections
users = [];
connections = [];

io.on('connection', function(socket) {
    //push it to the Users Array
    users.push(createName);
    //Add connection to Connections array
    connections.push(socket);
    //Console Log Connected sockets
    console.log('Connected: %s sockets connected', connections.length);
    //Write to clients that a user has connected
    io.emit('connected', {
        time: new Date().toLocaleTimeString() + users.,
        sockets: connections.length
    });

    //When a User has Disconnected
    socket.on('disconnect', function(data) {
        //check usernames
        if(!socket.username) return;
        users.splice(users.indexOf(socket.username), 1);
        updateUsernames

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

    //Create a random username to new connection
    socket.on('new user', function(data, callback) {
        callback(true);
        socket.username = createName;
        users.push(socket.username);
    });


    //Retriev client Data
    socket.on('chat', function(data) {
        //Send client data
        io.emit('chat', data);
        console.log(data);
    });

    //Check if user is typing 
    socket.on('typing', () => {
        socket.broadcast.emit('typing', {

        });
    });

    //Check if user stopped typing 

    function updateUsernames(){
        io.sockets.emit('get users', usernames);
    }

});

//We make the http server listen on port 3000.
http.listen(3000, function() {
    console.log('listening on *:3000');
});