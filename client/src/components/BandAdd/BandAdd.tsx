import { Button, Input } from "antd";
import { useState } from "react";

import './BandAdd.scss';
import { useSocketContext } from "../../context";

export const BandAdd = () => {
	const [name, setName] = useState('');
	const [isDisabled, setIsDisabled] = useState(true);

	const { socket } = useSocketContext();

	
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim()
		if (value.length === 0) setIsDisabled(true);
		else {
			setName(value);
			setIsDisabled(false);
		}
	}

	const addBand = () => {
		socket.emit('add-band', name);
	};

	return (
		<>
			<h3>Agregar Banda</h3>
			<div className="add-form">
				<div className="add-form__item">
					<Input placeholder="Nuevo nombre de banda" size="large" onChange={onChange} />
					<Button onClick={addBand} type="primary" disabled={isDisabled}>Agregar</Button>
				</div>
			</div>
		</>
	);
}