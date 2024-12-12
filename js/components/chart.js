import { Chart } from 'chart.js/auto';
import 'chartjs-chart-financial';

const ctx = document
	.getElementById('candlestickChart')
	.getContext('2d');

let candlestickChart;

export const renderCandlestickChart = async (
	pair = 'BTCUSDT',
	interval = '1m'
) => {
	const url = `https://api4.binance.com/api/v3/klines?symbol=${pair}&interval=${interval}`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(data)

  // const chartData = data.map()
};
