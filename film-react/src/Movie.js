import React from 'react';

export default function Movie({ movie, onDelete }) {
    const renderStars = () => {
        return '★'.repeat(movie.rating) + '☆'.repeat(5 - movie.rating);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <strong>{movie.title}</strong> — {renderStars()}
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(movie.id)}>✖</button>
        </li>
    );
}