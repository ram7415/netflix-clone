import React, { useRef } from "react";
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
        <button
          onClick={handleGptSearchClick}
          className="py-2  bg-red-700 text-white rounded-lg col-span-3 px-4 m-4"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
