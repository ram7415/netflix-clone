import React, { useRef, useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  const suggestions = [
    "Action-packed Thrillers",
    "Epic Historical Dramas",
    "Comedy Blockbusters",
    "Action & Adventure",
  ];

  // Array of loading text options
  const loadingTextOptions = ["Loading..⌛", "Connecting..🔗", "Exploring..🔍", "Unleashing..🔥", "Revealing..🎭"];

  // Function to handle click event
  const handleGptSearchClick = async () => {
    setLoading(true);
    const prompt =
      "Act as a Movie Recommendation System and Suggest some best movies for the query :" +
      searchText.current.value +
      ". Only give names of 15 movies, comma separated. Like the example result ahead. Example Result : yeh jawaani hai deewani, Animal, Kalki 2898 AD, Maharaja, Gaddar, Saaho, Salaar, Bahubali, Jailer, Kantara";
    const gptResult = await openai.generateContent(prompt);
    const response = await gptResult.response;
    const text = await response.text();
    if (!text) {
      setLoading(false);
      return;
    }
    console.log("results : ", text);
    const gptMovies = text.split(","); // converts to array

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
    setLoading(false);
  };

  // Effect to rotate loading text
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingTextIndex((prevIndex) => (prevIndex + 1) % loadingTextOptions.length);
    }, 1000); // Change the interval as needed

    return () => clearInterval(interval);
  }, []);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSuggestionClick = (suggestion) => {
    searchText.current.value = suggestion;
  };

  return (
    <div className="pt-20 mt-10 md:mt-0 md:pt-12 flex flex-col items-center text-center space-y-8">
      <div>
      <h1 className="text-white text-xl md:text-5xl font-extrabold mb-4">
        Discover <span className="text-purple-500">Your Next</span> Favorite{" "}
        <span className="text-blue-500">Movie</span> with{" "}
        <span className="text-red-500">AI Insights</span>
      </h1>

        <p className="text-white text-base md:text-lg italic mb-4 hover:text-green-400 transition duration-300">
          {lang[langKey].gptHeadingtag}
        </p>
      </div>

      <form
        className="w-full md:w-2/3 lg:w-1/2 bg-black bg-opacity-50 rounded-xl p-4 shadow-lg flex flex-col md:flex-row items-center md:space-x-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="w-full p-2 md:p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="w-full md:w-auto mt-4 md:mt-0 py-2 px-4 bg-red-600 rounded-lg text-white font-semibold focus:outline-none hover:bg-red-700 transition duration-300"
          onClick={handleGptSearchClick}
          disabled={loading}
        >
          {loading ? loadingTextOptions[loadingTextIndex] + " " : lang[langKey].search}
        </button>
      </form>

      <p className="text-white text-sm mb-4 opacity-80">
        {lang[langKey].gptSearchTag}
      </p>

      <div className="w-full md:w-2/3 lg:w-1/2 bg-black bg-opacity-50 rounded-xl p-4 shadow-lg">
        <h2 className="text-white text-lg md:text-xl font-bold mb-4">Trending</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="bg-gray-800 border border-white hover:bg-gray-700 text-white py-2 px-4 rounded-lg focus:outline-none transition duration-300 ease-in-out"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
