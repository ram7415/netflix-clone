import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black ">
        <div className="mt-0 md:-mt-48 pl-4 md:pl-12  relative z-30">
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
          <MovieList title={"Trending"} movies={movies.popularMovies} />
          <MovieList title={"Popular"} movies={movies.topRatedMovies} />
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
         
        </div>
      </div>
    )
  );
};
export default SecondaryContainer;
