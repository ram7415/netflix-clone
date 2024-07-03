<<<<<<< HEAD
<<<<<<< HEAD
import openai from "../utils/openai";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
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

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
=======
import React from "react";
=======
import React, { useRef } from "react";
>>>>>>> 501cc2d (added openai for movie suggestion)
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //make an api call to GPt Api and movie result
    const gptQuery =
      "Act as a Movie Recomendation System and Suggest some movies for the query" +
      searchText.current.value +
      "only give me name of 5 movies,comma separated like the example result given ahead.Example Result :Gadar,Sholey,Don,Krish,Kalki";

    const gptResults = await openai.chat.compeletions.create({
      messages: [{ role: "user", content: { gptQuery } }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-1/2 bg-black grid grid-cols-12"
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
<<<<<<< HEAD
        <button className="py-2  bg-red-700 text-white rounded-lg col-span-3 px-4 m-4">
>>>>>>> 7eef0a5 (added languages in gpt searchbox)
=======
        <button
          onClick={handleGptSearchClick}
          className="py-2  bg-red-700 text-white rounded-lg col-span-3 px-4 m-4"
        >
>>>>>>> 501cc2d (added openai for movie suggestion)
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 7eef0a5 (added languages in gpt searchbox)
export default GptSearchBar;
