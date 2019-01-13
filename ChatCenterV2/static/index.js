$(function() {
  
  //Initialize variables
  var $messageArea = $('#messages');
  var $InputMessage = $('#InputMessage');
  var $InputName = $('#InputName');

  //Initialize Socket
  var socket = io();

  //Send the server Your message
const sendMessage = () => {
	var message = $InputMessage.val();
	
	socket.emit('chat message', message);
}

});
