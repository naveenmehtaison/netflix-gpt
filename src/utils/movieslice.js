import { createSlice } from "@reduxjs/toolkit";
const movieSlice = 
    createSlice({
        name:'movie',
        initialState:{movies:[],leadfilm:[],videodata:[]},
        reducers:{
            addmovie:(state,action)=>{
                state.movies=action.payload

            },
            mainmovie:(state,action)=>{
                state.leadfilm=action.payload
            },
            addvideo:(state,action)=>{
                state.videodata=action.payload
            }
        }
    })
export const {addmovie,mainmovie,addvideo}=movieSlice.actions
export default movieSlice.reducer
