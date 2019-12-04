import React from 'react'
import './MovieContainer.css'
import MovieCard from '../MovieCard/MovieCard'

const MovieContainer = (props) => {
    console.log(props.flicks)   
    const allMovies = props.flicks.map(flick => {
        return (
            <MovieCard
                title={flick.title}
            />
        )
    })
    return (
        <div>
            {allMovies}
        </div>
    )
}

export default MovieContainer


// Needs to include the UserData/Menu component (haven't decided on name / format yet), with logout and view favorites buttons
