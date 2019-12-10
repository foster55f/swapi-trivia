import React from 'react';
import './CharacterContainer.css';
import CharacterCard from '../CharacterCard/CharacterCard';


const CharacterContainer = (props) => {
  const allCharacters = props.selectedCharacters.map((character, index) => {
    console.log(character)
    return (
        <CharacterCard
            name={character.name}
            homeworld={character.homeWorld}
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
    <div className="character-container">
      {loader}
    </div>
  )
};

export default CharacterContainer;
