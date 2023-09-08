import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const {favouritesArr} = props
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
      <FavBadge  favouritesArr={favouritesArr}/>
    </div>
  )
}

export default TopNavigation;