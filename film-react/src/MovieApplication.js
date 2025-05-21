import React from 'react';
import addMovie from './AddMovieForm';

function App() {
  return (
    <div className="container">
      <h1>Filmlista</h1>
      <AddMovieForm addMovie={addMovie} />
      <Movies movies={movies} deleteMovie={deleteMovie} />
      <button onClick={sortByTitle} className="btn btn-primary m-1">Alfabetisk ordning</button>
      <button onClick={sortByRating} className="btn btn-primary m-1">Betygsordning</button>
    </div>
  );
}

export default App;
