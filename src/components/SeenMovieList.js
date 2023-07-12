import React from 'react';

const MovieSeen = ({ seenMovies }) => {
    return (
        <div>
            <h2><b>Seen</b></h2>
            <ul>
                {seenMovies.map(movie => (
                    <div key={movie.id}>
                        <p>{movie.name}</p>
                        <p>{movie.year} </p>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default MovieSeen;