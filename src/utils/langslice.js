import { createSlice } from "@reduxjs/toolkit";
const LangSlice = createSlice({
    name:'language',
    initialState:{lang:'en',boolean:true,n:'hello'},
    reducers:{
        addlanguage:(state,action)=>{
            state.lang=action.payload
        },
        showgpt:(state)=>{
            state.boolean= (!state.boolean)
            console.log(state.boolean)
            
        }
    }
})
export const {addlanguage,showgpt} = LangSlice.actions
export default LangSlice.reducer