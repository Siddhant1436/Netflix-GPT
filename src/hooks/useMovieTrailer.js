import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/Constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const getMovieVideos = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
        const jsonData = await data.json();

        const filterData = jsonData.results.filter(video => video.type === "Trailer");

        const trailer = filterData.length ? filterData[0] : jsonData[0];

        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;