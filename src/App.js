import { useState } from 'react';
import { movieList } from './components/movieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(movieList);
  const [seenMovies, setSeenMovies] = useState([]);

  const deleteMovie = movieId => {
    setSeenMovies(mv => [...mv, movies.find(mv => mv.id === movieId)]);
    setMovies(movies.filter(mv => mv.id !== movieId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie of the week</h1>
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
