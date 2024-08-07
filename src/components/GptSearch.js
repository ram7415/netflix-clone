import { BGIMAGE_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 w-full  h-[700px] md:h-screen">
        <img
          src={BGIMAGE_URL}
          alt="background"
          className="w-full h-[700px] md:h-full object-cover opacity-99"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-95"></div>
      </div>
      <div className="flex flex-col items-center justify-center h-full p-4 md:p-8 lg:p-16">
        <div className="w-[300px] md:w-full">
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
      </div>
    </>
  );
};

export default GptSearch;
