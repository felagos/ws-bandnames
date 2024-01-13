import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { envs } from './config/envs';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(envs.PORT, () => {
  console.log(`listening on *:${envs.PORT}`);
});