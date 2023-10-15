import React, { useState } from 'react';
import './style.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isHomeClicked, setHomeClicked] = useState(false);
  const [isProfileClicked, setProfileClicked] = useState(false);


  const handleExpand = () => {
    setExpanded(!expanded);
    setExpanded(false);
  };

  const handleHomeClick = () => {
    setHomeClicked(!isHomeClicked);
    setHomeClicked(false);
  };

  const handleProfileClicked = () => {
    setProfileClicked(!isProfileClicked);
    setProfileClicked(false);
  };

  return (
    <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
      <div className="expand-button" onClick={handleExpand}>
        {expanded ? '➖' : '➕'}
      </div>
      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          <i class="fa-solid fa-house" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/">Home</Link></a></li>
            <li><a class="dropdown-item"><Link to="/about ">about</Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={handleHomeClick}> Home</span>}
          {expanded && (
            <div className={`dropdown-options ${isHomeClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="/">Home</Link></li>
              <li className="nav-item"><Link to="/about">About</Link></li>
            </div>
          )}
        </span>
      </div>
            
      <div className={`sidebar-icon`}>
        <span role="img" aria-label="Home Icon">
          {/* <i class="fa-solid fa-house" data-bs-toggle="dropdown" aria-expanded="false"></i> */}
          <i class="fa-solid fa-user" data-bs-toggle="dropdown" aria-expanded="false"></i>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"><Link to="/">Home</Link></a></li>
          </ul>
          {expanded && <span className="icon-name" onClick={handleProfileClicked}> Home</span>}
          {expanded && (
            <div className={`dropdown-options ${handleProfileClicked ? 'big' : ''}`}>
              <li className="nav-item"><Link to="/">Home</Link></li>
            </div>
          )}
        </span>
      </div>
            

    </div>
  );
};

export default Sidebar;