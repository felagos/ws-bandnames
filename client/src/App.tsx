import { Col, Divider, Row } from "antd";
import { BandAdd, BandList } from "./components";

export const App = () => {
	return (
		<div>
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

		</div>
	);
}