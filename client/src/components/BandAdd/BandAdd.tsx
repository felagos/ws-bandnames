import { Button, Input } from "antd";
import { useState } from "react";

import './BandAdd.scss';
import { useSocketContext } from "../../context";

interface Props {
	addBand: (name: string) => () => void;
}

export const BandAdd = ({ addBand }: Props) => {

	const [name, setName] = useState('');
	useSocketContext();

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > 0) return;
		setName(e.target.value);
	}

	return (
		<>
			<h3>Agregar Banda</h3>
			<div className="add-form">
				<div className="add-form__item">
					<Input placeholder="Nuevo nombre de banda" size="large" onChange={onChange} />
					<Button onClick={addBand(name)} type="primary">Agregar</Button>
				</div>
			</div>
		</>
	);
}