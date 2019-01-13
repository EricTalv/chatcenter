let express = require('express');
let socket = require('socket.io')
let app = express();

let server = app.listen(4000, ()=> {
    console.log('listddening');
});

app.use(express.static('public'));
let io = socket(server);

io.on('connection', socket => {
    console.log('connection', socket.id);
    socket.on('chat',data => {
        console.log(data);
        io.sockets.emit('chat',data);
    })
})