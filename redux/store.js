import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import storiesSlice from "./features/storiesSlice";
import storyStateSlice from "./features/story/storyStateSlice";
import subscribeSlice from "./features/subscribeSlice";
import usersSlice from "./features/usersSlice";
import storyApi from "./features/api/storyApi";

export default configureStore({
  reducer: {
    subscribe: subscribeSlice,
    stories: storiesSlice,
    user: usersSlice,
    storyState:storyStateSlice,
    [baseApi.reducerPath]:baseApi.reducer,
    [storyApi.reducerPath]:storyApi.reducer
  },
  middleware:
        (getdefaultMiddleware) =>
            getdefaultMiddleware()
            .concat([
              baseApi.middleware,storyApi.middleware
                   ])
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat([baseApi.middleware,storyApi.middleware]),
});
