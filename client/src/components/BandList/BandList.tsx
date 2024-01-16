import { useCallback, useMemo } from "react";
import { Button, Table } from "antd";

import { useSocketContext } from "../../context";

import './BandList.scss';

const columns = [
	{
		title: '',
		dataIndex: 'vote',
		key: 'vote'
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
	const { socket, bands } = useSocketContext();

	const addVote = useCallback((id: string) => () => {
		socket.emit('add-vote', id);
	}, [socket]);

	const deleteBand = useCallback((id: string) => () => {
		socket.emit('delete-band', id);
	}, [socket]);

	const dataSource = useMemo(() => {
		return bands.map(d => (
			{
				key: d.id,
				name: d.name,
				votes: d.votes,
				vote: <Button onClick={addVote(d.id)} type="primary" className="table__btn">+1</Button>,
				delete: <Button onClick={deleteBand(d.id)} type="primary" danger className="table__btn">Borrar</Button>
			}
		));
	}, [addVote, bands, deleteBand])


	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			pagination={false}
			className="table"
			rowClassName="table--center"
			bordered
		/>
	);
}