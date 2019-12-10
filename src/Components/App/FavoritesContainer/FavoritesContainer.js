import React from 'react';
import './FavoritesContainer.css';
import CharacterCard from '../CharacterCard/CharacterCard';


const FavoritesContainer = (props) => {
  const favoriteCharacters = props.favoritedCharacters.map((character, index) => {
    return (
        <CharacterCard
            name={character.name}
            homeworld={character.homeworld}
            population={character.population}
            species={character.species}
            relatedFilms={character.relatedFilms}
            key={index}
            adjustFavorites={props.adjustFavorites}
        />
    )
  })
  let loader;
  if (allCharacters.length === 10) {
      loader = allCharacters
  } else {
      loader = <img src='https://media3.giphy.com/media/hQgJCEdGOEHa8/source.gif' alt="loading..."/>
  }
  return (
    <div className="favorites-container">
      {loader}
    </div>
  )
};

export default CharacterContainer;
