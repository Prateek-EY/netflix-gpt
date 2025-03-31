import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GPTSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
         <img 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/50fcc930-ba3f-4cae-9257-9f920e30a998/web/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_large.jpg" alt='logo'></img>
        </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
};

export default GPTSearch;