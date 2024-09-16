import('./MovieCard.css');
import { useEffect, useState } from 'react';
import noImage from '../../assets/no-image.png';
import MovieAPI from '../../api/movieAPI';
/**
 * @typedef {import('./MovieApp').MovieCardProps} MovieCardProps
 */

/**
 * 
 * @param {{movie: MovieCardProps}} movie 
 * @returns {JSX.Element}
 */
function MovieCard({ movie }) {

    /**
     * @typedef MovieSearchResult
     * @property {string} Title
     * @property {string} Year
     * @property {string} imdbID
     * @property {string} Type
     * @property {string} Poster
     * @property {number} imdbRating
     */

    /**
     * @type {[MovieSearchResult, Function]}
     */
    const [movieInfo, setMovieInfo] = useState({})

    useEffect(() => {
        /**
         * @type {Promise<MovieSearchResult>}
         */
        const result = MovieAPI.fetchMovie(movie.imdbID)

        result.then(data => {
            setMovieInfo(data)
        })
    }, [movie])

    return (
        <div className="movie-card">

            <img className="movie-card-image" src={movie.Poster == "N/A" ? noImage : movie.Poster} alt={movie.Title} />
            <h3 className="movie-card-title">{movie.Title}</h3>
            <span>Released - {movie.Year}</span>
            <span>Type - {movie.Type}</span>
            <span>Rating - {movieInfo.imdbRating}</span>

        </div>
    );
}

export default MovieCard;