import { v4 as uuid } from 'uuid';

export class Band {

	private id: string

	constructor(
		private readonly name: string,
		private readonly votes: number = 0
	) {
		this.id = uuid();
	}

	getName(): string {
		return this.name;
	}

	getVotes(): number {
		return this.votes;
	}

	getId(): string {
		return this.id;
	}

}
