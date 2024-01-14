import { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import { BandAdd, BandList, Layout, Status } from "./components";
import io from "socket.io-client";

import "./App.scss";


const connectSocket = () => {
	const socket = io("http://localhost:3000");
	return socket;
}

const socket = connectSocket();

export const App = () => {
	const [isOnline, setIsOnline] = useState(socket.connected);

	useEffect(() => {
		socket.on('connect', () => {
			setIsOnline(true);
		});
		
		socket.on('disconnect', () => {
			setIsOnline(false);
		});
	}, []);

	return (
		<Layout>
			<Status isOnline={isOnline} className="app__status" />
			<div className="app__title">
				<h1>BandNames</h1>
			</div>
			<Divider plain />
			<Row gutter={[16, 16]}>
				<Col xl={12} sm={24} xs={24}>
					<BandList />
				</Col>
				<Col xl={12} sm={24} xs={24}>
					<BandAdd />
				</Col>
			</Row>
		</Layout>
	);
}
