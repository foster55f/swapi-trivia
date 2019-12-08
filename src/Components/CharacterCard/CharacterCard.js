import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({id}) => {
console.log(id)
  return (
    <article className="character-card">
    <h2 className="movie-name">{id}</h2>
    {/* <button className="view-characters-button" value={number} id={id} onClick={event=>selectFlick(event.target.id)}>View Characters</button> */}
</article>
  )
};

export default CharacterCard;
