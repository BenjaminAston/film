import React, { useState } from 'react';
import AddMovie from './AddMovieForm';
import Movies from './Movies';

export default function MovieApplication() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies(previous => [...previous, movie]);
  };

  const deleteMovie = (id) => {
    setMovies(previous => previous.filter(movie => movie.id !== id));
  };

  const sortByAlpha = () => {
    setMovies(prev => [...prev].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const sortByGrade = () => {
    setMovies(prev => [...prev].sort((a, b) => b.rating - a.rating));
  };

  return (
    <div className="container mt-4">
      <h1>Filmlista</h1>
      <AddMovie onAdd={addMovie} />
      <div className="my-3">
        <button className="btn btn-primary me-2" onClick={sortByAlpha}>Sortera alfabetiskt</button>
        <button className="btn btn-secondary" onClick={sortByGrade}>Sortera efter betyg</button>
      </div>
      <Movies movies={movies} onDelete={deleteMovie} />
    </div>
  );
}
