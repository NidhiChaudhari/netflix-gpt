import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {results,movieNames}=useSelector(store=>store.gpt);
  if (!Array.isArray(movieNames) || !movieNames.length) return null;
  if (!movieNames) return null;
  return (
    <div className=" p-4 m-4 bg-black text-white bg-opacity-90">
    {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={results[index]}
          />
        ))}
    
      
    </div>
  )
}

export default GptMovieSuggestions;
