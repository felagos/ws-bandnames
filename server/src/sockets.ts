import { Server } from "socket.io";
import { BandList } from "./models";

export class Sockets {

	private readonly io: Server;
	private bandList = new BandList();

	constructor(io: Server) {
		this.io = io;

		this.socketEvents();
	}

	socketEvents() {
		this.io.on('connection', (socket) => {
			console.log('Client connected');

			socket.emit('current-bands', this.bandList.getBands());

			socket.on('disconnect', () => {
				console.log('user disconnected');
			});
		});
	}
}
