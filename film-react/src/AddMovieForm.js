import React, { useState } from 'react';

export default function AddMovie({ onAdd }) {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('0');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '') {
            alert("Du måste fylla i en titel!");
            return;
        }

        if (rating === '0') {
            alert("Du måste välja ett betyg!");
            return;
        }

        const newMovie = {
            id: Date.now(),
            title: title.trim(),
            rating: parseInt(rating),
        };

        onAdd(newMovie);
        setTitle('');
        setRating('0');
    };

    return (
        <form id="add-movie-form" onSubmit={handleSubmit} className="mb-3">
            <div className="mb-2">
                <input
                    id="title-field"
                    className="form-control"
                    placeholder="Titel"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <select
                    id="rating-field"
                    className="form-select"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                >
                    <option value="0">Välj betyg</option>
                    <option value="1">1 stjärna</option>
                    <option value="2">2 stjärnor</option>
                    <option value="3">3 stjärnor</option>
                    <option value="4">4 stjärnor</option>
                    <option value="5">5 stjärnor</option>
                </select>
            </div>
            <button type="submit" className="btn btn-success">Lägg till film</button>
        </form>
    );
}
