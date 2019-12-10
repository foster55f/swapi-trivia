import React from 'react'
import './MovieContainer.css'
import { Route } from 'react-router-dom';

import MovieCard from '../MovieCard/MovieCard'
import PropTypes from 'prop-types';

const MovieContainer = (props) => {
    const allMovies = props.movies.map(flick => {
        return (
            <MovieCard
                id={flick.episode_id}
                title={flick.title}
                number={flick.episode_id}
                key={flick.episode_id}
                releaseDate={flick.release_date}
                selectFlick={props.selectFlick}
            />
        )
    })

    let loader;
    if (allMovies.length === 7) {
        loader = allMovies
    } else {
        loader = <img src='https://media3.giphy.com/media/hQgJCEdGOEHa8/source.gif' alt="loading..."/>
    }
    return (
        <div className="movie-container">
            {loader}
        </div>
    )
}

export default MovieContainer

MovieContainer.propTypes = {
  movies: PropTypes.array,
  selectFlick: PropTypes.func
}
