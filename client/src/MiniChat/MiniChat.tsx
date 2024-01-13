import { io } from 'socket.io-client';
import "./MiniChat.scss";
import { useEffect } from 'react';

const socket = io('http://localhost:3000');

function MiniChat() {

  useEffect(() => {
    socket.on('message-welcome', (payload) => {
      console.log(payload);
    });
  }, []);

  useEffect(() => {
    socket.emit('message-client', { message: 'Hello from Client!' });
  }, []);

  return (
    <div className="chat">
      <h1>Mini Chat</h1>
    </div>
  )
}

export default MiniChat
