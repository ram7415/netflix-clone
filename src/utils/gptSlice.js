import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
<<<<<<< HEAD
<<<<<<< HEAD
    movieResults: null,
    movieNames: null,
=======
>>>>>>> 7eef0a5 (added languages in gpt searchbox)
=======
    movieResults: null,
    movieNames: null,
>>>>>>> 582e672 (created env file and gpt fetch)
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 582e672 (created env file and gpt fetch)
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieResults = action.payload;
      state.movieNames = action.payload;
    },
<<<<<<< HEAD
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
=======
  },
});

export const { toggleGptSearchView } = gptSlice.actions;
>>>>>>> 7eef0a5 (added languages in gpt searchbox)
=======
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
>>>>>>> 582e672 (created env file and gpt fetch)

export default gptSlice.reducer;
