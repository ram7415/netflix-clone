import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import userReducer from "./userSlice";
=======
import useReducer from "./userSlice";
>>>>>>> 7eef0a5 (added languages in gpt searchbox)
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
<<<<<<< HEAD
    user: userReducer,
=======
    user: useReducer,
>>>>>>> 7eef0a5 (added languages in gpt searchbox)
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});
export default appStore;
