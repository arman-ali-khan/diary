import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./features/api/baseApi";
import storyApi from "./features/api/storyApi";
import partSlice from "./features/partSlice";
import siteSlice from "./features/siteSlice";
import storiesSlice from "./features/storiesSlice";
import storyStateSlice from "./features/story/storyStateSlice";
import subscribeSlice from "./features/subscribeSlice";
import usersSlice from "./features/usersSlice";

export default configureStore({
  reducer: {
    subscribe: subscribeSlice,
    sites: siteSlice,
    stories: storiesSlice,
    user: usersSlice,
    storyState:storyStateSlice,
    part:partSlice,
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
