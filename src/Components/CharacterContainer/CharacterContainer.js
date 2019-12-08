import React from 'react';
import './CharacterContainer.css';
import CharacterCard from '../CharacterCard/CharacterCard';


const CharacterContainer = (props) => {
  console.log(props)
  const allCharacters = props.selectedCharacters.map((character, i) => {
    console.log(character)
    return (
        <CharacterCard
            name={character.name}
            homeworld={character.homeworld}
            population={character.population}
            species={character.species}
            relatedFilms={character.relatedFilms}
            key={i}
        />
    )
})
  return (
    <div className="character-container">
    {allCharacters}
</div>
  )
};

export default CharacterContainer;
