import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants.";

const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
const nowPlayinMovies=useSelector(store=>store.movies.nowPlayingMovies);

  const getNowPlayingMovies=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",options);
    const json=await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));

  };
  useEffect(()=>{
    if(!nowPlayinMovies) getNowPlayingMovies();},[]);
}
export default useNowPlayingMovies;
