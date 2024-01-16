import { Layout as LayoutAnt } from "antd";

import './Layout.scss';

interface Props {
	children: React.ReactNode | React.ReactNode[];
}

export const Layout =  ({ children }: Props) => (
	<LayoutAnt className="layout">
		{children}
	</LayoutAnt>
)