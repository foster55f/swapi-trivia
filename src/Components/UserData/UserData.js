import React from 'react';
import './UserData.css';

const UserData = (props) => {

  return (
    <header className="userdata-component">
      <div className="users-data">
        <p className="name-value">1{props.name}</p>
        <p className="quotation-value">2{props.quote}</p>
        <p className="selected-ranking">3{props.ranking}</p>
      </div>
      <div className="btns-container">
        <button className="menu-btn" id="logout-btn" onClick={() => props.logOut()}>Log Out</button>
        <button className="menu-btn" id="show__favorites--btn">Show Favorites</button>
      </div>
    </header>
  )
};

export default UserData;
