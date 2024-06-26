import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
                    state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
},
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
    }
})
export  const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies}=movieSlice.actions;
export default movieSlice.reducer;