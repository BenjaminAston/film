import React, { useState, useRef } from 'react';
import movies from './Movies';

export default function addMovie() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: "First Item"
    }]);
    const inputRef = useRef();

    function addItem(event) {
        if (event.keyCode  === 13) {
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
            setMovies([...movies, {
                id: newId,
                title: inputRef.current.value,
            }])

            inputRef.current.value = "";
        }
    }

    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    return (
        <div>
            <input className="form-control" ref={inputRef} placeholder="Add new movie here..." onKeyUp={addItem} />
            <ul className="list-group">
                {movies.map(movies => <Movies key={movies.id} item={movies} deleteItem={deleteItem} />)}
            </ul>
            <strong>{movies.length} </strong> { movies.length === 1 ? "movie" : "movies" } left to do.
        </div>
    )
}