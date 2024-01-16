import { Server } from "socket.io";
import { Band, BandList } from "./models";

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

			socket.on('add-vote', (id: string) => {
				this.bandList.addVote(id);
				this.io.emit('current-bands', this.bandList.getBands());
			});

			socket.on('delete-band', (id: string) => {
				this.bandList.removeBand(id);
				this.io.emit('current-bands', this.bandList.getBands());
			});

			socket.on('add-band', (name: string) => {
				const band = new Band(name);
				this.bandList.addBand(band);
				this.io.emit('current-bands', this.bandList.getBands());
			});
			
		});
	}
}
