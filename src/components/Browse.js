
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import MainContainer from "./MainContainer";
import MainContainer from "./MainContainer";

import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
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
