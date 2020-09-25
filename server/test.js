var express = require('express');
const SocketIO = require('socket.io');



var app = express();

const server = app.listen(3000, function () {
    console.log("Servidor en marcha: ");
});

const io = SocketIO(server);

io.on('connection', (socket) =>{
    
})



