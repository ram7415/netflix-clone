const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[29%] md:pt-[17%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
      <button className="bg-red-500 text-white py-1 md:py-4 px-4 md:px-10 rounded-lg text-md md:text-xl opacity-70 hover:bg-opacity-80 h-10 md:h-auto">
       ▶️ Play
        </button>
        <button className="inline-block mx-2 bg-gray-500 text-white py-1 md:py-4 px-2 md:px-10 text-base md:text-lg rounded-lg opacity-70 hover:bg-opacity-80 h-10 md:h-auto w-18 md:w-auto ">
          More Info
        </button>
        
      </div>
    </div>
  );
};
export default VideoTitle;
