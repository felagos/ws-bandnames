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

	removeBand(name: string) {
		this.bands = this.bands.filter(band => band.getName() !== name);
	}

	getBands(): Band[] {
		return this.bands;
	}

}