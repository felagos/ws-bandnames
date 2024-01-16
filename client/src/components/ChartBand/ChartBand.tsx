import Chart from 'chart.js/auto';
import { useCallback } from 'react';

export const ChartBand = () => {
	const refCanvas = useCallback((node: HTMLCanvasElement) => {
		new Chart(node, {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: [{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					borderWidth: 1
				}]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	}, [])

	return (
		<canvas ref={refCanvas}></canvas>
	);

};