import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopular = () => {
    const dispatch = useDispatch();
    const getPopularPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularPlayingMovies();
  },[]);
};

export default usePopular