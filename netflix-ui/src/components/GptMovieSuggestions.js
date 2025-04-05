import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const {showGptSearch, gptMovies} = useSelector(store => store.gpt);
  if(!gptMovies) return null;
  console.log(gptMovies);
  return (
    <div className="p-4 m-4 bg-black">
      <div>
          {gptMovies?.map(movie => <MovieList title={movie?.title} movies={gptMovies} />)}
      </div>
    </div>
  )
};

export default GptMovieSuggestions;