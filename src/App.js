import { useState } from 'react';
import { movieList } from './components/movieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(movieList);
  const [seenMovies, setSeenMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('');
  const [movieName, setMovieName] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [movieDescription, setMovieDescription] = useState('');

  
  const handleAddButtonClick = () => {
    setMovies(mv => [...mv, {id: getRandomInt(1000), name: movieName, year: movieYear, director: movieDirector, description: movieDescription}]);
    setMovieName('');
    setMovieYear('');
    setMovieDirector('');
    setMovieDescription('');
  };

  const handleInputChange = e => {
    if (e.target.name === 'movieName'){
      setMovieName(e.target.value);
    } else if (e.target.name === 'movieYear'){
      setMovieYear(e.target.value);
    } else if (e.target.name === 'movieDirector'){
      setMovieDirector(e.target.value);
    } else if (e.target.name === 'movieDescription'){
      setMovieDescription(e.target.value);
    }; 
  };

  const getRandomInt = max => {
    return Math.floor(Math.random() * max)
  };

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
          <p>Year: {selectedMovie.year}</p>
          <p>Director: {selectedMovie.director}</p>
          <p>Description: {selectedMovie.description}</p>
          </div>
         )}
         
         <p>Name:</p>
         <input name='movieName' onChange={handleInputChange} value={movieName}/>
         <p>Year:</p>
         <input name='movieYear' onChange={handleInputChange} value={movieYear}/>
         <p>Director:</p>
         <input name='movieDirector' onChange={handleInputChange} value={movieDirector}/>
         <p>Description:</p>
         <input name='movieDescription' onChange={handleInputChange} value={movieDescription}/>
         <button onClick={handleAddButtonClick}>Add Movie</button>
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
