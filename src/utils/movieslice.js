import { createSlice } from "@reduxjs/toolkit";
const movieSlice = 
    createSlice({
        name:'movie',
        initialState:{movies:[],leadfilm:[],videodata:[],popularmovie:[],toprated:[],upcoming:[]},
        reducers:{
            addmovie:(state,action)=>{
                state.movies=action.payload

            },
            mainmovie:(state,action)=>{
                state.leadfilm=action.payload
            },
            addvideo:(state,action)=>{
                state.videodata=action.payload
            },
            addpopularmovie:(state,action)=>{
                state.popularmovie=action.payload
            },
            addtopratedmovie:(state,action)=>{
                state.toprated=action.payload
            },
            addupcomingmovie:(state,action)=>{
                state.upcoming=action.payload
            }
        }
    })
export const {addmovie,mainmovie,addvideo,addpopularmovie,addtopratedmovie,addupcomingmovie}=movieSlice.actions
export default movieSlice.reducer
