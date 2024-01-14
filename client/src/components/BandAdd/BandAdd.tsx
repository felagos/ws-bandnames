import { Form, Input } from "antd";

export const BandAdd = () => {
	return (
		<>
			<h3>Agregar Banda</h3>
			<Form>
				<Input placeholder="Nuevo nombre de banda" />
			</Form>
		</>
	);
}