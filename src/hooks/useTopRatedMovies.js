import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopratedMovies = () => {
  // Fetch data from API and update store
  const dispatch = useDispatch();

  const getTopratedMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      
      // Ensure json.results exists and is an array
      if (json.results && Array.isArray(json.results)) {
        dispatch(addTopRatedMovies(json.results));
      } else {
        throw new Error("Turn on Vpn or try Airtel network");
      }
    } catch (error) {
      console.error("Error fetching top-rated movies:", error);
      // Handle the error, e.g., show a notification, set error state, etc.
    }
  };

  useEffect(() => {
    getTopratedMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null; // Adjust based on how you use the hook
};

export default useTopratedMovies;
