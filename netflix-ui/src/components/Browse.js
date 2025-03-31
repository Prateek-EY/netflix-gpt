import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer  from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from '../hooks/usePopular';
import GPTSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  useNowPlayingMovies();
  usePopular();
  const gptSelector = useSelector(store => store.gpt);
  return (
    <div>
      <Header />
      {
        gptSelector.showGptSearch ?
         <GPTSearch />
         :
         <>
         <MainContainer />
         <SecondaryContainer />
         </>
      }
    </div>
  );
};

export default Browse;