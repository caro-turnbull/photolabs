import React from 'react';

import darkModeIcon from '../assets/dark-theme-icon-512x512.png'
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const {numOfFavourites, favouritesArr, filterByTopics, resetPhotoData, topics, darkMode, showFavourites} = props
  return (
    <div className="top-nav-bar">
       <span className="top-nav-bar__logo" onClick={()=>resetPhotoData()}>PhotoLabs</span> 
      <TopicList 
        topics={topics}
        filterByTopics={filterByTopics}
        />
      <div className="icons">
        <FavBadge  
          favouritesArr={favouritesArr}
          numOfFavourites={numOfFavourites} 
          showFavourites={showFavourites}
          />
        <img width="20" height="17" src={darkModeIcon} alt='dark mode' onClick={()=>darkMode()}></img>
      </div>
    </div>
  )
}

export default TopNavigation;