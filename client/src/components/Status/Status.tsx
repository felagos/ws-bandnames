import { Alert } from "antd";

interface Props {
	isOnline: boolean;
	className?: string;
}

export const Status = ({ isOnline, className }: Props) => {
	const type = isOnline ? "success" : "error";
	const message = isOnline ? "Status Online" : "Status Offline";

	return (
		<Alert message={message} type={type} showIcon className={className} />
	);
};