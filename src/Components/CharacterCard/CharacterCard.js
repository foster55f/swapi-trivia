import React from 'react';
import './CharacterCard.css';
import PropTypes from 'prop-types';

const CharacterCard = ({name, homeworld, population, species, urelatedfilms, adjustFavorites}) => {
  return (
    <article className="character-card">
      <h2 className="character-name">{name}</h2>
      <h2 className="character-homeworld">World: {homeworld}</h2>
      <h2 className="character-population">Pop: {population}</h2>
      <h2 className="character-species">Species: {species}</h2>
      {/* <h2 className="character-relatedfilms">{relatedFilms}</h2> */}
      <button className="fave-btn" onClick={() => adjustFavorites({name, homeworld, population, species, urelatedfilms})}>Fave</button>
</article>
  )
};

export default CharacterCard;

CharacterCard.propTypes = {
  selectedCharacters: PropTypes.array
}
