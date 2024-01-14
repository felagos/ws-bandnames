import { Button, Table } from "antd";
import { Band } from "../../models";

import './BandList.scss';

interface Props {
	bands: Band[],
	addVote: (id: string) => () => void;
}

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

const createDataSource = (bands: Band[]) => bands.map(band => ({
	key: band.id,
	name: band.name,
	votes: band.votes
}));


export const BandList = ({ bands, addVote }: Props) => {
	const deleteBand = () => () => null;

	const data = createDataSource(bands);
	const dataSource = data.map(d => (
		{
			...d,
			vote: <Button onClick={addVote(d.key)} type="primary" className="table__btn--50">+1</Button>,
			delete: <Button onClick={deleteBand()} type="primary" danger className="table__btn--50">Borrar</Button>
		}
	));

	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			pagination={false}
			rowClassName="table"
			bordered
		/>
	);
}