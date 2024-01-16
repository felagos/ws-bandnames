import { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import { BandAdd, BandList, Layout, Status } from "./components";
import { Band } from "./models";
import { useSocket } from "./hooks";

import "./App.scss";

const URL_SOCKET = "http://localhost:3000";


export const App = () => {
	const { socket, isOnline } = useSocket(URL_SOCKET);
	const [bands, setBands] = useState<Band[]>([]);

	useEffect(() => {
		socket.on('current-bands', (bands: Band[]) => {
			setBands(bands);
		});
	}, [socket]);

	const addVote = (id: string) => () => {
		socket.emit('add-vote', id);
	};

	const deleteBand = (id: string) => () => {
		socket.emit('delete-band', id);
	};

	const addBand = (name: string) => () => {
		socket.emit('add-band', name);
	};

	return (
		<Layout>
			<Status isOnline={isOnline} className="app__status" />
			<div className="app__title">
				<h1>BandNames</h1>
			</div>
			<Divider plain />
			<Row gutter={[16, 16]}>
				<Col xl={12} sm={24} xs={24}>
					<BandList bands={bands} addVote={addVote} deleteBand={deleteBand} />
				</Col>
				<Col xl={12} sm={24} xs={24}>
					<BandAdd addBand={addBand} />
				</Col>
			</Row>
		</Layout>
	);
}
