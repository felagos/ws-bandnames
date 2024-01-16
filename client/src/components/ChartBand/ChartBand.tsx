import Chart from 'chart.js/auto';
import { useCallback, useRef } from 'react';
import { useSocketContext } from '../../context';

export const ChartBand = () => {
	const { bands } = useSocketContext();
	const refChart = useRef<Chart<"bar", number[], string>>();

	const bandsName = bands.map(b => b.name);

	const refCanvas = useCallback((node: HTMLCanvasElement) => {
		refChart.current?.destroy();

		new Chart(node, {
			type: 'bar',
			data: {
				labels: bandsName,
				datasets: [{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					borderWidth: 1
				}]
			},
			options: {
				indexAxis: 'y',
				scales: {
					y: {
						stacked: true,
					}
				}
			}
		});
	}, [])

	return (
		<canvas ref={refCanvas}></canvas>
	);

};