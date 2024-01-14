import { useEffect, useState } from "react";
import { Col, Divider, Row } from "antd";
import { BandAdd, BandList, Layout, Status } from "./components";
import io from "socket.io-client";

import "./App.scss";

const connectSocket = () => {
	const socket = io("http://localhost:3000");

	return socket;
}

export const App = () => {
	const [socket] = useState(connectSocket());
	const [isOnline, setIsOnline] = useState(false);

	useEffect(() => {
		setIsOnline(socket.connected);
	}, [socket.connected, socket]);

	return (
		<Layout>
			<Status isOnline={isOnline} className="status" />
			<h1>BandNames</h1>
			<Divider plain />
			<Row gutter={[24, 24]}>
				<Col span={12}>
					<BandList />
				</Col>
				<Col span={12}>
					<BandAdd />
				</Col>
			</Row>
		</Layout>
	);
}