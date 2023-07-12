import React from 'react';

const MovieList = ({ movies, deleteMovie }) => {

  return (
    <div>
      <h2><b>To see</b></h2>
      <ul>
        {movies.map(movie => (
          <div key={movie.id}>
            <p>{movie.name}</p>
            <p>{movie.year}</p>
            <button onClick={() => deleteMovie(movie.id)}>Mark as seen</button>
          </div>
        ))}
      </ul>
    </div>
);
};

export default MovieList; 