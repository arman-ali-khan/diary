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
    "categories":"",
    "parts":[],
    "description":"",
    "author":[],
    "reports":[],
    "blocked":[],
    "comments":[],
    "published":0,
    storyId:''
  },
  reducers: {
    createStory: (state,action) => {
       state.title = action.payload?.title
       state.description = action.payload?.description
       state.categories = action.payload?.categories
       state.tags = action.payload?.tags
       state.parts = action.payload?.parts
       state.published = action.payload?.published
       state.thumbnail = action.payload?.thumbnail
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