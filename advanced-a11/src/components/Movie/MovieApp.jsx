import { useEffect, useState } from "react";
import MovieAPI from "../../api/movieAPI";
import MovieCard from "./MovieCard";
import './MovieApp.css'

/**
 * @typedef MovieCardProps
 * @property {Object} movie
 * @property {string} movie.Title
 * @property {string} movie.Year
 * @property {string} movie.Poster
 * @property {string} movie.imdbID
 * @property {string} movie.Type
 */

/**
 * @typedef MovieFetchResult
 * @property {MovieCardProps[]} Search
 * 
 */

function MovieApp() {

    /**
     * @type {[MovieCardProps[], Function]}
     */
    const [movies, setMovies] = useState([])

    useEffect(() => {
        /**
         * @type {Promise<MovieFetchResult>}
         */
        const result = MovieAPI.fetchMovies()

        result.then(data => {
            setMovies(data.Search)
        })

    }, [])

    return (
        <div className="movie-container">
            {
                movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />)
            }
        </div>
    );
}

export default MovieApp;