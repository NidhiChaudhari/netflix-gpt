import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        genMovies: null,
        movieNames:null,
        results:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
state.showGptSearch=!state.showGptSearch;
        },
        addGenMovieResult:(state,action)=>{
            const {movieNames,results}=action.payload;
state.movieNames=movieNames;
state.results=results;
        }
    }
})
export const {toggleGptSearchView,addGenMovieResult}=gptSlice.actions;
export default gptSlice.reducer;