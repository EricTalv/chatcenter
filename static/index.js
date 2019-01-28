$(function() {

    //Initialize variables
    var $messageArea = $('#message-area');
    var $InputMessage = $('#input-message');
    var $InputName = $('#input-username');
    var $window = $(window);
    var $users = $('#users');

    //Initialize Socket
    var socket = io();

    Create random user ID
    function createName() {
        var minNumber = 1;
        var maxNumber = 300;
        var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        var newName = "ID" + randomNumber;
        return newName;
    }

    const sendName = () => {
        var minNumber = 1;
        var maxNumber = 300;
        var randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        var newName = "ID" + randomNumber;

        socket.emit('new user', newName);
    }

    //Assign random name
    $InputName.val(createName);

    //Check when a user has pressed enter
    $window.keydown(function(event) {
        // When the client hits ENTER on their keyboard
        if (event.which === 13) {
            //Send the server Your message & Name
            socket.emit('chat', {
                message: $InputMessage.val(),
                name: $InputName.val()
            });
            $InputMessage.val('');
        }
    });


    //Display Connected
    socket.on('connected', function(data) {
        $messageArea.append($('<li>').text(data['time']));
        $users.append($('<li>').text(data['sockets']))

    })

    //Display Disconnected
    socket.on('disconnected', function(data) {
        $messageArea.append($('<li>').text(data['time']));
        $users.append($('<li>').text(data['sockets']))
    })

    //Retrieve Data from server and
    //Display on DOM
    socket.on('chat', function(data) {
        $messageArea.append('<li>' + data['name'] + ' ' + data['message'] + '</li>');
    });

    //emit saadab
    //on kuulab


});