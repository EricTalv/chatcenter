$(function() {
  
  //Initialize variables
  var $messageArea = $('#messages');
  var $InputMessage = $('#InputMessage');
  var $InputName = $('#InputName');

  //Initialize Socket
  var socket = io();

  //Send the server Your message
  socket.emit('chat message', $InputMessage);
  



});
