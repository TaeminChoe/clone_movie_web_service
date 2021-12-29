import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	async function getMovies() {
		const json = await (
			await fetch(
				"https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year",
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	}
	console.log(movies);

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div className="App">
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{movies.map(movie => (
						<Movie movie={movie} key={movie.id} />
					))}
				</div>
			)}
		</div>
	);
}
