import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    /**
     * MovieList -Popular
     *  multiple MovieCards
     * MovieList - Now Playing
     * MovieList - Trending
     * etc
     */

    const movies = useSelector((store) => store.movies);
    return (
        <div className="bg-black">
            <div className="-mt-52 bg-transparent relative z-20 ">
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Most Popular"} movies={movies.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
            </div>
        </div>
    );
}

export default SecondaryContainer;