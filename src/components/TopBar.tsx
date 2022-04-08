import React from 'react';
import logo from "../assets/lg-1.png";
import {Link, NavLink} from "react-router-dom";
import profilePic from "../assets/lg.png";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className={'logo-holder'}>
        <Link to={'/'}>
          <img src={logo} alt={'cryGG'}/>
        </Link>
      </div>

      <ul className="nav-holder">
        <li><NavLink to={'library'}>Library</NavLink></li>
        <li><NavLink to={'games'}>Games</NavLink></li>
        <li><NavLink to={'assets'}>Assets</NavLink></li>
        <li><NavLink to={'marketplace'}>Marketplace</NavLink></li>
      </ul>

      <div className="spacer"/>
      <div className="profile-holder">
        <div className="avatar">
          <img src={profilePic} alt={'Dorado'}/>
        </div>
        <div className="info">
          <span>JmGoe</span>
          <span className="money">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"/>
            </svg> 1.2905237
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
