import React from 'react';

export default function Movie({ movie, onDelete }) {
    const stars = Array.from({ length: movie.rating }, (_, i) => (
        <img
            key={i}
            src="/star.png"
            alt="Star"
            style={{ width: '20px' }}
        />
    ));

    return (
        <li className="list-group-item fade-in d-flex justify-content-between align-items-center">
            <div data-title={movie.title} data-grade={movie.rating}>
                {movie.title}
                {stars}
            </div>
            <img
                src="/delete.png"
                alt="Delete movie"
                className="delete-movie-icon"
                onClick={() => onDelete(movie.id)}
            />
        </li>
    );
}
