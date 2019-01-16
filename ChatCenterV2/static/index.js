$(function() {
  
  //Initialize variables
  var $messageArea = $('#message-area');
  var $InputMessage = $('#input-message');
  var $InputName = $('#input-username');
  var $window = $(window);

  //Initialize Socket
  var socket = io();

  //Check when a user has pressed enter
  $window.keydown(function (event) {
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
  socket.on('connected', function (data) {
    $messageArea.append($('<li>').text(data));
  })

  //Display Disconnected
  socket.on('disconnected', function (data) {
    $messageArea.append($('<li>').text(data));
  })

  //Retrieve Data from server and
  //Display on DOM
  socket.on('chat', function (data) {
    $messageArea.append('<li>' + data['name'] + ' ' + data['message'] + '</li>');
  });



  //emit saadab
  //on kuulab


});
