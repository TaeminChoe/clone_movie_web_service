import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [bit, setBit] = useState({});
	const [usd, setUsd] = useState(0);
	const [toBit, setToBit] = useState(0);

	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/ticker")
			.then(res => res.json())
			.then(json => {
				setCoins(json);
				setLoading(false);
			});
	}, []);

	function onSelect(event) {
		if (usd) {
			const currBit = coins.find(coin => coin.id === event.target.value);
			console.log(`use: ${usd}, name: ${bit.id}`);
			setBit(currBit);
			setToBit(usd / Number(currBit.price_usd));
		}
	}

	function onChange(event) {
		setUsd(Number(event.target.value));
	}

	return (
		<div className="App">
			<h1>Temm Bit! {loading ? "" : `(${coins.length})`}</h1>
			{loading ? (
				<span>Loading...</span>
			) : (
				<div>
					<form
						onSubmit={event => {
							event.preventDefault();
						}}
					>
						<input
							onChange={onChange}
							type="text"
							placeholder="how much is it?"
						/>
						<span>USD to Bit: </span>
						<span>{toBit}</span>
					</form>
					<select onChange={onSelect}>
						<option default>Select coin</option>
						{coins.map(coin => (
							<option key={coin.id} value={coin.id}>
								{coin.name} ({coin.symbol}): {coin.price_usd}
							</option>
						))}
					</select>
				</div>
			)}
		</div>
	);
}

export default App;
