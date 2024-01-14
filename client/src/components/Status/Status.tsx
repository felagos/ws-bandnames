import { Alert } from "antd";

interface Props {
	className?: string;
}

export const Status = ({ className }: Props) => {
	return (
		<Alert message="Status Online" type="success" showIcon className={className} />
	);
};