
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import MainContainer from "./MainContainer";
import MainContainer from "./MainContainer";

import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header/>
      {/* main container
      -videoBackground
      -videoTitle
      secondary container
      -movieList
      -cards
       */}
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  )
}

export default Browse;
