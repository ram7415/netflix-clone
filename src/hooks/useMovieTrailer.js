import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
const useMovieTrailer = () => {
  const dispatch = useDispatch();
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1022789/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("trailer", json);

    const filterData = json.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useMovieTrailer;
