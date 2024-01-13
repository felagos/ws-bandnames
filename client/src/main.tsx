import React from 'react'
import ReactDOM from 'react-dom/client'
import MiniChat from './MiniChat/MiniChat.tsx'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MiniChat />
  </React.StrictMode>,
)
