import React, { useState, useRef } from 'react';
import Movie from './Movies';

export default function AddMovie() {
    const [movieList, setMovieList] = useState([
        { id: 1, title: "First Item" }
    ]);
    const inputRef = useRef();

    function AddItem(event) {
        if (event.keyCode === 13) {
            const newId = movieList.length > 0 ? movieList[movieList.length - 1].id + 1 : 1;
            setMovieList([
                ...movieList,
                { id: newId, title: inputRef.current.value }
            ]);
            inputRef.current.value = "";
        }
    }

    function DeleteItem(id) {
        setMovieList(movieList.filter((item) => item.id !== id));
    }

    return (
        <div>
            <input
                className="form-control"
                ref={inputRef}
                placeholder="Add new movie here..."
                onKeyUp={AddItem}
            />
            <ul className="list-group">
                {movieList.map((m) => (
                    <Movie key={m.id} item={m} deleteItem={DeleteItem} />
                ))}
            </ul>
            <strong>{movieList.length} </strong> {movieList.length === 1 ? "movie" : "movies"} left to do.
        </div>
    );
}
