import React from 'react';
import './FavoritesContainer.css';
import CharacterCard from '../CharacterCard/CharacterCard';
import PropTypes from 'prop-types';


const FavoritesContainer = (props) => {
  const favoriteCharacters = props.favoritedCharacters.map((character) => {
    console.log(character)
    return (
        <CharacterCard
            name={props.name}
            homeworld={props.homeworld}
            species={character.species}
            key={props.name}
        />
    )
  })

  let loader;
  if (favoriteCharacters.length !== 0) {
      loader = favoriteCharacters

  } else {
      loader = <img src='https://media3.giphy.com/media/hQgJCEdGOEHa8/source.gif' alt="loading..."/>
  }
  return (
    <div className="favorites-container">
      {loader}
    </div>
  )
};

export default FavoritesContainer;


FavoritesContainer.propTypes = {
  crawl: PropTypes.string,
}
