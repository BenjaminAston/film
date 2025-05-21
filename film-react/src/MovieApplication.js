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

    return (
        <div className="container mt-4">
            <h1>Filmlista</h1>
            <AddMovie onAdd={addMovie} />
            <Movies movies={movies} onDelete={deleteMovie} />
        </div>
    );
}
