import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photos, state, modalHandler, favouriteClick, filterByTopics, resetPhotoData, selectedClick} = props
  

  return (
    <div className="home-route">
      <TopNavigation 
        numOfFavourites={state.favouritesArr.length}
        topics = {state.topics}
        filterByTopics = {filterByTopics}
        resetPhotoData={resetPhotoData}
      />
      <PhotoList 
        photos ={photos}
        favouritesArr={state.favouritesArr}
        selected={state.selected}
        modalHandler={modalHandler}
        favouriteClick={favouriteClick}
        selectedClick={selectedClick}
      />
    </div>
  );
};

export default HomeRoute;
