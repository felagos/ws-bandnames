import { io } from 'socket.io-client';
import "./App.scss";

io('http://localhost:3000');

function App() {

  return (
    <div className="chat">
    <h1>Mini Chat</h1>
    </div>
  )
}

export default App
