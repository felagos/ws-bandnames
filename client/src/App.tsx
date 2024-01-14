import { Col, Divider, Row } from "antd";
import { BandAdd, BandList, Layout, Status } from "./components";

import "./App.scss";

export const App = () => {
	return (
		<Layout>
			<div>
				<Status className="status" />
			</div>
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