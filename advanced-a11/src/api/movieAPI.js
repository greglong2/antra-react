const MovieAPI = (() => {
    const baseURL = "https://www.omdbapi.com/"

    const fetchMovies = async () => {
        try {
            const response = await fetch(baseURL + "?s=starwars&apikey=263d22d8")
            const data = await response.json()
            return data
        } catch (error) {
            console.error("Error fetching movies", error)
        }
    }

    const fetchMovie = async (id) => {
        try {
            const response = await fetch(`${baseURL}?i=${id}&apikey=263d22d8`)
            const data = await response.json()
            return data
        } catch (error) {
            console.error("Error fetching movie", error)
        }
    }


    return {
        fetchMovies,
        fetchMovie
    }
})();

export default MovieAPI