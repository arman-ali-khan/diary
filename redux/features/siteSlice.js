import { createSlice } from '@reduxjs/toolkit'

export const siteSlice = createSlice({
  name: 'siteState',
  initialState: {
    disabledButton:true,

  },
  reducers: {
    updateSiteState: (state,action) => {
       state.disabledButton = action.payload?.disabledButton
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateSiteState } = siteSlice.actions

export default siteSlice.reducer