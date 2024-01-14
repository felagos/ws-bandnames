import { Col, Row } from "antd";
import { BandAdd, BandList } from "./components";

export const App = () => {
	return (
		<div>
			<h1>React App</h1>
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