import { createSlice } from '@reduxjs/toolkit'

export const partSlice = createSlice({
  name: 'part',
  initialState: {
    "title":"",
    "description":"",
    summary:"",
  },
  reducers: {
    updatePart: (state,action) => {
       state.title = action.payload?.title
       state.summary = action.payload?.summary
       state.description = action.payload?.description
    }
  },
})

// Action creators are generated for each case reducer function
export const { updatePart } = partSlice.actions

export default partSlice.reducer