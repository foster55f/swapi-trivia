import React from 'react';
import './UserData.css';

const UserData = (props) => {

  return (
    <header className="userdata-component">
      <div className="users-data">
        <p className="name-value">Props-name</p>
        <p className="quotation-value">Props-quotation</p>
        <p className="selected-ranking">Props-ranking</p>
      </div>
      <div className="btns-container">
        <button className="menu-btn" id="logout-btn" onClick={() => props.logOut()}>Log Out</button>
        <button className="menu-btn" id="show__favorites--btn" onClick={() => }>Show Favorites</button>
      </div>
    </header>
  )
};

export default UserData;
