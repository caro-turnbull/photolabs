import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from "./FavBadge";

const TopNavigation = (props) => {
  const {numOfFavourites, filterByTopics, topics} = props
  return (
    <div className="top-nav-bar">
       <span className="top-nav-bar__logo">PhotoLabs</span> {/*onClick here to reset to all phtos */}
      <TopicList 
        topics={topics}
        filterByTopics={filterByTopics}
        />
      <FavBadge  numOfFavourites={numOfFavourites}/>
    </div>
  )
}

export default TopNavigation;