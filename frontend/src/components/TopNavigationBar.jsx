import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const {numOfFavourites} = props
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge  numOfFavourites={numOfFavourites}/>
    </div>
  )
}

export default TopNavigation;