
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import MainContainer from "./MainContainer";
import MainContainer from "./MainContainer";

import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header/>
     {
     showGptSearch?(<GptSearch/>):<> <MainContainer/>
       <SecondaryContainer/></>}
      {/* main container
      -videoBackground
      -videoTitle
      secondary container
      -movieList
      -cards
       */}
      
    </div>
  )
}

export default Browse;
