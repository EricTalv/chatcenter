let socket = io.connect('http://localhost:4000');

let message = document.getElementById('message');
let handle = document.getElementById('handle');
let send = document.getElementById('send');
let output = document.getElementById('messages');


//Emit events
send.addEventListener('click', ()=> {
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
});

//Listen

socket.on('chat', data => {
    output.innerHTML += '<p><strong> '+
     data.handle+':</strong>'+ data.message+'</p>'
});