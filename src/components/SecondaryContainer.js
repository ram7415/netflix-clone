import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MobileCard from './MobileCard'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className='bg-black'>
      <div className='md:-mt-82 lg:-mt-52  sm:mt-0 relative'>
        <MobileCard/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/></div>
          <MovieList title={"Trending"} movies={movies.popularMovies} />
          <MovieList title={"Popular"} movies={movies.topRatedMovies} />
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
    )
  );
};
export default SecondaryContainer;
