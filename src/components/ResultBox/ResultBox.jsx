import React, { useState, useEffect } from 'react';
import {
    result_box,
    result_box_card,
    result_img,
    result_movie_head,
} from './ResultBox.module.css';
import { fetchApi } from './FetchApi';

function ResultBox({ inputValue }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (inputValue) {
            fetchApi(inputValue)
                .then((res) => {
                    if (res.Response === 'False') {
                        setError('No movies found');
                        setData(null);
                    } else {
                        setData(res.Search);
                        setError(null);
                    }
                })
                .catch((err) => {
                    setError('Failed to fetch data');
                    setData(null);
                });
        } else {
            setData(null);
            setError(null);
        }
    }, [inputValue]);

    return (
        <section className={result_box}>
            {error && <p className="no-movies">{error}</p>}
            {data &&
                data.map((movie) => {
                    return (
                        <div key={movie.imdbID} className={result_box_card}>
                        <img
                            src={movie.Poster}
                            alt={movie.Title}
                            className={result_img}
                        />
                        <h2 className={result_movie_head}>{movie.Title}</h2>
                        <p>
                            <i>{movie.Year}</i>
                        </p>
                    </div>
                    )
                }
                    
                )}
        </section>
    );
}

export default ResultBox;
