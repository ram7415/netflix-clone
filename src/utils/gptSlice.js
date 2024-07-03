import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
<<<<<<< HEAD
    movieResults: null,
    movieNames: null,
=======
>>>>>>> 7eef0a5 (added languages in gpt searchbox)
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
<<<<<<< HEAD
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = action.payload;
      state.movieNames = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
=======
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
>>>>>>> 7eef0a5 (added languages in gpt searchbox)

export default gptSlice.reducer;
