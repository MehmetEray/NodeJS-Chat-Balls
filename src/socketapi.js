 const socketio = require('socket.io');
 const io = socketio();
 const socketapi = { };

 socketapi.io = io
 io.on('connection',(socket) => {
    console.log('A user connected')
 });
 module.exports = socketapi;