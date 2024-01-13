import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { envs } from './config/envs';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: envs.CORS
  }
});

io.on('connection', (socket) => {
  console.log('a user connected with id', socket.id);
  socket.emit('message-welcome', 'Hello from server');
});

server.listen(envs.PORT, () => {
  console.log(`listening on *:${envs.PORT}`);
});