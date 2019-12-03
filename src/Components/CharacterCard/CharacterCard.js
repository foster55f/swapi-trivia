import React from 'react';
import './CharacterCard.css';

const CharacterCard = () => {

  return (
    <article className="character-card">
      <h3 className="character-name">Character Name</h3>
      // <img className="character-img" src={} alt={}/>
      // Commented out so that empty attribute fields don't cause bugs until we eventually pass props down into this component
      <div className="character-details">
        <p>Homeworld</p>
        <p>Homeworld Population</p>
        <p>Species</p>
        <p>Related Films (Maybe later modify to ul, etc)</p>
      </div>
      <button id="" onClick={() => }>Favorite Button</button>
    </article>
  )
};

export default CharacterCard;
