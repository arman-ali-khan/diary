import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import storiesSlice from "./features/storiesSlice";
import subscribeSlice from "./features/subscribeSlice";
import usersSlice from "./features/usersSlice";

export default configureStore({
  reducer: {
    subscribe: subscribeSlice,
    stories: storiesSlice,
    user: usersSlice,
    [baseApi.reducerPath]:baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
