import { createSlice } from '@reduxjs/toolkit'

export const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState: {
    subscribes: true,
    userId:'123',
    subscribe:{type:'user',userId:'123',storyId:''},
  },
  
  reducers: {
    increment: (state,action) => {
        state = action.payload
        console.log(action.payload,'data')
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = subscribeSlice.actions

export default subscribeSlice.reducer