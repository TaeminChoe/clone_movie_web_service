import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

export default function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);

	async function getMovieDetails() {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setLoading(false);
		console.log(json);
	}

	useEffect(() => {
		getMovieDetails();
	}, []);

	return <div>{loading ? <h1>loading...</h1> : null}</div>;
}
