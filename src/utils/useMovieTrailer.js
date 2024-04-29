import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from './movieSlice';
import { options } from './constants.';

const useMovieTrailer = (movieId) => {
    
    const dispatch=useDispatch();
    //fetch trailer
    const trailerVideo=useSelector(store=>store.movies.trailerVideo);
  const getMovieVideos=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",options);
    const json=await data.json();
    console.log(json);
    const filterData=json.results.filter(video=>video.type==="Trailer");
    console.log(filterData);
    const trailer=filterData.length?filterData[0]:json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  }
  useEffect(()=>{
    !trailerVideo && getMovieVideos();
  },[])
}

export default useMovieTrailer
