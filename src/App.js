import { useState } from 'react';
import { movieList } from './components/movieList';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState(movieList);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie of the week</h1>
        
      </header>
      <div>
      <h2><b>To see</b></h2>
      <p>
      {
          movies.map(movie => (
            <div>
              <p>{movie.name}, {movie.year}</p>
              <p></p>
            </div>
            
          ))
        }
      </p>
      <h2><b>Seen</b></h2>
      <p>
      {
          
        }
      </p>
      </div>
    </div>
  );
}

export default App;
