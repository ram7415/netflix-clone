import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";

import moviesSlice from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
    movies: moviesSlice,
  },
});
export default appStore;
