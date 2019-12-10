import React from 'react'
import './MovieContainer.css'
import { Route } from 'react-router-dom';

import MovieCard from '../MovieCard/MovieCard'

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


// Needs to include the UserData/Menu component (haven't decided on name / format yet), with logout and view favorites buttons
