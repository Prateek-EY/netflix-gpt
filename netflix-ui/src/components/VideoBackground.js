import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  useMovieTrailer(movieId);
  const selector = useSelector(store => store.movies?.trailerVideo);
   return (
    <div className='w-screen'>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+selector?.key+"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
};

export default VideoBackground;