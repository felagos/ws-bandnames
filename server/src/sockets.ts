import { Server } from "socket.io";

export class Sockets {

	private readonly io: Server;

	constructor(io: Server) {
		this.io = io;

		this.socketEvents();
	}

	socketEvents() {
		this.io.on('connection', (socket) => {

			socket.on('mensaje-to-server', (data) => {
				console.log(data);

				this.io.emit('mensaje-from-server', data);
			});
		});
	}
}
