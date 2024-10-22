import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/Constants';
import { addNowPlayingMovies } from '../utils/moviesSlice';
import { useDispatch } from 'react-redux';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);

        const jsonData = await data.json();

        dispatch(addNowPlayingMovies(jsonData.results));
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

}

export default useNowPlayingMovies;