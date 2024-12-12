export const fetchTradingPairs = async () => {
	const response = await fetch(
		'https://api4.binance.com/api/v3/ticker/24hr'
	);
	const data = await response.json();

	const pairsList = document.getElementById('pairsList');
	pairsList.innerHTML = '';

	data.forEach(pair => {
		if (pair.symbol.endsWith('USDT')) {
			const formattedPair = `${pair.symbol.slice(
				0,
				-4
			)}/${pair.symbol.slice(-4)}`;
			const option = document.createElement('option');
			option.value = pair.symbol;
			option.textContent = formattedPair;
			pairsList.appendChild(option);
		}
	});
};
