import {  BGIMAGE_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-full h-screen">
        <img src={BGIMAGE_URL} alt="background" className="w-full h-full object-cover opacity-99" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent  opacity-95"></div>
      </div>
      <div className="pt-[30%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions/>
      </div>
    </>
  );
  
  
};
export default GptSearch;