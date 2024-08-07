import { createSlice } from "@reduxjs/toolkit";
const LangSlice = createSlice({
    name:'language',
    initialState:{lang:'en',boolean:true,n:'hello',gptSearched:{tmdbarray:[],movies:[]}},
    reducers:{
        addlanguage:(state,action)=>{
            state.lang=action.payload
        },
        showgpt:(state)=>{
            state.boolean= (!state.boolean)   
        },
        addgptmovie:(state,action)=>{
            state.gptSearched.tmdbarray=action.payload.tmdbarray
            state.gptSearched.movies=action.payload.movies

        },
        removegptmovie:(state)=>{
            state.gptSearched.movies=[]
            state.gptSearched.moviearray=[]
        }

    }
})
export const {addlanguage,showgpt, addgptmovie, removegptmovie} = LangSlice.actions
export default LangSlice.reducer