import React from 'react';

const RandomMovie = ({ movies, setSelectedMovie }) => {
  const drawRandomItem = arr => {
    const index = getRandomIndex(arr);
    const item = arr.splice(index, 1);
    return item[0];
  };

  const getRandomIndex = arr => {
    return Math.floor(Math.random() * arr.length);
  };

  const handleSelectedMovieClick = () => {
    const selectedMovie = drawRandomItem(movies);
    setSelectedMovie(selectedMovie);
  };

  return (
    <div>
      <button onClick={handleSelectedMovieClick}>Choose me a movie</button>
    </div>
  );
};

export default RandomMovie;
