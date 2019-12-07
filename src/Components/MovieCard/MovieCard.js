import React from 'react';
import './MovieCard.css';

const MovieCard = ({title, number, releaseDate}) => {

  return (
    <article className="movie-card">
    {/*<img src={} alt='star wars film poster'/> */}
      <div className="movie-content">
        <h2 className="movie-name">{title}</h2>
        <h2 className="movie-number">{number}</h2>
        <h2 className="movie-releaseDate">{releaseDate}</h2>
        <button>View Characters</button>
      </div>

      {/* // <img className="movie-img" src={} alt={}/> */}
      {/* // Commented out so that empty attribute fields don't cause bugs until we eventually pass props down into this component
      <div className="movie-details">
        <p>Placeholder for movie details passed from eventual fetch data</p>
        <p>To be reformatted / styled later</p>
        <p>Placeholder</p>
        <p>Placeholder</p>
      </div> */}
      {/* <button id="we'll likely have to pass a specific property value here from our fetch data, example: {props.id?}" onClick={() => }>View Characters</button> */}
    </article>
  )
};

export default MovieCard;
