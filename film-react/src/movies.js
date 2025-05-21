import React from 'react';
import Movie from './Movie';

export default function Movies({ movies, onDelete }) {
    return (
        <ul className="list-group">
            {movies.map(movie => (
                <Movie key={movie.id} movie={movie} onDelete={onDelete} />
            ))}
        </ul>
    );
}
