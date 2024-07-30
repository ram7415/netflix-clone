import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constants';

const RailwayMenCards = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  console.log('movies', movies);

  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 mx-4">
        <h1 className='text-lg md:text-3xl font-medium py-4 mx-5 text-white'>Top on Netflix</h1>
      <div className="inline-flex gap-4 px-4">
        
        {movies.map((movie, index) => (
          <div
            key={index}
            className="relative w-64 bg-gray-900 text-white rounded-lg shadow-lg flex-none"
          >
            {/* Background Image */}
            <img
              src={IMG_CDN_URL + movie.poster_path}
              alt={movie.title}
              className="object-cover w-full h-80 rounded-t-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 rounded-t-lg"></div>
            {/* Content */}
            <div className="absolute bottom-0 p-4 w-full">
              <div className="mb-2">
                <div className="text-white text-4xl font-semibold">{index + 1}</div>              </div>
              <h2 className="text-lg font-bold">{movie.title}</h2>
              <p className="text-gray-400 text-xs mb-4">{movie.description}</p>
              <div className="flex space-x-2">
                <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
                  Play
                </button>
                <button className="bg-gray-700 px-4 py-2 rounded-lg font-semibold">
                  + My List
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RailwayMenCards;
