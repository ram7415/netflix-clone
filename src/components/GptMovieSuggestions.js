<<<<<<< HEAD
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
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
=======
import React from "react";

const GptMovieSuggestions = () => {
  return <div>GptMovieSuggestions</div>;
};

>>>>>>> 7eef0a5 (added languages in gpt searchbox)
export default GptMovieSuggestions;
