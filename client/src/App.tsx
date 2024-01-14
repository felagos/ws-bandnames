import { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import { BandAdd, BandList, Layout, Status } from "./components";
import io from "socket.io-client";

import "./App.scss";
import { Band } from "./models";


const connectSocket = () => {
	const socket = io("http://localhost:3000");
	return socket;
}

const socket = connectSocket();

export const App = () => {
	const [isOnline, setIsOnline] = useState(socket.connected);
	const [bands, setBands] = useState<Band[]>([]);

	useEffect(() => {
		socket.on('connect', () => {
			setIsOnline(true);
		});

		socket.on('disconnect', () => {
			setIsOnline(false);
		});
	}, []);

	useEffect(() => {
		socket.on('current-bands', (bands: Band[]) => {
			setBands(bands);
		});
	}, []);

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
