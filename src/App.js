import { useEffect, useState } from 'react';

function Hello() {
	function destroyedFn() {
		console.log('bye');
	}
	function effectFn() {
		console.log("I'm here");
		return destroyedFn;
	}
	useEffect(effectFn, []);
	return <h1>Hello</h1>;
}

function App() {
	const [showing, setShowing] = useState(false);
	function onClick() {
		setShowing(prev => !prev);
	}

	return (
		<div className="App">
			{showing ? <Hello /> : null}
			<button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
		</div>
	);
}

export default App;
