import React from 'react';
import './MovieCard.css';

const MovieCard = ({title, number, releaseDate}) => {

  return (
    <article className="movie-card">
        <h2 className="movie-name">{title}</h2>
        <h2 className="movie-number">{number}</h2>
        <h2 className="movie-releaseDate">{releaseDate}</h2>
        <button>View Characters</button>
    </article>
  )
};

export default MovieCard;
