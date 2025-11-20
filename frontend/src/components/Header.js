
import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <span className="logo">Logo</span>
          <span className="app-name">Nutri-Meal</span>
        </div>
        <p className="tagline">Make you healthy</p>
      </div>
      <div className="header-right">
        <div className="user-icon">user</div>
      </div>
    </header>
  );
};

export default Header;