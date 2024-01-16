import ReactDOM from 'react-dom/client'
import { App } from './App'
import './styles/index.scss'
import { SocketProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<SocketProvider>
		<App />
	</SocketProvider>
	,
)
