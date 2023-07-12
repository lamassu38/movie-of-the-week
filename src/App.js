import { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import RandomMovie from './components/RandomMovie';
import SeenMovieList from './components/SeenMovieList';
import { movieList } from './components/MovieData';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(movieList);
  const [seenMovies, setSeenMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const handleAddButtonClick = (movie) => {
    setMovies(prevMovies => [...prevMovies, {id: getRandomInt(1000), ...movie}]);
  };

  const getRandomInt = max => {
    return Math.floor(Math.random() * max)
  };

  const deleteMovie = movieId => {
    setSeenMovies(mv => [...mv, movies.find(mv => mv.id === movieId)]);
    setMovies(movies.filter(mv => mv.id !== movieId));
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie of the week</h1>
        <RandomMovie movies={movies} setSelectedMovie={setSelectedMovie} />
        {selectedMovie && (
        <div>
           <h1>{selectedMovie.name}</h1>
            <p>Year: {selectedMovie.year}</p>
            <p>Director: {selectedMovie.director}</p>
             <p>Description: {selectedMovie.description}</p>
         </div>)}
        <MovieForm handleAddButtonClick={handleAddButtonClick} />
      </header>
      <body>
        <MovieList movies={movies} deleteMovie={deleteMovie} />
        <SeenMovieList seenMovies={seenMovies} />
      </body>
    </div>
  );
}

export default App;
