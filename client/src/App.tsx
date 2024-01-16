import { Col, Divider, Row } from "antd";
import { BandAdd, BandList, ChartBand, Layout, Status } from "./components";
import { useSocketContext } from "./context";

import "./App.scss";

export const App = () => {
	const { isOnline } = useSocketContext();

	return (
		<Layout>
			<Status isOnline={isOnline} className="app__status" />
			<div className="app__title">
				<h1>BandNames</h1>
			</div>
			<Divider plain />
			<Row>
				<Col span={24}>
					<ChartBand />
				</Col>
			</Row>
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
