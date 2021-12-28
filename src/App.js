import { useEffect, useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	function onSubmit(event) {
		event.preventDefault();
		if (toDo === "") {
			return;
		}
		setToDos(prev => [toDo, ...prev]);
		setToDo("");
	}
	function onChange(event) {
		setToDo(event.target.value);
	}

	return (
		<div className="App">
			<h1>My To Dos {toDos.length}</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					type="text"
					placeholder="Write your to do..."
				/>
				<button>Add To Do</button>
			</form>
			<hr />
			<ul>
				{toDos.map((toDO, index) => (
					<li key={index}>{toDO}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
