import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  console.log("nowPlayingMovies", nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log("json", json);

      // Ensure json.results exists and is an array
      if (json.results && Array.isArray(json.results)) {
        dispatch(addNowPlayingMovies(json.results));
      } else {
        throw new Error("Turn on Vpn or use Airtel network");
      }
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
      // Handle the error, e.g., show a notification, set error state, etc.
    }
  };

  useEffect(() => {
    if (!nowPlayingMovies) {
      getNowPlayingMovies();
    }
  }, [nowPlayingMovies]);

  return nowPlayingMovies; // Return the data if needed
};

export default useNowPlayingMovies;
