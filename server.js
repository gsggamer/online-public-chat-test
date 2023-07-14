/*const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
 console.log('Um cliente se conectou');

 socket.on('chat message', (message) => {
  io.emit('chat message', message);
 });

 socket.on('disconnect', () => {
  console.log('Um cliente se desconectou');
 });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
 console.log(`Servidor escutando na porta ${port}`);
});
*/

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('Um cliente se conectou');

  socket.on('chat message', (message) => {
   io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
   console.log('Um cliente se desconectou');
  });
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
 console.log(`Servidor escutando na porta ${port}`);
});
