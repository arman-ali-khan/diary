import { configureStore } from '@reduxjs/toolkit'
import subscribeSlice from './features/subscribeSlice'

export default configureStore({
  reducer: {subscribe: subscribeSlice},
})