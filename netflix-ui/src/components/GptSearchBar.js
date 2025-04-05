import { useRef } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";


const GptSearchBar = () => {
  const searchText =  useRef(null);
  const dispatch = useDispatch();
  const hanldeGptSearchClick = async () => {
  fetchMovie(searchText.current.value)
                      .then(data => {
                        dispatch(addGptMovieResult(data));
                        
                      });
    
  };

  const fetchMovie = async (movieName) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movieName+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  return (
    <div className="pt-[10%] flex justify-center">
        <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
            <input ref={searchText} type="text" className="p-4 m-4 col-span-9" placeholder="what would you like to watch today" />
            <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3" onClick={hanldeGptSearchClick}>Search</button>
        </form>
    </div>
  )
};

export default GptSearchBar;