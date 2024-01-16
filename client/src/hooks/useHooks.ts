import { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";

const connectSocket = (url: string) => {
	return io(url);
}

export const useSocket = (url: string) => {
	const socket = useMemo(() => connectSocket(url), [url]);
	const [isOnline, setIsOnline] = useState(false);

	useEffect(() => {
		socket.on('connect', () => {
			setIsOnline(true);
		});

		socket.on('disconnect', () => {
			setIsOnline(false);
		});

		return () => {
			socket.disconnect();
		}

	}, [socket]);

	return {
		socket,
		isOnline
	}
}