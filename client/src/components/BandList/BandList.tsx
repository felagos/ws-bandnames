import { Button, Table } from "antd";
import { useState } from "react";
import './BandList.scss';

const data = [
	{
		name: 'Mike',
		votes: 32,
	},
	{
		name: 'John',
		votes: 42,
	},
];

const columns = [
	{
		title: '',
		dataIndex: 'add',
		key: 'add'
	},
	{
		title: 'Nombre',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Votos',
		dataIndex: 'votes',
		key: 'votes',
	},
	{
		title: 'Borrar',
		dataIndex: 'delete',
		key: 'delete',
	},
];


export const BandList = () => {
	const deleteBand = () => () => null;
	const addBand = () => () => null;

	const [dataSource] = useState(() => data.map(d => (
		{ ...d, 
			add: <Button onClick={addBand()} type="primary">+1</Button>,
			delete: <Button onClick={deleteBand()} type="primary" danger>Borrar</Button> }
	)))

	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			pagination={false}
			rowClassName="table--center"
			bordered
		/>
	);
}