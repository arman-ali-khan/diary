import { createSlice } from '@reduxjs/toolkit'

export const storiesSlice = createSlice({
  name: 'stories',
  initialState: {
    "title":"",
    "read":[],
    "rating":"",
    "thumbnail":"",
    "cover":"",
    "subscribers":[],
    "likes":[],
    "tags":[],
    "parts":[],
    "description":"",
    "author":[],
    "reports":[],
    "blocked":[],
    "comments":[],
    "published":0
  },
  reducers: {
    createStory: (state,action) => {
       console.log(action.payload)
    },
    updateStory: (state,action) => {
        console.log(action.payload)
    },
    deleteStory: (state, action) => {
        console.log(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { createStory, updateStory, deleteStory } = storiesSlice.actions

export default storiesSlice.reducer