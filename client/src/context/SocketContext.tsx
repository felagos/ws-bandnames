import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useSocket } from "../hooks";
import { Socket } from "socket.io-client";
import { Band } from "../models";

const URL_SOCKET = "http://localhost:3000";

interface SocketContextProps {
	socket: Socket;
	isOnline: boolean;
	bands: Band[];
}

interface Props {
	children: ReactNode;
}

const SocketContext = createContext({} as SocketContextProps);

export const useSocketContext = () => useContext(SocketContext);

export const SocketProvider: React.FC<Props> = ({ children }) => {
	const [bands, setBands] = useState<Band[]>([]);
	const { socket, isOnline } = useSocket(URL_SOCKET);

	useEffect(() => {
		socket.on('current-bands', (bands: Band[]) => {
			setBands(bands);
		});

		return () => {
			socket.off('current-bands');
		}
	}, [socket]);

	const value: SocketContextProps = {
		socket,
		isOnline,
		bands
	};

	return (
		<SocketContext.Provider value={value}>
			{children}
		</SocketContext.Provider>
	);

};