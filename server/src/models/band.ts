import { v4 as uuid } from 'uuid';

export class Band {

	private id: string

	constructor(
		private name: string,
		private votes: number = 0
	) {
		this.id = uuid();
	}

	getName(): string {
		return this.name;
	}

	getVotes(): number {
		return this.votes;
	}

	addVote(): void {
		this.votes++;
	}

	setName(name: string): void {
		this.name = name;
	}

	getId(): string {
		return this.id;
	}

}
