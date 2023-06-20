import { useState } from 'react';
import { movieList } from './components/movieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(movieList);
  const [seenMovies, setSeenMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');

  const deleteMovie = movieId => {
    setSeenMovies(mv => [...mv, movies.find(mv => mv.id === movieId)]);
    setMovies(movies.filter(mv => mv.id !== movieId));
  };

  const handleSelectedMovieClick = () => {
    const selectMovie = drawRandomItem(movieList);
    setSelectedMovie(selectMovie);
  };

  const drawRandomItem = arr => {
     const index = getRandomIndex(arr);
     const item = arr.splice(index, 1);
     return item[0]
  };

  const getRandomIndex = arr => {
    return Math.floor(Math.random() * arr.length)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie of the week</h1>
        <button onClick={handleSelectedMovieClick}>Choose me a movie</button>
         {
          selectedMovie && (
          <div>
          <h1>{selectedMovie.name}</h1>
          <p>Year:{selectedMovie.year}</p>
          <p>Director:{selectedMovie.director}</p>
          <p>Description:{selectedMovie.description}</p>
          </div>
         )}
      </header>
      <body>
      <h2><b>To see</b></h2>
      <ul>
      {
          movies.map(movie => (
            <div key={movie.id}>
              <p>{movie.name}</p>
              <p>{movie.year}</p>
              <button onClick = {() => deleteMovie(movie.id)}>Mark as seen</button>
            </div>
          ))
      }
      </ul>
      <h2><b>Seen</b></h2>
      <p>
      {
        seenMovies.map(movie => (
          <div key={movie.id}>
              <p>{movie.name}</p>
              <p>{movie.year}</p>
          </div>
        ))
        }
      </p>
      </body>
    </div>
  );
}

export default App;
