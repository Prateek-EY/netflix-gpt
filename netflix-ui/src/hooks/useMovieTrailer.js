import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        const trailers = json.results.filter(video => video.type == "Trailer");
        const trailer = trailers.length ? trailers[0]: json.results[0];
        dispatch(addTrailerVideo(trailer));
      };
  
      useEffect(() => {
          getMovieVideos();
      }, []);
};

export default useMovieTrailer;