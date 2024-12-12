import { renderCandlestickChart } from './components/chart';
import { fetchTradingPairs } from './components/trading-pairs';

const initialize = async () => {
	try {
		await fetchTradingPairs();
		await renderCandlestickChart();
	} catch (error) {
		console.log(error);
	}
};

initialize();
