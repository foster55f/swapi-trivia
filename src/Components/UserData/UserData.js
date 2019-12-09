import React from 'react';
import './UserData.css';

const UserData = (props) => {

  return (
    <nav className="userdata-component">
      <div className="users-data">
        <p className="name-value">Username: <span className="user-values">{props.name}</span></p>
        <p className="quotation-value">Quotation: <span className="user-values">{props.quote}</span></p>
        <p className="selected-ranking">Fandom: <span className="user-values">{props.ranking}</span></p>
      </div>
      <div className="btns-container">
        <button className="log-out" id="logout-btn" onClick={() => props.logOut()}>Log Out</button>
        <button className="menu-btn" id="show__favorites--btn">Faves</button>
      </div>
    </nav>
  )
};

export default UserData;
