import React, { ReactNode, createContext, useContext } from "react";
import { useSocket } from "../hooks";
import { Socket } from "socket.io-client";

const URL_SOCKET = "http://localhost:3000";

interface SocketContextProps {
	socket: Socket;
	isOnline: boolean;
}

interface Props {
	children: ReactNode;
}

const SocketContext = createContext({} as SocketContextProps);

export const useSocketContext = () => useContext(SocketContext);

export const SocketProvider: React.FC<Props> = ({ children }) => {
	const { socket, isOnline } = useSocket(URL_SOCKET);

	const value: SocketContextProps = {
		socket,
		isOnline
	};

	return (
		<SocketContext.Provider value={value}>
			{children}
		</SocketContext.Provider>
	);

};