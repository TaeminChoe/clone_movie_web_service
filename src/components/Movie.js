import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Movie.propTypes = {
	movie: PropTypes.shape({
		medium_cover_image: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		summary: PropTypes.string.isRequired,
		genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	}).isRequired,
};

export default function Movie({ movie }) {
	return (
		<div>
			<img src={movie.medium_cover_image} />
			<h1>
				<Link to={`/movie/${movie.id}`}>{movie.title}</Link>
			</h1>
			<p>{movie.summary}</p>
			<ul>
				{movie.genres.map((genre, index) => (
					<li key={index}>{genre}</li>
				))}
			</ul>
		</div>
	);
}
