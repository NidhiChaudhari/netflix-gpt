import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
// import openai from '../utils/openai'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEM_KEY, options } from '../utils/constants.';
import { addGenMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch=useDispatch()
  const langKey=useSelector(store=>store.config.lang)
  const searchText=useRef(null);
  //search movie in tmdb
  const searchMovieTMDB=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", options);
    const json=await data.json()
    return json.results;

  }
  const handleGptSearchClick=async()=>{
    console.log(searchText.current.value);


    //make an api call to gptAPI to get movie results
    const genAI = new GoogleGenerativeAI(GEM_KEY);
   
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
      const prompt = "Act as a Movie Recommendation System and suggest some movies for the query: "+searchText.current.value +".Only give me 5 movies,comma seperated like the example result given ahead.Example Result: Gadar,Sholay,Don,Shaitaan,Koi Mil Gaya"
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      

    const movieResults=text.split(",");
    console.log(movieResults);
    const promiseArray=movieResults.map(movie=>searchMovieTMDB(movie));
    console.log(promiseArray);
    const tmdbResult=await Promise.all(promiseArray);
    console.log(tmdbResult);
dispatch(addGenMovieResult({movieNames:movieResults,results:tmdbResult}))
   
    

    

    // const gptQuery="Act as a Movie Recommendation System and suggest some movies for the query: "+searchText.current.value +".Only give me 5 movies,comma seperated like the example result given ahead.Example Result: Gadar,Sholay,Don,Shaitaan,Koi Mil Gaya";
    // const gptResults=await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery}],
    //   model: 'gpt-3.5-turbo',
    // });
    // if(!gptResults.choices){<p>GPT API failed</p>}
    // const gptMovies=gptResults.choices?.[0]?.message?.content.split(",")
  }
  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='w-1/2 grid grid-cols-12 bg-black bg-opacity-75' onSubmit={(e)=>e.preventDefault()}>
      <input type='text' ref={searchText} className='p-2 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
      <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-md col-span-3' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
      {/* {lang.hindi.search} */}
      </form>
    </div>
  )
}

export default GptSearchBar
