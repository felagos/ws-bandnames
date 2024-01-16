import Chart from 'chart.js/auto';
import { useCallback, useEffect, useRef } from 'react';
import { useSocketContext } from '../../context';
import { Band } from '../../models';

export const ChartBand = () => {
	const { bands } = useSocketContext();
	const refCanvas = useRef<HTMLCanvasElement>(null);
	const chartRef = useRef<Chart | null>(null); // Add this line

	const createChart = useCallback((bands: Band[] = []) => {
		if (chartRef.current) { // Add this block
			chartRef.current.destroy();
			chartRef.current = null;
	}

	if (refCanvas.current) {
			chartRef.current = new Chart(refCanvas.current, {
					type: 'bar',
					data: {
							labels: bands.map(b => b.name),
							datasets: [{
									label: '# of Votes',
									data: bands.map(b => b.votes),
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
	}
	}, [])

	useEffect(() => {
		createChart();
	}, [bands, createChart]);

	return (
		<canvas ref={refCanvas}></canvas>
	);

};