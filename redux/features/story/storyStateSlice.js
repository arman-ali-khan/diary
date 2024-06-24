import { createSlice } from '@reduxjs/toolkit';

export const storyStateSlice = createSlice({
    name:'storyState',
    initialState:{
        fontSize:18,
        bg:'#fff',
    },
    reducers:{
        setFont:(state,action)=>{
            state.fontSize=action.payload
        },
        setBG:(state,action)=>{
            console.log(action,'action');
        },
    }
})
export const {setBG,setFont} = storyStateSlice.actions
export default storyStateSlice.reducer