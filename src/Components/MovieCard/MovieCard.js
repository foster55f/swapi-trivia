import React from 'react';
import './MovieCard.css';

const MovieCard = ({id, title, number, releaseDate, selectFlick}) => {

  return (
    <article className="movie-card">
        <h2 className="movie-name">{title}</h2>
        <h2 className="movie-number">{number}</h2>
        <h2 className="movie-releaseDate">{releaseDate}</h2>
        <button className="view-characters-button" value={number} id={id} onClick={event=>selectFlick(event.target.id)}>View Characters</button>
    </article>
  )
};

export default MovieCard;
