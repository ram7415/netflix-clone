import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useEffect,useState } from "react";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (movieNames && movieResults.length > 0) {
      setLoading(false);
    }
  }, [movieNames, movieResults]);

  

  if (!movieNames) return null; //TODO: ERROR PAGE SHOW

  return (
    <div className=" md:p-1 lg:p-8 m-4 md:m-6 lg:m-4 bg-black text-white opacity-90 rounded-xl">
    <div>
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  </div>
  
  );
};

export default GptMovieSuggestion;