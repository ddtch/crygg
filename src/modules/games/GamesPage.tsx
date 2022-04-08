import React from 'react';
import {mockGames} from "../../App";
import searchIcon from "../../assets/icon.svg";

export const GamesPage = () => {
  return (
    <div className='cry-app wrapper'>
      <div className="header-top">
        <h1>Browse crypto games</h1>
        <div className="search-holder">
          <img src={searchIcon}/>
          <input className="srch" placeholder="Enter title"/>
        </div>
      </div>
      <div className="list-holder">
        {
          mockGames.slice(6, mockGames.length - 1).map(el =>
            <div className="main-card" key={el.id}>
              <div className="cd-image-holder">
                <img src={el.image} />
              </div>
              <div className="cd-title-holder">
                {el.title}
              </div>
              <div className="meta">
                <div className="light"/> {el.price}k online
              </div>
            </div>
          )
        }
        <div className="main-card btn">
          <span className="add-btn">+</span>
          <span className="add-btn-title">Add title</span>
        </div>
      </div>
    </div>
  );
};
