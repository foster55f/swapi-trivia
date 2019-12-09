import React from 'react'
import './MovieContainer.css'
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
    const loader = <span>'loading...'</span>
    return (
        <div className="movie-container">
            {allMovies.length > 0 && allMovies}
            {allMovies.length === 0 && loader}
        </div>
    )
}

export default MovieContainer


// Needs to include the UserData/Menu component (haven't decided on name / format yet), with logout and view favorites buttons
