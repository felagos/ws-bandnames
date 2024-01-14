import { Band } from "./band";

export class BandList {

	private bands: Band[] = [];

	constructor() {
		this.bands.push(
			new Band('Metallica'),
			new Band('Queen'),
			new Band('Bon Jovi'),
			new Band('Heroes del Silencio'),
		);
	}

	addBand(band: Band) {
		this.bands.push(band);
	}

	removeBand(id: string) {
		this.bands = this.bands.filter(band => band.getId() !== id);
	}

	addVote(id: string) {
		this.bands = this.bands.map(band => {
			if (band.getId() === id) {
				band.addVote();
			}
			return band;
		});
	}

	changeName(id: string, newName: string) {
		this.bands = this.bands.map(band => {
			if (band.getId() === id) {
				band.setName(newName);
			}
			return band;
		});
	}

	getBands(): Band[] {
		return this.bands;
	}

}