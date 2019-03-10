$(function() {

    //Initialize variables
    var $messageArea = $('#message-area');
    var $InputMessage = $('#input-message');
    var $Username = $('#username');
    var $window = $(window);
    var $users = $('#users');

    //Initialize Socket
    var socket = io();

    //Check when a user has pressed enter
    $window.keydown(function(event) {
        // When the client hits ENTER on their keyboard
        if (event.which === 13) {
            //Send the server Your message & Name
            socket.emit('chat', {
                message: $InputMessage.val(),
                name: $Username.val()
            });
            $InputMessage.val('');
        }
    });


    //Display Connected
    socket.on('connected', function(data) {
        //Show on message board the time when a user connected
        $messageArea.append($('<li>').text(data['time']));
        //Add new user to the userboard
        $users.append($('<li>').text(data['username']))
    });

    //Display Disconnected
    socket.on('disconnected', function(data) {
        $messageArea.append($('<li>').text(data['time']));
        $('#users li').last().remove();
    });

    //Retrieve Data from server and
    //Display on DOM
    socket.on('chat', function(data) {
        $messageArea.append('<li>' + data['name'] + ' ' + data['message'] + '</li>');
    });

    //emit saadab
    //on kuulab

});